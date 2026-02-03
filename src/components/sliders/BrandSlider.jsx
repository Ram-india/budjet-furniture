import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";

import "swiper/css";

import api from "../../api/axios";
import BrandSliderSkeleton from "./BrandSliderSkeleton";

const BrandSlider = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/getBrands")
      .then((res) => {
        setBrands(res.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Brand API Error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <BrandSliderSkeleton />;
  if (!brands.length) return null;

  return (
    <section className="bg-gray-50 py-14">
      <div className="max-w-7xl mx-auto px-4">

        {/* Title */}
        <div className="mb-10 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
            Our Trusted Brands
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Partnering with quality manufacturers
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={800}
          loop
          spaceBetween={40}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
        >
          {brands.map((brand) => (
            <SwiperSlide key={brand.brand_id}>
              <div className="flex items-center justify-center h-24">
                <img
                  src={brand.logoURL}
                  alt={brand.name}
                  loading="lazy"
                  className="
                    max-h-14
                    object-contain
                    opacity-70
                    hover:opacity-100
                    transition
                    duration-300
                  "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default BrandSlider;