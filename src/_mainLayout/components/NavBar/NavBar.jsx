import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./navBar.css";

const ACTION = {
  HOOKS: "hooks",
  CUSTOM: "custom",
  ARRAYS: "arrays",
};

function NavBar() {
  const [navItems, setNavItems] = useState({ hooks: false, custom: false, arrays: false });

  function handleChange(navItem) {
    switch (navItem) {
      case "hooks":
        return setNavItems((pre) => {
          return {
            ...pre,
            hooks: !navItems.hooks,
          };
        });
      case "custom":
        return setNavItems(() => (navItems.custom = !navItems.custom));
      case "arrays":
        return setNavItems(() => (navItems.arrays = !navItems.arrays));
      default:
        return navItem;
    }
  }

  return (
    <Stack id="navBar" alignItems={"start"}>
      <NavLink key={`navHome`} className={({ isActive }) => (isActive ? "activeLink" : "")} to="/">
        Home
      </NavLink>
      <Typography variant="h6" onClick={() => handleChange(ACTION.HOOKS)}>
        React Hooks
      </Typography>
      {/* <Stack alignItems={"end"} sx={{ display: navItems.hooks ? "flex" : "none" }}> */}
      <Stack alignItems={"end"}>
        <NavLink key={`navusestate`} className={({ isActive }) => (isActive ? "activeLink" : "")} to="/hooks/usestate">
          useState
        </NavLink>
        <NavLink
          key={`navuseeffect`}
          className={({ isActive }) => (isActive ? "activeLink" : "")}
          to="/hooks/useeffect"
        >
          useEffect
        </NavLink>
        <NavLink
          key={`navusecontext`}
          className={({ isActive }) => (isActive ? "activeLink" : "")}
          to="/hooks/usecontext"
        >
          useContext
        </NavLink>
        <NavLink key={`navuseref`} className={({ isActive }) => (isActive ? "activeLink" : "")} to="/hooks/useref">
          useRef
        </NavLink>
        <NavLink key={`navusememo`} className={({ isActive }) => (isActive ? "activeLink" : "")} to="/hooks/usememo">
          useMemo
        </NavLink>
        <NavLink
          key={`navusecallback`}
          className={({ isActive }) => (isActive ? "activeLink" : "")}
          to="/hooks/usecallback"
        >
          useCallback
        </NavLink>
        <NavLink
          key={`navusereducer`}
          className={({ isActive }) => (isActive ? "activeLink" : "")}
          to="/hooks/usereducer"
        >
          useReducer
        </NavLink>
        <NavLink
          key={`navusetransition`}
          className={({ isActive }) => (isActive ? "activeLink" : "")}
          to="/hooks/usetransition"
        >
          useTransition
        </NavLink>
        <NavLink
          key={`navusedeferred`}
          className={({ isActive }) => (isActive ? "activeLink" : "")}
          to="/hooks/usedeferredvalue"
        >
          useDeferredValue
        </NavLink>
        <NavLink
          key={`navuselayout`}
          className={({ isActive }) => (isActive ? "activeLink" : "")}
          to="/hooks/uselayouteffect"
        >
          useLayoutEffect
        </NavLink>
        <NavLink
          key={`navusedebug`}
          className={({ isActive }) => (isActive ? "activeLink" : "")}
          to="/hooks/usedebugvalue"
        >
          useDebugValue
        </NavLink>
        <NavLink
          key={`navuseimperative`}
          className={({ isActive }) => (isActive ? "activeLink" : "")}
          to="/hooks/useimperativehandle"
        >
          useImperativeHandle
        </NavLink>
        <NavLink key={`navuseid`} className={({ isActive }) => (isActive ? "activeLink" : "")} to="/hooks/useid">
          useId
        </NavLink>
      </Stack>
    </Stack>
  );
}

export default NavBar;
