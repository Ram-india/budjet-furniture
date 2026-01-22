import { useState, useRef, useEffect, useMemo } from "react";

export default function ProductGallery({ images = [] }) {
  const [active, setActive] = useState(0);
  const thumbRef = useRef([]);
  const memoImages = useMemo(
    () => Array.isArray(images) ? images : [],
    [images]
  );
  
  // Reset active when images change
  useEffect(() => {
    setActive(0);
  }, [memoImages.length]);

  // Auto scroll thumbnail
  useEffect(() => {
    thumbRef.current[active]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [active]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") {
        setActive((p) => Math.min(p + 1, memoImages.length - 1));
      }
      if (e.key === "ArrowLeft") {
        setActive((p) => Math.max(p - 1, 0));
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [memoImages.length]);

  if (!memoImages.length) {
    return (
      <div className="bg-gray-100 h-96 flex items-center justify-center rounded-lg">
        No image available
      </div>
    );
  }

  return (
    <div>
      {/* MAIN IMAGE */}
      <div className="border rounded-lg overflow-hidden mb-4">
        <img
          src={memoImages[active]?.hdImage}
          alt="Product"
          className="w-full h-[420px] object-contain bg-white transition-all"
          onError={(e) => (e.target.src = "/no-image.png")}
        />
      </div>

      {/* THUMBNAILS */}
      {memoImages.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {memoImages.map((img, index) => (
            <button
              key={index}
              ref={(el) => (thumbRef.current[index] = el)}
              onClick={() => setActive(index)}
              className={`border rounded-md p-1 min-w-[80px] ${
                active === index ? "border-primary" : "border-gray-300"
              }`}
            >
              <img
                src={img.thumb || img.hdImage}
                alt="Thumb"
                className="w-20 h-20 object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
