import { Box, Button, List, ListItem, Stack, TextField, Typography } from "@mui/material";
import React, { useState, useEffect, useCallback } from "react";
import MainLayout from "../../_mainLayout/pages/MainLayoutView";

function ExampleCallback() {
  const [something, setSomething] = useState(1);
  const [dark, setDark] = useState(false);

  const example = useCallback(() => {
    return [something, something + 1, something + 2];
  }, [something]);

  return (
    <MainLayout>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <a href="https://react.dev/reference/react/useCallback" target="_blank" rel="noreferrer">
          <Typography variant="h2">Reference useCallback</Typography>
        </a>
        <Box sx={{ maxWidth: 800, margin: 2, backgroundColor: "bisque", padding: 7, borderRadius: 15 }}>
          <List sx={{ listStyleType: "disc" }}>
            <ListItem sx={{ display: "list-item" }}>The same as useMemo, most occasion use useMemo.</ListItem>
            <ListItem sx={{ display: "list-item" }}>Has to have a depency array.</ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Caches the reference of the previous state and will only run if the reference has changed!!
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              The difference to useMemo is useCallback returns the entire function!!!
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <span style={{ fontWeight: "bold" }}>Referential Equality: </span>Only runs if the reference has changed.
            </ListItem>
          </List>
        </Box>
        <Stack alignItems={"center"} sx={{ backgroundColor: "lightblue", padding: 8, borderRadius: 15 }}>
          <TextField
            type="number"
            label="something"
            variant="outlined"
            value={something}
            onChange={(e) => setSomething(parseInt(e.target.value))}
          />
          <Stack direction={"row"} alignItems={"center"} gap={5} sx={{ marginTop: 5 }}>
            <Button variant="contained" color={dark ? "primary" : "success"} onClick={() => setDark((d) => !d)}>
              Example
            </Button>
          </Stack>
          <Box sx={{ marginTop: 5 }}>
            <ListExample getItems={example} />
          </Box>
        </Stack>
      </Stack>
    </MainLayout>
  );
}

function ListExample({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("List has Ran.....");
    setItems(getItems());
  }, [getItems]);

  return items.map((i) => <Box key={i}>{i}</Box>);
}

export default ExampleCallback;
