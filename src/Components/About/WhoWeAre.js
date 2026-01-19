import React from 'react';

function WhoWeAre(props) {
    return (
        <div>
            {/* Who We Are Section */}
      <section className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="fw-bold mb-3 text-primary">Who We Are</h2>
            <p className="fs-5 text-muted">
              At <strong>Ustaditan Academy</strong>, we believe learning should
              be flexible and engaging. From online and in-person classes to
              home-based learning, we provide tailored education for school
              students, college learners, and professionals across Pakistan and
              beyond.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="/online-student.jpg"
              alt="Student learning online"
              className="img-fluid rounded shadow-lg"
              style={{ maxHeight: "350px" }}
            />
          </div>
        </div>
      </section>

        </div>
    );
}

export default WhoWeAre;