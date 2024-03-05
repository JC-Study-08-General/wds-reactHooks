import { Box, Button, Link, List, ListItem, Stack, Typography } from "@mui/material";
import React, { useLayoutEffect, useRef, useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import MainLayout from "../../_mainLayout/pages/MainLayoutView";

function ExampleLayout() {
  const [show, setShow] = useState(false);
  const popup = useRef();
  const btn = useRef();

  // useEffect(() => {
  useLayoutEffect(() => {
    if (popup.current == null || btn.current == null) return;
    const { b } = btn.current.getBoundingClientRect();
    popup.current.style.top = `${b + 25}px`;
  }, [show]);

  return (
    <MainLayout>
      <Stack alignItems={"center"} sx={{ height: "calc(100dvh - 35px)", overflowY: "auto" }}>
        <Link href="https://react.dev/reference/react/useLayoutEffect" target="_blank">
          <Typography variant="h2">Reference useLayoutEffect</Typography>
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
                <ListItem sx={{ display: "list-item" }}>useLayoutEffect is an alternative to useEffect</ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  'useLayoutEffect' runs synchronously, where as 'useEffect' runs asynchronously
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  'useLayoutEffect' is used when the structure of the DOM is effected by the state change, as it will
                  draw the DOM first and then insert the values/data.
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  helps prevent strange resizing behoviour in the DOM as it loads.
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
              <Stack direction={"column"} alignItems={"center"} gap={5}>
                <Button variant="contained" ref={btn} onClick={() => setShow((p) => !p)}>
                  Example
                </Button>
                {show && (
                  <Typography variant="h6" ref={popup} sx={{ marginBottom: 5 }}>
                    Example - I am here
                  </Typography>
                )}
              </Stack>
            </Stack>
            <Link href="https://youtu.be/wU57kvYOxT4?si=_L6RuRT9GZpM7nuD" target="_blank">
              <Typography variant="h6" align="center">
                WDS Video on this Hook
              </Typography>
            </Link>
          </Box>
          <Box sx={{ margin: 5 }}>
            <CopyBlock
              text={`import React, { useLayoutEffect, useRef, useState } from "react";

function ExampleUseLayoutEffect() {
  const [show, setShow] = useState(false);
  const popup = useRef();
  const btn = useRef();

  // useEffect(() => {
  useLayoutEffect(() => {
    if (popup.current == null || btn.current == null) return;
    const { b } = btn.current.getBoundingClientRect();
    popup.current.style.top = \`\${b + 25}px\`;
  }, [show]);

  return (
    <Stack alignItems={"center"} sx={{ width: "100%", maxWidth: "40dvw", margin: 2, backgroundColor: "lightblue", padding: 7, borderRadius: 15 }}>
      <Stack direction={"column"} alignItems={"center"} gap={5}>
        <Button variant="contained" ref={btn} onClick={() => setShow((p) => !p)}>
          Example
        </Button>
        {show && (
          <Typography variant="h6" ref={popup} sx={{ marginBottom: 5 }}>
            Example - I am here
          </Typography>
        )}
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

export default ExampleLayout;
