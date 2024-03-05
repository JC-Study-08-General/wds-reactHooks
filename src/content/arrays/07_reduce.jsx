import { Box, Link, List, ListItem, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { getTodos } from "../../_connections/connections";
import MainLayout from "../../_mainLayout/pages/MainLayoutView";

function ArraysReduce() {
  const { data: todos, status } = useQuery({ queryKey: ["todos"], queryFn: getTodos });

  let sumOfIds = 0;

  if (status === "success") {
    sumOfIds = todos.reduce((accumulator, t) => accumulator + t.id, 0);
    console.log(sumOfIds);
  }

  return (
    <MainLayout>
      {status === "success" && (
        <Stack alignItems={"center"} sx={{ height: "calc(100dvh - 35px)", overflowY: "auto" }}>
          <Link href="https://www.w3schools.com/jsref/jsref_reduce.asp" target="_blank">
            <Typography variant="h2">Reference Reduce</Typography>
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
                  <ListItem sx={{ display: "list-item" }}>Method returns a single value.</ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    Takes in 2 elements, first inital value, second the element. Plus outside of the callback add ,
                    initial value.
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    method executes a reducer function for array element.
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
                  Example - Sum of the id numbers is: {sumOfIds}
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

let sumOfIds = 0;

if (status === "success") {
  sumOfIds = todos.reduce((accumulator, t) => accumulator + t.id, 0);
  console.log(sumOfIds);
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

export default ArraysReduce;
