import { Box, Button, List, ListItem, Stack, Typography } from "@mui/material";
import React, { useReducer } from "react";
import MainLayout from "../_mainLayout/pages/MainLayoutView";

// This is all in capitals because it is a global none changing variable
const ACTION = {
  INCREASE: "increase",
  DECREASE: "decrease",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION.INCREASE:
      return { count: state.count + 1 };
    case ACTION.DECREASE:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function ExampleReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increaseCount() {
    dispatch({ type: ACTION.INCREASE });
  }

  function decreaseCount() {
    dispatch({ type: ACTION.DECREASE });
  }

  return (
    <MainLayout>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <a href="https://react.dev/reference/react/useReducer" target="_blank" rel="noreferrer">
          <Typography variant="h2">Reference useReducer</Typography>
        </a>
        <Box sx={{ maxWidth: 800, margin: 2, backgroundColor: "bisque", padding: 7, borderRadius: 15 }}>
          <List sx={{ listStyleType: "disc" }}>
            <ListItem sx={{ display: "list-item" }}>
              useReducer is way of handling complex state and connecting the state to an action.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <span style={{ fontWeight: "bold" }}>Example: </span> 2 actions effect the state bit of state.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              useReducer takes in a function and object of initial state.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              useReducer detsructures 'state' and 'dispatch', which is the function.
            </ListItem>
          </List>
        </Box>
        <Stack alignItems={"center"} sx={{ backgroundColor: "lightblue", padding: 8, borderRadius: 15 }}>
          <Stack direction={"row"} alignItems={"center"} gap={5}>
            <Button variant="contained" onClick={decreaseCount} disabled={state.count <= 0}>
              -
            </Button>
            <Typography>{state.count}</Typography>
            <Button variant="contained" onClick={increaseCount}>
              +
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </MainLayout>
  );
}

export default ExampleReducer;
