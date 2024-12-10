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
import ChatAssistants from "@/components/ChatAssistants/ChatAssistants";
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
            <ChatAssistants id={id} />
            {/* <BackToTop /> */}
          </Context>
        </div>
      </main>
    </>
  );
};

export default ChatAssistantsPage;
