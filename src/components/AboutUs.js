import React from "react";
import '../styles/about.css';
function AboutUS(){
    return(
            <section className="about-us" id="about-us">
        <div className="container-fluid about_container">
          <div className="row align-items-center">
            <div className="col-md-6 text-section">
              <h1 style={{ color: "#420909", fontSize: "80px" }}>Get Help. Earn</h1>
              <h1 style={{ color: "#420909", fontSize: "80px" }}>Fast. Live Easy</h1>
              <p style={{ fontSize: "20px" }}>
                Rent-an-Errand Cebu is a local online platform that connects busy people who
                need help with everyday tasks to trusted locals who are ready to earn by
                offering their skills. Whether it’s cleaning, buying groceries, running errands,
                or simple household chores, our goal is to make life easier for Cebu City
                residents while creating opportunities for others to earn extra income—fast,
                simple, and hassle-free.
              </p>

              <div className="btn-container">
                <button
                  type="button"
                  className="my-button1"
                  onClick={() => (window.location.href = '/clientSignUp.html')}
                >
                  POST A JOB
                </button>
                <button
                  type="button"
                  className="my-button2"
                  onClick={() => (window.location.href = '/UserSignUp.html')}
                >
                  FIND WORKS
                </button>
              </div>
            </div>

            <div className="col-md-6 image-section">
              <img
                src="/images/bg.png"
                className="img-fluid"
                style={{ maxWidth: "150px" }}
                alt="logo"
              />
            </div>
          </div>
        </div>
      </section>
    );
}
export default AboutUS;