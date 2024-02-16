import { Stack } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

import "./navBar.css";

const NavBar = () => {
  return (
    <Stack id="navBar" direction={"row"} alignItems={"center"}>
      <NavLink key={`navHome`} className={({ isActive }) => (isActive ? "activeLink" : "")} to="/">
        Home
      </NavLink>
    </Stack>
  );
};

export default NavBar;
