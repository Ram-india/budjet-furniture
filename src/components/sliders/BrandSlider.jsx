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
    const fetchBrands = async () => {
      try {
        const res = await api.get("/getBrands");
        
        setBrands(res.data || []);
      } catch (error) {
        console.error("Brand API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, []);

  if (loading) return <BrandSliderSkeleton />;
  if (!brands.length) return null;

  return (
    <section className="bg-gray-50 py-14">
      <div className="max-w-7xl mx-auto px-4">

        <div className="mb-20 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
            Our Trusted Brands
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Partnering with industry-leading manufacturers
          </p>
        </div>

        {/* IMPORTANT FIX */}
        <div className="relative w-full min-w-0 mb-8">
          <Swiper
            className="!w-full "
            modules={[Autoplay]}
            autoplay={{
              delay: 2200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={900}
            spaceBetween={40}
            slidesPerView={2}
            loop={brands.length > 6}
            breakpoints={{
        
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 4 },
            }}
          >
            {brands.map((brand) => (
              <SwiperSlide key={brand.id}>
                <div className="flex items-center justify-center h-24">
                  <img
                    src={brand.hdImage}
                    alt={brand.title}
                    className="
                      max-h-24
                      object-contain
                     
                      opacity-90
                      transition-all
                      duration-300
                      hover:grayscale-3
                      hover:opacity-100
                      hover:scale-205
                    "
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default BrandSlider;