import { Box, Link, List, ListItem, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { getTodos } from "../../_connections/connections";
import MainLayout from "../../_mainLayout/pages/MainLayoutView";

function ArraysFind() {
  const { data: todos, status } = useQuery({ queryKey: ["todos"], queryFn: getTodos });
  const matchedElement = { title: "" };

  if (status === "success") {
    const foundElement = todos.find((t) => t.id === 28);
    // Maybe a better approach
    // matchedElement.title = todos.find((t) => t.id === 28).title;
    matchedElement.title = foundElement.title;
    console.log(foundElement);
  }

  return (
    <MainLayout>
      <Stack alignItems={"center"} sx={{ height: "calc(100dvh - 35px)", overflowY: "auto" }}>
        <Link href="https://www.w3schools.com/jsref/jsref_find.asp" target="_blank">
          <Typography variant="h2">Reference Find</Typography>
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
                <ListItem sx={{ display: "list-item" }}>Finds the first matching element and retuns it.</ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  Once matched returns that element and stops iterating through the array.
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
                Example - found element title: {matchedElement.title}
              </Typography>
            </Stack>
            <Link href="https://youtu.be/BiblrzKMllc?si=8TzvxDZfIClQ9uik" target="_blank">
              <Typography variant="h6" align="center">
                WDS Video on this Hook
              </Typography>
            </Link>
          </Box>
          <Box sx={{ margin: 5 }}>
            <CopyBlock
              text={`
  const { data: todos, status } = useQuery({ queryKey: ["todos"], queryFn: getTodos });
  const matchedElement = { title: "" };

  if (status === "success") {
    const foundElement = todos.find((t) => t.id === 28);
    // Maybe a better approach
    // matchedElement.title = todos.find((t) => t.id === 28).title;
    matchedElement.title = foundElement.title;
    console.log(foundElement);
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

export default ArraysFind;
