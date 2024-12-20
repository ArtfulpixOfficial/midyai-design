"use client";

import React, { useEffect, useState } from "react";

import sal from "sal.js";

const ImageGenerator = () => {
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
        src="https://midyaisdxl.netlify.app/"
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
        title="Midy AI SDXL App"
      />
    </div>
  );
};

export default ImageGenerator;
