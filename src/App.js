import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Styles/Global.scss";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Pages/HomePage/HomePage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/profile"
            element={<ProfilePage />}
          />
          <Route path="/profile/:videoId" element={<ProfilePage />} />
          <Route path="*" element={<ProfilePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
