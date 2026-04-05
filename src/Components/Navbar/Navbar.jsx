import React, { useState } from "react";
import { Navbardata } from "./Navbardata";
import { Link } from "react-router-dom";
import { ChartNoAxesGantt } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="px-4 sm:px-6 lg:px-8 mt-3 w-full max-w-6xl mx-auto">
      <div className="flex justify-between items-center">
        <Link
          to="/"
          className="text-xl sm:text-2xl font-semibold text-black hover:text-gray-500"
        >
          Realestic
        </Link>

        <ul className="hidden lg:flex gap-6">
          {Navbardata.map((bar) => (
            <li key={bar.id} className="font-semibold">
              <Link to={bar.path}>{bar.nav}</Link>
            </li>
          ))}
        </ul>

        <button className="hidden lg:flex btn btn-primary rounded-5 px-4 py-2 font-semibold">
          Contact Us
        </button>

        <button className="lg:hidden text-2xl" onClick={() => setOpen(!open)}>
          <div className="bg-gray-200 w-10 h-10 flex justify-center items-center rounded-5">
            <ChartNoAxesGantt />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden flex flex-col gap-4 mt-4 bg-white p-4 rounded-xl shadow-md"
          >
            {Navbardata.map((bar) => (
              <li key={bar.id} className="font-semibold">
                <Link to={bar.path} onClick={() => setOpen(false)}>
                  {bar.nav}
                </Link>
              </li>
            ))}

            <button className="btn btn-primary rounded-5 px-4 py-2 font-semibold w-full">
              Contact Us
            </button>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
