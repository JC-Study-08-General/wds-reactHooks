import React from "react";
import MainLayout from "../_mainLayout/pages/MainLayoutView";
import { Stack, Typography } from "@mui/material";

function CustomPage() {
  return (
    <MainLayout>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Typography variant="h1">Web Dev Simplified</Typography>
        <a href="https://courses.webdevsimplified.com/react-hooks-simplified" target="_blank" rel="noreferrer">
          <img
            src="https://d31ezp3r8jwmks.cloudfront.net/cb1lx5xrxaso2yhpiwr87ru2jimx"
            alt="wds"
            height={200}
            style={{ margin: "50px" }}
          />
        </a>
        <Typography variant="h3">React Hooks Course</Typography>
      </Stack>
    </MainLayout>
  );
}

export default CustomPage;
