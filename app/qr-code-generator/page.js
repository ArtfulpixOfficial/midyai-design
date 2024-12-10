import BackToTop from "../backToTop";
import QRCodeGeneratorPage from "./index";

export const metadata = {
  title: "MidyAI Design QR Code Generator",
  description: "MidyAI Design QR Code Generator",
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

const QRCodeGeneratorLayout = () => {
  return (
    <>
      <QRCodeGeneratorPage />
      {/* <BackToTop /> */}
    </>
  );
};

export default QRCodeGeneratorLayout;
