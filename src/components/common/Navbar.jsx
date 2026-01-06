import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white border-b border-theme sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <NavLink to="/" className="text-2xl font-bold text-primary">
            Budjet Furniture
          </NavLink>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8">
  {links.map((link) => (
  <NavLink
  key={link.name}
  to={link.path}
  end={link.path === "/"}
>
  {({ isActive }) => (
    <span
      className={`relative inline-block group font-medium transition-colors duration-300
        ${isActive ? "text-primary" : "text-gray-700 hover:text-secondary"}`}
    >
      {link.name}

      <span
        className={`absolute left-0 -bottom-1 h-[2px] bg-primary transition-all duration-300
          ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
      />
    </span>
  )}
</NavLink>
  ))}
</nav>

          {/* RIGHT ICONS */}
          <div className="flex items-center gap-5">
            <FiSearch className="text-xl cursor-pointer hover:text-primary" />
            {/* <FiUser className="text-xl cursor-pointer hover:text-primary" />
            <FiShoppingCart className="text-xl cursor-pointer hover:text-primary" /> */}

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setOpen(!open)}
            >
              {open ? <FiX /> : <FiMenu />}
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
