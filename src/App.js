import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./Styles/Global.scss";
import "./App.css";
import Header from "./Components/Header/Header";
import LandingPage from "./Pages/LandingPage/LandingPage";
import HomePage from "./Pages/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
