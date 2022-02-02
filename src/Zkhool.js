import React from "react";
import { useState } from "react";
import { ApplicationViews } from "./ApplicationViews"


export const Zkhool = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("zkhool_user") !== null)

  const setAuthUser = (user) => {
    sessionStorage.setItem("zkhool_user", user.id)
    sessionStorage.setItem("zkhool_username", user.name)
    setIsAuthenticated(sessionStorage.getItem("zkhool_user") !== null)
  }

  const clearUser = () => {
    sessionStorage.clear();
    setIsAuthenticated(sessionStorage.getItem("zkhool_user") !== null)
  }

  return (

    <>
      <ApplicationViews setAuthUser={setAuthUser} isAuthenticated={isAuthenticated} clearUser={clearUser} />

    </>
  );
}

