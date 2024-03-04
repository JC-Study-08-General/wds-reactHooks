import { Box, Button, List, ListItem, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import MainLayout from "../../_mainLayout/pages/MainLayoutView";
import { CopyBlock, dracula } from "react-code-blocks";

function ExampleState() {
  // *** Basic Example ***
  // const [count, setCount] = useState(0);
  // *** Example where initalised only on first page load ***
  // const [count, setCount] = useState(() => 0);
  // *** Exampe of object in state ***
  const [stateObj, setStateObj] = useState({ count: 0, text: "textInState" });

  function increaseCount() {
    // setCount((preCount) => (preCount += 1));
    setStateObj((preState) => {
      return { ...preState, count: preState.count + 1 };
    });
  }

  function decreaseCount() {
    // setCount((preCount) => (preCount -= 1));
    setStateObj((preState) => {
      return {
        ...preState,
        count: preState.count - 1,
        text: preState.text === "textInState" ? "SomeNewTextInState" : "textInState",
      };
    });
  }

  return (
    <MainLayout>
      <Stack alignItems={"center"} sx={{ height: "calc(100dvh - 35px)", overflowY: "auto" }}>
        <a href="https://react.dev/reference/react/useState" target="_blank" rel="noreferrer">
          <Typography variant="h2">Reference useState</Typography>
        </a>
        <Stack direction={"row"}>
          <Box>
            <Box sx={{ width: "100%", margin: 2, backgroundColor: "bisque", padding: 7, borderRadius: 15 }}>
              <List sx={{ listStyleType: "disc" }}>
                <ListItem sx={{ display: "list-item" }}>
                  <span style={{ fontWeight: "bold" }}>Intailising state: </span>if use a function this will only run on
                  page load.
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  When updating state value use a function that passes the current state in.
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  If you want to mutate an object you need to spread it in the update function.
                </ListItem>
              </List>
            </Box>
            <Stack
              alignItems={"center"}
              sx={{ width: "100%", margin: 2, backgroundColor: "lightblue", padding: 7, borderRadius: 15 }}
            >
              <Typography variant="h6" sx={{ marginBottom: 5 }}>
                Example - {stateObj.text}
              </Typography>
              <Stack direction={"row"} alignItems={"center"} gap={5}>
                <Button variant="contained" onClick={decreaseCount} disabled={!stateObj.count}>
                  -
                </Button>
                {/* <Typography>{count}</Typography> */}
                <Typography>{stateObj.count}</Typography>
                <Button variant="contained" onClick={increaseCount}>
                  +
                </Button>
              </Stack>
            </Stack>
            <a href="https://youtu.be/O6P86uwfdR0?si=YVeeH026bzh-Vbcm" target="_blank" rel="noreferrer">
              <Typography variant="h6" align="center">
                WDS Video on this Hook
              </Typography>
            </a>
          </Box>
          <Box sx={{ margin: 5 }}>
            <CopyBlock
              text={`import { useState } from "react";

function ExampleUseState() {
  // const [count, setCount] = useState(0);  
  // working with objects
  const [stateObj, setStateObj] = useState({ count: 0, text: "textInState" });

  function increaseCount() {
    // setCount((preCount) => (preCount += 1));
    setStateObj((preState) => {
      return { ...preState, count: preState.count + 1 };
    });
  }

  function decreaseCount() {
    // setCount((preCount) => (preCount -= 1));
    setStateObj((preState) => {
      return {
        ...preState,
        count: preState.count - 1,
        text: preState.text === "textInState" ? "SomeNewTextInState" : "textInState",
      };
    });
  }

  return (
    <Stack alignItems={"center"} sx={{ width: "100%", margin: 2, backgroundColor: "lightblue", padding: 7, borderRadius: 15 }}>
      <Typography variant="h6" sx={{ marginBottom: 5 }}>
        Example - {stateObj.text}
      </Typography>
      <Stack direction={"row"} alignItems={"center"} gap={5}>
        <Button variant="contained" onClick={decreaseCount} disabled={!stateObj.count}>
          -
        </Button>
        {/* <Typography>{count}</Typography> */}
        <Typography>{stateObj.count}</Typography>
        <Button variant="contained" onClick={increaseCount}>
          +
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

export default ExampleState;
