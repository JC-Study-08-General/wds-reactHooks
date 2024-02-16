import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./content/LandingPage";
import ExampleCallback from "./content/useCallback";
import ExampleContext from "./content/useContext";
import ExampleDebug from "./content/useDebugValue";
import ExampleDeferred from "./content/useDeferredValue";
import ExampleEffect from "./content/useEffect";
import ExampleId from "./content/useId";
import ExampleImperative from "./content/useImperativeHandle";
import ExampleLayout from "./content/useLayoutEffect";
import ExampleMemo from "./content/useMemo";
import ExampleReducer from "./content/useReducer";
import ExampleRef from "./content/useRef";
import ExampleState from "./content/useState";
import ExampleTransition from "./content/useTransition";

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
