import React, { Component } from 'react';
import './App.css';
import Headermenu from "./components/Headermenu";
import BannerHeader from "./components/BannerHeader";
import Maincontent from "./components/Maincontent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Headermenu />
      <BannerHeader />
      <Maincontent />
      <Footer />
    </div>
  );
}

export default App;
