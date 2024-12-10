import BackToTop from "../backToTop";
import UpscalerPage from "./index";

export const metadata = {
  title: "MidyAI Design Upscaler",
  description: "MidyAI Design Upscaler",
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

const UpscalerLayout = () => {
  return (
    <>
      <UpscalerPage />
      {/* <BackToTop /> */}
    </>
  );
};

export default UpscalerLayout;
