import React, { useState, useEffect } from "react";
import { Advantagedata } from "./Advantagedata";
import { img10, img11, img13 } from "../../assets/image";

export default function Advantage() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === Advantagedata.length - 1 ? 0 : prev + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const images = [img10, img11, img13];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
      {/* TOP */}
      <div className="text-center">
        <h5 className="flex items-center justify-center gap-2 font-semibold">
          <div className="w-2 h-2 bg-blue-600"></div>
          Our Vision
        </h5>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mt-4 leading-tight">
          Discover the <span className="text-blue-600">advantages</span> and
          <br className="hidden sm:block" /> exclusive benefits
        </h2>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mt-12">
        {/* LEFT SIDE (CLICKABLE) */}
        <div className="w-full lg:w-1/2">
          {Advantagedata.map((advants, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`mb-6 pl-5 border-l-4 cursor-pointer transition-all duration-300 ${
                activeIndex === index
                  ? "border-blue-600 opacity-100"
                  : "border-gray-200 opacity-60 hover:opacity-100"
              }`}
            >
              <h3 className="font-semibold text-xl sm:text-2xl mt-2">
                {advants.title}
              </h3>
              <p className="font-medium text-gray-500 mt-2">{advants.body}</p>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE (IMAGE) */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={images[activeIndex]}
            alt=""
            className="rounded-2xl object-cover w-full max-w-md transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
}
