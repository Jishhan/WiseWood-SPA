import React from "react";

const AllProjectsSection = () => {
  const projects = [
    { title: "Sense and Simplicity", image: "/assets/images/clinic.jpg", link: "#" },
    { title: "Dream Kitchen", image: "/assets/images/clinic.jpg", link: "#" },
    { title: "A Burst of Color", image: "/assets/images/clinic.jpg", link: "#" },
    { title: "Contemporary Living", image: "/assets/images/clinic.jpg", link: "#" },
    { title: "Away from the City", image: "/assets/images/clinic.jpg", link: "#" },
    { title: "Dark Secret", image: "/assets/images/clinic.jpg", link: "#" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20"
          >
            {/* TEXT BLOCK */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                {project.title}
              </h2>

              <a
                href={project.link}
                className="inline-block border border-brown-600 text-brown-600 px-6 py-3 rounded-lg text-lg font-medium hover:bg-brown-600 hover:text-white transition-all"
              >
                Explore More
              </a>
            </div>

            {/* IMAGE BLOCK (CLICKABLE) */}
            <a
              href={project.link}
              className="w-full md:w-1/2 block"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[350px] md:h-[450px] object-cover rounded-3xl shadow-lg hover:opacity-90 transition"
              />
            </a>
          </div>
        ))}

      </div>
    </section>
  );
};

export default AllProjectsSection;