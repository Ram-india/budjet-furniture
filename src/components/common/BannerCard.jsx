import { NavLink } from "react-router-dom";

export function BannerCard({ item }) {
  return (
    <NavLink
      to={item.link}
      className={`group relative overflow-hidden rounded-lg  ${item.bg}`}
    >
      {/* IMAGE */}
      <img
        src={item.image}
        alt={item.title}
        className="
          w-full h-[320px] md:h-[380px] 
          object-cover 
          transition-transform duration-700 ease-out
          group-hover:scale-110
        "
        loading="lazy"
      />

      {/* CONTENT */}
      <div className="absolute inset-0 p-8 flex flex-col justify-center">
        <span className="text-xs tracking-widest text-primary font-semibold mb-3">
          {item.tag}
        </span>

        <h3 className="text-3xl font-bold text-primary leading-tight whitespace-pre-line">
          {item.title}
        </h3>

        <span className="mt-6 inline-flex items-center gap-2 text-primary font-medium">
          Read More
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </NavLink>
  );
}