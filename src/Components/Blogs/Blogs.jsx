import React from "react";
import { Blogdata } from "./Blogdata";

export default function Blogs() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
      {/* TOP */}
      <div className="text-center">
        <h5 className="flex items-center justify-center gap-2 font-semibold">
          <div className="w-2 h-2 bg-blue-600"></div>
          Blogs
        </h5>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold mt-4 leading-tight">
          Expert advice and market
          <br className="hidden sm:block" /> updates on real estate
        </h2>
      </div>

      {/* BLOG CARDS */}
      <div className="flex flex-wrap mt-10">
        {Blogdata.map((Bdata, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-3">
            <div className="transition duration-300 hover:scale-105 hover:shadow-lg rounded-2xl overflow-hidden cursor-pointer">
              <img
                src={Bdata.img}
                alt=""
                className="w-full h-56 sm:h-60 lg:h-64 object-cover"
              />

              <div className="p-4 bg-white">
                <button className="mb-3 text-sm bg-sky-100 text-sky-600 px-3 py-1 rounded-xl font-semibold">
                  {Bdata.btn}
                </button>

                <h2 className="text-lg sm:text-xl font-semibold leading-snug">
                  {Bdata.body}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
