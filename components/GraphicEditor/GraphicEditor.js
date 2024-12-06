import { useEffect } from "react";
import sal from "sal.js";
function GraphicEditor() {
  useEffect(() => {
    sal();
  }, []);
  return (
    <div
      className="iframe-container mt--95"
      style={{
        width: "100%",
        height: "800px",
        border: "none",
      }}
    >
      <iframe
        src="https://midyai-graphic-editor.netlify.app"
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
        title="Midy AI Graphic Editor App"
      />
    </div>
  );
}

export default GraphicEditor;
