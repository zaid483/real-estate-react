import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Sliderdata } from "./Sliderdata";
import { Quote, Star } from "lucide-react";

export default function Slider() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pb-14">
      <Splide
        options={{
          type: "fade",
          rewind: true,
          autoplay: true,
          interval: 3200,
          pauseOnHover: true,
          arrows: false,
          pagination: true,
          speed: 900,
          easing: "ease-in-out",
        }}
      >
        {Sliderdata.map((item) => (
          <SplideSlide key={item.id}>
            {/* Gradient Border */}
            <div className="group relative p-[2px] rounded-3xl bg-gradient-to-br from-blue-600 to-blue-400 transition duration-500 hover:scale-[1.02]">
              {/* Card */}
              <div className="relative bg-gradient-to-br from-blue-600/90 to-blue-400/90 backdrop-blur-xl text-white rounded-3xl p-6 sm:p-10 lg:p-14 flex flex-col lg:flex-row items-center gap-8 shadow-2xl min-h-[230px]">
                {/* Glow Layer */}
                <div className="absolute inset-0 rounded-3xl bg-white/10 opacity-10"></div>

                {/* Quote Icon */}
                <Quote className="absolute top-6 right-6 opacity-20 w-16 h-16" />

                {/* Avatar */}
                <div className="relative shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-white/40 shadow-lg"
                  />
                </div>

                {/* Content */}
                <div className="text-center lg:text-left max-w-2xl">
                  {/* Stars */}
                  <div className="flex justify-center lg:justify-start gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-300 text-yellow-300"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-base sm:text-lg lg:text-xl leading-relaxed font-medium opacity-95">
                    “{item.text}”
                  </p>

                  {/* Info */}
                  <div className="mt-6">
                    <h4 className="text-lg sm:text-xl font-semibold tracking-wide">
                      {item.name}
                    </h4>
                    <p className="text-sm opacity-75">{item.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
