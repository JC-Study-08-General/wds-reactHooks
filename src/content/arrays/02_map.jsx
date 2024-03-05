import { Box, Link, List, ListItem, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { getTodos } from "../../_connections/connections";
import MainLayout from "../../_mainLayout/pages/MainLayoutView";

function ArraysMap() {
  const { data: todos, status } = useQuery({ queryKey: ["todos"], queryFn: getTodos });

  // const arrFilter = { total: 0, completed: 0, incomplete: 0 };

  // This will mutate the original
  if (status === "success") {
    const newArr = todos.map((a, i) => {
      a.title = `Revised title ${i}`;
      return a;
    });
    todos[1].title = "test test New";
    todos.shift();
    console.log(todos);
    console.log(newArr);
  }

  // This Does Not mutate the original
  if (status === "success") {
    const newArr = todos.map((a, i) => ({ ...a, title: `Revised title ${i}` }));
    todos[1].title = "test test New";
    todos.shift();
    console.log(todos);
    console.log(newArr);
  }

  return (
    <MainLayout>
      {status === "success" && (
        <Stack alignItems={"center"} sx={{ height: "calc(100dvh - 35px)", overflowY: "auto" }}>
          <Link href="https://www.w3schools.com/jsref/jsref_map.asp" target="_blank">
            <Typography variant="h2">Reference Map</Typography>
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
                    creates a new array from calling a function for every array element.
                  </ListItem>
                  <ListItem sx={{ display: "list-item", color: "firebrick" }}>
                    BUT it still references the original sauce so changes made to this will be reflected in the new
                    array.
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
                  Example - None just see code
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

  // This will mutate the original
  if (status === "success") {
    const newArr = todos.map((a, i) => {
      a.title = \`Revised title \${i}\`;
      return a;
    });
    todos[1].title = "test test New";
    todos.shift();
    console.log(todos);
    console.log(newArr);
  }

  // This Does Not mutate the original
  if (status === "success") {
    const newArr = todos.map((a, i) => ({...a, title: \`Revised title \${i}\`}));
    todos[1].title = "test test New";
    todos.shift();
    console.log(todos);
    console.log(newArr);
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

export default ArraysMap;
