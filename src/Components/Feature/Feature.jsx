import React from "react";
import { Featuredata } from "./Featuredata";
import { img8, img9 } from "../../assets/image";

export default function Feature() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* TOP TEXT */}
      <div className="text-center">
        <h5 className="flex items-center justify-center gap-2 font-semibold">
          <div className="w-2 h-2 bg-blue-600"></div>
          Our Vision
        </h5>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mt-4 leading-tight">
          The values that drive everything we do
        </h2>
      </div>

      {/* FEATURES CARDS */}
      <div className="flex flex-wrap mt-10">
        {Featuredata.map((Feat, index) => {
          const IconComponent = Feat.iconss;
          return (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="rounded-xl transition duration-300 hover:shadow-lg">
                <div className="p-4">
                  <div className="bg-sky-50 w-12 h-12 mb-5 mt-5 flex justify-center items-center rounded-xl">
                    <IconComponent className="text-blue-600 w-7 h-7" />
                  </div>

                  <h4 className="text-xl sm:text-2xl font-semibold">
                    {Feat.title}
                  </h4>

                  <p className="text-gray-500 mt-3 text-base sm:text-lg font-medium">
                    {Feat.body}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* IMAGE + TEXT SECTION */}
      <div className="flex flex-col lg:flex-row items-center justify-between mt-20 gap-10">
        {/* IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={img8}
            className="rounded-2xl w-full max-w-md lg:max-w-full"
            alt=""
          />
        </div>

        {/* TEXT */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h4 className="text-lg sm:text-xl font-semibold">At Realistic,</h4>

          <p className="text-gray-500 text-base sm:text-lg font-medium mt-3">
            Our mission is simple: to provide you with the best real estate
            solutions, tailored to meet your needs. We understand that finding
            the perfect property is more than just a transaction—it’s about
            creating a space where life happens. Our dedicated team combines
            industry expertise.
          </p>

          <img
            src={img9}
            className="mt-6 mx-auto lg:mx-0 w-28 sm:w-32"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
