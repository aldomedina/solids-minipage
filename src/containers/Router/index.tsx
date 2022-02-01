import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../../views/Home";
import ModelTestingPage from "../../views/model-testing";
import paths from "./paths";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path={paths.home()} element={<Home />} />
      <Route path={paths.modelTesting()} element={<ModelTestingPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
