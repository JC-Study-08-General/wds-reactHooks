import React from "react";
import MainLayout from "../_mainLayout/pages/MainLayoutView";
import { Stack } from "@mui/material";

function ExampleCallback() {
  return (
    <MainLayout>
      <Stack justifyContent={"center"} alignItems={"center"}>
        ExampleCallback
      </Stack>
    </MainLayout>
  );
}

export default ExampleCallback;
