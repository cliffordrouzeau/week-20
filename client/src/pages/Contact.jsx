import React from "react";

export default function About() {
  return (
    <div className="p-4 bg-gray-800 h-screen flex items-center justify-center">
      <div className="max-w-md w-full">
        <h2 className="sm:text-2xl text-xl text-white font-bold text-neutral-800 p-2 text-center">
          Contact Us
        </h2>
        <form className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="grid grid-cols-1 gap-y-6">
            <input
              type="text"
              name="Full name"
              placeholder="Full Name"
              className="input-field"
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              className="input-field"
            />
            <input
              type="tel"
              name="Phone Number"
              placeholder="Phone Number"
              className="input-field"
            />
            <input
              type="text"
              name="Subject"
              placeholder="Subject"
              className="input-field"
            />
            <textarea
              rows={5}
              name="Message"
              placeholder="Message"
              className="input-field"
            />
            <button
              type="submit"
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-white hover:text-gray-800 w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
