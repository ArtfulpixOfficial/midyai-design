import BackToTop from "../backToTop";
import ForgotPasswordPage from "./index";

export const metadata = {
  title: "MidyAI Design Forgot Password",
  description: "MidyAI Design Forgot Password",
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

const ForgotPasswordLayout = () => {
  return (
    <>
      <ForgotPasswordPage />
      {/* <BackToTop /> */}
    </>
  );
};

export default ForgotPasswordLayout;
