import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import React, { useState, useTransition } from "react";
import MainLayout from "../../_mainLayout/pages/MainLayoutView";

function ExampleTransition() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const LIST_SIZE = 20000;

  function handleChange(e) {
    setInput(e.target.value);
    startTransition(() => {
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  }
  return (
    <MainLayout>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <a href="https://react.dev/reference/react/useTransition" target="_blank" rel="noreferrer">
          <Typography variant="h2">Reference useTransition</Typography>
        </a>
        <Box sx={{ maxWidth: 800, margin: 2, backgroundColor: "bisque", padding: 7, borderRadius: 15 }}>
          <List sx={{ listStyleType: "disc" }}>
            <ListItem sx={{ display: "list-item" }}>Used to for slow apps, but use sparingly</ListItem>
            <ListItem sx={{ display: "list-item" }}>Used to prioritise when state changes</ListItem>
            <ListItem sx={{ display: "list-item" }}>
              useTransition destructure 'isPending' and 'startTransition'
            </ListItem>
          </List>
        </Box>
        <Stack alignItems={"center"} sx={{ backgroundColor: "lightblue", padding: 8, borderRadius: 15 }}>
          <input type="text" value={input} onChange={handleChange} />
          {isPending ? (
            <Typography>Loading.....</Typography>
          ) : (
            list.map((l, i) => {
              return <Box key={i}>{l}</Box>;
            })
          )}
        </Stack>
      </Stack>
    </MainLayout>
  );
}

export default ExampleTransition;
