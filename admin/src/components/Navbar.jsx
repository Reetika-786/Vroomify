import React from 'react'
import {navbarStyles as s} from '../assets/dummyStyles'
import {Link} from 'react-router-dom'
import logo from '../assets/logocar.png'
import { PlusCircle, Car, CalendarCheck, Menu, X } from 'lucide-react'
import { useEffect } from 'react';

const navLinks = [
  { path: "/", icon: PlusCircle, label: "Add Car" },
  { path: "/manage-cars", icon: Car, label: "Manage Cars" },
  { path: "/bookings", icon: CalendarCheck, label: "Bookings" },
];

const Navbar = () => {

  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const menuRef = React.useRef(null);
  const buttonRef = React.useRef(null);

  //change navbar style on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }, []);

    //if we click outside the menu, close it
  useEffect(() => {
    const onDocClick = (e) => {
      if (
        isOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [isOpen]);

  //navbar JSX
  return (
    <div className={s.navbar(scrolled)}>
      <div className={s.navbarInner}>
        <div className={s.navbarCenter}>
          <div className={s.navbarBackground(scrolled)}>
            <div className={s.contentContainer}>
              <Link to='/' className={s.logoLink}>
                <div className={s.logoContainer}>
                  <img src={logo} 
                  alt="logo"
                  className={s.logoImage}
                  style = {{
                    objectFit: "contain",
                  }} 
                  />
                  <span className={s.logoText}>ADMIN</span>
                </div>
              </Link>

              <div className={s.desktopNav}>
                <div className={s.navLinksContainer}>
                  {navLinks.map((link, i) => {
                    const Icon = link.icon;
                    return (
                      <React.Fragment key = {link.path}>
                        <Link to = {link.path} className={s.navLink}>
                        <Icon className= "w-4 h-4" />
                        <span>{link.label}</span>
                        </Link>

                        {i < navLinks.length - 1 && (
                          <div className={s.navDivider} />
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>

              <div className={s.mobileMenuButton}>
                <button 
                  ref = {buttonRef} 
                  onClick={() => setIsOpen((v) => !v)}
                  className={s.menuButton} 
                  aria-label="Toggle Menu" 
                  aria-expanded={isOpen}
                >
                  {isOpen ? (
                    <X className= "h-5 w-5" />
                  ) : (
                    <Menu className= "h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div ref = {menuRef} className={s.mobileMenu}>
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link 
                key = {link.path} 
                to = {link.path}  
                className={s.mobileNavLink}
                onClick={() => setIsOpen(false)}
              >
                <Icon className= "w-5 h-5" /> 
                <span>{link.label}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  )
}

export default Navbar;
