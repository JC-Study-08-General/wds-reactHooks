import { Box, Link, List, ListItem, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { getTodos } from "../../_connections/connections";
import MainLayout from "../../_mainLayout/pages/MainLayoutView";

function ArraysForEach() {
  const { data: todos, status } = useQuery({ queryKey: ["todos"], queryFn: getTodos });

  let sum = 0;

  if (status === "success") {
    todos.forEach((t) => sum++);
    console.log(sum);
  }

  return (
    <MainLayout>
      <Stack alignItems={"center"} sx={{ height: "calc(100dvh - 35px)", overflowY: "auto" }}>
        <Link href="https://www.w3schools.com/jsref/jsref_foreach.asp" target="_blank">
          <Typography variant="h2">Reference ForEach</Typography>
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
                <ListItem sx={{ display: "list-item" }}>Will run the function for each element of the array.</ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  This is a better option for achieving something based on the array element rather than creating a
                  mutated array.
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
                Example - Number of todos {sum}
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

if (status === "success") {
  let sum = 0;
  todos.forEach((t) => sum++);
  console.log(sum);
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

export default ArraysForEach;
