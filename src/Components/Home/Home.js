import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WhatWeOffer from "./WhatWeOffer.js";
import HeroSection from "./HeroSection.js";
import Vision from "./Vision.js";
import "./Home.css";  // <-- import centralized CSS here

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <HeroSection/>

      {/* WHAT WE OFFER SECTION */}
      <WhatWeOffer />

      {/* OUR VISION SECTION */}
      <Vision/>
    </>
  );
};

export default Home;














