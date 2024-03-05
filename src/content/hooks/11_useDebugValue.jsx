import { Box, Link, List, ListItem, Stack, Typography } from "@mui/material";
import React, { useDebugValue, useState } from "react";
import MainLayout from "../../_mainLayout/pages/MainLayoutView";
import { CopyBlock, dracula } from "react-code-blocks";

function ExampleDebug() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useCustomName();

  return (
    <MainLayout>
      <Stack alignItems={"center"} sx={{ height: "calc(100dvh - 35px)", overflowY: "auto" }}>
        <Link href="https://react.dev/reference/react/useDebugValue" target="_blank">
          <Typography variant="h2">Reference useDebugValue</Typography>
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
                <ListItem sx={{ display: "list-item" }}>Can only be used with 'custom hooks'.</ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  It is used to display the value inside a custom hook in the dev tools.
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
              <Box>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </Box>
              <Box>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </Box>
            </Stack>
            <Link href="https://youtu.be/pTF86K8JZBQ?si=39EWZ137Rd1xxwia" target="_blank">
              <Typography variant="h6" align="center">
                WDS Video on this Hook
              </Typography>
            </Link>
          </Box>
          <Box sx={{ margin: 5 }}>
            <CopyBlock
              text={`import React, { useDebugValue, useState } from "react";

function ExampleUseDebugValue() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useCustomName();

  return (
    <Stack alignItems={"center"} sx={{ width: "100%", maxWidth: "40dvw", margin: 2, backgroundColor: "lightblue", padding: 7, borderRadius: 15 }}>
      <Box>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </Box>
      <Box>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </Box>
    </Stack>
  )
}

function useCustomName(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  // You will be able to see whatever you put here at the top level of the debug tools
  useDebugValue(value);

  return [value, setValue];
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

function useCustomName(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  // You will be able to see whatever you put here at the top level of the debug tools
  useDebugValue(value);

  return [value, setValue];
}

export default ExampleDebug;
