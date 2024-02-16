import React from "react";
import MainLayout from "../_mainLayout/pages/MainLayoutView";
import { Stack } from "@mui/material";

function ExampleState() {
  return (
    <MainLayout>
      <Stack justifyContent={"center"} alignItems={"center"}>
        ExampleState
      </Stack>
    </MainLayout>
  );
}

export default ExampleState;
