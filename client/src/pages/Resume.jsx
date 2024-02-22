import React from 'react';

const resume = () => {
  return (
    <div className="bg-gray-800 min-h-screen text-white p-8">
     <h2 className="text-2xl font-bold mb-4">Resume</h2>
     <h4 className="mb-4"><a href="" className="text-blue-500">Download My Resume</a></h4>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Front-end Proficientcies</h2>
        <ul className="list-disc list-inside">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>jQuery</li>
          <li>Responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>

        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Back-end Proficientcies</h2>
        <ul className="list-disc list-inside">
          <li>APIs</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>GraphQL</li>

        </ul>
      </div>
    </div>
  );
};

export default resume;
