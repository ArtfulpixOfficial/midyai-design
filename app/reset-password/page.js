import BackToTop from "../backToTop";
import ResetPasswordPage from "./index";

export const metadata = {
  title: "MidyAI Design Reset Password",
  description: "MidyAI Design Reset Password",
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

const resetPasswordLayout = () => {
  return (
    <>
      <ResetPasswordPage />
      {/* <BackToTop /> */}
    </>
  );
};

export default resetPasswordLayout;
