import BackToTop from "../backToTop";
import PricingPage from "./index";

export const metadata = {
  title: "MidyAI Design Pricing",
  description: "MidyAI Design Pricing",
};

const PricingLayout = () => {
  return (
    <>
      <PricingPage />
      <BackToTop />
    </>
  );
};

export default PricingLayout;
