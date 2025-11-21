import React from "react";
import { Link } from "react-router-dom"; 

const Home = () => {
  return (
    <section className="home w-full">
      {/* Hero Video */}
      <main className="video-sec w-full">
        <video className="w-full h-[70vh] object-cover" autoPlay muted loop>
          <source
            src="https://ambiencestudio.co.in/wp-content/uploads/2025/05/MicrosoftTeams-video-2.mp4"
            type="video/mp4"
          />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </main>

      {/* Our Projects */}
      <div className="our-projects-wrap py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-light text-red-700 max-w-3xl mx-auto mb-12">
            Award winning global luxury design company, crafting unique spaces
            since 2019
          </h1>

          <h2 className="text-2xl font-semibold mb-8">Our Projects</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 border-b-4 border-b-red-800 pb-12">
            {/* Commercial Project */}
            <div className="w-full sm:w-[250px] md:w-[300px] lg:w-[540px] h-[400px] md:h-[675px] rounded-lg overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="/images/comercial.png"
                alt="Commercial"
              />
              <p className="text-lg font-medium mt-2">Commercial</p>
            </div>

            {/* Residential Project */}
            <div className="w-full sm:w-[250px] md:w-[300px] lg:w-[540px] h-[400px] md:h-[675px] rounded-lg overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-lg"
                src=""
                alt="Residential"
              />
              <p className="text-lg font-medium mt-2">Residential</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Us */}
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8">
        <div className="about-logo flex-1">
          <img src="" alt="WiseWood Logo" className="w-full max-w-md mx-auto" />
        </div>
        <div className="about-pera flex-1 text-center md:text-left">
          <h3 className="text-2xl font-semibold mb-4">About Us</h3>
          <p className="mb-4">
            Ambience Studio is a global interior design firm founded by a
            husband-and-wife team, blending diverse cultures and creative
            visions. With roots in Brazil and India, we bring a unique,
            international perspective to every project.
          </p>
          <button className="bg-red-700 text-white px-6 py-2 rounded hover:bg-red-600 transition">
            Know More
          </button>
        </div>
      </div>

      {/* See All Projects */}
      <div className="see-all bg-red-700 py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-white text-2xl md:text-3xl font-light max-w-lg">
            Introducing Ambience Studio, our ultra-luxury interior design.
          </p>
          <button className="bg-white text-red-700 px-6 py-2 rounded hover:bg-gray-100 transition">
            SEE ALL PROJECTS
          </button>
        </div>
      </div>

      {/* Image Design */}
      <div className="container mx-auto px-4 py-12 flex justify-center">
        <img
          src="./assets/images/home.png"
          alt="Design"
          className="w-full max-w-3xl rounded-lg"
        />
      </div>

      {/* Our Process */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h3 className="text-3xl md:text-4xl font-light text-red-700 mb-4">
          Since 2019, we've been delivering premium commercial and residential
          spaces across India.
        </h3>
        <p className="text-xl mb-12">Our Process</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="flex flex-col items-center border-b-4 border-r-4 border-red-800 p-4 gap-4 rounded-lg"
            >
              <img
                src="./assets/images/process-i.png"
                alt="Process"
                className="w-20 h-auto"
              />
              <div className="text-center">
                <div className="num mb-2">
                  <p className="border border-red-800 rounded-full px-4 py-2 inline-block">{`0${num}`}</p>
                </div>
                <h6 className="font-semibold mb-1">BRIEFING</h6>
                <p className="text-sm">
                  BRIEFING, it appears to be part of a process section likely
                  outlining the steps Ambience Studio follows in a project.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Project Section */}
      <div className="container mx-auto px-4 py-16 flex flex-col items-center gap-8 border-b-2 border-red-800">
        <h4 className="text-2xl font-semibold">A Seamless Experience</h4>
        <p className="text-center max-w-xl">
          With Ambience Studio, transforming your space is as smooth an
          experience as sliding this bar
        </p>
        <img src="" alt="Project" className="w-full max-w-3xl rounded-lg" />
        <Link to='/allproject'
          className="mt-4 px-6 py-2 border border-black rounded hover:bg-gray-100 transition"
        >
          SEE ALL PROJECTS
        </Link>
      </div>

      {/* Instagram Section */}
      <div className="container mx-auto px-4 py-8 flex justify-between max-w-md">
        <a
          href="#"
          className="text-black font-medium hover:text-red-700 transition"
        >
          WiseWood.3D
        </a>
        <a
          href="#"
          className="text-black font-medium hover:text-red-700 transition"
        >
          Follow Now
        </a>
      </div>

      {/* Contact Us Section */}
      <div className="contact-us-wrapper bg-red-700 text-white text-center py-16 px-4">
        <h4 className="text-2xl font-semibold mb-4">
          Looking to elevate the aesthetic of your space?
        </h4>
        <p className="mb-6">
          Have a question for us? Let’s talk. <br />
          For all project inquiries, please email <br />
          ambiencestudioinfo@gmail.com with the subject NEW PROJECT
        </p>
        <a
          href="#"
          className="bg-white text-red-700 px-6 py-2 rounded hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default Home;
