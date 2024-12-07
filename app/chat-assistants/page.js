import BackToTop from "../backToTop";
import ChatAssistantsPage from "./index";
// import AuthContext from "@/context/AuthContext";
export const metadata = {
  title: "MidyAI Design Chat Assistants",
  description: "MidyAI Design Chat Assistants",
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

const ChatAssistantsLayout = () => {
  return (
    <>
      <ChatAssistantsPage />
      <BackToTop />
    </>
  );
};

export default ChatAssistantsLayout;
