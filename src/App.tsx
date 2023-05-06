import React from "react";
import { Route, Routes } from "react-router";
import ExchangePage from "./pages/Exchange";
import HistoryPage from "./pages/History";
import Header from "./components/Base/Header";
import { Reset } from "styled-reset";

const App = () => {
  return (
    <>
      <Reset />
      <Header />
      <Routes>
        <Route path="exchange" element={<ExchangePage />} />
        <Route path="history" element={<HistoryPage />} />
      </Routes>
    </>
  );
};

export default App;
