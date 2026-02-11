import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import api from "../../api/axios";
import { SliderSkeleton } from "./HeroSliderSkeleton";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const HomeSlider = () => {
  const [sliders, setSliders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/getHomePageSlider")
      .then((res) => {
        setSliders(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => {
        console.error("Home Slider API Error:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <SliderSkeleton />;

  if (!sliders.length) {
    return (
      <div className="h-[60vh] flex items-center justify-center bg-gray-100">
        <p className="text-gray-500">No slider data available</p>
      </div>
    );
  }

  return (
    <section className="relative w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        speed={1200}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="
          h-[65vh]
          sm:h-[70vh]
          md:h-[80vh]
          lg:h-[90vh]
        "
      >
        {sliders.map((slide) => (
          <SwiperSlide key={slide.slider_id}>
            <div className="relative h-full w-full overflow-hidden">
              {/* Background Image */}
              <img
                src={slide.imageURL}
                alt={slide.title}
                className="
                  absolute inset-0 h-full w-full object-cover
                  scale-100
                  swiper-slide-active:scale-110
                  transition-transform duration-[7000ms] ease-out
                "
              />

              {/* Dark Overlay 
              <div className="absolute inset-0 bg-black/15" />

            
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto w-full px-6 md:px-12">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="max-w-4xl text-white"
                  >
                    <h1
                      className="
                        text-4xl
                        sm:text-5xl
                        md:text-6xl
                        lg:text-7xl
                        font-extrabold
                        leading-tight
                        mb-6
                        drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)]
                      "
                    >
                      {slide.title}
                    </h1>

                    <p
                      className="
                        text-lg
                        sm:text-xl
                        md:text-2xl
                        text-gray-200
                        leading-relaxed
                        mb-8
                        drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]
                      "
                    >
                      {slide.content}
                    </p> 

                    {/* {slide.link && (
                      <a
                        href={slide.link}
                        className="
                          inline-block
                          bg-primary
                          px-6 py-3
                          rounded-lg
                          font-semibold
                          hover:bg-primary/90
                          transition
                        "
                      >
                        Explore Collection
                      </a>
                    )} 
                  </motion.div>
                </div>
              </div>*/}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HomeSlider;
