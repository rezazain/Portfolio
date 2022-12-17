import React from "react";
import git from "../assets/git.png";
import javascript from "../assets/javascript.png";
import nextjs from "../assets/nextjs.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      img: git,
      title: "Git",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      img: javascript,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      img: nextjs,
      title: "NextJS",
      style: "shadow-white",
    },
    {
      id: 4,
      img: react,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      img: tailwind,
      title: "Tailwind",
      style: "shadow-sky-500",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">these are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {experiences.map(({ id, img, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={img} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
