import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Index from "../pages";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Index />} path="/" />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;