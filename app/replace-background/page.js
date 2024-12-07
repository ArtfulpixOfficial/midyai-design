import BackToTop from "../backToTop";
import ReplaceBackgroundPage from "./index";

export const metadata = {
  title: "MidyAI Design Replace Background",
  description: "MidyAI Design Replace Background",
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

const ReplaceBackgroundLayout = () => {
  return (
    <>
      <ReplaceBackgroundPage />
      <BackToTop />
    </>
  );
};

export default ReplaceBackgroundLayout;
