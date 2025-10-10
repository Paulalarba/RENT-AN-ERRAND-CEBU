import React, { useState } from "react";

function SignUp() {
  return (
    <div>
      <section className="min-h-screen flex flex-col md:flex-row">
        <div className="md:w-1/2 w-full bg-[#f9f7de] flex items-center justify-center p-10">
          <img
          src="/images/bg.png"
          alt="Rent An Errand Cebu background"
          className="max-w-full h-auto rounded-2x1 shadow-lg"
          />
        </div>
        <div className="md:w-1/2 w-full bg-[#f9f7de] flex items-center justify-center p-10">
          <form className="w-full max-w-md space-y-6">
            <h2 className="text-3xl font-bold text-[#420909] text-center mb-4">Create Your Accout</h2>
            <div>
              <label className="block text-[#420909] font-medium mb-2">FullName</label>
              <input type="text" placeholder="Enter Your Name" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#420909]"></input>
            </div>
            <div>
              <label className="block text-[#420909] font-medium mb-2">Email</label>
              <input type="email" placeholder="Enter Your Email" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#420909]"></input>
            </div>
            <div>
              <label className="block text-[#420909] font-medium mb-2">Age</label>
              <input type="text" placeholder="Enter Your Age" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#420909]"></input>
            </div>
            <div>
              <label className="block text-[#420909] font-medium mb-2">FullName</label>
              <input type="text" placeholder="Enter Your Name" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#420909]"></input>
            </div>
            <div>
              <label className="block text-[#420909] font-medium mb-2">FullName</label>
              <input type="text" placeholder="Enter Your Name" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#420909]"></input>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
