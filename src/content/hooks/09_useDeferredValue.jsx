import { Box, Link, List, ListItem, Stack, Typography } from "@mui/material";
import React, { useDeferredValue, useMemo, useState } from "react";
import MainLayout from "../../_mainLayout/pages/MainLayoutView";
import { CopyBlock, dracula } from "react-code-blocks";

function ExampleDeferred() {
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }
  return (
    <MainLayout>
      <Stack alignItems={"center"} sx={{ height: "calc(100dvh - 35px)", overflowY: "auto" }}>
        <Link href="https://react.dev/reference/react/useDeferredValue" target="_blank">
          <Typography variant="h2">Reference useDeferredValue</Typography>
        </Link>
        <Stack direction={"row"}>
          <Box>
            <Box sx={{ width: "100%", margin: 2, backgroundColor: "bisque", padding: 7, borderRadius: 15 }}>
              <List sx={{ listStyleType: "disc" }}>
                <ListItem sx={{ display: "list-item" }}>Used to for slow apps, but use sparingly</ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  Waits for a pause on the input before updating the state
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  useDeferredValue replaces a 'throttling' or 'debounce' implementation
                </ListItem>
              </List>
            </Box>
            <Stack
              alignItems={"center"}
              sx={{ width: "100%", margin: 2, backgroundColor: "lightblue", padding: 7, borderRadius: 15 }}
            >
              <input type="text" value={input} onChange={handleChange} />
              <ListExample input={input} />
            </Stack>
            <Link href="https://youtu.be/jCGMedd6IWA?si=U2kjW51e6SThblcC" target="_blank">
              <Typography variant="h6" align="center">
                WDS Video on this Hook
              </Typography>
            </Link>
          </Box>
          <Box sx={{ margin: 5 }}>
            <CopyBlock
              text={`import React, { useDeferredValue, useMemo, useState } from "react";

function ExampleUseDeferredValue() {
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <Stack alignItems={"center"} sx={{ width: "100%", margin: 2, backgroundColor: "lightblue", padding: 7, borderRadius: 15 }}>
      <input type="text" value={input} onChange={handleChange} />
      <ListExample input={input} />
    </Stack>
  )
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
`}
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
