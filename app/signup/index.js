"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "../../public/images/logo/logo.png";
import userImg from "../../public/images/team/team-02sm.jpg";
import brandImg from "../../public/images/brand/brand-t.png";
import google from "../../public/images/sign-up/google.png";
import facebook from "../../public/images/sign-up/facebook.png";
import bgImg from "../../public/images/bg/signin-signup-background.png";
import { insertUserData, signUpNewUser } from "@/utilities/supabaseAuth";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
const SignupPage = () => {
  const { isAuthenticated, userDetails, login, sessionDetails } =
    useAuthContext();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/home");
    }
  }, [isAuthenticated]);
  const onSignupClick = async (e) => {
    e.preventDefault();
    if (!email || !userName || !password || !confirmPassword) return;
    if (password !== confirmPassword) return;
    if (password.length <= 3) return;
    const res = await signUpNewUser(email, password, userName);
    console.log(res);
    if (!res.error) {
      const {
        id,
        created_at,
        email,
        last_sign_in_at,
        phone,
        user_metadata: { displayName },
      } = res.data.user;
      insertUserData("midyaiUsers", {
        id: id,
        createdAt: created_at,
        email,
        isSuperAdmin: false,
        lastSignedIn: last_sign_in_at,
        phoneNumber: phone || null,
        displayName: displayName || "",
      });
    }
    login(res);
  };

  console.log(isAuthenticated);
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
                      {/* <div className="social-btn-grp justify-content-center">
                        <a className="btn-default btn-border" href="#">
                          <span className="icon-left">
                            <Image
                              src={google}
                              width={18}
                              height={18}
                              alt="Google Icon"
                            />
                          </span>
                          Login with Google
                        </a>
                    
                      </div>
                      <div className="text-social-area">
                        <hr />
                        <span>Or continue with</span>
                        <hr />
                      </div> */}
                      <form onSubmit={onSignupClick}>
                        <div className="input-section">
                          <div className="icon">
                            <i className="feather-user"></i>
                          </div>
                          <input
                            type="text"
                            placeholder="Enter Your Name"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                          />
                        </div>
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
                        <div className="input-section password-section">
                          <div className="icon">
                            <i className="fa-sharp fa-regular fa-lock"></i>
                          </div>
                          <input
                            type="password"
                            placeholder="Create Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>{" "}
                        <div className="input-section password-section">
                          <div className="icon">
                            <i className="fa-sharp fa-regular fa-lock"></i>
                          </div>
                          <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                        </div>
                        {/* <div className="forget-text">
                          <a className="btn-read-more" href="#">
                            <span>Forgot password</span>
                          </a>
                        </div> */}
                        <button type="submit" className="btn-default">
                          Sign Up
                        </button>
                      </form>
                    </div>
                    <div className="signup-box-footer">
                      <div className="bottom-text">
                        Do you have an account?
                        <a className="btn-read-more ml--5" href="/signin">
                          <span>Sign In</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 right-wrapper align-items-stretch justify-content-stretch px-0">
                <Image src={bgImg} width={1200} alt="ai-made-astronaut" />
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

export default SignupPage;
