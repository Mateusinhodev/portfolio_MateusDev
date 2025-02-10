import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";

import "./App.css"
import Skills from "./pages/Habilidades";

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Sobre/>
      <Skills/>
    </>
  );
}

export default App;
