import BackToTop from "../backToTop";
import ChatAssistantsPage from "./index";

export const metadata = {
  title: "MidyAI Design Chat Assistants",
  description: "MidyAI Design Chat Assistants",
};

const ChatAssistantsLayout = () => {
  return (
    <>
      <ChatAssistantsPage />
      <BackToTop />
    </>
  );
};

export default ChatAssistantsLayout;
