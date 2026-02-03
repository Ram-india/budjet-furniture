import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import api from "../../api/axios";

const limitHtmlText = (html, limit = 280) => {
  if (!html) return "";
  const text = html.replace(/<[^>]*>/g, "");
  return text.length > limit ? text.substring(0, limit) + "..." : text;
};

export default function HomeAbout() {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPageDetails = async () => {
      try {
        const formData = new FormData();
        formData.append("title", "About Us");

        const res = await api.post("/getPageDetails", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setPage(res.data);
      } catch (err) {
        console.error("Page Details API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPageDetails();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!page) return <p>No data found</p>;

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid gap-14 md:grid-cols-2 items-center">
        {/* LEFT IMAGE */}
        <div className="relative">
          <img
            src={page.image}
            alt={page.title}
            className="relative z-10 rounded-2xl"
          />
          <div className="absolute -bottom-6 -left-6 w-full h-full bg-themeSecondary rounded-2xl opacity-20"></div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <span className="inline-block mb-3 text-sm sm:text-base font-medium text-secondary tracking-wide">
            ABOUT OUR STORY
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
            {page.title}
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 leading-relaxed text-justify">
            {limitHtmlText(page.description, 1500)}
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-primary">10+</h3>
              <p className="text-gray-600 text-sm">Years of Experience</p>
            </div>
            <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-primary">5,000+</h3>
              <p className="text-gray-600 text-sm">Happy Customers</p>
            </div>
          </div>

          {/* CTA */}
          <NavLink
            to="/about"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-themeSecondary text-gray-800 font-medium rounded-full hover:bg-themeSecondaryDark transition"
          >
            Read our full story
            <FiArrowRight className="group-hover:translate-x-1 transition" />
          </NavLink>
        </div>
      </div>
    </section>
  );
}
