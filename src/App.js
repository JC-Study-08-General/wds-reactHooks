import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./content/LandingPage";
import ExampleCallback from "./content/useCallback";
import ExampleContext from "./content/useContext";
import ExampleDebug from "./content/useDebug";
import ExampleDeferred from "./content/useDeferred";
import ExampleEffect from "./content/useEffect";
import ExampleId from "./content/useId";
import ExampleImperative from "./content/useImperative";
import ExampleLayout from "./content/useLayout";
import ExampleMemo from "./content/useMemo";
import ExampleReducer from "./content/useReducer";
import ExampleRef from "./content/useRef";
import ExampleState from "./content/useState";
import ExampleTransition from "./content/useTransition";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/usecallback" element={<ExampleCallback />} />
        <Route path="/usecontext" element={<ExampleContext />} />
        <Route path="/usedebug" element={<ExampleDebug />} />
        <Route path="/usedeferred" element={<ExampleDeferred />} />
        <Route path="/useeffect" element={<ExampleEffect />} />
        <Route path="/useid" element={<ExampleId />} />
        <Route path="/useimperative" element={<ExampleImperative />} />
        <Route path="/uselayout" element={<ExampleLayout />} />
        <Route path="/usememo" element={<ExampleMemo />} />
        <Route path="/usereducer" element={<ExampleReducer />} />
        <Route path="/useref" element={<ExampleRef />} />
        <Route path="/usestate" element={<ExampleState />} />
        <Route path="/usetransition" element={<ExampleTransition />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
