import React from 'react';

function Courses(props) {
    return (
        <div>
            {/* Detailed Courses Section */}
<section className="py-5 bg-light">
  <div className="container">
    <h2 className="text-center fw-bold mb-5 text-primary">
      Explore Our Courses in Detail
    </h2>

    {/* Math Course */}
    <div className="row align-items-center mb-5">
      <div className="col-md-6">
        <img
          src="/math-course.jpg"
          alt="Mathematics Mastery"
          className="img-fluid rounded shadow"
        />
      </div>
      <div className="col-md-6">
        <h3 className="fw-bold">Mathematics Mastery</h3>
        <p>
          Our Mathematics program helps students strengthen their foundations in 
          Algebra, Geometry, Trigonometry, and Calculus. 
        </p>
        <ul>
          <li>Algebra & Geometry basics</li>
          <li>Advanced problem-solving</li>
          <li>Exam preparation strategies</li>
        </ul>
      </div>
    </div>

    {/* Computer Fundamentals */}
    <div className="row align-items-center mb-5 flex-md-row-reverse">
      <div className="col-md-6">
        <img
          src="/computer-course.jpg"
          alt="Computer Fundamentals"
          className="img-fluid rounded shadow"
        />
      </div>
      <div className="col-md-6">
        <h3 className="fw-bold">Computer Fundamentals</h3>
        <p>
          Learn the essentials of computer science, programming, and IT skills.
        </p>
        <ul>
          <li>Introduction to Coding</li>
          <li>MS Office & Productivity Tools</li>
          <li>Networking Basics</li>
        </ul>
      </div>
    </div>

    {/* Science Course */}
    <div className="row align-items-center mb-5">
      <div className="col-md-6">
        <img
          src="/science-course.jpg"
          alt="Science Exploration"
          className="img-fluid rounded shadow"
        />
      </div>
      <div className="col-md-6">
        <h3 className="fw-bold">Science Exploration</h3>
        <p>
          Dive into Physics, Chemistry, and Biology with engaging practicals.
        </p>
        <ul>
          <li>Physics (Mechanics, Energy, Electricity)</li>
          <li>Chemistry (Organic & Inorganic)</li>
          <li>Biology (Cells, Genetics, Human Body)</li>
        </ul>
      </div>
    </div>

    {/* Commerce Course */}
    <div className="row align-items-center mb-5 flex-md-row-reverse">
      <div className="col-md-6">
        <img
          src="/commerce-course.jpg"
          alt="Business & Commerce"
          className="img-fluid rounded shadow"
        />
      </div>
      <div className="col-md-6">
        <h3 className="fw-bold">Business & Commerce</h3>
        <p>
          Develop skills in Accounting, Economics, and Business Studies.
        </p>
        <ul>
          <li>Financial Accounting</li>
          <li>Principles of Business</li>
          <li>Economics Fundamentals</li>
        </ul>
      </div>
    </div>

    {/* English & Communication */}
    <div className="row align-items-center mb-5">
      <div className="col-md-6">
        <img
          src="/english-course.jpg"
          alt="English & Communication"
          className="img-fluid rounded shadow"
        />
      </div>
      <div className="col-md-6">
        <h3 className="fw-bold">English & Communication</h3>
        <p>
          Improve grammar, vocabulary, writing, and public speaking skills.
        </p>
        <ul>
          <li>Grammar & Composition</li>
          <li>Creative Writing</li>
          <li>Presentation & Communication Skills</li>
        </ul>
      </div>
    </div>
  </div>
</section>
        </div>
    );
}

export default Courses;