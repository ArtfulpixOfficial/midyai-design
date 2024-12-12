import { useEffect } from "react";
import sal from "sal.js";
function ChatAssistants({ id }) {
  useEffect(() => {
    sal();
  }, []);

  return (
    <div
      className="iframe-container mt--95 chat-assistant-iframe"
      style={{
        width: "100%",
        height: "calc(100vh - 160px)",
        border: "none",
      }}
    >
      <iframe
        src={
          !id
            ? "https://midyai-assistant.vercel.app/"
            : `https://midyai-assistant.vercel.app/assistant/${id}`
        }
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
        title="Midy AI Chat Assistants App"
      />
    </div>
  );
}

export default ChatAssistants;
