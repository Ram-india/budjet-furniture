const BrandSliderSkeleton = () => {
    const SLIDER_HEIGHT = "h-24";
    return (
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-8 items-center">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`w-40 ${SLIDER_HEIGHT} bg-gray-200 rounded animate-pulse`}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default BrandSliderSkeleton;