import React from "react";
import "./Home.css";

export default function HeroSection() {
  return (
    <div className="hero-wrapper">
      {/* HERO SECTION */}
      <div className="hero-container">
        {/* Image */}
        <div className="hero-image-wrapper">
          <img src="/sir-furqan.jpg" alt="Hero" className="hero-image" />
        </div>

        {/* Overlay */}
        <div className="hero-overlay">
          {/* Left Content */}
          <div className="hero-left">
            <h1 className="hero-title">
              USTADISTAN <br /> ACADEMY
            </h1>

            <h4 className="hero-subtitle">by Sir Furqan</h4>

            <p className="hero-description">
              "Our mission is to empower students through innovative digital
              learning, expert instruction, and a supportive community bridging
              gaps in education and nurturing knowledge, skills, and personal
              growth for success in a rapidly evolving world."
            </p>
          </div>

          {/* Right Content */}
          <div className="hero-right">
            <h1 className="hero-right-title">
              Find a Perfect Online, InPerson or Home{" "}
              <span className="hero-underline">
                Tutor
                <span className="underline-highlight"></span>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}





      