import React from "react";
import { Footerdata } from "./Footerdata";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const icons = [Facebook, Linkedin, Twitter];

  return (
    <footer className="mt-20">
      {/* TOP SECTION */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between gap-10">
        {/* LEFT */}
        <div className="text-center lg:text-left">
          <h2 className="font-semibold text-2xl sm:text-3xl leading-snug">
            Discover Real Estate Ideas <br />
            from your own Ease!
          </h2>

          <div className="flex gap-3 mt-5 justify-center lg:justify-start">
            {icons.map((Icon, index) => (
              <div
                key={index}
                className="flex h-9 w-9 bg-blue-100 items-center justify-center rounded-md cursor-pointer hover:bg-blue-600 transition"
              >
                <Icon className="text-blue-600 hover:text-white" />
              </div>
            ))}
          </div>
        </div>

        {/* LINKS */}
        <div className="flex flex-col sm:flex-row gap-10 text-center sm:text-left">
          {Footerdata.map((foot, index) => (
            <ul key={index}>
              <li className="font-semibold text-lg mb-3">{foot.quick}</li>

              <li className="mb-2 text-gray-500 hover:text-blue-600 transition">
                <Link to="/">{foot.home}</Link>
              </li>

              <li className="mb-2 text-gray-500 hover:text-blue-600 transition">
                <Link to="/agents">{foot.agent}</Link>
              </li>

              <li className="mb-2 text-gray-500 hover:text-blue-600 transition">
                <Link to="/contact">{foot.contact}</Link>
              </li>

              <li className="mb-2 text-gray-500 hover:text-blue-600 transition">
                <Link to="/about">{foot.about}</Link>
              </li>

              <li className="mb-2 text-gray-500 hover:text-blue-600 transition">
                <Link to="/faq">{foot.faq}</Link>
              </li>
            </ul>
          ))}
        </div>
      </div>

      {/* DIVIDER */}
      <hr className="my-10 w-full max-w-6xl mx-auto border-gray-200" />

      {/* BOTTOM */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left pb-5">
        <p className="text-sm sm:text-base font-semibold">
          © 2024 Realestic. All rights reserved.
        </p>

        <p className="text-sm text-gray-500">
          Built with zaid afzalzada ❤️ for modern real estate
        </p>
      </div>
    </footer>
  );
}
