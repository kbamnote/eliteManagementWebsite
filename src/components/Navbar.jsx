/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkNav, setIsDarkNav] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsDarkNav(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "COURSES", path: "/courses" },
    { name: "BLOGS", path: "/blogs" },
    { name: "PLACEMENTS", path: "/placements" },
    { name: "GET IN TOUCH", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
        isDarkNav
          ? "bg-white/90 text-[#161E54] border-b border-border"
          : "bg-[#161E54]/90 text-white"
      }`}
    >
      <div className=" max-w mx-auto px-4 sm:px-4 lg:px-6">
        <div className="flex h-20 items-center justify-between">

         <Link
  to="/"
  onClick={handleLinkClick}
  className="flex items-center gap-3 font-bold tracking-wide hover:opacity-90 transition-opacity duration-300"
>
  <div className="h-max w-auto rounded-full  flex items-center ">
    <img
      src="/images/logo/logo-em.png"
      alt="Elite Managements Logo"
      className="h-8 w-auto"
    />
  </div>

  <span className="text-xl font-bold leading-none">
    ELITE&nbsp;&nbsp;MANAGEMENTS
  </span>
</Link>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={handleLinkClick}
                className={`transition-colors duration-300 ${
                  isDarkNav ? "hover:text-yellow-500" : "hover:text-yellow-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex md:hidden items-center p-2 text-white hover:text-yellow-300 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`px-4 py-4 space-y-2 backdrop-blur-md transition-colors duration-300 ${
            isDarkNav ? "bg-white/95 text-[#161E54]" : "bg-[#161E54]/95 text-white"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={handleLinkClick}
              className="block rounded-md px-3 py-2 text-base font-medium transition-colors duration-300 hover:text-yellow-500"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
