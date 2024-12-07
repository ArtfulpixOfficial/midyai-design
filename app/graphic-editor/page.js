import BackToTop from "../backToTop";
import GraphicEditorPage from "./index";

export const metadata = {
  title: "MidyAI Design Graphic Editor",
  description: "MidyAI Design Graphic Editor",
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

const GraphicEditorLayout = () => {
  return (
    <>
      <GraphicEditorPage />
      <BackToTop />
    </>
  );
};

export default GraphicEditorLayout;
