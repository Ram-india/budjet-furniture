import React from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function Lightbox({ image, onClose, onNext, onPrev, title }) {
  if (!image) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
      {/* Close */}

      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-3xl"
      >
        <X size={34} className="text-white" />
      </button>

      <button onClick={onPrev} className="absolute left-6 text-white text-4xl">
        <ChevronLeft size={34} className="text-white" />
      </button>

      <img
        src={image}
        alt="Preview"
        className="max-w-[90%] max-h-[90%] rounded-xl shadow-xl"
      />
      <div className="absolute bottom-0 w-full bg-black/60 text-white text-center py-3">
        {title}
      </div>
      <button onClick={onNext} className="absolute right-6 text-white text-4xl">
        <ChevronRight size={34} className="text-white" />
      </button>
    </div>
  );
}
