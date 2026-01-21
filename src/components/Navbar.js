import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", to: "/#top" },
    { name: "Servicios", to: "/#services" },
    { name: "Precios", to: "/precios" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-purple-600 font-serif tracking-wider">
              DepiLuq
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className="text-gray-600 hover:text-rose-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/#contact" className="bg-rose-500 text-white hover:bg-rose-600 px-5 py-2 rounded-full text-sm font-medium transition-transform transform hover:scale-105 shadow-md">
                Reservar
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-rose-500 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="block text-gray-700 hover:text-rose-500 px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/#contact"
              className="block text-indigo-600 font-bold px-3 py-2 rounded-md text-base"
              onClick={() => setIsOpen(false)}
            >
              Reservar Turno
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
