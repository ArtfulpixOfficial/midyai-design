import BackToTop from "../backToTop";
import PlansBillingPage from "./index";

export const metadata = {
  title: "MidyAI Design Plans & Billing",
  description: "MidyAI Design Plans & Billing",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/logo/icon-light.ico",
        href: "/images/logo/icon-light.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/logo/icon-dark.ico",
        href: "/images/logo/icon-dark.ico",
      },
    ],
  },
};

const PlansBillingLayout = () => {
  return (
    <>
      <PlansBillingPage />
      {/* <BackToTop /> */}
    </>
  );
};

export default PlansBillingLayout;
