import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function signUpNewUser(email, password, userName) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        displayName: userName,
      },
    },
  });

  return { data, error };
}
export async function signInUser(email, password) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return { data, error };
}

export const refreshSession = async () => {
  const { data, error } = await supabase.auth.refreshSession();
  return { data, error };
};

export async function insertUserData(tableName, userData) {
  const { data, error } = await supabase
    .from(tableName)
    .insert([userData])
    .select();
}

export async function getUserData(table, id) {
  let { data, error } = await supabase.from(table).select().eq("id", id);
  return { data, error };
}
export async function updateData(table, id, column) {
  const { data, error } = await supabase
    .from(table)
    .update(column)
    .eq("id", id)
    .select();
  return { data, error };
}
export async function signOutUser() {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  console.log(session);
  if (session) {
    await supabase.auth.signOut();
  }
}

export async function changePassword(newPassword) {
  const { data, error } = await supabase.auth.updateUser({
    password: newPassword,
  });
  return { data, error };
}

export async function forgotPassword(email) {
  let { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "https://midyai-design.vercel.app/reset-password",
  });

  return { data, error };
}
