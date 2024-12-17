"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  refreshSession,
  signOutUser,
  supabase,
  getUserData,
} from "@/utilities/supabaseAuth";
export const CreateContext = createContext();

export const useAuthContext = () => useContext(CreateContext);

const AuthContext = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userDetails, setUserDetails] = useState();
  const [sessionDetails, setSessionDetails] = useState();
  const [userData, setUserData] = useState();

  const login = (authObj) => {
    try {
      if (authObj.error) throw authObj.error;
      localStorage.setItem("isAuthenticated", true);
      localStorage.setItem("userDetails", JSON.stringify(authObj.data.user));
      localStorage.setItem(
        "sessionDetails",
        JSON.stringify(authObj.data.session)
      );
      setIsAuthenticated(true);
      setSessionDetails(authObj.data.session);
      setUserDetails(authObj.data.user);
    } catch (error) {
      console.log(error);
      console.log(error.message);
      console.log(error.code);
    }
  };
  const logout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userDetails");
    localStorage.removeItem("sessionDetails");
    setIsAuthenticated(false);
    setSessionDetails();
    setUserDetails();
    setUserData();
    // await signOutUser();
  };

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      console.log(event);
      console.log(session);

      // if (event === 'INITIAL_SESSION') {

      // }
      let authObj = {};
      if (session) {
        authObj = {
          data: {
            session,
            user: session.user,
          },
          error: null,
        };
      }
      if (event === "SIGNED_IN") {
        // handle sign in event

        login(authObj);
      }
      if (event === "USER_UPDATED") {
        // handle sign in event

        login(authObj);
      }

      if (event === "TOKEN_REFRESHED") {
        console.log("Token Refreshed");
        login(authObj);
      }

      if (event === "SIGNED_OUT") {
        logout();
      }
    });

    return () => data.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    async function refreshCurrentSession() {
      const { data, error } = await refreshSession();
      if (error) {
        console.log(error);
        await signOutUser();
      }
      console.log(data);
      //   login({

      //   })
      //   setSessionDetails(data.session);
      //   setUserDetails(data.session.user);
      //   setIsAuthenticated(true);
    }

    if (
      sessionDetails &&
      Math.floor(Date.now() / 1000) > sessionDetails.expires_at
    )
      refreshCurrentSession();
  }, [sessionDetails]);

  useEffect(() => {
    if (isAuthenticated && userDetails.id) {
      async function getUserDataFromdb() {
        console.log(userDetails);
        const userRes = await getUserData("midyaiUsers", userDetails.id);
        if (userRes.error) return;
        console.log(userRes);
        setUserData(userRes.data[0]);
      }
      getUserDataFromdb();
    }
  }, [userDetails, isAuthenticated]);
  return (
    <CreateContext.Provider
      value={{
        isAuthenticated,
        userDetails,
        login,
        sessionDetails,
        logout,
        userData,
        setUserData,
      }}
    >
      {children}
    </CreateContext.Provider>
  );
};

export default AuthContext;
