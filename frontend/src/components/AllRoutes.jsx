import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginOauth from "../components/Login_outh";

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<LoginOauth />} />
    </Routes>
  );
};

export default AllRoutes;
