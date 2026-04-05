import Hero from "../Hero/Hero";
import Vision from "../Vision/Vision";
import Home from "../Home/Home";
import Feature from "../Feature/Feature";
import Advantage from "../Advantage/Advantage";
import Blogs from "../Blogs/Blogs";

import React from "react";
import Call from "../Call/Call";
import Choose from "../Choose/Choose";
import Slider from "../Slider/Slider";

export default function Layout() {
  return (
    <div>
      <Hero />
      <Vision />
      <Home />
      <Feature />
      <Advantage />
      <Choose />
      <Blogs />
      <Slider />
      <Call />
    </div>
  );
}
