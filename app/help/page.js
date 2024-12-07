import BackToTop from "../backToTop";
import HelpFaqPage from "./index";

export const metadata = {
  title: "MidyAI Design Help & FAQs",
  description: "MidyAI Design Help & FAQs",
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

const HelpFaqLayout = () => {
  return (
    <>
      <HelpFaqPage />
      <BackToTop />
    </>
  );
};

export default HelpFaqLayout;
