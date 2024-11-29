"use client";

import React from "react";
import Context from "@/context/Context";
import { useSearchParams } from "next/navigation";
import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import BackToTop from "../backToTop";
import LeftDashboardSidebar from "@/components/Header/LeftDashboardSidebar";
import HeaderDashboard from "@/components/Header/HeaderDashboard";
import RightDashboardSidebar from "@/components/Header/RightDashboardSidebar";
import Modal from "@/components/Common/Modal";
import StaticbarDashboard from "@/components/Common/StaticBarDashboard";
import ImageGenerator from "@/components/ImageGenerator/ImageGenerator";

const ChatAssistantsPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  console.log(id);
  return (
    <>
      <main className="page-wrapper rbt-dashboard-page">
        <div className="rbt-panel-wrapper">
          <Context>
            <HeaderDashboard display="" />

            <Modal />
            <PopupMobileMenu />

            <div
              className="iframe-container mt--95"
              style={{
                width: "100%",
                height: "800px",
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
            <BackToTop />
          </Context>
        </div>
      </main>
    </>
  );
};

export default ChatAssistantsPage;
