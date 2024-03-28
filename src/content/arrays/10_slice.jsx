import { Box, Link, List, ListItem, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { getTodos } from "../../_connections/connections";
import MainLayout from "../../_mainLayout/pages/MainLayoutView";

function ArraysSlice() {
  const { data: todos, status } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  let refactoredTitle = "";

  if (status === "success") {
    refactoredTitle = todos[0].title.slice(0, 10);
  }

  return (
    <MainLayout>
      {status === "success" && (
        <Stack
          alignItems={"center"}
          sx={{ height: "calc(100dvh - 35px)", overflowY: "auto" }}
        >
          <Link
            href="https://www.w3schools.com/jsref/jsref_slice_string.asp"
            target="_blank"
          >
            <Typography variant="h2">Reference Slice</Typography>
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
                    method extracts a part of a string
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    method returns the extracted part in a new string.
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    method does not change the original string.
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <Link
                      href="https://www.w3schools.com/jsref/jsref_slice_array.asp"
                      target="_blank"
                    >
                      <Typography>
                        W3Schools Documentation Array Slice
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
                  Example - The first 10 charators of the first todo title:{" "}
                  {refactoredTitle}
                </Typography>
                <Typography variant="h6" sx={{ marginBottom: 5 }}>
                  Example - The todo title: {todos[0].title}
                </Typography>
              </Stack>
              <Link
                href="https://youtu.be/5CgPaeWy4yQ?si=Pk84kGpsbLVRL-v8"
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
    let refactoredTitle = "";

    refactoredTitle = todos[0].title.slice(0, 10);
    console.log(todos, refactoredTitle);
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

export default ArraysSlice;
