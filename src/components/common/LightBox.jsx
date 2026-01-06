import React from 'react'

export default function Lightbox({ image, onClose }) {
    if (!image) return null;
  
    return (
      <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white text-3xl"
        >
          ×
        </button>
  
        <img
          src={image}
          alt="Preview"
          className="max-w-[90%] max-h-[90%] rounded-xl"
        />
      </div>
    );
  }