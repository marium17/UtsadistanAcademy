import React from 'react';

function WhyChooseUs(props) {
    return (
        <div>
             {/* Why Choose Us */}
      <section className="container my-5">
        <h2 className="text-center fw-bold mb-4">Why Choose Us?</h2>
        <div className="row g-4">
          {[
            "Experienced Faculty with strong educational background",
            "Flexible learning hours",
            "Personalized Attention to each learner",
            "Youtube-based Micro-Learning Support",
            "Proven Track Record of Success",
          ].map((reason, index) => (
            <div className="col-md-6" key={index}>
              <div className="d-flex align-items-start">
                <span className="text-primary fs-4 me-2">✔</span>
                <p className="mb-0">{reason}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
        </div>
    );
}

export default WhyChooseUs;