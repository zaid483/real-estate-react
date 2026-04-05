import React from "react";

export default function Call() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl px-6 sm:px-10 lg:px-16 py-12 sm:py-16 text-center overflow-hidden shadow-2xl">
        {/* Glow Effect */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

        {/* CONTENT */}
        <div className="relative z-10">
          <h4 className="text-white font-semibold text-base sm:text-lg lg:text-xl mb-4 tracking-wide">
            Want to Book a Call?
          </h4>

          <p className="text-white font-semibold text-2xl sm:text-3xl lg:text-5xl leading-tight mb-6">
            Ready to make your step in real <br className="hidden sm:block" />
            estate? Book Now.
          </p>

          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
            View Properties
          </button>
        </div>
      </div>
    </div>
  );
}
