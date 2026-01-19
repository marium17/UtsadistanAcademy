import React, { useState } from "react";
import { FaBook, FaLaptopCode, FaUniversity, FaChalkboardTeacher } from "react-icons/fa";
import "./Program.css"; // <-- IMPORTANT: import animation CSS

function OurPrograms() {

  const [activeProgram, setActiveProgram] = useState(null);

  const programDetails = {
    olevels: {
      title: "O-Level Programs",
      intro: "We offer GCE/IGCSE and Edexcel Curriculum, ensuring high-quality education with expert faculty and curated study material.",
      subjects: [
        "English",
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "Psychology",
        "Computer Science",
        "Accounts",
        "Urdu",
        "Business Studies",
        "Economics",
        "Pakistan Studies",
        "Islamiyat",
        "Additional Mathematics",
        "Urdu A",
        "Urdu B",
        "Sociology"
      ]
    },

    alevels: {
      title: "A-Level Programs",
      intro: "We offer IAL and Edexcel Curriculum, Our A-Level program focuses on academic depth, conceptual clarity, and strong exam preparation for both boards.",
      subjects: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "Computer Science",
        "Economics",
        "Business",
        "Accounting",
        "Psychology",
        "Urdu",
        "Sociology",
        "Law"
      ]
    },

    itcourses: {
      title: "Computer & IT Courses",
      intro: "We provide beginner-to-advanced IT courses designed for practical learning and real-world skill development.",
     subjects: [
  "Graphic Designing",
  "Web Development",
  "Programming Classes",
  "Artificial Intelligence (AI)",
  "Generative AI",
  "Freelancing Skills"
]
    },

    sat: {
      title: "SAT Preparation",
      intro: "Our SAT program focuses on concept building, test-taking strategies, full-length mock exams, and personalized guidance. Students practice past papers, study the marking scheme, follow proven exam techniques, master formula application, and revise regularly to achieve the best results.",
      subjects: [
        "Reading & Writing",
        "Math (No Calculator)",
        "Math (Calculator)",
        "Practice Tests",
      ]
    }
  };

  const current = programDetails[activeProgram];

  return (
    <section className="bg-light py-5">
      <div className="container">
        
        <h2 className="text-center fw-bold mb-4">Our Programs</h2>

        {/* Program Buttons */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">

          <button onClick={() => setActiveProgram("olevels")}
            className="btn btn-primary px-4 py-3 fw-bold d-flex align-items-center gap-2"
          >
            <FaBook size={20} /> O-Level Programs
          </button>

          <button onClick={() => setActiveProgram("alevels")}
            className="btn btn-success px-4 py-3 fw-bold d-flex align-items-center gap-2"
          >
            <FaUniversity size={20} /> A-Level Programs
          </button>

          <button onClick={() => setActiveProgram("itcourses")}
            className="btn btn-info px-4 py-3 fw-bold d-flex align-items-center gap-2 text-white"
          >
            <FaLaptopCode size={20} /> Computer & IT Courses
          </button>

          <button onClick={() => setActiveProgram("sat")}
            className="btn btn-warning px-4 py-3 fw-bold d-flex align-items-center gap-2"
          >
            <FaChalkboardTeacher size={20} /> SAT Preparation
          </button>

        </div>

        {/* Animated Details Section */}
        {current && (
          <div className="program-box fade-in shadow p-4 rounded-4">
            <h3 className="fw-bold text-primary mb-2">{current.title}</h3>
            <p className="text-secondary">{current.intro}</p>

            <h5 className="fw-semibold mt-4 mb-2">Subjects Offered:</h5>

            <div className="row">
              {current.subjects.map((sub, index) => (
                <div key={index} className="col-md-4 mb-2">
                  <div className="p-2 rounded border bg-light">
                    {sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default OurPrograms;

