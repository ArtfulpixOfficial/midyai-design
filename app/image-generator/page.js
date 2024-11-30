import BackToTop from "../backToTop";
import ImageGeneratorPage from "./index";

export const metadata = {
  title: "MidyAI Design Image Generator",
  description: "MidyAI Design Image Generator",
};

const ImageGeneratorLayout = () => {
  return (
    <>
      <ImageGeneratorPage />
      <BackToTop />
    </>
  );
};

export default ImageGeneratorLayout;
