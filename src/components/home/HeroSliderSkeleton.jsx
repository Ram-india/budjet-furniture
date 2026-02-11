export const SliderSkeleton = () => (
    <div
      className="
        relative w-full
        h-[65vh]
        sm:h-[70vh]
        md:h-[80vh]
        lg:h-[90vh]
        bg-gray-200
        animate-pulse
        overflow-hidden
      "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300" />
  
      {/* Content Placeholder */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full">
          <div className="max-w-xl space-y-4">
  
            {/* Title */}
            <div className="h-8 sm:h-10 md:h-12 w-3/4 bg-gray-300 rounded" />
  
            {/* Description */}
            <div className="h-4 w-full bg-gray-300 rounded" />
            <div className="h-4 w-5/6 bg-gray-300 rounded" />
  
            {/* Button */}
            <div className="h-10 w-40 bg-gray-300 rounded mt-4" />
  
          </div>
        </div>
      </div>
    </div>
  );