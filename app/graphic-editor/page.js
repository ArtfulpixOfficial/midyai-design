import BackToTop from "../backToTop";
import GraphicEditorPage from "./index";

export const metadata = {
  title: "MidyAI Design Graphic Editor",
  description: "MidyAI Design Graphic Editor",
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
