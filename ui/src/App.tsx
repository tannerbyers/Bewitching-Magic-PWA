import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import RitualSection from "./components/RitualSection/RitualSection";
import ItemSection from "./components/ItemSection/ItemSection";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="background-container">
        {/* <div className="stars"></div>
        <div className="twinkling"></div> */}
        <HeroSection></HeroSection>
        {/* <div className="clouds"></div> */}
      </div>
      <RitualSection></RitualSection>
      <ItemSection></ItemSection>
      <p className="text-white mt-8 text-right pr-4">Created by Tanner Byers</p>
    </div>
  );
}

export default App;
