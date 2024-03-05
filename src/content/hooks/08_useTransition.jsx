import { Box, Link, List, ListItem, Stack, Typography } from "@mui/material";
import React, { useState, useTransition } from "react";
import MainLayout from "../../_mainLayout/pages/MainLayoutView";
import { CopyBlock, dracula } from "react-code-blocks";

function ExampleTransition() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const LIST_SIZE = 20000;

  function handleChange(e) {
    setInput(e.target.value);
    startTransition(() => {
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  }
  return (
    <MainLayout>
      <Stack alignItems={"center"} sx={{ height: "calc(100dvh - 35px)", overflowY: "auto" }}>
        <Link href="https://react.dev/reference/react/useTransition" target="_blank">
          <Typography variant="h2">Reference useTransition</Typography>
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
                <ListItem sx={{ display: "list-item" }}>Used to for slow apps, but use sparingly</ListItem>
                <ListItem sx={{ display: "list-item" }}>Used to prioritise when state changes</ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  useTransition destructure 'isPending' and 'startTransition'
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
              <input type="text" value={input} onChange={handleChange} />
              {isPending ? (
                <Typography>Loading.....</Typography>
              ) : (
                list.map((l, i) => {
                  return <Box key={i}>{l}</Box>;
                })
              )}
            </Stack>
            <Link href="https://youtu.be/N5R6NL3UE7I?si=FVRQnRA3hm-Rx3bz" target="_blank">
              <Typography variant="h6" align="center">
                WDS Video on this Hook
              </Typography>
            </Link>
          </Box>
          <Box sx={{ margin: 5 }}>
            <CopyBlock
              text={`import React, { useState, useTransition } from "react";

function ExampleUseTransition() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const LIST_SIZE = 20000;

  function handleChange(e) {
    setInput(e.target.value);
    startTransition(() => {
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  }
  return (
    <Stack alignItems={"center"} sx={{ width: "100%", maxWidth: "40dvw", margin: 2, backgroundColor: "lightblue", padding: 7, borderRadius: 15 }}>
      <input type="text" value={input} onChange={handleChange} />
      {isPending ? (
        <Typography>Loading.....</Typography>
      ) : (
        list.map((l, i) => {
          return <Box key={i}>{l}</Box>;
        })
      )}
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

export default ExampleTransition;
