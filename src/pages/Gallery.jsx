import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import PageHeader from "../components/common/PageHeader";
import PageLayout from "../components/common/PageLayout";
import Lightbox from "../components/gallery/LightBox";
import api from "../api/axios";

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(null);
  const [galleryData, setGalleryData] = useState([]);
  const [categories, setCategories] = useState(["All"]);

  useEffect(() => {
    api.get("/getGallery").then(res => {
      setGalleryData(res.data);
      setCategories(["All", ...new Set(res.data.map(i => i.category))]);
    });
  }, []);

  const filtered = useMemo(() => (
    active === "All" ? galleryData : galleryData.filter(i => i.category === active)
  ), [active, galleryData]);

  const nextImage = () => setCurrentIndex(i => (i + 1) % filtered.length);
  const prevImage = () => setCurrentIndex(i => (i - 1 + filtered.length) % filtered.length);

  // Keyboard control
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKey = e => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setCurrentIndex(null);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex, filtered]);

  return (
    <>
      <PageHeader title="Gallery" subtitle="Explore our creative furniture collections" />

      {/* FILTER */}
      <div className="flex justify-center gap-4 py-10 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full border transition ${
              active === cat ? "bg-primary text-white" : "border-theme text-theme hover:bg-theme/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GALLERY */}
      <PageLayout className="pb-20">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {filtered.map((item, index) => (
            <motion.div
              key={item.gallery_id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setCurrentIndex(index)}
            >
              <img src={item.hdImage} alt={item.title} className="w-full transition group-hover:scale-110" />
            </motion.div>
          ))}
        </div>
      </PageLayout>

      <Lightbox
        image={currentIndex !== null ? filtered[currentIndex].hdImage : null}
        title={currentIndex !== null ?filtered[currentIndex].title:""}
        onClose={() => setCurrentIndex(null)}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  );
}
