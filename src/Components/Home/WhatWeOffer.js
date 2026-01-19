import React, { useEffect } from "react";
import "./Home.css";

const useInView = (selector) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector]);
};

export default function WhatWeOffer() {
  useInView(".slide-in");

  const offerings = [
    {
      title: "🏠 Home Tutoring",
      description:
        "Personalized learning experience with tutors visiting your home for one-on-one sessions.",
    },
    {
      title: "💻 Online Tutoring",
      description:
        "Learn from anywhere through interactive online classes with flexible schedules.",
    },
    {
      title: "📦 Package Tutoring",
      description:
        "Affordable packages designed for students to cover complete courses with expert guidance.",
    },
    {
      title: "📚 Courses",
      description:
        "Coming Soon: Structured courses for various subjects with comprehensive materials.",
    },
  ];

  return (
    <section className="what-we-offer bg-light text-center py-5">
      <div className="container">
        <h2 className="fw-bold mb-5">What We Offer</h2>
        <div className="row">
          {offerings.map((offer, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="offer-card slide-in">
                <h4 className="fw-bold mb-3">{offer.title}</h4>
                <p>{offer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

