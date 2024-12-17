"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../public/images/logo/logo.png";
import userImg from "../../public/images/team/team-02sm.jpg";
import brandImg from "../../public/images/brand/brand-t.png";
import google from "../../public/images/sign-up/google.png";
import facebook from "../../public/images/sign-up/facebook.png";
import bgImg from "../../public/images/bg/signin-signup-background.png";
import {
  forgotPassword,
  getUserData,
  signInUser,
} from "@/utilities/supabaseAuth";

import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
const ForgotPasswordPage = () => {
  const router = useRouter();
  const { isAuthenticated } = useAuthContext();
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/home");
    }
  }, [isAuthenticated]);

  const onForgotPassword = async function (e) {
    e.preventDefault();
    if (!email) return;
    const { data, error } = await forgotPassword(email);
    console.log(data, error);
  };
  return (
    <>
      <main className="page-wrapper">
        <div className="signup-area">
          <div className="wrapper">
            <div className="row">
              <div className="col-lg-6 bg-color-blackest left-wrapper">
                <div className="sign-up-box">
                  <div className="signup-box-top">
                    <Image
                      src={logo}
                      width={193}
                      height={50}
                      alt="sign-up logo"
                    />
                  </div>
                  <div className="signup-box-bottom">
                    <div className="signup-box-content">
                      <form onSubmit={onForgotPassword}>
                        <div className="input-section mail-section">
                          <div className="icon">
                            <i className="fa-sharp fa-regular fa-envelope"></i>
                          </div>
                          <input
                            type="email"
                            placeholder="Enter email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>

                        <button type="submit" className="btn-default">
                          Send Password Reset Link
                        </button>
                      </form>
                    </div>
                    <div className="signup-box-footer">
                      <div className="bottom-text">
                        Don't have an account?{" "}
                        <a className="btn-read-more ml--5" href="/signup">
                          <span>Sign Up</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 right-wrapper align-items-stretch px-0">
                <Image src={bgImg} width={800} alt="ai-generated-astronaut" />
              </div>
            </div>
          </div>
          <Link className="close-button" href="/">
            <i className="fa-sharp fa-regular fa-x"></i>
          </Link>
        </div>
      </main>
    </>
  );
};

export default ForgotPasswordPage;
