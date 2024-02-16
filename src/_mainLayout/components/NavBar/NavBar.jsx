import { Stack } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

import "./navBar.css";

function NavBar() {
  return (
    <Stack id="navBar" alignItems={"end"}>
      <NavLink key={`navHome`} className={({ isActive }) => (isActive ? "activeLink" : "")} to="/">
        Home
      </NavLink>
      <NavLink key={`navHome`} className={({ isActive }) => (isActive ? "activeLink" : "")} to="/usestate">
        useState
      </NavLink>
      <NavLink key={`navHome`} className={({ isActive }) => (isActive ? "activeLink" : "")} to="/useeffect">
        useEffect
      </NavLink>
      <NavLink key={`navHome`} className={({ isActive }) => (isActive ? "activeLink" : "")} to="/usecontext">
        useContext
      </NavLink>
      <NavLink key={`navHome`} className={({ isActive }) => (isActive ? "activeLink" : "")} to="/useref">
        useRef
      </NavLink>
      <NavLink key={`navHome`} className={({ isActive }) => (isActive ? "activeLink" : "")} to="/usememo">
        useMemo
      </NavLink>
      <NavLink key={`navHome`} className={({ isActive }) => (isActive ? "activeLink" : "")} to="/usecallback">
        useCallback
      </NavLink>
      <NavLink key={`navHome`} className={({ isActive }) => (isActive ? "activeLink" : "")} to="/usereducer">
        useReducer
      </NavLink>
      <NavLink key={`navHome`} className={({ isActive }) => (isActive ? "activeLink" : "")} to="/usetransition">
        useTransition
      </NavLink>
      <NavLink key={`navHome`} className={({ isActive }) => (isActive ? "activeLink" : "")} to="/usedeferred">
        useDeferred
      </NavLink>
      <NavLink key={`navHome`} className={({ isActive }) => (isActive ? "activeLink" : "")} to="/uselayout">
        useLayout
      </NavLink>
      <NavLink key={`navHome`} className={({ isActive }) => (isActive ? "activeLink" : "")} to="/usedebug">
        useDebug
      </NavLink>
      <NavLink key={`navHome`} className={({ isActive }) => (isActive ? "activeLink" : "")} to="/useimperative">
        useImperative
      </NavLink>
      <NavLink key={`navHome`} className={({ isActive }) => (isActive ? "activeLink" : "")} to="/useid">
        useId
      </NavLink>
    </Stack>
  );
}

export default NavBar;
