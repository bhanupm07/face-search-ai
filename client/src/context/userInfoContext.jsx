import React, { createContext, useEffect, useState } from "react";
import { serverUrl } from "../utils/constants";
import { useToast } from "@chakra-ui/react";

export const UserInfoContext = createContext();

export const UserInfoProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );
  const toast = useToast();

  const updateUserInfo = (newUserInfo) => {
    setUserInfo(newUserInfo);
  };

  const updateIsUserLoggedIn = (val) => {
    setIsUserLoggedIn(val);
  };

  const fetchUserInfo = async (token) => {
    const response = await fetch(`${serverUrl}/api/v1/user/details`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    if (response.ok) {
      toast({
        title: "User details fetched successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
    const data = await response.json();
    // console.log(data);
    updateUserInfo(data.user);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      updateIsUserLoggedIn(true);
      fetchUserInfo(localStorage.getItem("token"));
    }
  }, []);

  return (
    <UserInfoContext.Provider
      value={{ userInfo, updateUserInfo, updateIsUserLoggedIn, isUserLoggedIn }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};
