import { Box, Button, List, ListItem, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import MainLayout from "../_mainLayout/pages/MainLayoutView";

function ExampleRef() {
  const [something, setSomething] = useState(null);
  const inputRef = useRef("");
  const prevSomething = useRef("");

  function example() {
    inputRef.current.focus();
  }

  useEffect(() => {
    prevSomething.current = something;
  }, [something]);

  return (
    <MainLayout>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <a href="https://react.dev/reference/react/useRef" target="_blank" rel="noreferrer">
          <Typography variant="h2">Reference useRef</Typography>
        </a>
        <Box sx={{ maxWidth: 800, margin: 2, backgroundColor: "bisque", padding: 7, borderRadius: 15 }}>
          <List sx={{ listStyleType: "disc" }}>
            <ListItem sx={{ display: "list-item" }}>
              <span style={{ fontWeight: "bold" }}>Example: </span> Reference elements within the dom.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <span style={{ fontWeight: "bold" }}>Example: </span> Great for hold previous state of state.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <span style={{ fontWeight: "bold" }}>Example: </span> Ref do not cause the component to update when
              changed.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <span style={{ fontWeight: "bold", color: "firebrick" }}>Import: </span> DO NOT destructure the setting of
              useRef, because it returns a single object containing 'current'.
            </ListItem>
          </List>
        </Box>
        <Stack alignItems={"center"} sx={{ backgroundColor: "lightblue", padding: 8, borderRadius: 15 }}>
          <input ref={inputRef} type="text" onChange={(e) => setSomething(e.target.value)} />
          <Typography variant="h6" sx={{ marginBottom: 5 }}>
            Example - {something} and previous state was: {prevSomething.current}
          </Typography>
          <Stack direction={"row"} alignItems={"center"} gap={5}>
            <Button variant="contained" onClick={() => example()}>
              Example
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </MainLayout>
  );
}

export default ExampleRef;
