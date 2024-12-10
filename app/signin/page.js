import BackToTop from "../backToTop";
import SigninPage from "./index";

export const metadata = {
  title: "MidyAI Design Sign In",
  description: "MidyAI Design Sign In",
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

const SigninLayout = () => {
  return (
    <>
      <SigninPage />
      {/* <BackToTop /> */}
    </>
  );
};

export default SigninLayout;
