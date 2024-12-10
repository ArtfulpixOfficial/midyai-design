"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  refreshSession,
  signOutUser,
  supabase,
} from "@/utilities/supabaseAuth";
export const CreateContext = createContext();

export const useAuthContext = () => useContext(CreateContext);

const AuthContext = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userDetails, setUserDetails] = useState();
  const [sessionDetails, setSessionDetails] = useState();

  // const restoreSession = async () => {
  //   const storedAuthState = JSON.parse(localStorage.getItem("isAuthenticated"));
  //   const storedUserDetails = JSON.parse(localStorage.getItem("userDetails"));
  //   const storedSessionDetails = JSON.parse(
  //     localStorage.getItem("sessionDetails")
  //   );

  //   if (!storedAuthState || !storedSessionDetails) return;

  //   const { access_token, refresh_token, expires_at } = storedSessionDetails;
  //   const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

  //   if (currentTime > expires_at) {
  //     // Token is expired, attempt to refresh
  //     try {
  //       const newSession = await refreshSession(refresh_token);
  //       localStorage.setItem(
  //         "sessionDetails",
  //         JSON.stringify(newSession.data.session)
  //       );
  //       setIsAuthenticated(true);
  //       setSessionDetails(newSession.data.session);
  //       setUserDetails(newSession.data.user);
  //     } catch (error) {
  //       console.error("Failed to refresh session:", error);
  //       logout(); // Log out user if refresh fails
  //     }
  //   } else {
  //     // Token is still valid
  //     setIsAuthenticated(true);
  //     setUserDetails(storedUserDetails);
  //     setSessionDetails(storedSessionDetails);
  //   }
  // };

  // const refreshSession = async (refreshToken) => {
  //   const { data, error } = await supabase.auth.api.refreshAccessToken(
  //     refreshToken
  //   );
  //   if (error) throw error; // Handle error if refresh fails
  //   return { data };
  // };

  // useEffect(() => {
  //   restoreSession();
  // }, []);

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
  return (
    <CreateContext.Provider
      value={{ isAuthenticated, userDetails, login, sessionDetails, logout }}
    >
      {children}
    </CreateContext.Provider>
  );
};

export default AuthContext;
