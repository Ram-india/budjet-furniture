
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Features from "../home/Features";
import { useSettings } from "../../context/SettingsContext";
import ContactItem from "../common/ContactItem";
import EmailSubscribe from "./EmailSubscribe";

export default function Footer() {
  const { settings } = useSettings();

  const links = [
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Terms & Conditions", path: "/terms" },
  ];
  const phone = settings?.mobile?.replace(/\s+/g, "");

  return (
    <footer className="bg-white border-t border-theme">
      {/* FEATURES */}
      <Features />

      <EmailSubscribe/>

      {/* FOOTER LINKS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-12 sm:py-16">
        {/* Column 1: About Us */}
        <div>
          <h4 className="font-bold text-base sm:text-lg md:text-xl text-primary mb-4">
            About Us
          </h4>
          <p className="mb-4 text-gray-700 text-xs sm:text-sm leading-relaxed">
            We are a leading furniture shop providing quality products and
            exceptional customer service.
          </p>
          <NavLink
            to="/about"
            className="inline-block px-6 py-2 bg-themeSecondary text-gray-800 font-medium rounded-full hover:bg-themeSecondaryDark transition-colors duration-300 shadow-md hover:shadow-lg text-xs sm:text-sm"
          >
            Learn More
          </NavLink>
        </div>

        {/* Column 2: Pages */}
        <FooterCol
          title="Pages"
          items={["Home", "About", "Products", "Gallery", "Blog", "Contact"]}
        />

        {/* Column 3: Contact Info */}
        <div>
          <h4 className="font-bold text-base sm:text-lg md:text-xl text-primary mb-4">
            Contact
          </h4>

          <div className="space-y-2 sm:space-y-3">
            {settings?.address && (
              <div className="text-gray-700 text-xs sm:text-sm hover:text-secondary transition-colors">
                <div className="flex items-start gap-2 sm:gap-3">
                  <span className='text-secondary flex-shrink-0 text-sm sm:text-base mt-0.5'><FaMapMarkerAlt /></span>
                  <span className='break-words'>{settings.address}</span>
                </div>
              </div>
            )}
            {settings?.email && (
              <ContactItem
                icon={<FaEnvelope />}
                href={`mailto:${settings.email}`}
                label={settings.email}
              />
            )}
            {settings?.mobile && (
              <ContactItem
                icon={<FaPhone />}
                href={`tel:${phone}`}
                label={settings.mobile}
              />
            )}
          </div>
        </div>

        {/* Column 4: Newsletter & Socials */}
        <div>
          <h4 className="font-bold text-base sm:text-lg md:text-xl text-primary mb-4">
            Connect With Us
          </h4>
          <p className="mb-4 text-gray-700 text-xs sm:text-sm leading-relaxed">
            Subscribe to get our latest updates and offers.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 sm:gap-4 mb-6">
            {settings?.facebook_link && (
              <SocialIcon
                href={settings.facebook_link}
                icon={<FaFacebookF />}
              />
            )}
            {settings?.twitter_link && (
              <SocialIcon href={settings.twitter_link} icon={<FaTwitter />} />
            )}
            {settings?.instagram_link && (
              <SocialIcon
                href={settings.instagram_link}
                icon={<FaInstagram />}
              />
            )}
            {settings?.linkedin_link && (
              <SocialIcon
                href={settings.linkedin_link}
                icon={<FaLinkedinIn />}
              />
            )}
            {settings?.youtube_link && (
              <SocialIcon
                href={settings.youtube_link}
                icon={<FaYoutube />}
              />
            )}
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-theme py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
          <div className="text-gray-600 text-xs sm:text-sm">
            <p className="font-semibold text-primary">Furniture Store</p>
          </div>
          <div className="text-gray-600 text-xs sm:text-sm">
            <p>
              © 2026 All Rights Reserved | Developed by{" "}
              <a href="https://www.cuteweb.in" className="text-themeSecondary font-semibold hover:underline">
                CuteWeb Solutions
              </a>
            </p>
          </div>
          <div className="flex justify-center gap-3 text-gray-600 text-xs sm:text-sm">
            {links.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className="text-primary hover:text-secondary transition-colors duration-200"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  const pageRoutes = {
    "Home": "/",
    "About": "/about",
    "Products": "/products",
    "Gallery": "/gallery",
    "Blog": "/blog",
    "Contact": "/contact"
  };

  return (
    <div>
      <h4 className="font-bold text-base sm:text-lg md:text-xl text-primary mb-4">
        {title}
      </h4>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i}>
            <NavLink
              to={pageRoutes[item] || "/"}
              className={({ isActive }) =>
                `inline-block text-xs sm:text-sm transition-colors duration-200 ${
                  isActive
                    ? "text-primary font-semibold"
                    : "text-gray-700 hover:text-secondary"
                }`
              }
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
function SocialIcon({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border border-gray-300 rounded-full text-gray-600 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300"
    >
      {icon}
    </a>
  );
}
