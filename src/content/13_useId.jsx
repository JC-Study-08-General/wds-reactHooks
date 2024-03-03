import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import React, { useId } from "react";
import MainLayout from "../_mainLayout/pages/MainLayoutView";

function ExampleId() {
  return (
    <MainLayout>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <a href="https://react.dev/reference/react/useId" target="_blank" rel="noreferrer">
          <Typography variant="h2">Reference useId</Typography>
        </a>
        <Box sx={{ maxWidth: 800, margin: 2, backgroundColor: "bisque", padding: 7, borderRadius: 15 }}>
          <List sx={{ listStyleType: "disc" }}>
            <ListItem sx={{ display: "list-item" }}>Used to unique id's to custom components</ListItem>
          </List>
        </Box>
        <Stack alignItems={"center"} sx={{ backgroundColor: "lightblue", padding: 8, borderRadius: 15 }}>
          <Typography variant="h6" sx={{ marginBottom: 5 }}>
            Example - connecting ids to custom elements
          </Typography>
          <InputExample />
          <InputExample />
        </Stack>
      </Stack>
    </MainLayout>
  );
}

function InputExample() {
  const id = useId();
  return (
    <>
      <label for={`${id}-email`}>email</label>
      <input id={`${id}-email`} type="email" />
      <label for={`${id}-name`}>name</label>
      <input id={`${id}-name`} type="text" />
    </>
  );
}

export default ExampleId;
