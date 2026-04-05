import React from "react";
import { img12, img15, img16 } from "../../../assets/image";

export default function Aboutcard() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
      {/* TOP */}
      <div className="text-center">
        <button className="rounded-full bg-gray-100 py-2 px-4 text-blue-600 font-semibold text-sm">
          About Us
        </button>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-semibold mt-4 leading-tight">
          Connect with our experts and bring <br className="hidden sm:block" />
          your <span className="text-blue-600">Real Estate</span> ideas to life
        </h1>
      </div>

      {/* IMAGES SECTION */}
      <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mt-12">
        {/* LEFT IMAGE */}
        <div className="w-full lg:w-1/2 overflow-hidden rounded-2xl group">
          <img
            src={img15}
            className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover transition duration-500 group-hover:scale-110"
            alt=""
          />
        </div>

        {/* RIGHT IMAGES */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <div className="overflow-hidden rounded-2xl group">
            <img
              src={img16}
              className="w-full h-52 sm:h-56 object-cover transition duration-500 group-hover:scale-110"
              alt=""
            />
          </div>

          <div className="overflow-hidden rounded-2xl group">
            <img
              src={img12}
              className="w-full h-52 sm:h-56 object-cover transition duration-500 group-hover:scale-110"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* TEXT SECTION */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 mt-16">
        {/* LEFT */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
            Your trusted real estate <br className="hidden sm:block" /> experts:
          </h1>
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-base sm:text-lg text-gray-600 font-medium">
            With years of local expertise, we’re committed to helping you buy,
            sell, or invest in properties with confidence. Our personalized
            approach ensures every client's unique needs are met with
            professionalism and care.
          </p>

          <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full mt-6 hover:scale-105 hover:shadow-lg transition duration-300">
            View Properties
          </button>
        </div>
      </div>
    </div>
  );
}
