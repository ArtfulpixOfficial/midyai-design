import BackToTop from "../backToTop";
import PlansBillingPage from "./index";

export const metadata = {
  title: "MidyAI Design Plans & Billing",
  description: "MidyAI Design Plans & Billing",
};

const PlansBillingLayout = () => {
  return (
    <>
      <PlansBillingPage />
      <BackToTop />
    </>
  );
};

export default PlansBillingLayout;
