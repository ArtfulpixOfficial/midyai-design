import BackToTop from "../backToTop";
import SpeechToTextPage from "./index";

export const metadata = {
  title: "MidyAI Design Speech To Text",
  description: "MidyAI Design Speech To Text",
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

const SpeechToTextLayout = () => {
  return (
    <>
      <SpeechToTextPage />
      {/* <BackToTop /> */}
    </>
  );
};

export default SpeechToTextLayout;
