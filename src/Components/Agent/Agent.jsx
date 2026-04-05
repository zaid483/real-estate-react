import React from "react";

const agents = [
  {
    id: 1,
    name: "John Carter",
    role: "Senior Agent",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Property Consultant",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Real Estate Expert",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800",
  },
  {
    id: 4,
    name: "Emma Johnson",
    role: "Luxury Specialist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800",
  },
  {
    id: 5,
    name: "David Lee",
    role: "Investment Advisor",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800",
  },
  {
    id: 6,
    name: "Sophia Martinez",
    role: "Home Specialist",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800",
  },
];

export default function Agent() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
      {/* HEADER */}
      <div className="text-center">
        <h5 className="flex items-center justify-center gap-2 font-semibold">
          <div className="w-2 h-2 bg-blue-600"></div>
          Our Agents
        </h5>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold mt-4 leading-tight">
          Meet our professional real estate experts
        </h2>
      </div>

      {/* CARDS (same style as your Home/Blog) */}
      <div className="flex flex-wrap mt-10">
        {agents.map((agent) => (
          <div key={agent.id} className="w-full sm:w-1/2 lg:w-1/3 p-3">
            <div className="rounded-2xl overflow-hidden transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
              {/* IMAGE */}
              <img
                src={agent.image}
                alt={agent.name}
                className="w-full h-64 object-cover"
              />

              {/* CONTENT */}
              <div className="p-4 bg-white text-center">
                <h3 className="font-semibold text-xl">{agent.name}</h3>

                <p className="text-gray-500 mt-1 text-sm">{agent.role}</p>

                {/* BUTTON */}
                <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-700 transition">
                  Contact
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
