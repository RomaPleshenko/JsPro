import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./components/Layout";
import HomePage from "./components/HomePage";
import TodoPage from "./components/TodoPage";
import SwapiPage from "./components/SwapiPage";

const App = () => {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/swapi" element={<SwapiPage />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
