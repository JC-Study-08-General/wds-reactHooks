import React from "react";
import MainLayout from "../_mainLayout/pages/MainLayoutView";
import { Stack } from "@mui/material";

function ExampleContext() {
  return (
    <MainLayout>
      <Stack justifyContent={"center"} alignItems={"center"}>
        ExampleContext
      </Stack>
    </MainLayout>
  );
}

export default ExampleContext;
