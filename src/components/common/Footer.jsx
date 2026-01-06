import {
  FiArrowRight,
} from "react-icons/fi";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Features from "../home/Features";

export default function Footer() {
  const links = [
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Terms & Conditions", path: "/terms" },
  ];

  return (
    <footer className="bg-white border-t border-theme">
      {/* FEATURES */}
      <Features />

      {/* NEWSLETTER */}
      <div className="cream-bg">
        <div className="max-w-7xl mx-auto px-6 py-20 grid gap-10 md:grid-cols-2 border-b border-theme">
          <div>
            <p className="text-secondary font-medium mb-3 text-sm sm:text-base">
              Join our newsletter
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
              Get our emails for info on new items, sales and more.
            </h2>
          </div>

          <div>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email address"
                className="peer w-full bg-transparent py-2 border-b border-primary outline-none text-primary focus:border-transparent sm:text-base"
              />
              <span className="absolute left-0 -bottom-[1px] h-[2px] w-0 bg-secondary transition-all duration-300 peer-focus:w-full" />
              <FiArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 text-primary text-xl pointer-events-none" />
            </div>

            <p className="text-sm text-gray-600 mt-3">
              By subscribing you agree to our{" "}
              <span className="inline-flex [&>a]:after:content-['&'] [&>a]:after:mx-2 [&>a:last-child]:after:content-none">
                {links.map((link, index) => (
                  <NavLink
                    key={index}
                    to={link.path}
                    className="text-primary hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </NavLink>
                ))}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER LINKS */}
      <div className="max-w-7xl mx-auto px-6 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-sm py-14">
        {/* Column 1: About Us */}
        <div>
          <h4 className="font-semibold text-primary mb-4 text-lg sm:text-xl">About Us</h4>
          <p className="mb-4 text-gray-700 text-sm sm:text-base">
            We are a leading furniture shop providing quality products and exceptional customer service.
          </p>
          <NavLink
            to="/about"
            className="inline-block px-6 py-2 bg-themeSecondary text-gray-800 font-medium rounded-full hover:bg-themeSecondaryDark transition-colors duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
          >
            Learn More
          </NavLink>
        </div>

        {/* Column 2: Pages */}
        <FooterCol
          title="Pages"
          items={["Home", "Shop", "Blog", "Contact", "FAQ"]}
        />

        {/* Column 3: Contact Info */}
        <div>
          <h4 className="font-semibold text-primary mb-4 text-lg sm:text-xl">Contact</h4>
          <p className="flex items-center gap-2 mb-2 text-sm sm:text-base">
            <FaMapMarkerAlt className="text-themeSecondary" /> Ramanatha Puram
          </p>
          <p className="flex items-center gap-2 mb-2 text-sm sm:text-base">
            <FaEnvelope className="text-themeSecondary" /> info@example.com
          </p>
          <p className="flex items-center gap-2 text-sm sm:text-base">
            <FaPhone className="text-themeSecondary" /> +91 9876543210
          </p>
        </div>

        {/* Column 4: Newsletter & Socials */}
        <div>
          <h4 className="font-semibold text-primary mb-4 text-lg sm:text-xl">Newsletter</h4>
          <p className="mb-4 text-gray-700 text-sm sm:text-base">
            Subscribe to get our latest updates and offers.
          </p>

          {/* Underline input style */}
         <form className="flex flex-col sm:flex-row items-center gap-3">
  <div className="relative w-full">
    <input
      type="email"
      placeholder="Enter your email address"
      className="peer w-full bg-transparent py-2 text-black border-b-2 border-gray-300 focus:border-transparent outline-none transition-colors duration-300"
    />
    {/* Animated underline */}
    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-secondary transition-all duration-500 ease-out peer-focus:w-full"></span>
  </div>

  <button
    type="submit"
    className="px-6 py-2 bg-secondary text-gray-800 font-medium rounded-full hover:bg-themeSecondaryDark transition-colors duration-300 shadow-md hover:shadow-lg"
  >
    Subscribe
  </button>
</form>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-base sm:text-lg">
            <a href="#" className="text-gray-500 hover:text-themeSecondary transition-colors duration-200">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-500 hover:text-themeSecondary transition-colors duration-200">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-500 hover:text-themeSecondary transition-colors duration-200">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-500 hover:text-themeSecondary transition-colors duration-200">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-theme py-6 text-center text-sm grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-gray-600">
          <p>Logo</p>
        </div>
        <div className="text-gray-600">
          <p>
            Developed by{" "}
            <a href="#" className="text-themeSecondary hover:underline">
              Cute Websolutions
            </a>
          </p>
        </div>
        <div className="flex justify-center md:justify-center gap-4 text-gray-600">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className="text-primary hover:text-secondary transition-colors duration-200 text-sm sm:text-base"
            >
              {link.label}
              {index !== links.length - 1 && (
                <span className="mx-2 text-gray-400">|</span>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div>
      <h4 className="font-semibold text-primary mb-4 text-lg sm:text-xl">{title}</h4>
      <ul className="space-y-2 text-sm sm:text-base">
        {items.map((item, i) => (
          <li
            key={i}
            className="hover:text-secondary cursor-pointer transition-colors duration-200"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}