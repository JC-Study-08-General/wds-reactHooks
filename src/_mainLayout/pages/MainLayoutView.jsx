import { Box, Stack } from "@mui/material";
import React from "react";

import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import useMainLayoutModel from "./use-main-layout.view-model";

function MainLayout({ children }) {
  const vm = useMainLayoutModel();

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gridTemplateRows: "1fr auto",
        height: "100dvh",
        maxHeight: "100dvh",
        minHeight: 0,
      }}
    >
      <Box gridRow="span 2">
        <NavBar />
      </Box>
      <Stack justifyContent={"center"}>{children}</Stack>
      <Footer footer={vm.footer} link={vm.footerLink} />
    </Box>
  );
}

export default MainLayout;
