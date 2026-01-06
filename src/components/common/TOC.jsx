// src/components/common/TOC.jsx
import React from "react";
import { FiArrowRight } from "react-icons/fi";

export default function TOC({ items }) {
  const handleClick = (id) => {
    // Scroll to the section with smooth behavior
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <aside className="sticky top-20 hidden lg:block border border-gray-200 rounded-xl p-5 bg-white shadow-md">
      <h4 className="font-semibold text-primary mb-4">Table of Contents</h4>
      <ul className="space-y-3 text-sm">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleClick(item.id)}
              className="flex items-center justify-between w-full p-2 rounded-lg transition-all duration-300 text-gray-600 hover:bg-gray-100 hover:text-primary"
            >
              <div className="flex items-center gap-2">
                {item.icon}
                {item.title}
              </div>
              <FiArrowRight className="text-primary text-lg" />
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}