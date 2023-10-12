import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Equipment from "./pages/Equipment";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TopHeader from "./components/TopHeader";
import CopyFooter from "./components/CopyFooter";
import EquipmentDetail from "./components/EquipmentCompo/EquipmentDetail";
import SocialSticky from "./components/SocialSticky";
import Footer from "./components/Footer";

function App() {
  const [value, setValue] = useState("Marathi");
  return (
    <div>
      <Router>
        <TopHeader value={value} setValue={setValue} />
        <Header value={value} setValue={setValue} />
        <Routes>
          <Route path="/" element={<Home value={value} />} />
          <Route path="/equipment" element={<Equipment value={value} />} />
          <Route path="/about-us" element={<About value={value} />} />
          <Route path="/contact" element={<Contact value={value} />} />
          <Route path="/equipment-detail/:id" element={<EquipmentDetail value={value} />} />
        </Routes>
        <Footer value={value} />
        <CopyFooter value={value} />
        <SocialSticky />
      </Router>
      <ToastContainer/>
    </div>
  );
}

export default App;
