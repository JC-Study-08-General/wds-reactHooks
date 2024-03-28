import { Box, Link, List, ListItem, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { getTodos } from "../../_connections/connections";
import MainLayout from "../../_mainLayout/pages/MainLayoutView";

function ArraysSplice() {
  const { data: todos, status } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  if (status === "success") {
    // Add to array
    todos.splice(1, 0, { title: "test" });
    console.log(todos);

    // remove from array
    todos.splice(1, 1);
    console.log(todos);
  }

  return (
    <MainLayout>
      {status === "success" && (
        <Stack
          alignItems={"center"}
          sx={{ height: "calc(100dvh - 35px)", overflowY: "auto" }}
        >
          <Link
            href="https://www.w3schools.com/jsref/jsref_splice.asp"
            target="_blank"
          >
            <Typography variant="h2">Reference Splice</Typography>
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
                    method adds and/or removes array elements.
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    method overwrites the original array!
                  </ListItem>
                  <ListItem sx={{ display: "list-item", color: "firebrick" }}>
                    This is important to remember that the add does add if 0 in
                    second parameter, if greater than 1 it will delete before
                    adding.
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <Link
                      href="https://www.w3schools.com/jsref/jsref_splice.asp"
                      target="_blank"
                    >
                      <Typography>
                        W3Schools Documentation Array Splice
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
                  Example - None just look at the code.
                </Typography>
              </Stack>
              <Link
                href="https://youtu.be/FFas8cMHVwg?si=CtNp2UvWTOQAtnAL"
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
    // Add to array
    todos.splice(1, 0, { title: "test" });
    console.log(todos);

    // // remove from array
    // todos.splice(1, 1);
    // console.log(todos);
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

export default ArraysSplice;
