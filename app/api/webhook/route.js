import { NextResponse } from "next/server";
import { supabase, refreshSession } from "@/utilities/supabaseAuth";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req) {
  const payload = await req.text();
  const signature = req.headers.get("stripe-signature");
  const res = JSON.parse(payload);
  let event;

  try {
    event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);
    console.log(event.type);
  } catch (error) {
    console.error("Webhook error:", error.message);
    return NextResponse.json(
      { error: `Webhook Error: ${error.message}` },
      { status: 400 }
    );
  }

  try {
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      console.log(session);
      // Update the user's subscription status in Supabase
      await updateUserSubscription({
        email: session.customer_details.email,
        customerId: session.customer,
        paymentStatus: "completed",
        amount: session.amount_total,
        paymentId: session.payment_intent,
      });
    }
    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook handler error:", error);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    );
  }
}

async function updateUserSubscription(paymentData) {
  console.log(paymentData);
  // await refreshSession();
  // console.log("Session Refreshed on browser");
  //   try {
  //     // Get user by email
  //     const { data: user, error: userError } = await supabase
  //       .from("users")
  //       .select("id")
  //       .eq("email", paymentData.email)
  //       .single();

  //     if (userError) throw userError;

  //     // Update or insert subscription data
  //     const { error: subscriptionError } = await supabase
  //       .from("subscriptions") // Create this table in your Supabase database
  //       .upsert({
  //         user_id: user.id,
  //         stripe_customer_id: paymentData.customerId,
  //         status: paymentData.paymentStatus,
  //         amount: paymentData.amount,
  //         payment_id: paymentData.paymentId,
  //         updated_at: new Date().toISOString(),
  //       });

  //     if (subscriptionError) throw subscriptionError;
  //   } catch (error) {
  //     console.error("Error updating subscription:", error);
  //     throw error;
  //   }
}
