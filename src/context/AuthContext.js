import React, { useState, useEffect } from "react";
import { AUTH0_DOMAIN, AUTH0_CLIENT_ID } from "@env";
import SInfo from "react-native-sensitive-info";
import Auth0 from "react-native-auth0";
import DeviceInfo from "react-native-device-info";
import RNRestart from "react-native-restart";

const auth0 = new Auth0({
  domain: AUTH0_DOMAIN,
  clientId: AUTH0_CLIENT_ID,
});

const AuthContext = React.createContext();

const AuthContextProvider = (props) => {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(null);
  const [userData, setUserData] = useState(null);

  const getUserData = async (access_token) => {
    const accessToken = access_token
      ? access_token
      : await SInfo.getItem("accessToken", {});

    const data = await auth0.auth.userInfo({ token: accessToken });
    return data;
  };

  // executed on first app load
  useEffect(() => {
    (async () => {
      try {
        const data = await getUserData();

        setLoggedIn(true);
        setUserData(data);
      } catch (err) {
        console.log("err: ", err);

        try {
          const refreshToken = await SInfo.getItem("refreshToken", {});
          const newAccessTokenResponse = await auth0.auth.refreshToken({
            refreshToken,
          });

          await SInfo.setItem(
            "accessToken",
            newAccessTokenResponse.accessToken,
            {}
          );

          const userData = getUserData(newAccessTokenResponse.accessToken);

          setUserData(userData);
          setLoggedIn(true);
        } catch (err) {
          console.log("error with refreshing token..");
          setLoggedIn(false);
        }
      }
    })();
  }, []);

  // executed when user just logged in
  useEffect(() => {
    (async () => {
      try {
        if (loggedIn) {
          const data = await getUserData();
          setUserData(data);
        }
      } catch (err) {
        console.log("error logging in: ", err);
      }
    })();
  }, [loggedIn]);

  const login = async () => {
    try {
      const credentials = await auth0.webAuth.authorize({
        scope: "openid offline_access profile email",
      });

      await SInfo.setItem("accessToken", credentials.accessToken, {});
      await SInfo.setItem("refreshToken", credentials.refreshToken, {});

      setLoggedIn(true);
    } catch (err) {
      console.log("error logging in..", err);
    }
  };

  const logout = async () => {
    try {
      await auth0.webAuth.clearSession({});

      await SInfo.deleteItem("accessToken", {});
      await SInfo.deleteItem("refreshToken", {});

      setLoggedIn(false);
      setUserData(null);
    } catch (err) {
      console.log("error logging out..", err);
    }
  };

  const value = {
    loading,
    loggedIn,
    login,
    logout,
    userData,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
