import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";

import "./App.css"
import Skills from "./pages/Habilidades";
import Projetos from "./pages/Projetos";
import Experiencias from "./pages/Experiencias";

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Sobre/>
      <Skills/>
      <Projetos/>
      <Experiencias/>
    </>
  );
}

export default App;
