import { Box, Button, Link, List, ListItem, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import MainLayout from "../../_mainLayout/pages/MainLayoutView";

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
      <Stack alignItems={"center"} sx={{ height: "calc(100dvh - 35px)", overflowY: "auto" }}>
        <Link href="https://react.dev/reference/react/useRef" target="_blank">
          <Typography variant="h2">Reference useRef</Typography>
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
                  <span style={{ fontWeight: "bold", color: "firebrick" }}>Import: </span> DO NOT destructure the
                  setting of useRef, because it returns a single object containing 'current'.
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
            <Link href="https://youtu.be/t2ypzz6gJm0?si=vvp1SrBj9mxxtLRE" target="_blank">
              <Typography variant="h6" align="center">
                WDS Video on this Hook
              </Typography>
            </Link>
          </Box>
          <Box sx={{ margin: 5 }}>
            <CopyBlock
              text={`import React, { useEffect, useRef, useState } from "react";

function ExampleUseRef() {
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
    <Stack alignItems={"center"} sx={{ width: "100%", maxWidth: "40dvw", margin: 2, backgroundColor: "lightblue", padding: 7, borderRadius: 15 }}>
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

export default ExampleRef;
