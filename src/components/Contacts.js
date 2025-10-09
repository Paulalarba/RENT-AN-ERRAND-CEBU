import React, {useRef} from 'react';
import emailjs from 'emailjs-com';

function Contacts() {
  return (
    <section className="contacts" id="contacts px-10 py-10">
      <div className="container">
        <div className="row gy-5">

          {/* Left column (form) */}
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <input type="text" className="form-control" placeholder="Name" />
              </div>
              <div className="form-group mb-3">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="form-group mb-3">
                <textarea className="form-control" rows="4" placeholder="Message"></textarea>
              </div>
              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" id="gridcheck" />
                <label className="form-check-label" htmlFor="gridcheck">
                  Send me a copy of this message
                </label>
              </div>
              <button type="submit" className="btn btn-primary">Send</button>
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
  );
}

export default Contacts;
