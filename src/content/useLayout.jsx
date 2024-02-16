import React from "react";
import MainLayout from "../_mainLayout/pages/MainLayoutView";
import { Stack } from "@mui/material";

function ExampleLayout() {
  return (
    <MainLayout>
      <Stack justifyContent={"center"} alignItems={"center"}>
        ExampleLayout
      </Stack>
    </MainLayout>
  );
}

export default ExampleLayout;
