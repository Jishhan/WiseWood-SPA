import React from "react";

const ReferrancePage = ({ title, images }) => {
  const isGrid = images.length >= 4; // 4 or more => grid

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Page Title */}
        <h1 className="text-4xl font-semibold text-center mb-12">
          {title}
        </h1>

        {/* Images Layout */}
        <div
          className={
            isGrid
              ? "grid grid-cols-1 md:grid-cols-2 gap-10"
              : "flex flex-col gap-16"
          }
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl shadow-xl bg-gray-200 p-1"
            >
              <img
                src={img}
                alt={title + index}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferrancePage;