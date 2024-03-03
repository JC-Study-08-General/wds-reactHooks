import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import React, { useDeferredValue, useMemo, useState } from "react";
import MainLayout from "../_mainLayout/pages/MainLayoutView";

function ExampleDeferred() {
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }
  return (
    <MainLayout>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <a href="https://react.dev/reference/react/useDeferredValue" target="_blank" rel="noreferrer">
          <Typography variant="h2">Reference useDeferredValue</Typography>
        </a>
        <Box sx={{ maxWidth: 800, margin: 2, backgroundColor: "bisque", padding: 7, borderRadius: 15 }}>
          <List sx={{ listStyleType: "disc" }}>
            <ListItem sx={{ display: "list-item" }}>Used to for slow apps, but use sparingly</ListItem>
            <ListItem sx={{ display: "list-item" }}>Waits for a pause on the input before updating the state</ListItem>
            <ListItem sx={{ display: "list-item" }}>
              useDeferredValue replaces a 'throttling' or 'debounce' implementation
            </ListItem>
          </List>
        </Box>
        <Stack alignItems={"center"} sx={{ backgroundColor: "lightblue", padding: 8, borderRadius: 15 }}>
          <input type="text" value={input} onChange={handleChange} />
          <ListExample input={input} />
        </Stack>
      </Stack>
    </MainLayout>
  );
}

function ListExample({ input }) {
  const deferredInput = useDeferredValue(input);
  const LIST_SIZE = 20000;
  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<Box key={i}>{deferredInput}</Box>);
    }
    return l;
  }, [deferredInput]);

  return list;
}

export default ExampleDeferred;
