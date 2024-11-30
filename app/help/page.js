import BackToTop from "../backToTop";
import HelpFaqPage from "./index";

export const metadata = {
  title: "MidyAI Design Help & FAQs",
  description: "MidyAI Design Help & FAQs",
};

const HelpFaqLayout = () => {
  return (
    <>
      <HelpFaqPage />
      <BackToTop />
    </>
  );
};

export default HelpFaqLayout;
