import React from "react";
import { img11 } from "../../assets/image";

export default function Choose() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
      {/* TEXT */}
      <div className="text-center lg:text-left">
        <h5 className="flex items-center justify-center lg:justify-start gap-2 font-semibold">
          <div className="w-2 h-2 bg-blue-600"></div>
          Why choose us
        </h5>

        <h2 className="text-start text-2xl sm:text-3xl lg:text-4xl font-semibold mt-4 leading-tight">
          What makes us the right partner for <br className="hidden sm:block" />
          your real estate?
        </h2>
      </div>

      {/* IMAGE */}
      <div className="mt-8 flex justify-center">
        <img
          src={img11}
          className="rounded-2xl object-cover w-full h-[250px] sm:h-[400px] lg:h-[550px]"
          alt=""
        />
      </div>
    </div>
  );
}
