import React from 'react';

function HowItWorks() {
  return (
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
  );
}

export default HowItWorks;
