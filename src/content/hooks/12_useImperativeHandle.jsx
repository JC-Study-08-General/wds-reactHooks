import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import React from "react";
import MainLayout from "../../_mainLayout/pages/MainLayoutView";

function ExampleImperative() {
  return (
    <MainLayout>
      <Stack alignItems={"center"} sx={{ height: "calc(100dvh - 35px)", overflowY: "auto" }}>
        <a href="https://react.dev/reference/react/useImperativeHandle" target="_blank" rel="noreferrer">
          <Typography variant="h2">Reference useImperativeHandle</Typography>
        </a>
        <Box sx={{ width: "100%", margin: 2, backgroundColor: "bisque", padding: 7, borderRadius: 15 }}>
          <List sx={{ listStyleType: "disc" }}>
            <ListItem sx={{ display: "list-item" }}>This is used to bind 'ref' to custom elements.</ListItem>
          </List>
        </Box>
        <Stack
          alignItems={"center"}
          sx={{ width: "100%", margin: 2, backgroundColor: "lightblue", padding: 7, borderRadius: 15 }}
        >
          <Typography variant="h6" sx={{ marginBottom: 5 }}>
            I have written an example here, just watch the{" "}
            <a href="https://youtu.be/zpEyAOkytkU?si=X-Z2Z6HmJu4V6x1t" rel="noreferrer" target="_blank">
              video
            </a>{" "}
            instead.
          </Typography>
        </Stack>
      </Stack>
    </MainLayout>
  );
}
export default ExampleImperative;
