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
      <NavLink key={`navusestate`} className={({ isActive }) => (isActive ? "activeLink" : "")} to="/usestate">
        useState
      </NavLink>
      <NavLink key={`navuseeffect`} className={({ isActive }) => (isActive ? "activeLink" : "")} to="/useeffect">
        useEffect
      </NavLink>
      <NavLink key={`navusecontext`} className={({ isActive }) => (isActive ? "activeLink" : "")} to="/usecontext">
        useContext
      </NavLink>
      <NavLink key={`navuseref`} className={({ isActive }) => (isActive ? "activeLink" : "")} to="/useref">
        useRef
      </NavLink>
      <NavLink key={`navusememo`} className={({ isActive }) => (isActive ? "activeLink" : "")} to="/usememo">
        useMemo
      </NavLink>
      <NavLink key={`navusecallback`} className={({ isActive }) => (isActive ? "activeLink" : "")} to="/usecallback">
        useCallback
      </NavLink>
      <NavLink key={`navusereducer`} className={({ isActive }) => (isActive ? "activeLink" : "")} to="/usereducer">
        useReducer
      </NavLink>
      <NavLink
        key={`navusetransition`}
        className={({ isActive }) => (isActive ? "activeLink" : "")}
        to="/usetransition"
      >
        useTransition
      </NavLink>
      <NavLink
        key={`navusedeferred`}
        className={({ isActive }) => (isActive ? "activeLink" : "")}
        to="/usedeferredvalue"
      >
        useDeferredValue
      </NavLink>
      <NavLink key={`navuselayout`} className={({ isActive }) => (isActive ? "activeLink" : "")} to="/uselayouteffect">
        useLayoutEffect
      </NavLink>
      <NavLink key={`navusedebug`} className={({ isActive }) => (isActive ? "activeLink" : "")} to="/usedebugvalue">
        useDebugValue
      </NavLink>
      <NavLink
        key={`navuseimperative`}
        className={({ isActive }) => (isActive ? "activeLink" : "")}
        to="/useimperativehandle"
      >
        useImperativeHandle
      </NavLink>
      <NavLink key={`navuseid`} className={({ isActive }) => (isActive ? "activeLink" : "")} to="/useid">
        useId
      </NavLink>
    </Stack>
  );
}

export default NavBar;
