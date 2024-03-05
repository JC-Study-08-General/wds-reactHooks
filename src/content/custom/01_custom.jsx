import { Box, Button, Link, List, ListItem, Stack, Typography } from "@mui/material";
import React from "react";
import MainLayout from "../../_mainLayout/pages/MainLayoutView";
import { CopyBlock, dracula } from "react-code-blocks";
import useToggle from "../../_custom/useToggle";

function ExampleCustomHook() {
  const [toggle, toggleState] = useToggle(false);
  return (
    <MainLayout>
      <Stack alignItems={"center"} sx={{ height: "calc(100dvh - 35px)", overflowY: "auto" }}>
        <Link href="https://www.google.co.uk/" target="_blank">
          <Typography variant="h2">Reference Custom Hooks</Typography>
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
                <ListItem sx={{ display: "list-item" }}>Create a custom hook when using in multiple places.</ListItem>
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
                Example - {toggle.toString()}
              </Typography>
              <Stack direction={"row"} justifyContent={"space-between"} sx={{ minWidth: "20vw" }}>
                <Button variant="contained" onClick={toggleState}>
                  Toggle
                </Button>
                <Button variant="contained" onClick={() => toggleState(false)} disabled={!toggle}>
                  Set To False
                </Button>
                <Button variant="contained" onClick={() => toggleState(true)} disabled={toggle}>
                  Set To True
                </Button>
              </Stack>
            </Stack>
            <Link href="https://www.google.co.uk/" target="_blank">
              <Typography variant="h6" align="center">
                WDS Video on this Hook
              </Typography>
            </Link>
          </Box>
          <Box sx={{ margin: 5 }}>
            <CopyBlock
              text={`
import { useState } from "react";

export default function useToggle(defaultToggle) {
  const [toggle, setToggle] = useState(defaultToggle);

  function toggleState(toggle) {
    setToggle((currentToggle) => (typeof toggle === "boolean" ? toggle : !currentToggle));
  }

  return [toggle, toggleState];
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

export default ExampleCustomHook;
