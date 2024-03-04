import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./content/_LandingPage";
import ExampleState from "./content/hooks/01_useState";
import ExampleEffect from "./content/hooks/02_useEffect";
import ExampleContext from "./content/hooks/03_useContext";
import ExampleRef from "./content/hooks/04_useRef";
import ExampleMemo from "./content/hooks/05_useMemo";
import ExampleCallback from "./content/hooks/06_useCallback";
import ExampleReducer from "./content/hooks/07_useReducer";
import ExampleTransition from "./content/hooks/08_useTransition";
import ExampleDeferred from "./content/hooks/09_useDeferredValue";
import ExampleLayout from "./content/hooks/10_useLayoutEffect";
import ExampleDebug from "./content/hooks/11_useDebugValue";
import ExampleImperative from "./content/hooks/12_useImperativeHandle";
import ExampleId from "./content/hooks/13_useId";

import ExampleCustomHook from "./content/custom/01_custom";

import ArraysFilter from "./content/arrays/01_filter";
import ArraysMap from "./content/arrays/02_map";
import ArraysFind from "./content/arrays/03_find";
import ArraysForEach from "./content/arrays/04_forEach";
import ArraysSome from "./content/arrays/05_some";
import ArraysEvery from "./content/arrays/06_every";
import ArraysReduce from "./content/arrays/07_reduce";
import ArraysIncludes from "./content/arrays/08_includes";
import ArraysSplice from "./content/arrays/09_splice";
import ArraysSlice from "./content/arrays/10_slice";
import ArraysChaining from "./content/arrays/11_chaining";

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
            <Route path="/hooks/usecallback" element={<ExampleCallback />} />
            <Route path="/hooks/usecontext" element={<ExampleContext />} />
            <Route path="/hooks/usedebugvalue" element={<ExampleDebug />} />
            <Route path="/hooks/usedeferredvalue" element={<ExampleDeferred />} />
            <Route path="/hooks/useeffect" element={<ExampleEffect />} />
            <Route path="/hooks/useid" element={<ExampleId />} />
            <Route path="/hooks/useimperativehandle" element={<ExampleImperative />} />
            <Route path="/hooks/uselayouteffect" element={<ExampleLayout />} />
            <Route path="/hooks/usememo" element={<ExampleMemo />} />
            <Route path="/hooks/usereducer" element={<ExampleReducer />} />
            <Route path="/hooks/useref" element={<ExampleRef />} />
            <Route path="/hooks/usestate" element={<ExampleState />} />
            <Route path="/hooks/usetransition" element={<ExampleTransition />} />
            <Route path="/custom/customhook" element={<ExampleCustomHook />} />
            <Route path="/arrays/filter" element={<ArraysFilter />} />
            <Route path="/arrays/map" element={<ArraysMap />} />
            <Route path="/arrays/find" element={<ArraysFind />} />
            <Route path="/arrays/foreach" element={<ArraysForEach />} />
            <Route path="/arrays/some" element={<ArraysSome />} />
            <Route path="/arrays/every" element={<ArraysEvery />} />
            <Route path="/arrays/reduce" element={<ArraysReduce />} />
            <Route path="/arrays/includes" element={<ArraysIncludes />} />
            <Route path="/arrays/splice" element={<ArraysSplice />} />
            <Route path="/arrays/slice" element={<ArraysSlice />} />
            <Route path="/arrays/chaining" element={<ArraysChaining />} />
          </Routes>
        </BrowserRouter>
      </CustomThemeProvider>
    </BasicThemeContext.Provider>
  );
}

export default App;
