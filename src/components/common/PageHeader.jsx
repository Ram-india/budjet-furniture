import React from "react";
import pageHeaderImg from "/images/banner/page-header.jpg";
/**
 * PageHeader Component
 * 
 * Props:
 * - title: string → Main heading
 * - subtitle: string → Subheading
 * - image: string → Image path (from /public or imported from src/assets)
 * - height: string (optional) → Custom height like "20vh", defaults to 25vh on desktop
 */

export default function PageHeader({ title, subtitle, image, height }) {
  const containerHeight = height || "h-[20vh] md:h-[25vh]";

  return (
    <div className={`relative ${containerHeight} bg-center bg-cover flex items-center mb-10`}>
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${pageHeaderImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-3">{title}</h1>
        <p className="text-lg text-white/90">{subtitle}</p>
      </div>
    </div>
  );
}
