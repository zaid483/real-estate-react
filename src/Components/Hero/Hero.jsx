import React from "react";
import { Herodata } from "./Herodata";

export default function Hero() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {Herodata.map((data, index) => (
        <div key={index} className="text-center mt-16 sm:mt-20 lg:mt-24 w-full">
          <button className="rounded-5 bg-gray-100 py-2 px-3 text-blue-600 font-semibold text-sm sm:text-base">
            {data.btn}
          </button>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-semibold mt-4 leading-tight">
            Find the home that fits <br className="hidden sm:block" />
            your life
            <span className="text-blue-600"> perfectly</span>
          </h1>

          {/* IMAGE */}
          <img
            src={data.img}
            alt=""
            className="
              mt-10 sm:mt-14 lg:mt-16
              mx-auto
              block
              w-full sm:w-[90%] lg:w-[80%]
              rounded-5
            "
          />
        </div>
      ))}
    </div>
  );
}
