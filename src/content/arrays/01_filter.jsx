import { Box, Link, List, ListItem, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { getTodos } from "../../_connections/connections";
import MainLayout from "../../_mainLayout/pages/MainLayoutView";

function ArraysFilter() {
  const { data: todos, status } = useQuery({ queryKey: ["todos"], queryFn: getTodos });

  const arrFilter = { total: 0, completed: 0, incomplete: 0 };

  if (status === "success") {
    arrFilter.total = todos.length;
    arrFilter.completed = todos.filter((t) => t.completed).length;
    arrFilter.incomplete = todos.filter((t) => !t.completed).length;
    todos.pop();
  }

  return (
    <MainLayout>
      {status === "success" && (
        <Stack alignItems={"center"} sx={{ height: "calc(100dvh - 35px)", overflowY: "auto" }}>
          <Link href="https://www.w3schools.com/jsref/jsref_filter.asp" target="_blank">
            <Typography variant="h2">Reference Filter</Typography>
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
                  <ListItem sx={{ display: "list-item" }}>Creates a new array with filtered contents</ListItem>
                  <ListItem sx={{ display: "list-item", color: "firebrick" }}>
                    BUT it still references the original sauce so if you remove items from the filtered or original it
                    will effect both
                  </ListItem>
                  <ListItem sx={{ display: "list-item", color: "green" }}>
                    This can be combatted by creating a copy without references: const newArr = [...origArr]
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
                  Number of Todos before pop = 200 (notice how the pop actually removes 1 item from total and
                  Incompeleted)
                </Typography>
                <Typography variant="h6" sx={{ marginBottom: 5 }}>
                  Number of Todos in total = {arrFilter.total}
                </Typography>
                <Typography variant="h6" sx={{ marginBottom: 5 }}>
                  Number of compeleted Todos = {arrFilter.completed}
                </Typography>
                <Typography variant="h6" sx={{ marginBottom: 5 }}>
                  Number of Incompeleted Todos = {arrFilter.incomplete}
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

const arrFilter = { total: 0, completed: 0, incomplete: 0 };

if (status === "success") {
  arrFilter.total = todos.length;
  arrFilter.completed = todos.filter((t) => t.completed).length;
  arrFilter.incomplete = todos.filter((t) => !t.completed).length;
  todos.pop();
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

export default ArraysFilter;
