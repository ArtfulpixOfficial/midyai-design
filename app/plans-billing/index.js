"use client";

import Context from "@/context/Context";
import HeaderDashboard from "@/components/Header/HeaderDashboard";
import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import LeftDashboardSidebar from "@/components/Header/LeftDashboardSidebar";
import PlansBilling from "@/components/PlansBilling/PlansBilling";
import BackToTop from "../backToTop";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";

const PlansBillingPage = () => {
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
        <Context>
          <div className="rbt-panel-wrapper">
            <HeaderDashboard display="d-none" />

            <PopupMobileMenu />
            {/* <LeftDashboardSidebar /> */}

            <PlansBilling />
          </div>

          {/* <BackToTop /> */}
        </Context>
      </main>
    </>
  );
};

export default PlansBillingPage;
