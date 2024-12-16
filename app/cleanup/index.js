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
import ImageGenerator from "@/components/ImageGenerator/ImageGenerator";
import { useRouter } from "next/navigation";
const CleanupPage = () => {
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

            <div
              className="iframe-container mt--95"
              style={{
                width: "100%",
                height: "800px",
                border: "none",
              }}
            >
              <iframe
                src="https://midyaiimagecleanup.netlify.app/"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                title="Midy AI Image Cleanup"
              />
            </div>
            {/* <BackToTop /> */}
          </Context>
        </div>
      </main>
    </>
  );
};

export default CleanupPage;
