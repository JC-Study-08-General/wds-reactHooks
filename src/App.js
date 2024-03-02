import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./content/_LandingPage";
import ExampleCallback from "./content/06_useCallback";
import ExampleContext from "./content/03_useContext";
import ExampleDebug from "./content/11_useDebugValue";
import ExampleDeferred from "./content/09_useDeferredValue";
import ExampleEffect from "./content/02_useEffect";
import ExampleId from "./content/13_useId";
import ExampleImperative from "./content/12_useImperativeHandle";
import ExampleLayout from "./content/10_useLayoutEffect";
import ExampleMemo from "./content/05_useMemo";
import ExampleReducer from "./content/07_useReducer";
import ExampleRef from "./content/04_useRef";
import ExampleState from "./content/01_useState";
import ExampleTransition from "./content/08_useTransition";

// useContext using a custom hooks
import { CustomThemeProvider } from "./_custom/Custom";

// useContext done in a basic way (what is bad about this is we have state here in the app component)
export const BasicThemeContext = React.createContext();

function App() {
  const [basicTheme, setBasicTheme] = useState(true);

  return (
    <BasicThemeContext.Provider value={[basicTheme, setBasicTheme]}>
      <CustomThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/usecallback" element={<ExampleCallback />} />
            <Route path="/usecontext" element={<ExampleContext />} />
            <Route path="/usedebugvalue" element={<ExampleDebug />} />
            <Route path="/usedeferredvalue" element={<ExampleDeferred />} />
            <Route path="/useeffect" element={<ExampleEffect />} />
            <Route path="/useid" element={<ExampleId />} />
            <Route path="/useimperativehandle" element={<ExampleImperative />} />
            <Route path="/uselayouteffect" element={<ExampleLayout />} />
            <Route path="/usememo" element={<ExampleMemo />} />
            <Route path="/usereducer" element={<ExampleReducer />} />
            <Route path="/useref" element={<ExampleRef />} />
            <Route path="/usestate" element={<ExampleState />} />
            <Route path="/usetransition" element={<ExampleTransition />} />
          </Routes>
        </BrowserRouter>
      </CustomThemeProvider>
    </BasicThemeContext.Provider>
  );
}

export default App;
