import BackToTop from "../backToTop";
import QRCodeGeneratorPage from "./index";

export const metadata = {
  title: "Image Generator - || AiWave - AI SaaS Website NEXTJS14 UI Kit",
  description: "AiWave - AI SaaS Website NEXTJS14 UI Kit",
};

const QRCodeGeneratorLayout = () => {
  return (
    <>
      <QRCodeGeneratorPage />
      <BackToTop />
    </>
  );
};

export default QRCodeGeneratorLayout;
