import { Box, Link, List, ListItem, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { getTodos } from "../../_connections/connections";
import MainLayout from "../../_mainLayout/pages/MainLayoutView";

function ArraysFilter() {
  const { data: todos, status } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

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
        <Stack
          alignItems={"center"}
          sx={{ height: "calc(100dvh - 35px)", overflowY: "auto" }}
        >
          <Link
            href="https://www.w3schools.com/jsref/jsref_filter.asp"
            target="_blank"
          >
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
                  <ListItem sx={{ display: "list-item" }}>
                    Creates a new array with filtered contents, this is a{" "}
                    <a href="https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy">
                      shallow copy
                    </a>
                    .
                  </ListItem>
                  <ListItem sx={{ display: "list-item", color: "firebrick" }}>
                    BUT it still references the original sauce so if you
                    remove/mutate items from the filtered or original it will
                    effect both
                  </ListItem>
                  <ListItem sx={{ display: "list-item", color: "green" }}>
                    This can be combatted by creating a copy without references:
                    const newArr = [...origArr]
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <Link
                      href="https://www.w3schools.com/jsref/jsref_filter.asp"
                      target="_blank"
                    >
                      <Typography>
                        W3Schools Documentation Array Filter
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
                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                  Number of Todos before pop = 200 (notice how the pop actually
                  removes 1 item from total and Incompeleted)
                </Typography>
                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                  Number of Todos in total = {arrFilter.total}
                </Typography>
                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                  Number of compeleted Todos = {arrFilter.completed}
                </Typography>
                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                  Number of Incompeleted Todos = {arrFilter.incomplete}
                </Typography>
              </Stack>
              <Link
                href="https://youtu.be/BiblrzKMllc?si=8TzvxDZfIClQ9uik"
                target="_blank"
              >
                <Typography variant="h6" align="center">
                  WDS Video on Array Methods
                </Typography>
              </Link>
            </Box>
            <Box sx={{ margin: 5 }}>
              <CopyBlock
                text={`
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((todos) => {
    const arrFilter = { total: 0, completed: 0, incomplete: 0 };

    arrFilter.total = todos.length;
    arrFilter.completed = todos.filter((t) => t.completed).length;
    arrFilter.incomplete = todos.filter((t) => !t.completed).length;
    todos.pop();

    console.log(todos, arrFilter);
  });


// Example where you creating a new reference point
const arr1 = [{ fname: "123" }, { fname: "124" }, { fname: "125" }];
//  arry1 now contains pointers to the three objects.
// eg.  arr1[0] = 0x123, arr1[1] = 0x124, arr1[2] = 0x125
// arr1[0].fname references the fname property of the object stored at 0x123
const arr2 = arr1.filter((a, i) => i < 1);
//  arry2 now contains pointers to the just the object 0x123
// eg.  arr2[0] = 0x123
// arr2[0].fname also references the fname property of the object stored at 0x123
arr1[0] = { fname: "126" };
// eg.  arr1[0] = 0x126, arr1[1] = 0x124, arr1[2] = 0x125
// arr2[0].fname noww references the fname property of the object stored at 0x126
console.log(arr1[0].fname, arr2[0].fname); // ddd aaa

// Example of Mutating reference so effects both copies of the array
const people = [{ name: "David" },{ name: "Justin" },{ name: "Paul" },{ name: "John" },];
const peopleNotJohn = people.filter((person) => person.name !== "John");
console.log(people[0].name, peopleNotJohn[0].name); //David
people[0].name = "Fred";
console.log(people, peopleNotJohn); //Fred`}
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
