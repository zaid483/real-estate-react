import React from "react";
import { Homedata } from "./Homedata";
import { MapPinCheckInside, BedDouble, Bath, Square } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
      {/* TOP TEXT */}
      <div className="flex justify-center lg:justify-start">
        <div className="w-full lg:w-2/3 text-center lg:text-left">
          <h5 className="flex items-center justify-center lg:justify-start gap-2 font-semibold">
            <div className="w-2 h-2 bg-blue-600"></div>
            Properties
          </h5>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-start font-semibold mt-4 leading-tight">
            Ready to buy your dream home? find it here
          </h2>

          <div className="flex justify-start">
            <button className="btn btn-dark rounded-5 px-4 py-2 mt-10">
              All Properties
            </button>
          </div>
        </div>
      </div>

      {/* CARDS */}
      <div className="flex flex-wrap mt-10">
        {Homedata.map((item) => {
          return (
            <div key={item.id} className="w-full sm:w-1/2 lg:w-1/3 p-3">
              <div className="border-0 w-full mx-auto rounded-2xl overflow-hidden transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                <img
                  src={item.img}
                  className="h-64 w-full object-cover"
                  alt=""
                />

                <div className="p-4 bg-white">
                  <div className="flex gap-2 items-center text-sm text-gray-500">
                    <MapPinCheckInside size={16} color="blue" />
                    <p>{item.location}</p>
                  </div>

                  <h4 className="font-semibold text-xl mt-2">{item.name}</h4>

                  <div className="flex gap-4 text-gray-500 mt-3 text-sm">
                    <div className="flex gap-1 items-center">
                      <BedDouble size={16} />
                      <p>{item.bed}</p>
                    </div>

                    <div className="flex gap-1 items-center">
                      <Bath size={16} />
                      <p>{item.Bath}</p>
                    </div>

                    <div className="flex gap-1 items-center">
                      <Square size={16} />
                      <p>{item.Square}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
