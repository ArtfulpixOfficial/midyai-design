"use client";

import React, { useEffect } from "react";
import Context from "@/context/Context";
import { useAuthContext } from "@/context/AuthContext";
import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import BackToTop from "../backToTop";
import LeftDashboardSidebar from "@/components/Header/LeftDashboardSidebar";
import HeaderDashboard from "@/components/Header/HeaderDashboard";
import RightDashboardSidebar from "@/components/Header/RightDashboardSidebar";
import Modal from "@/components/Common/Modal";
import StaticbarDashboard from "@/components/Common/StaticBarDashboard";
import GraphicEditor from "@/components/GraphicEditor/GraphicEditor";
import { useRouter } from "next/navigation";
const GraphicEditorPage = () => {
  const router = useRouter();
  const { isAuthenticated, userDetails } = useAuthContext();
  useEffect(() => {
    if (!isAuthenticated || !userDetails) {
      router.push("/signin");
    }
  }, [userDetails, isAuthenticated]);
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
            <GraphicEditor />
            {/* <BackToTop /> */}
          </Context>
        </div>
      </main>
    </>
  );
};

export default GraphicEditorPage;
