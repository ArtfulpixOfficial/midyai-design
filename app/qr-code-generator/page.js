import BackToTop from "../backToTop";
import QRCodeGeneratorPage from "./index";

export const metadata = {
  title: "MidyAI Design QR Code Generator",
  description: "MidyAI Design QR Code Generator",
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
