import { Box, Link, List, ListItem, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { getTodos } from "../../_connections/connections";
import MainLayout from "../../_mainLayout/pages/MainLayoutView";

function ArraysSome() {
  const { data: todos, status } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  let matched = false;

  if (status === "success") {
    matched = todos.some((t) => t.id === 28);
  }

  return (
    <MainLayout>
      {status === "success" && (
        <Stack
          alignItems={"center"}
          sx={{ height: "calc(100dvh - 35px)", overflowY: "auto" }}
        >
          <Link
            href="https://www.w3schools.com/jsref/jsref_some.asp"
            target="_blank"
          >
            <Typography variant="h2">Reference Some</Typography>
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
                    Returns a boolean response if a value in the arrays meets
                    the criteria.
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    Once matched found it returns true and stops iterating
                    through the array.
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <Link
                      href="https://www.w3schools.com/jsref/jsref_some.asp"
                      target="_blank"
                    >
                      <Typography>
                        W3Schools Documentation Array Some
                      </Typography>
                    </Link>
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
                  Example - id 28 {matched ? "Exists" : "Missing"}
                </Typography>
              </Stack>
              <Link
                href="https://youtu.be/BiblrzKMllc?si=8TzvxDZfIClQ9uik"
                target="_blank"
              >
                <Typography variant="h6" align="center">
                  WDS Video on this Hook
                </Typography>
              </Link>
            </Box>
            <Box sx={{ margin: 5 }}>
              <CopyBlock
                text={`
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((todos) => {
    let matched = false;   

    matched = todos.some((t) => t.id === 28);
    console.log(todos, matched);
  });
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

export default ArraysSome;
