import BackToTop from "../backToTop";
import TermsPolicyPage from "./index";

export const metadata = {
  title: "MidyAI Design Terms and Policy",
  description: "MidyAI Design Terms and Policy",
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

const TermsPolicyLayout = () => {
  return (
    <>
      <TermsPolicyPage />
      <BackToTop />
    </>
  );
};

export default TermsPolicyLayout;
