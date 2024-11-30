import BackToTop from "../backToTop";
import SpeechToTextPage from "./index";

export const metadata = {
  title: "MidyAI Design Speech To Text",
  description: "MidyAI Design Speech To Text",
};

const SpeechToTextLayout = () => {
  return (
    <>
      <SpeechToTextPage />
      <BackToTop />
    </>
  );
};

export default SpeechToTextLayout;
