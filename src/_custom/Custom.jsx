import React, { useState } from "react";

export const CustomThemeContext = React.createContext();

export function CustomThemeProvider({ children }) {
  const [customTheme, setCustomTheme] = useState(true);

  function updateTheme() {
    setCustomTheme((preTheme) => !preTheme);
  }
  return <CustomThemeContext.Provider value={[customTheme, updateTheme]}>{children}</CustomThemeContext.Provider>;
}

export default CustomThemeProvider;
