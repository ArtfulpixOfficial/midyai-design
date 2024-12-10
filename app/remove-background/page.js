import BackToTop from "../backToTop";
import RemoveBackgroundPage from "./index";

export const metadata = {
  title: "MidyAI Design Remove Background",
  description: "MidyAI Design Remove Background",
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

const RemoveBackgroundLayout = () => {
  return (
    <>
      <RemoveBackgroundPage />
      {/* <BackToTop /> */}
    </>
  );
};

export default RemoveBackgroundLayout;
