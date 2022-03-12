import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dark from "../components/Dark";
import Light from "../components/Light";

const AppRouter = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Light />} />
            <Route path="/dark" element={<Dark />} />
         </Routes>
      </BrowserRouter>
   );
};

export default AppRouter;
