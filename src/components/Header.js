import React from "react";
import '../styles/header.css';

function Header(){
     return (
      <section className="header_container">
        <div className="header d-flex justify-content-between align-items-center px-4 py-3 bg-light shadow-sm">
          <a
            href="#"
            className="logo text-decoration-none fw-bold fs-5 text-dark"
          >
            Rent-an-Errand Cebu
          </a>

          <div className="header_right">
            <a href="#about-us" className="mx-2 text-dark text-decoration-none">
              About Us
            </a>
            <a href="#how-it-works" className="mx-2 text-dark text-decoration-none">
              How It Works
            </a>
            <a href="#contacts" className="mx-2 text-dark text-decoration-none">
              Contacts
            </a>
          </div>
        </div>
        </section>
     );
}
export default Header;