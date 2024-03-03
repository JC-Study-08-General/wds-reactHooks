import { Box, Button, List, ListItem, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import MainLayout from "../../_mainLayout/pages/MainLayoutView";
import { BasicThemeContext } from "../../App";
import { CustomThemeContext } from "../../_custom/Custom";

function ExampleContext() {
  const [basicTheme, setBasicTheme] = useContext(BasicThemeContext);
  const [customTheme, updateTheme] = useContext(CustomThemeContext);

  function exampleContext() {
    setBasicTheme((preTheme) => !preTheme);
  }

  return (
    <MainLayout>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <a href="https://react.dev/reference/react/useContext" target="_blank" rel="noreferrer">
          <Typography variant="h2">Reference useContext</Typography>
        </a>
        <Box sx={{ maxWidth: 800, margin: 1, backgroundColor: "bisque", padding: 7, borderRadius: 15 }}>
          <List sx={{ listStyleType: "disc" }}>
            <ListItem sx={{ display: "list-item" }}>
              <span style={{ fontWeight: "bold" }}>useContext: </span> is wrapper to help stop prop drilling.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <span style={{ fontWeight: "bold" }}>useContext: </span> is made of 2 parts, provide and context hook.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              On the provider you get access to one props called 'value'.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              I have put 2 examples in this, one with custom hook one without.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              It is common to use with custom hooks when using useContext.
            </ListItem>
          </List>
        </Box>
        <Stack direction={"row"}>
          <Stack
            alignItems={"center"}
            sx={{
              backgroundColor: basicTheme ? "coral" : "lightblue",
              padding: 8,
              borderRadius: 15,
              marginRight: 1,
              minWidth: 500,
            }}
          >
            <Typography variant="h6" sx={{ marginBottom: 5 }}>
              Example - {basicTheme ? "Coral" : "Blue"}
            </Typography>
            <Stack direction={"row"} alignItems={"center"} gap={5}>
              <Button variant="contained" onClick={() => exampleContext()}>
                Change
              </Button>
            </Stack>
          </Stack>
          <Stack
            alignItems={"center"}
            sx={{ backgroundColor: customTheme ? "grey" : "lightgrey", padding: 8, borderRadius: 15, minWidth: 500 }}
          >
            <Typography variant="h6" sx={{ marginBottom: 5 }}>
              Example with customhook- {customTheme ? "Dark" : "Light"}
            </Typography>
            <Stack direction={"row"} alignItems={"center"} gap={5}>
              <Button variant="contained" onClick={() => updateTheme()}>
                Change Customhook
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </MainLayout>
  );
}

export default ExampleContext;
