import BackToTop from "../backToTop";
import TextToSpeechPage from "./index";

export const metadata = {
  title: "MidyAI Design Text To Speech",
  description: "MidyAI Design Text To Speech",
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

const TextToSpeechLayout = () => {
  return (
    <>
      <TextToSpeechPage />
      {/* <BackToTop /> */}
    </>
  );
};

export default TextToSpeechLayout;
