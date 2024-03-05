import { Box, Link, List, ListItem, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { getTodos } from "../../_connections/connections";
import MainLayout from "../../_mainLayout/pages/MainLayoutView";

function ArraysIncludes() {
  const { data: todos, status } = useQuery({ queryKey: ["todos"], queryFn: getTodos });

  let matched = false;

  if (status === "success") {
    const todoIds = todos.map((t) => t.id);
    console.log(todoIds);
    matched = todoIds.includes(28);
  }

  return (
    <MainLayout>
      {status === "success" && (
        <Stack alignItems={"center"} sx={{ height: "calc(100dvh - 35px)", overflowY: "auto" }}>
          <Link href="https://www.w3schools.com/jsref/jsref_includes.asp" target="_blank">
            <Typography variant="h2">Reference Includes</Typography>
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
                    Includes works the same as some except 'some' takes a callback!
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>Includes just specify what you are looking for!</ListItem>
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
                  Example - id 28 {matched ? "Exists" : "Missing"}
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
                text={`
  const { data: todos, status } = useQuery({ queryKey: ["todos"], queryFn: getTodos });

  let matched = false;

  if (status === "success") {
    const todoIds = todos.map((t) => t.id);
    console.log(todoIds);
    matched = todoIds.includes(28);
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
      )}
    </MainLayout>
  );
}

export default ArraysIncludes;
