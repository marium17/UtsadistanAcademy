import React from "react";

function HeroSection(props) {
    return (
        <div>
            {/* Hero Section */}
      <section
        className="text-white d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: "url('/online_laptopimage.jpg')", // ✅ fixed
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          position: "relative",
        }}
      >
        {/* Dark Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        ></div>

        {/* Text Content */}
        <div className="text-center p-4 rounded" style={{ zIndex: 1 }}>
          <h1 className="display-3 fw-bold mb-3 animate__animated animate__fadeInDown">
            About Us
          </h1>
          <p className="lead fs-4 animate__animated animate__fadeInUp">
            Empowering Education in the Digital Age
          </p>
        </div>
      </section>
            
        </div>
    );
}

export default HeroSection;