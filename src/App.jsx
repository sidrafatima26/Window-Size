import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [W, setW] = useState(window.innerWidth);
  const [H, setH] = useState(window.innerHeight);

  function handleResize() {
    setW(window.innerWidth);
    setH(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <main>
      <p>Width = {W}</p>
      <p>Height = {H}</p>
    </main>
  );
}
