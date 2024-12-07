import BackToTop from "../backToTop";
import PrivacyPolicyPage from "./index";

export const metadata = {
  title: "MidyAI Design Privacy Policy",
  description: "MidyAI Design Privacy Policy",
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

const PrivacyPolicyLayout = () => {
  return (
    <>
      <PrivacyPolicyPage />
      <BackToTop />
    </>
  );
};

export default PrivacyPolicyLayout;
