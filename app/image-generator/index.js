"use client";

import React from "react";
import Context from "@/context/Context";

import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import BackToTop from "../backToTop";
import LeftDashboardSidebar from "@/components/Header/LeftDashboardSidebar";
import HeaderDashboard from "@/components/Header/HeaderDashboard";
import RightDashboardSidebar from "@/components/Header/RightDashboardSidebar";
import Modal from "@/components/Common/Modal";
import StaticbarDashboard from "@/components/Common/StaticBarDashboard";
import ImageGenerator from "@/components/ImageGenerator/ImageGenerator";

const ImageGeneratorPage = () => {
  return (
    <>
      <main className="page-wrapper rbt-dashboard-page">
        <div className="rbt-panel-wrapper">
          <Context>
            {/* <LeftDashboardSidebar /> */}
            <HeaderDashboard display="" />
            {/* <RightDashboardSidebar /> */}
            <Modal />
            <PopupMobileMenu />

            {/* <div className="rbt-main-content">
              <div className="rbt-daynamic-page-content">
                <div className="rbt-dashboard-content">
                  <div className="content-page">
                    <div className="chat-box-section">
                      <ImageGenerator />
                      <StaticbarDashboard />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
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
            <BackToTop />
          </Context>
        </div>
      </main>
    </>
  );
};

export default ImageGeneratorPage;
