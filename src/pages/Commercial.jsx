import React from "react";
import { Link } from "react-router-dom";

const Commercial = () => {
  const projects = [
    { title: "Hospital Lobby", image: "/Images/hospitalLobby-1.png", link: "/hospitalLobby" },
    { title: "Dr. Cabin", image: "/Images/dr.cabin-1.png", link: "/dr.cabin" },
    { title: "Private Room", image: "/Images/privateRoom-1.png", link: "/private-room" },
  ];

  return (
    <section className="py-24 bg-[#F5F3EF]">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-16 mb-32`}
          >

            {/* TEXT SECTION */}
            <div className="w-full md:w-[35%] text-center md:text-left">
              <h2 className="text-3xl md:text-4xl tracking-wide mb-6 text-[#1C1C1C]">
                {project.title}
              </h2>

              <Link
                to={project.link}
                className="
                  inline-block
                  border-b
                  border-[#A1866F]
                  text-[#A1866F]
                  tracking-widest
                  text-sm
                  pb-1
                  hover:opacity-70
                  transition
                "
              >
                VIEW PROJECT
              </Link>
            </div>

            {/* IMAGE SECTION */}
            <div className="w-full md:w-[65%]">
              <Link to={project.link} className="block">
                <div className="overflow-hidden shadow-lg bg-white">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full
                      h-[420px]
                      md:h-[520px]
                      lg:h-[600px]
                      object-cover
                      hover:scale-105
                      transition
                      duration-700
                      ease-out
                    "
                  />
                </div>
              </Link>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Commercial;
