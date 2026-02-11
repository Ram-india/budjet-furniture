import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useSettings } from "../../context/SettingsContext";



export default function Navbar() {
  const {settings, loading} = useSettings();
  const [open, setOpen] = useState(false);
  if(loading || !settings) return null;

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Gallery", path: "/gallery" },
    { name: "Offers", path: "/offers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <NavLink to="/" className="text-2xl font-bold text-primary flex-shrink-0">
            {
              <img
              src={settings.logo}
              alt={settings.name}
              className="h-12 sm:h-14 w-auto"
              />
            }
          </NavLink>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-8 flex-1 justify-center mx-8">
  {links.map((link) => (
  <NavLink
  key={link.name}
  to={link.path}
  end={link.path === "/"}
>
  {({ isActive }) => (
    <span
      className={`relative inline-block group font-medium text-sm lg:text-base transition-colors duration-300 px-2 lg:px-3 py-2
        ${isActive ? "text-primary" : "text-gray-700 hover:text-primary"}`}
    >
      {link.name}

      <span
        className={`absolute left-0 -bottom-0.5 h-[2px] bg-primary transition-all duration-300
          ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
      />
    </span>
  )}
</NavLink>
  ))}
</nav>

          {/* RIGHT ICONS */}
          <div className="flex items-center gap-6">
            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden text-2xl text-gray-700 hover:text-primary transition"
              onClick={() => setOpen(!open)}
            >
              {open ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t border-theme">
          <nav className="flex flex-col gap-4 px-6 py-6">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className="text-gray-700 hover:text-primary font-medium"
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
