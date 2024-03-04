import { Box, Button, List, ListItem, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import MainLayout from "../../_mainLayout/pages/MainLayoutView";
import { BasicThemeContext } from "../../App";
import { CustomThemeContext } from "../../_custom/Custom";
import { CopyBlock, dracula } from "react-code-blocks";

function ExampleContext() {
  const [basicTheme, setBasicTheme] = useContext(BasicThemeContext);
  const [customTheme, updateTheme] = useContext(CustomThemeContext);

  function exampleContext() {
    setBasicTheme((preTheme) => !preTheme);
  }

  return (
    <MainLayout>
      <Stack alignItems={"center"} sx={{ height: "calc(100dvh - 35px)", overflowY: "auto" }}>
        <a href="https://react.dev/reference/react/useContext" target="_blank" rel="noreferrer">
          <Typography variant="h2">Reference useContext</Typography>
        </a>
        <Stack direction={"row"}>
          <Box>
            <Box sx={{ maxWidth: "100%", margin: 1, backgroundColor: "bisque", padding: 7, borderRadius: 15 }}>
              <List sx={{ listStyleType: "disc" }}>
                <ListItem sx={{ display: "list-item" }}>
                  <span style={{ fontWeight: "bold" }}>useContext: </span> is wrapper to help stop prop drilling.
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  <span style={{ fontWeight: "bold" }}>useContext: </span> is made of 2 parts, provide and context hook.
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  On the provider you get access to one props called 'value'.
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  I have put 2 examples in this, one with custom hook one without.
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  It is common to use with custom hooks when using useContext.
                </ListItem>
              </List>
            </Box>
            <Stack direction={"row"}>
              <Stack
                alignItems={"center"}
                sx={{
                  backgroundColor: basicTheme ? "coral" : "lightblue",
                  padding: 8,
                  borderRadius: 15,
                  marginRight: 1,
                  minWidth: 500,
                }}
              >
                <Typography variant="h6" sx={{ marginBottom: 5 }}>
                  Example - {basicTheme ? "Coral" : "Blue"}
                </Typography>
                <Stack direction={"row"} alignItems={"center"} gap={5}>
                  <Button variant="contained" onClick={() => exampleContext()}>
                    Change
                  </Button>
                </Stack>
              </Stack>
              <Stack
                alignItems={"center"}
                sx={{
                  backgroundColor: customTheme ? "grey" : "lightgrey",
                  padding: 8,
                  borderRadius: 15,
                  minWidth: 500,
                }}
              >
                <Typography variant="h6" sx={{ marginBottom: 5 }}>
                  Example with customhook- {customTheme ? "Dark" : "Light"}
                </Typography>
                <Stack direction={"row"} alignItems={"center"} gap={5}>
                  <Button variant="contained" onClick={() => updateTheme()}>
                    Change Customhook
                  </Button>
                </Stack>
              </Stack>
            </Stack>
            <a href="https://youtu.be/5LrDIWkK_Bc?si=enWZ_sqSlCTOAqfA" target="_blank" rel="noreferrer">
              <Typography variant="h6" align="center">
                WDS Video on this Hook
              </Typography>
            </a>
          </Box>
          <Box sx={{ margin: 5 }}>
            <CopyBlock
              text={`import React, { useContext } from "react";

function ExampleUseContext() {
  const [basicTheme, setBasicTheme] = useContext(BasicThemeContext);

  function exampleContext() {
    setBasicTheme((preTheme) => !preTheme);
  }

  return (
    <Stack
      alignItems={"center"}
      sx={{
        backgroundColor: basicTheme ? "coral" : "lightblue",
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 5 }}>
        Example - {basicTheme ? "Coral" : "Blue"}
      </Typography>
      <Stack direction={"row"} alignItems={"center"} gap={5}>
        <Button variant="contained" onClick={() => exampleContext()}>
          Change
        </Button>
      </Stack>
    </Stack>
  )
}

// App Component
export const BasicThemeContext = React.createContext();

function App() {
  const [basicTheme, setBasicTheme] = useState(true);

  return (
    <BasicThemeContext.Provider value={[basicTheme, setBasicTheme]}>
     <MainApplication />
    </BasicThemeContext.Provider>
  );
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
    </MainLayout>
  );
}

export default ExampleContext;
