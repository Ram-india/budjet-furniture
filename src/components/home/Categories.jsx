import React from 'react'
import CategoryItem from '../common/CategoryItem';
import {
    FiHome,
    FiMoon,
    FiMonitor,
    FiSun,
    FiHeart,
    FiGrid,
  } from "react-icons/fi";
  
  const categories = [
    {
      icon: FiHome,
      title: "Living Room",
      count: "11 Items",
    },
    {
      icon: FiMoon,
      title: "Bedroom",
      count: "9 Items",
    },
    {
      icon: FiMonitor,
      title: "Home Office",
      count: "8 Items",
    },
    {
      icon: FiSun,
      title: "Lighting",
      count: "5 Items",
    },
    {
      icon: FiHeart,
      title: "Home Decoration",
      count: "15 Items",
    },
    {
      icon: FiGrid,
      title: "Dining Room",
      count: "6 Items",
    },
  ];

const Categories = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 text-center">
          {categories.map((cat, index) => (
            <CategoryItem key={index} {...cat} />
          ))}
        </div>

        {/* Divider */}
        <div className="mt-14 border-t border-gray-200"></div>
      </div>
    </section>
  )
}

export default Categories