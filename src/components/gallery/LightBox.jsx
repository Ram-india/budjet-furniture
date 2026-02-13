import { AnimatePresence,motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useRef, useState } from "react";

export default function Lightbox({ image, onClose, onNext, onPrev, title }) {
  const startX = useRef(0);
  const [zoom, setZoom] = useState(false);

  if (!image) return null;

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const delta = startX.current - e.changedTouches[0].clientX;
    if (delta > 60 && onNext) onNext();
    if (delta < -60 && onPrev) onPrev();
  };

  return (
    <AnimatePresence>
    <motion.div
        role="dialog"
        aria-modal="true"
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >

        {/* CONTENT WRAPPER */}
        <div onClick={(e) => e.stopPropagation()}>

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white z-50"
          >
            <X size={34} />
          </button>

          {/* Prev */}
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 text-white z-50"
          >
            <ChevronLeft size={40} />
          </button>

          {/* Image */}
          <motion.img
            src={image}
            alt={title}
            onClick={() => setZoom(!zoom)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            animate={{
              scale: zoom ? 1.6 : 1
            }}
            transition={{ duration: 0.3 }}
            className={`
              max-w-[90vw]
              max-h-[85vh]
              rounded-xl
              shadow-xl
              transition
              ${zoom ? "cursor-zoom-out" : "cursor-zoom-in"}
            `}
          />

          {/* Title */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center py-3 text-sm sm:text-base">
            {title}
          </div>

          {/* Next */}
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 text-white z-50"
          >
            <ChevronRight size={40} />
          </button>

        </div>
      </motion.div>
    </AnimatePresence>
  );
}
