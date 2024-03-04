import { Box, Link, List, ListItem, Stack, Typography } from "@mui/material";
import React from "react";
import MainLayout from "../../_mainLayout/pages/MainLayoutView";
import { CopyBlock, dracula } from "react-code-blocks";

function ArraysIncludes() {
  return (
    <MainLayout>
      <Stack alignItems={"center"} sx={{ height: "calc(100dvh - 35px)", overflowY: "auto" }}>
        <Link href="https://www.w3schools.com/jsref/jsref_includes.asp" target="_blank">
          <Typography variant="h2">Reference Includes</Typography>
        </Link>
        <Stack direction={"row"}>
          <Box>
            <Box sx={{ width: "100%", margin: 2, backgroundColor: "bisque", padding: 7, borderRadius: 15 }}>
              <List sx={{ listStyleType: "disc" }}>
                <ListItem sx={{ display: "list-item" }}>Test</ListItem>
              </List>
            </Box>
            <Stack
              alignItems={"center"}
              sx={{ width: "100%", margin: 2, backgroundColor: "lightblue", padding: 7, borderRadius: 15 }}
            >
              <Typography variant="h6" sx={{ marginBottom: 5 }}>
                Example - Test
              </Typography>
            </Stack>
            <Link href="https://youtu.be/ZHsPVhkTUDg?si=o9vY_hWotmlcLgvj" target="_blank">
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
    </MainLayout>
  );
}

export default ArraysIncludes;
