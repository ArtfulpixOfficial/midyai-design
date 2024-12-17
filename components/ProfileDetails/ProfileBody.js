"use client";

import { useAuthContext } from "@/context/AuthContext";
import {
  changePassword,
  signInUser,
  updateData,
} from "@/utilities/supabaseAuth";
import React, { useState, useEffect } from "react";

const ProfileBody = () => {
  const { userDetails, userData, isAuthenticated, setUserData } =
    useAuthContext();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [text, setText] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [retypeNewPassword, setRetypeNewPassword] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };
  console.log(userData);

  useEffect(() => {
    if (isAuthenticated && userData) {
      const {
        displayName,
        phoneNumber: phNo,
        bio,
        firstName: fn,
        lastName: ln,
      } = userData;
      if (!fn || !ln) {
        const temp = displayName.split(" ");
        setFirstName(temp[0]);
        if (temp.length > 1) {
          setLastName(temp.at(-1));
        }
      } else {
        setFirstName(fn);
        setLastName(ln);
      }

      setUserName(displayName);
      setPhoneNumber(phNo || "");
      setText(bio);
    }
  }, [isAuthenticated, userData]);

  const profileFormSubmit = async function (e) {
    e.preventDefault();
    if (!userName || !phoneNumber || !firstName) return;
    const columnData = {
      firstName,
      lastName,
      displayName: userName,
      phoneNumber,
      bio: text,
    };
    const res = await updateData("midyaiUsers", userData.id, columnData);
    console.log(res);
    if (!res.error) {
      setUserData(res.data[0]);
    }
  };
  const verifyCurrentPassword = async function (email, password) {
    const res = await signInUser(email, password);
    if (res.error) return false;
    return true;
  };
  const passwordChangeFormSubmit = async function (e) {
    e.preventDefault();
    if (!currentPassword || !newPassword || !retypeNewPassword) return;
    if (newPassword !== retypeNewPassword) return;
    const isCurrentPasswordCorrect = await verifyCurrentPassword(
      userData.email,
      currentPassword
    );
    if (!isCurrentPasswordCorrect) return;
    const { data, error } = await changePassword(newPassword);
    console.log(data);
    console.log(error);
  };
  return (
    <>
      <div className="single-settings-box profile-details-box overflow-hidden">
        <div className="profile-details-tab">
          <div className="advance-tab-button mb--30">
            <ul
              className="nav nav-tabs tab-button-style-2 justify-content-start"
              id="settinsTab-4"
              role="tablist"
            >
              <li role="presentation">
                <a
                  href="#"
                  className="tab-button active"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="true"
                >
                  <span className="title">Profile</span>
                </a>
              </li>
              <li role="presentation">
                <a
                  href="#"
                  className="tab-button"
                  id="password-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#password"
                  role="tab"
                  aria-controls="password"
                  aria-selected="false"
                >
                  <span className="title">Password</span>
                </a>
              </li>
              <li role="presentation">
                <a
                  href="#"
                  className="tab-button"
                  id="del-account-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#delaccount"
                  role="tab"
                  aria-controls="delaccount"
                  aria-selected="false"
                >
                  <span className="title">Delete Account</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="tab-content">
            <div
              className="tab-pane fade active show"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <form
                // action="#"
                onSubmit={profileFormSubmit}
                className="rbt-profile-row rbt-default-form row row--15"
              >
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="firstname">First Name</label>
                    <input
                      id="firstname"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="lastname">Last Name</label>
                    <input
                      id="lastname"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="username">User Name</label>
                    <input
                      id="username"
                      type="text"
                      placeholder="Rafi"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="phonenumber">Phone Number</label>
                    <input
                      id="phonenumber"
                      type="tel"
                      placeholder="+1-202-555-0174"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="bio">Bio</label>
                    <textarea
                      id="bio"
                      cols="20"
                      rows="5"
                      value={text}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-12 mt--20">
                  <div className="form-group mb--0">
                    <button className="btn-default">Update Info</button>
                  </div>
                </div>
              </form>
            </div>

            <div
              className="tab-pane fade"
              id="password"
              role="tabpanel"
              aria-labelledby="password-tab"
            >
              <form
                // action="#"
                onSubmit={passwordChangeFormSubmit}
                className="rbt-profile-row rbt-default-form row row--15"
              >
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="currentpassword">Current Password</label>
                    <input
                      id="currentpassword"
                      type="password"
                      placeholder="Current Password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="newpassword">New Password</label>
                    <input
                      id="newpassword"
                      type="password"
                      placeholder="New Password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="retypenewpassword">
                      Re-type New Password
                    </label>
                    <input
                      id="retypenewpassword"
                      type="password"
                      placeholder="Re-type New Password"
                      value={retypeNewPassword}
                      onChange={(e) => setRetypeNewPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-12 mt--20">
                  <div className="form-group mb--0">
                    <button className="btn-default">Update Password</button>
                  </div>
                </div>
              </form>
            </div>

            <div
              className="tab-pane fade"
              id="delaccount"
              role="tabpanel"
              aria-labelledby="del-account-tab"
            >
              <form
                action="#"
                className="rbt-profile-row rbt-default-form row row--15"
              >
                <div className="col-11 text-Center">
                  <p className="mb--20">
                    <strong>Warning: </strong>Deleting your account will
                    permanently erase all your data and cannot be reversed. This
                    includes your profile, conversations, comments, and any
                    other info linked to your account. Are you sure you want to
                    go ahead with deleting your account? Enter your password to
                    confirm.
                  </p>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="enterpassword">Your Password</label>
                    <input
                      id="enterpassword"
                      type="password"
                      placeholder="Current Password"
                    />
                  </div>
                </div>
                <div className="col-12 mt--20">
                  <div className="form-group mb--0">
                    <a className="btn-default" href="#">
                      <i className="feather-trash-2"></i> Delete Accont
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileBody;
