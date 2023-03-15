import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />

        <Route path="/register" element={<Register />} />

      </Routes>

    </Router>
  );
}

export default App;