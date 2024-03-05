import { Box, Button, Link, List, ListItem, Stack, TextField, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import MainLayout from "../../_mainLayout/pages/MainLayoutView";

function ExampleMemo() {
  const [something, setSomething] = useState(0);
  const [dark, setDark] = useState(false);
  const somethingDoubled = useMemo(() => {
    return example(something);
  }, [something]);

  function example(num) {
    for (let i = 0; i < 100000000; i++) {}
    return num * 2;
  }
  return (
    <MainLayout>
      <Stack alignItems={"center"} sx={{ height: "calc(100dvh - 35px)", overflowY: "auto" }}>
        <Link href="https://react.dev/reference/react/useMemo" target="_blank">
          <Typography variant="h2">Reference useMemo</Typography>
        </Link>
        <Stack direction={"row"}>
          <Box>
            <Box
              sx={{
                width: "100%",
                maxWidth: "40dvw",
                margin: 2,
                backgroundColor: "bisque",
                padding: 7,
                borderRadius: 15,
              }}
            >
              <List sx={{ listStyleType: "disc" }}>
                <ListItem sx={{ display: "list-item" }}>Has to have a depency array.</ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  Caches the reference of the previous state and will only run if the reference has changed!!
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  If you have a slow function wrap in usememo to make sure it is only ran when need.
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  <span style={{ fontWeight: "bold" }}>Referential Equality: </span>Only runs if the reference has
                  changed.
                </ListItem>
              </List>
            </Box>
            <Stack
              alignItems={"center"}
              sx={{
                width: "100%",
                maxWidth: "40dvw",
                margin: 2,
                backgroundColor: "lightblue",
                padding: 7,
                borderRadius: 15,
              }}
            >
              <TextField
                type="number"
                label="something"
                variant="outlined"
                onChange={(e) => setSomething(parseInt(e.target.value))}
              />
              <Typography variant="h6" sx={{ marginBottom: 5, color: dark ? "black" : "firebrick" }}>
                Example - {somethingDoubled}
              </Typography>
              <Stack direction={"row"} alignItems={"center"} gap={5}>
                <Button variant="contained" onClick={() => setDark((d) => !d)}>
                  Example
                </Button>
              </Stack>
            </Stack>
            <Link href="https://youtu.be/THL1OPn72vo?si=hLxu5Yl_fJNENdSf" target="_blank">
              <Typography variant="h6" align="center">
                WDS Video on this Hook
              </Typography>
            </Link>
          </Box>
          <Box sx={{ margin: 5 }}>
            <CopyBlock
              text={`import React, { useMemo, useState } from "react";

function ExampleUseMemo() {
  const [something, setSomething] = useState(0);
  const [dark, setDark] = useState(false);
  const somethingDoubled = useMemo(() => {
    return example(something);
  }, [something]);

  function example(num) {
    for (let i = 0; i < 100000000; i++) {}
    return num * 2;
  }
  return (
    <Stack alignItems={"center"} sx={{ width: "100%", maxWidth: "40dvw", margin: 2, backgroundColor: "lightblue", padding: 7, borderRadius: 15 }}>
      <TextField
        type="number"
        label="something"
        variant="outlined"
        onChange={(e) => setSomething(parseInt(e.target.value))}
      />
      <Typography variant="h6" sx={{ marginBottom: 5, color: dark ? "black" : "firebrick" }}>
        Example - {somethingDoubled}
      </Typography>
      <Stack direction={"row"} alignItems={"center"} gap={5}>
        <Button variant="contained" onClick={() => setDark((d) => !d)}>
          Example
        </Button>
      </Stack>
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

export default ExampleMemo;
