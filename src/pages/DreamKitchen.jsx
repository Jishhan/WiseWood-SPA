import React from "react";
import ProjectCaseStudy from "../components/ProjectCaseStudy";

const DreamKitchen = () => {
  return (
    <ProjectCaseStudy
      title="Dream Kitchen"
      subtitle="A modular kitchen crafted for functionality and refined elegance."
      finalImages={[
        "/Images/dreamkitchen-0.png",
        "/Images/dreamkitchen-1.png",
         "/Images/dreamkitchen-2.png",
      ]}
      journeySlides={[
        {
          image: "/Images/dreamkitchen-0.png",
          title: "Raw Structure",
          description: "Initial bare kitchen space before development.",
        },
        {
          image: "/Images/dreamkitchen-0.png",
          title: "Planning & Layout",
          description: "Workflow and appliance positioning carefully mapped.",
        },
        {
          image: "/Images/dreamkitchen-0.png",
          title: "Cabinet Installation",
          description: "Premium modular cabinetry installation phase.",
        },
        {
          image: "/Images/dreamkitchen-0.png",
          title: "Final Completion",
          description: "Luxury finishes and perfect lighting completed the space.",
        },
         {
          image: "/Images/dreamkitchen-0.png",
          title: "Final Completion",
          description: "Luxury finishes and perfect lighting completed the space.",
        },
      ]}
    />
  );
};

export default DreamKitchen;