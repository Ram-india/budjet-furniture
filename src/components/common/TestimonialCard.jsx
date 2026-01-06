import React from 'react'
import user1 from "/images/users/user-1.webp";
const DEFAULT_IMAGE = user1;

function TestimonialCard({ item }) {
  const imageUrl = item.hdImage ? item.hdImage : DEFAULT_IMAGE;


  const rating = Number(item.ratings) || 0;
    return (
      <div className="relative bg-white rounded-lg shadow-md p-8 pt-24 text-center h-full min-h-[340px]">
        
        {/* Avatar */}
        <img
          src={imageUrl}
          alt={item.name}
          className="w-16 h-16 rounded-full mx-auto absolute top-0 left-1/2 -translate-x-1/2 border-4 border-white bg-white"
          onError={(e)=>{
             e.currentTarget.src = DEFAULT_IMAGE;
          }}
        />
  
        {/* Name */}
        <h3 className="font-semibold text-primary">
          {item.name}
        </h3>
        <p className="text-sm text-theme mb-4">{item.designation}  </p>
         
  
        {/* Rating */}
        <div className="flex justify-center my-2 text-lg">
         {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className={i <= rating ? "text-yellow-400" : "text-gray-300"}
          >
            ★
          </span>
        ))}
        </div>
  
        {/* Review */}
        <p className="text-theme text-sm leading-relaxed ">
          {item.review}
        </p>
      </div>
    );
  }
export default TestimonialCard