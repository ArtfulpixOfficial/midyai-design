"use client";

import Context from "@/context/Context";
import HeaderDashboard from "@/components/Header/HeaderDashboard";
import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import LeftDashboardSidebar from "@/components/Header/LeftDashboardSidebar";
import ProfileDetails from "@/components/ProfileDetails/ProfileDetails";
import { useAuthContext } from "@/context/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
const ProfileDetailsPage = () => {
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

            <ProfileDetails />
          </div>
        </Context>
      </main>
    </>
  );
};

export default ProfileDetailsPage;
