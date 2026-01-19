import { useEffect, useState } from "react";
import { getImageUrl } from "../../utils/getImageUrl";

export default function ProductGallery({ images = [], title }) {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (images.length && !activeImage) {
      setActiveImage(images[0]);
    }
  }, [images, activeImage]);

  if (!images.length || !activeImage) return null;

  return (
    <div className="space-y-6">
      {/* Main Image */}
      <div className="bg-gray-50 border rounded-xl overflow-hidden">
        <img
          src={getImageUrl(activeImage, "product")}
          alt={title}
          className="w-full h-[380px] object-contain transition-transform duration-300 hover:scale-[1.03]"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-4">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(img)}
            className={`snap-start border rounded-lg p-2 bg-white transition
              ${
                activeImage === img
                  ? "border-primary ring-2 ring-primary/30"
                  : "border-gray-200 hover:border-primary"
              }`}
          >
            <img
              src={getImageUrl(img, "product")}
              alt={`${title} ${index + 1}`}
              className="w-full h-20 object-contain"
            />
          </button>
        ))}
      </div>

      {/* Counter */}
      <p className="text-sm text-gray-500 text-right">
        {images.indexOf(activeImage) + 1} / {images.length}
      </p>
    </div>
  );
}