import React from 'react';

import selfi from "../assets/selfi.png";

function AboutMe() {
  return (
    <div className="about-me flex items-center justify-center h-screen bg-gray-800 text-white p-8">
      <div className="max-w-lg">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <img src={selfi} alt="Clifford Rouzeau" className="mt-4 mb-4 w-24 h-24 rounded-full" />
        <p className="mb-4">
          Hi there! I'm Clifford Rouzeau, and this is my coding journey. Currently on the path of learning to code, I find immense joy and challenge in the world of programming. I am committed to honing my skills every day, working hard and diligently to build a solid foundation in the tech space.
        </p>
        <p>
          My portfolio is a reflection of my dedication and ongoing learning process. I believe in the power of continuous improvement and staying curious in the ever-evolving tech landscape. Feel free to explore my projects and witness my growth in real-time.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
