import React from "react";
import { Link, NavLink } from "react-router-dom";

function HomePage(){
    return(
        <div className="HomePage">
        <section className="header_container bg-[#f9f7de]">
            <header className="header d-flex justify-content-between align-items-center px-5 py-3 shadow-sm bg-[#f9f7de]">
            <a
                href="#"
                className="logo text-decoration-none fw-bold fs-5 text-dark"
            >
                Rent-an-Errand Cebu
            </a>

            <nav className="header_right">
                <a href="#about-us" className="mx-2 text-red-950 text-decoration-none hover:text-[#420909] transition-colors ">
                About Us
                </a>
                <a href="#how-it-works" className="mx-2 text-red-950 text-decoration-none hover:text-[#420909] transition-colors">
                How It Works
                </a>
                <a href="#contacts" className="mx-2 text-red-950 text-decoration-none hover:text-[#420909] transition-colors">
                Contacts
                </a>
            </nav>
            </header>
        </section>
        <section className="about-us" id="about-us">
        <div className="container-fluid about_container bg-[#f9f7de]">
          <div className="row align-items-center px-10 py-10">
            <div className="col-md-6 text-section">
              <h1 style={{ color: "#420909", fontSize: "45px"  }}>Get Help. Earn Fast. Live Easy.</h1>
              <p style={{ fontSize: "20px" }}>
                Rent-an-Errand Cebu is a local online platform that connects busy people who
                need help with everyday tasks to trusted locals who are ready to earn by
                offering their skills. Whether it’s cleaning, buying groceries, running errands,
                or simple household chores, our goal is to make life easier for Cebu City
                residents while creating opportunities for others to earn extra income—fast,
                simple, and hassle-free.
              </p>

              <div className="btn-container">
                <NavLink to="/Login">
                <button
                  type="button"
                  className="my-button1"
                  style={{
                    border: "2px solid #420909"
                  }}
                >
                  POST A JOB
                </button>
                </NavLink>
                <NavLink to="/SignUp">
                  <button
                    type="button"
                    className="my-button2"
                      style={{
                      border: "2px solid #420909"
                    }}
                  >
                    FIND WORKS
                  </button>
                </NavLink>
              </div>
            </div>

            <div className="col-md-6 image-section">
              <img
                src="/images/bg.png"
                className="img-fluid"
                style={{ width: "100%", height: "auto", maxWidth: "600px" }}
                alt="logo"
              />
            </div>
          </div>
        </div>
      </section>
          <section className="how-it-works bg-[#f9f7de]" id="how-it-works">
      <div className="container-fluid py-10 px-10">
        <div className="row">
          <p className="text-center pb-8" style={{ color: "#420909", fontSize: "40px" }}>
            How Rent an Errand Works
          </p>

          {/* Step 1 */}
          <div className="col-md-3 d-flex align-items-center">
            <div className="row w-100 align-items-center">
              <div className="col-6 text-center">
                <div className="icon-circle">
                  <span className="material-icons">app_registration</span>
                </div>
              </div>
              <div className="col-6 text-section">
                <h6>Step 1: Sign Up & Verify</h6>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="col-md-3 d-flex align-items-center">
            <div className="row w-100 align-items-center">
              <div className="col-6 text-center">
                <div className="icon-circle">
                  <span className="material-icons">post_add</span>
                </div>
              </div>
              <div className="col-6 text-section">
                <h6>Step 2: Post or Find an Errand</h6>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="col-md-3 d-flex align-items-center">
            <div className="row w-100 align-items-center">
              <div className="col-6 text-center">
                <div className="icon-circle">
                  <span className="material-icons">chat</span>
                </div>
              </div>
              <div className="col-6 text-section">
                <h6>Step 3: Connect & Chat</h6>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="col-md-3 d-flex align-items-center">
            <div className="row w-100 align-items-center">
              <div className="col-6 text-center">
                <div className="icon-circle">
                  <span className="material-icons">rate_review</span>
                </div>
              </div>
              <div className="col-6 text-section">
                <h6>Step 4: Get it Done & Review</h6>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
        <section className="contacts" id="contacts">
      <div className="container">
        <div className="row gy-5">
          {/* Left column (form) */}
          <div className="col-md-6">
            <form>
              <div className="form-group mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="form-group mb-3">
                <textarea
                  name="message"
                  className="form-control"
                  rows="4"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" id="gridcheck" />
                <label className="form-check-label" htmlFor="gridcheck">
                  Send me a copy of this message
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </form>
          </div>

          {/* Right column (socials) */}
          <div className="col-md-6 text-center">
            <h3>Socials</h3>
            <div className="row g-3 justify-content-center">
              <div className="col-6 col-sm-3">
                <div className="contacts-icons">
                  <i className="bi bi-facebook"></i>
                  <h6>Facebook</h6>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="contacts-icons">
                  <i className="bi bi-instagram"></i>
                  <h6>Instagram</h6>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="contacts-icons">
                  <i className="bi bi-whatsapp"></i>
                  <h6>WhatsApp</h6>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="contacts-icons">
                  <i className="bi bi-telegram"></i>
                  <h6>Telegram</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
}
export default HomePage;