import React from "react";

function Header(){
     return (
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
     );
}
export default Header;