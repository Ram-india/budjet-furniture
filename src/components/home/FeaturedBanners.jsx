import { NavLink } from "react-router-dom";
import { BannerCard } from "../common/BannerCard";

import banner14 from "/images/banner/banner-image-14.jpg";
import banner15 from "/images/banner/banner-image-15.jpg";

export default function FeaturedBanners() {
  const banners = [
    {
      id: 1,
      tag: "FURNOB FEATURED PRODUCTS",
      title: "Welcome to \nBudjet Furniture",
      image: banner14,
      bg: "bg-[#dfe6e8]",
      link: "/about",
    },
    {
      id: 2,
      tag: "OUR BLOGS & NEWS",
      title: "Crafting comfort and style \nfor modern\n livingProducts",
      image: banner15,
      bg: "bg-[#f4eee9]",
      link: "/blog",
    },
    
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid gap-6 md:grid-cols-2">
        {banners.map((item) => (
          <BannerCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
