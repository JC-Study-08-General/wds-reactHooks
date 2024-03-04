import { Box, Link, List, ListItem, Stack, Typography } from "@mui/material";
import React from "react";
import MainLayout from "../../_mainLayout/pages/MainLayoutView";
import { CopyBlock, dracula } from "react-code-blocks";

function ExampleCustomHook() {
  <MainLayout>
    <Stack alignItems={"center"} sx={{ height: "calc(100dvh - 35px)", overflowY: "auto" }}>
      <Link href="https://www.google.co.uk/" target="_blank">
        <Typography variant="h2">Reference Custom Hooks</Typography>
      </Link>
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
          </Stack>
          <Link href="https://www.google.co.uk/" target="_blank">
            <Typography variant="h6" align="center">
              WDS Video on this Hook
            </Typography>
          </Link>
        </Box>
        <Box sx={{ margin: 5 }}>
          <CopyBlock
            text={``}
            language={"javascript"}
            showLineNumbers={false}
            theme={dracula}
            codeBlock
            style={{ height: "1000px" }}
          />
        </Box>
      </Stack>
    </Stack>
  </MainLayout>;
}

export default ExampleCustomHook;
