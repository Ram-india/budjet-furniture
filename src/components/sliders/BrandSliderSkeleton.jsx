const BrandSliderSkeleton = () => {
    return (
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-8 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-20 w-36 rounded-md bg-gray-200 animate-pulse"
              />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default BrandSliderSkeleton;