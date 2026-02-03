import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import api from "../../api/axios";
import HomeSliderSkeleton from "./HeroSliderSkeleton";

const HomeSlider = () => {
  const [heroSlider, setHeroSlider] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    api
      .get("/getHomePageSlider")
      .then((res) => {
        const data = res.data;
        setHeroSlider(Array.isArray(data) ? data : [data]);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Hero API Error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <HomeSliderSkeleton />;
  if (!heroSlider.length) return null;

  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={heroSlider.length > 1}
        loop={heroSlider.length > 1}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-[55vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh]"
      >
        {heroSlider.map((slide, index) => (
          <SwiperSlide key={slide.slider_id}>
            <div className="relative h-full w-full">

              {/* Image */}
              <img
                src={slide.imageURL}
                alt={slide.title}
                className="h-full w-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto w-full px-4 sm:px-6">
                  <div
                    className={`
                      max-w-xl text-white text-center sm:text-left
                      ${activeIndex === index ? "animate-fade-slide" : "opacity-0"}
                    `}
                  >
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                      {slide.title}
                    </h1>

                    <p className="text-sm sm:text-base md:text-lg mb-5 text-gray-200">
                      {slide.content}
                    </p>

                    {slide.link && (
                      <a
                        href={slide.link}
                        className="inline-block bg-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
                      >
                        Explore Now
                      </a>
                    )}
                  </div>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HomeSlider;