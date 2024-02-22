import React from 'react';
import Anime from "../assets/anime.png";
import pro2 from "../assets/pro2.png";
import carno from "../assets/Carno-Flora.gif";
import note from "../assets/note.png";
import work from "../assets/work.png";
import port from "../assets/port.png";






const projects = [
  {
    title: 'Anime Info Sheet',
    description: 'A place where you can get all the information on any anime! <a href="https://github.com/gooseman789/Project-1" target="_blank" rel="noopener noreferrer"> Click For Repo </a>',
    image: `${Anime}`,
    link: 'https://gooseman789.github.io/Project-1/',

  },
  {
    title: 'Personality Blog',
    description: 'A site you can go to take a personality test to put you into a group of likeminded people to chat on a blog with! <a href="https://github.com/cliffordrouzeau/Project-2" target="_blank" rel="noopener noreferrer"> Click For Repo </a>',
    image: `${pro2}`,
    link: 'https://class-project-2-406702-14426cf875e9.herokuapp.com/',

  },
  {
    title: 'Carno-Flora',
    description: 'A ecomers store! <a href="https://github.com/FrattiJ/Carno-Flora" target="_blank" rel="noopener noreferrer"> Click For Repo </a>',
    image: `${carno}`,
    link: 'https://carno-flora.onrender.com/',

  },
  {
    title: 'Note Taker',
    description: 'A place to keep notes on whatever you need! <a href="https://github.com/cliffordrouzeau/Note-Taker-Week11" target="_blank" rel="noopener noreferrer"> Click For Repo </a>',
    image: `${note}`,
    link: 'https://blooming-everglades-17243-77de2d5e3e91.herokuapp.com/',

  },
  {
    title: 'Workday Scheduler',
    description: 'A simple calendar app for scheduling your work day. <a href="https://github.com/cliffordrouzeau/work-day-scheduler-week5" target="_blank" rel="noopener noreferrer"> Click For Repo </a>',
    image: `${work}`,
    link: 'https://cliffordrouzeau.github.io/work-day-scheduler-week5/',

  },
  {
    title: 'Portfolio',
    description: 'My portfolio site. <a href="https://github.com/cliffordrouzeau/week-20" target="_blank" rel="noopener noreferrer"> Click For Repo </a>',
    image: `${port}`,
    link: '',

  },
];

const Portfolio = () => {
  return (
    <div className="portfolio-page bg-gray-800 p-4">
      <h1 className="text-3xl font-bold mb-4 text-white">My Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="project-card mb-4 relative">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto mb-2 rounded transition-opacity duration-300 ease-in-out hover:opacity-80"
                style={{ maxWidth: '100%' }}
              />
            </a>
            <h2 className="text-xl font-bold mb-2 text-white">{project.title}</h2>
            <p className="text-white" dangerouslySetInnerHTML={{ __html: project.description }}></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
