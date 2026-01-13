import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PageHeader from "../components/common/PageHeader";
import PageLayout from "../components/common/PageLayout";
import Lightbox from "../components/common/LightBox";
import api from "../api/axios";

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [galleryData, setGalleryData] = useState([]);
  const [categories, setCategories] = useState(["ALL"]);

  useEffect(() => {
    api
      .get("/getGallery")
      .then((res) => {
        setGalleryData(res.data);

        // extract unique categories
        const uniqueCats = [
          "All",
          ...new Set(res.data.map((item) => item.category)),
        ];
        setCategories(uniqueCats);
      })
      .catch((err) => console.error("Gallery API Error:", err));
  }, []);

  const filtered =
    active === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === active);

  return (
    <>
      <PageHeader
        title="Gallery"
        subtitle="Explore our creative furniture collections"
      />

      {/* FILTER */}
      <div className="flex justify-center gap-4 py-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full border transition
              ${
                active === cat
                  ? "bg-primary text-white"
                  : "border-theme text-theme hover:bg-theme/10"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GALLERY */}
      <PageLayout className="pb-20">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {filtered.map((item) => (
            <motion.div
              key={item.gallery_id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setSelectedImage(item.hdImage)}
            >
              <img
                src={item.hdImage}
                alt={item.title}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </PageLayout>

      {/* LIGHTBOX */}
      <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
    </>
  );
}
