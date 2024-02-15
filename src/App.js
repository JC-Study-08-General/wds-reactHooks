import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useIntlCommon } from "./_utils/lang/intl-common";

import ExampleState from "./presentation/useState";
import ExampleCallback from "./presentation/useCallback";
import ExampleContext from "./presentation/useContext";
import ExampleDebug from "./presentation/useDebug";
import ExampleDeferred from "./presentation/useDeferred";
import ExampleEffect from "./presentation/useEffect";
import ExampleId from "./presentation/useId";
import ExampleImperative from "./presentation/useImperative";
import ExampleLayout from "./presentation/useLayout";
import ExampleMemo from "./presentation/useMemo";
import ExampleReducer from "./presentation/useReducer";
import ExampleRef from "./presentation/useRef";
import ExampleTransition from "./presentation/useTransition";
import LandingPage from "./presentation/_landingPage";

const App = () => {
  const { siteLabel } = useIntlCommon();

  useEffect(() => {
    document.title = siteLabel;
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/useState" element={<ExampleState />} />
        <Route path="/useCallback" element={<ExampleCallback />} />
        <Route path="/useContext" element={<ExampleContext />} />
        <Route path="/useDug" element={<ExampleDebug />} />
        <Route path="/useDeferred" element={<ExampleDeferred />} />
        <Route path="/useEffect" element={<ExampleEffect />} />
        <Route path="/useId" element={<ExampleId />} />
        <Route path="/useImperative" element={<ExampleImperative />} />
        <Route path="/useLayout" element={<ExampleLayout />} />
        <Route path="/useMemo" element={<ExampleMemo />} />
        <Route path="/useReducer" element={<ExampleReducer />} />
        <Route path="/useRef" element={<ExampleRef />} />
        <Route path="/useTransition" element={<ExampleTransition />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
