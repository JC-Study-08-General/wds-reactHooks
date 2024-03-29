import { Box, Button, Link, List, ListItem, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import MainLayout from "../../_mainLayout/pages/MainLayoutView";

function ExampleEffect() {
  const [timer, setTimer] = useState(0);
  const [choice, setChoice] = useState("first");

  useEffect(() => {
    const interval = setTimeout(() => {
      setTimer(timer + 1);
    }, 1000);

    return () => {
      clearTimeout(interval);
    };
  }, [timer]);

  // 3 Examples to see how it effects useEffect
  // Example 1
  useEffect(() => {
    console.log("No arg");
    return console.log("No arg cleanup");
  });
  // Example 2
  useEffect(() => {
    console.log("Empty arg");
    return console.log("Empty arg cleanup");
  }, []);
  // Example 3
  useEffect(() => {
    console.log("Choice arg");
    return console.log("Choice arg cleanup");
  }, [choice]);

  return (
    <MainLayout>
      <Stack alignItems={"center"} sx={{ height: "calc(100dvh - 35px)", overflowY: "auto" }}>
        <Link href="https://react.dev/reference/react/useEffect" target="_blank">
          <Typography variant="h2">Reference useEffect</Typography>
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
                  <span style={{ fontWeight: "bold" }}>Use useEffect when? </span> When page loads, Whenever something
                  changes and you want to have something happen in respect to that.
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  When you change the resource type it triggers a 'side effect'.
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  Second paramter on the useEffect controls when the hook runs i.e. only when the state changes this
                  will run.
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  <span style={{ fontWeight: "bold" }}>ComponentDidMount: </span> The eqivelant in hooks is to put an '[
                  ]' as the second argument of the useEffect.
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  <span style={{ fontWeight: "bold" }}>ComponentUnMount: </span> Put a return function in the useEffect
                  and this carryout 'CleanUp'.
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
              <Typography variant="h6" sx={{ marginBottom: 5 }}>
                Timer - {timer}
              </Typography>
              <Typography variant="h6" sx={{ marginBottom: 5 }}>
                choice - {choice}
              </Typography>
              <Typography variant="h6" sx={{ marginBottom: 5, color: "firebrick" }}>
                Use the console to see how side effects effect the behaviour
              </Typography>
              <Stack direction={"row"} alignItems={"center"} gap={5}>
                <Button variant="contained" onClick={() => setChoice("first")}>
                  First
                </Button>
                <Button variant="contained" onClick={() => setChoice("second")}>
                  Second
                </Button>
                <Button variant="contained" onClick={() => setChoice("third")}>
                  Third
                </Button>
              </Stack>
            </Stack>
            <Link href="https://youtu.be/0ZJgIjIuY7U?si=wmOm3uu23JYkVpQ6" target="_blank">
              <Typography variant="h6" align="center">
                WDS Video on this Hook
              </Typography>
            </Link>
          </Box>
          <Box sx={{ margin: 5 }}>
            <CopyBlock
              text={`import React, { useEffect, useState } from "react";

function ExampleUseEffect() {
  const [choice, setChoice] = useState("first");
  
  useEffect(() => {
    console.log("No arg");
    return console.log("No arg cleanup");
  });
  // Example 2
  useEffect(() => {
    console.log("Empty arg");
    return console.log("Empty arg cleanup");
  }, []);
  // Example 3
  useEffect(() => {
    console.log("Choice arg");
    return console.log("Choice arg cleanup");
  }, [choice]);
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

export default ExampleEffect;
