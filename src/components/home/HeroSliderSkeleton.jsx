const HomeSliderSkeleton = () => {
    return (
      <div
        className="
          relative
          h-[55vh]
          sm:h-[60vh]
          md:h-[70vh]
          lg:h-[85vh]
          w-full
          bg-gray-200
          animate-pulse
          overflow-hidden
        "
      >
        {/* Dark overlay look */}
        <div className="absolute inset-0 bg-gray-300/60" />
  
        {/* Text placeholder */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6">
            <div className="max-w-xl space-y-4">
              <div className="h-8 sm:h-10 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded w-full"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
              <div className="h-10 bg-gray-300 rounded w-40"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HomeSliderSkeleton;