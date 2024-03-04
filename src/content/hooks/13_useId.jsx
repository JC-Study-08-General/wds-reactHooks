import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import React, { useId } from "react";
import MainLayout from "../../_mainLayout/pages/MainLayoutView";
import { CopyBlock, dracula } from "react-code-blocks";

function ExampleId() {
  return (
    <MainLayout>
      <Stack alignItems={"center"} sx={{ height: "calc(100dvh - 35px)", overflowY: "auto" }}>
        <a href="https://react.dev/reference/react/useId" target="_blank" rel="noreferrer">
          <Typography variant="h2">Reference useId</Typography>
        </a>
        <Stack direction={"row"}>
          <Box>
            <Box sx={{ width: "100%", margin: 2, backgroundColor: "bisque", padding: 7, borderRadius: 15 }}>
              <List sx={{ listStyleType: "disc" }}>
                <ListItem sx={{ display: "list-item" }}>Used to unique id's to custom components</ListItem>
              </List>
            </Box>
            <Stack
              alignItems={"center"}
              sx={{ width: "100%", margin: 2, backgroundColor: "lightblue", padding: 7, borderRadius: 15 }}
            >
              <Typography variant="h6" sx={{ marginBottom: 5 }}>
                Example - connecting ids to custom elements
              </Typography>
              <InputExample />
              <InputExample />
            </Stack>
            <a href="https://youtu.be/_vwCKV7f_eA?si=SMB6_BYbKtGvpkC5" target="_blank" rel="noreferrer">
              <Typography variant="h6" align="center">
                WDS Video on this Hook
              </Typography>
            </a>
          </Box>
          <Box sx={{ margin: 5 }}>
            <CopyBlock
              text={`import React, { useId } from "react";

  return (
    <Stack alignItems={"center"} sx={{ width: "100%", margin: 2, backgroundColor: "lightblue", padding: 7, borderRadius: 15 }}>
                <Typography variant="h6" sx={{ marginBottom: 5 }}>
                  Example - connecting ids to custom elements
                </Typography>
                <InputExample />
                <InputExample />
              </Stack>
  )
}

function InputExample() {
  const id = useId();
  return (
    <>
      <label for={\`\${id}-email\`}>email</label>
      <input id={\`\${id}-email\`} type="email" />
      <label for={\`\${id}-name\`}>name</label>
      <input id={\`\${id}-name\`} type="text" />
    </>
  );
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

function InputExample() {
  const id = useId();
  return (
    <>
      <label for={`${id}-email`}>email</label>
      <input id={`${id}-email`} type="email" />
      <label for={`${id}-name`}>name</label>
      <input id={`${id}-name`} type="text" />
    </>
  );
}

export default ExampleId;
