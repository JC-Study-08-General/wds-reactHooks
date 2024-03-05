import { Box, Link, List, ListItem, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { getTodos } from "../../_connections/connections";
import MainLayout from "../../_mainLayout/pages/MainLayoutView";

function ArraysChaining() {
  const { data: todos, status } = useQuery({ queryKey: ["todos"], queryFn: getTodos });

  function top10Todos() {
    return todos
      .filter((t, i) => i < 10)
      .map((n) => n.title)
      .sort();
  }

  return (
    <MainLayout>
      {status === "success" && (
        <Stack alignItems={"center"} sx={{ height: "calc(100dvh - 35px)", overflowY: "auto" }}>
          <Link href="https://www.geeksforgeeks.org/chaining-of-array-methods-in-javascript/" target="_blank">
            <Typography variant="h2">Reference Chaining</Typography>
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
                  <ListItem sx={{ display: "list-item" }}>This is a process of combining methods.</ListItem>
                  <ListItem sx={{ display: "list-item", color: "firebrick" }}>
                    Thought should be given to whether this is the appropriate approach and if conseals logic for code
                    reviews, sometimes more code is better.
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
                  Example - List of top 10 todos in alphebetical order:
                </Typography>
                {top10Todos().map((todo) => (
                  <Typography>- {todo}</Typography>
                ))}
              </Stack>
              <Link href="https://youtu.be/YIp4fHeO8Rk?si=V6jMJXFjltRzNyUj" target="_blank">
                <Typography variant="h6" align="center">
                  WDS Video on this Hook
                </Typography>
              </Link>
            </Box>
            <Box sx={{ margin: 5 }}>
              <CopyBlock
                text={`
  const { data: todos, status } = useQuery({ queryKey: ["todos"], queryFn: getTodos });

  function top10Todos() {
    return todos
      .filter((t, i) => i < 10)
      .map((n) => n.title)
      .sort();
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

export default ArraysChaining;
