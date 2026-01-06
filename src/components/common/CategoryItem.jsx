import React from 'react'

const CategoryItem = ({icon: Icon, title, count}) => {
  return (
    <div className="flex flex-col items-center group cursor-pointer">
      
      {/* Icon */}
      <Icon className="text-4xl text-gray-600 group-hover:text-primary transition-colors duration-300" />

      {/* Title */}
      <h3 className="mt-4 font-semibold text-primary text-sm">
        {title}
      </h3>

      {/* Count */}
      <p className="text-xs text-gray-500 mt-1">
        {count}
      </p>
    </div>
  )
}

export default CategoryItem