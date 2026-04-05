import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Pages/Layout";
import Home from "./Components/Pages/Aboutcard/Home";
import Properties from "./Components/Pages/Properties";
import Agents from "./Components/Pages/Agents";
import Blog from "./Components/Pages/Blogs";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/agent" element={<Agents />} />
        <Route path="/blogs" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
}
