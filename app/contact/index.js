"use client";
import { useEffect } from "react";
import Context from "@/context/Context";
import { useAuthContext } from "@/context/AuthContext";
import HeaderTop from "@/components/Header/HeaderTop/HeaderTop";
import Header from "@/components/Header/Header";
import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import Footer from "@/components/Footers/Footer";
import Copyright from "@/components/Footers/Copyright";
import Breadcrumb from "@/components/Common/Breadcrumb";
import BackToTop from "../backToTop";
import Contact from "@/components/Contact/Contact";
import CtaTwo from "@/components/CallToActions/Cta-Two";
import { useRouter } from "next/navigation";
const ContactPage = () => {
  const router = useRouter();
  const { isAuthenticated, userDetails } = useAuthContext();
  // useEffect(() => {
  //   if (!isAuthenticated || !userDetails) {
  //     router.push("/signin");
  //   }
  // }, [userDetails, isAuthenticated]);
  return (
    <>
      <main className="page-wrapper">
        <Context>
          {/* <HeaderTop /> */}
          <Header
            headerTransparent="header-transparent"
            headerSticky="header-sticky"
            btnClass="rainbow-gradient-btn"
          />
          <PopupMobileMenu />
          <Breadcrumb
            title="Get Started with a free quotation"
            text="Contact"
          />

          <Contact />

          <div className="rainbow-cta-area rainbow-section-gap rainbow-section-gapBottom-big">
            {/* <div className="container">
              <CtaTwo />
            </div> */}
          </div>

          {/* <BackToTop /> */}
          <Footer />
          {/* <Copyright /> */}
        </Context>
      </main>
    </>
  );
};

export default ContactPage;
