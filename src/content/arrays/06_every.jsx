import { Box, Link, List, ListItem, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { getTodos } from "../../_connections/connections";
import MainLayout from "../../_mainLayout/pages/MainLayoutView";

function ArraysEvery() {
  const { data: todos, status } = useQuery({ queryKey: ["todos"], queryFn: getTodos });

  let checked = false;

  if (status === "success") {
    checked = todos.every((t) => t.id);
  }

  return (
    <MainLayout>
      <Stack alignItems={"center"} sx={{ height: "calc(100dvh - 35px)", overflowY: "auto" }}>
        <Link href="https://www.w3schools.com/jsref/jsref_every.asp" target="_blank">
          <Typography variant="h2">Reference Every</Typography>
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
                  Returns a boolean response if a value in the arrays meets the criteria.
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  This will run for every element of the array as all have to true or false.
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
                Example - Does every todo have an id? {checked ? "Yes" : "No"}
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

let checked = false;

if (status === "success") {
  checked = todos.every((t) => t.id);
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

export default ArraysEvery;
