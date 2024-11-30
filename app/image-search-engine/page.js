import BackToTop from "../backToTop";
import ImageSearchEnginePage from "./index";

export const metadata = {
  title: "MidyAI Design Image Search Engine",
  description: "MidyAI Design Image Search Engine",
};

const ImageSearchEngineLayout = () => {
  return (
    <>
      <ImageSearchEnginePage />
      <BackToTop />
    </>
  );
};

export default ImageSearchEngineLayout;
