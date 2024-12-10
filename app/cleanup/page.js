import BackToTop from "../backToTop";
import CleanupPage from "./index";

export const metadata = {
  title: "MidyAI Design Cleanup",
  description: "MidyAI Design Cleanup",
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

const CleanupLayout = () => {
  return (
    <>
      <CleanupPage />
      {/* <BackToTop /> */}
    </>
  );
};

export default CleanupLayout;
