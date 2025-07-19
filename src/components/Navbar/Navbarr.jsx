import React, { useState, useEffect } from 'react';
import Logo from '../../assets/Logo.png';

const NavbarLinks = [
  { id: 1, title: 'Inicio', Link: 'inicio' },
  { id: 2, title: 'Nosotros', Link: 'nosotros' },
  { id: 3, title: 'Productos', Link: 'productos' },
  { id: 4, title: 'Contacto', Link: 'contacto' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/70 backdrop-blur-sm shadow-lg' : 'bg-black/60 backdrop-blur-sm'
      }`}
      aria-label="Navegación principal"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo y menú principal */}
          <div className="flex items-center">
            <a 
              href="#home" 
              className="flex-shrink-0"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('home');
              }}
            >
              <img
                src={Logo}
                alt="Logo Los Pelayos"
                className="h-40 w-auto"
                width="150"
                height="40"
              />
            </a>

            <div className="hidden md:ml-10 md:block">
              <ul className="flex space-x-6">
                {NavbarLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.Link}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(link.Link);
                      }}
                      className="text-white/90 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Menú móvil */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white hover:text-blue-400 focus:outline-none text-2xl"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <i className="bi bi-x"></i>
              ) : (
                <i className="bi bi-list"></i>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú desplegable móvil */}
      {menuOpen && (
        <div className="md:hidden" role="dialog" aria-modal="true">
          <div className="px-2 pt-2 pb-4 space-y-2">
            {NavbarLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.Link}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(link.Link);
                }}
                className="block px-3 py-2 rounded-md text-white hover:text-blue-400 hover:bg-white/10 transition-colors duration-200"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;