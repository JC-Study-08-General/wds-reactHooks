import { Box, Button, Link, List, ListItem, Stack, TextField, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import MainLayout from "../../_mainLayout/pages/MainLayoutView";

function ExampleCallback() {
  const [something, setSomething] = useState(1);
  const [dark, setDark] = useState(false);

  const example = useCallback(() => {
    return [something, something + 1, something + 2];
  }, [something]);

  return (
    <MainLayout>
      <Stack alignItems={"center"} sx={{ height: "calc(100dvh - 35px)", overflowY: "auto" }}>
        <Link href="https://react.dev/reference/react/useCallback" target="_blank">
          <Typography variant="h2">Reference useCallback</Typography>
        </Link>
        <Stack direction={"row"}>
          <Box>
            <Box sx={{ width: "100%", margin: 2, backgroundColor: "bisque", padding: 7, borderRadius: 15 }}>
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
                  <span style={{ fontWeight: "bold" }}>Referential Equality: </span>Only runs if the reference has
                  changed.
                </ListItem>
              </List>
            </Box>
            <Stack
              alignItems={"center"}
              sx={{ width: "100%", margin: 2, backgroundColor: "lightblue", padding: 7, borderRadius: 15 }}
            >
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
            <Link href="https://youtu.be/_AyFP5s69N4?si=l48zCYaDPdtESTRB" target="_blank">
              <Typography variant="h6" align="center">
                WDS Video on this Hook
              </Typography>
            </Link>
          </Box>
          <Box sx={{ margin: 5 }}>
            <CopyBlock
              text={`import React, { useState, useEffect, useCallback } from "react";

function ExampleUseCallback() {
  const [something, setSomething] = useState(1);
  const [dark, setDark] = useState(false);

  const example = useCallback(() => {
    return [something, something + 1, something + 2];
  }, [something]);

  return (
    <Stack alignItems={"center"} sx={{ width: "100%", margin: 2, backgroundColor: "lightblue", padding: 7, borderRadius: 15 }}>
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
  )
}`}
              language={"javascript"}
              showLineNumbers={false}
              theme={dracula}
              codeBlock
              style={{ height: "1000px" }}
            />
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
