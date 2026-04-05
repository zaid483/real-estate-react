import React from "react";
import { Visiondata } from "./Visiondata";
import { House } from "lucide-react";

export default function Vision() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 mt-10">
          <h5 className="flex lg:justify-start items-center gap-2 font-semibold">
            <div className="w-2 h-2 bg-blue-600"></div>
            Our Vision
          </h5>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mt-4 leading-tight">
            The values that drive everything we do
          </h2>

          <button className="btn btn-dark rounded-5 px-4 py-2 mt-10">
            Learn more
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-2/5">
          {Visiondata.map((Vdata) => {
            const Icon = Vdata.icon;
            return (
              <div key={Vdata.id} className="flex gap-4 mt-6 items-start">
                <div className="bg-blue-600 w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                  <Icon className="text-white" />
                </div>

                <div>
                  <h3 className="font-semibold text-xl sm:text-2xl">
                    {Vdata.title}
                  </h3>
                  <p className="text-gray-500 font-medium mt-2">{Vdata.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
