import BackToTop from "../backToTop";
import TextToSpeechPage from "./index";

export const metadata = {
  title: "MidyAI Design Text To Speech",
  description: "MidyAI Design Text To Speech",
};

const TextToSpeechLayout = () => {
  return (
    <>
      <TextToSpeechPage />
      <BackToTop />
    </>
  );
};

export default TextToSpeechLayout;
