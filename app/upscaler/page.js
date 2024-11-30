import BackToTop from "../backToTop";
import UpscalerPage from "./index";

export const metadata = {
  title: "MidyAI Design Upscaler",
  description: "MidyAI Design Upscaler",
};

const UpscalerLayout = () => {
  return (
    <>
      <UpscalerPage />
      <BackToTop />
    </>
  );
};

export default UpscalerLayout;
