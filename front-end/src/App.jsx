import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NaujasVartotojas from "./components/NaujasVartotojas";
import Prisijungimas from "./components/Prisijungimas";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/create-client" element={<NaujasVartotojas />} />
        <Route path="/login" element={<Prisijungimas />} />
      </Routes>
    </Router>
  );
}

export default App;
