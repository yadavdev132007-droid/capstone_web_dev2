import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Player from "./pages/Player";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // 🔥 Load saved mode
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved) setDarkMode(JSON.parse(saved));
  }, []);

  // 🔥 Save mode
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div
      style={{
        background: darkMode ? "#121212" : "#ffffff",
        minHeight: "100vh",
      }}
    >
      {/* 🌙 Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          padding: "10px",
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          background: darkMode ? "#fff" : "#000",
          color: darkMode ? "#000" : "#fff",
          fontSize: "18px",
          zIndex: 1000,
        }}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/player/:name" element={<Player darkMode={darkMode} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;