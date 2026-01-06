// src/components/About/FounderSection.jsx
import React from "react";

export default function FounderSection({ data }) {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-8 bg-gray-50 rounded-xl p-8 shadow-lg">
      {/* Image */}
      <div className="lg:w-1/3 w-full">
        <img
          src={data.image}
          alt={data.title}
          className="rounded-xl object-cover shadow-lg w-full"
        />
      </div>

      {/* Content */}
      <div className="flex-1 space-y-4">
        <div className="flex items-center gap-3 mb-2">
          {data.icon}
          <h2 className="text-3xl font-semibold text-primary">{data.title}</h2>
        </div>

        <p className="text-gray-700 leading-relaxed text-lg">{data.content}</p>

        {/* Quote */}
        {data.quote && (
          <blockquote className="border-l-4 border-themeSecondary pl-4 italic text-gray-800 text-lg bg-white p-4 rounded shadow-sm">
            {data.quote}
          </blockquote>
        )}

        {/* Achievements */}
        {data.achievements && (
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {data.achievements.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}