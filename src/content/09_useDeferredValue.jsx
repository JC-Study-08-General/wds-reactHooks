import { Box, Button, List, ListItem, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import MainLayout from "../_mainLayout/pages/MainLayoutView";

function ExampleDeferred() {
  const [something, setSomething] = useState(null);

  function example() {
    setSomething("example");
  }
  return (
    <MainLayout>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <a href="https://react.dev/reference/react/useDeferredValue" target="_blank" rel="noreferrer">
          <Typography variant="h2">Reference useDeferredValue</Typography>
        </a>
        <Box sx={{ maxWidth: 800, margin: 2, backgroundColor: "bisque", padding: 7, borderRadius: 15 }}>
          <List sx={{ listStyleType: "disc" }}>
            <ListItem sx={{ display: "list-item" }}>
              <span style={{ fontWeight: "bold" }}>Example: </span> Example.
            </ListItem>
          </List>
        </Box>
        <Stack alignItems={"center"} sx={{ backgroundColor: "lightblue", padding: 8, borderRadius: 15 }}>
          <Typography variant="h6" sx={{ marginBottom: 5 }}>
            Example - {something}
          </Typography>
          <Stack direction={"row"} alignItems={"center"} gap={5}>
            <Button variant="contained" onClick={() => example}>
              Example
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </MainLayout>
  );
}

export default ExampleDeferred;
