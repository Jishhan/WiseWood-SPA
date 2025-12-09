import React from 'react'

const Commercial = () => {
 const projects = [
    { title: "Hospital Lobby", image: "/Images/hospitalLobby-1.png", link: "/hospitalLobby" },
    { title: "Dr. Cabin", image: "/Images/dr.cabin-1.png", link: "#" },
    { title: "Private Room", image: "/Images/privateRoom-1.png", link: "#" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-between gap-10 mb-24"
          >

            {/* TEXT SECTION (30%) */}
            <div className="w-full md:w-[30%] text-center md:text-left">
              <h2 className="text-[30px] font-semibold mb-4">
                {project.title}
              </h2>

              <a
                href={project.link}
                className="
                  inline-block 
                  border border-[#6b4f3b] 
                  text-[#6b4f3b] 
                  px-5 py-2 
                  rounded-md 
                  text-sm
                  transition-all
                  hover:bg-[#6b4f3b] 
                  hover:text-white
                "
              >
                Explore More
              </a>
            </div>

            {/* IMAGE SECTION (70%) */}
            <div className="w-full md:w-[70%]">
              <a href={project.link} className="block">
                <div className="overflow-hidden rounded-3xl shadow-xl bg-gray-200 p-1">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full 
                      h-[420px] 
                      md:h-[520px] 
                      lg:h-[580px]
                      object-cover 
                      rounded-3xl 
                      hover:scale-105 
                      transition-all 
                      duration-500
                    "
                  />
                </div>
              </a>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Commercial
