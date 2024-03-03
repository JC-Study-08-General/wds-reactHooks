import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import React, { useDebugValue, useState } from "react";
import MainLayout from "../../_mainLayout/pages/MainLayoutView";

function ExampleDebug() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useCustomName();

  return (
    <MainLayout>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <a href="https://react.dev/reference/react/useDebugValue" target="_blank" rel="noreferrer">
          <Typography variant="h2">Reference useDebugValue</Typography>
        </a>
        <Box sx={{ maxWidth: 800, margin: 2, backgroundColor: "bisque", padding: 7, borderRadius: 15 }}>
          <List sx={{ listStyleType: "disc" }}>
            <ListItem sx={{ display: "list-item" }}>Can only be used with 'custom hooks'.</ListItem>
            <ListItem sx={{ display: "list-item" }}>
              It is used to display the value inside a custom hook in the dev tools.
            </ListItem>
          </List>
        </Box>
        <Stack alignItems={"center"} sx={{ backgroundColor: "lightblue", padding: 8, borderRadius: 15 }}>
          <Box>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </Box>
          <Box>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </Box>
        </Stack>
      </Stack>
    </MainLayout>
  );
}

function useCustomName(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  // You will be able to see whatever you put here at the top level of the debug tools
  useDebugValue(value);

  return [value, setValue];
}

export default ExampleDebug;
