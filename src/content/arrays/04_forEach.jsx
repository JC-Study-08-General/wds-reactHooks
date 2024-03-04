import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import React from "react";
import MainLayout from "../../_mainLayout/pages/MainLayoutView";
import { CopyBlock, dracula } from "react-code-blocks";

function ArraysForEach() {
  return (
    <MainLayout>
      <Stack alignItems={"center"} sx={{ height: "calc(100dvh - 35px)", overflowY: "auto" }}>
        <a href="https://www.w3schools.com/jsref/jsref_foreach.asp" target="_blank" rel="noreferrer">
          <Typography variant="h2">Reference ForEach</Typography>
        </a>
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
            <a href="https://youtu.be/BiblrzKMllc?si=8TzvxDZfIClQ9uik" target="_blank" rel="noreferrer">
              <Typography variant="h6" align="center">
                WDS Video on this Hook
              </Typography>
            </a>
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

export default ArraysForEach;
