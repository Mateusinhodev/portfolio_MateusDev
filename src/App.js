import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";

import "./App.css"
import Skills from "./pages/Habilidades";
import Projetos from "./pages/Projetos";
import Experiencias from "./pages/Experiencias";
import Contato from "./pages/Contato";
import Footer from "./pages/Footer"

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Sobre path="/sobre"/>
      <Skills/>
      <Projetos/>
      <Experiencias/>
      <Contato/>
      <Footer/>
    </>
  );
}

export default App;
