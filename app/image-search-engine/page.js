import BackToTop from "../backToTop";
import ImageSearchEnginePage from "./index";

export const metadata = {
  title: "MidyAI Design Image Search Engine",
  description: "MidyAI Design Image Search Engine",
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

const ImageSearchEngineLayout = () => {
  return (
    <>
      <ImageSearchEnginePage />
      {/* <BackToTop /> */}
    </>
  );
};

export default ImageSearchEngineLayout;
