"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("workshop");
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: "Workshop", href: "/" },
    { label: "About", href: "#about" },
    { label: "Tools", href: "#tools" },
    { label: "Case Files", href: "#case-files" },
    { label: "Contact", href: "#contact" },
  ];

  // Handle scroll spy for active section highlight on Home page
  useEffect(() => {
    if (location.pathname !== "/") return;

    const sections = ["workshop", "about", "tools", "case-files", "contact"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // offset for fixed header
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Handle hash scrolling on page load/location change
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const targetId = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsOpen(false);

    if (href.startsWith("#")) {
      const targetId = href.substring(1);
      if (location.pathname === "/") {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", href);
        }
      } else {
        navigate(`/${href}`);
      }
    } else if (href === "/") {
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.pushState(null, "", "/");
      } else {
        navigate("/");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isItemActive = (href: string) => {
    if (location.pathname === "/") {
      if (href === "/" || href === "#workshop") {
        return activeSection === "workshop";
      }
      if (href === "#about") return activeSection === "about";
      if (href === "#tools") return activeSection === "tools";
      if (href === "#case-files") return activeSection === "case-files";
      if (href === "#contact") return activeSection === "contact";
    }
    return false;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border-subtle"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              onClick={(e) => handleNavClick(e, "/")}
              className="flex items-center gap-2"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-lg font-bold font-mono text-accent-orange"
              >
                RFR
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const active = isItemActive(item.href);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="relative"
                  >
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`block px-4 py-2 rounded text-sm font-medium transition cursor-pointer ${
                        active
                          ? "text-accent-orange bg-accent-orange/10 font-semibold"
                          : "text-text-secondary hover:text-text-primary"
                      }`}
                    >
                      {item.label}
                    </motion.span>
                  </a>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-text-secondary hover:text-text-primary transition"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-surface-secondary border-t border-border-subtle"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => {
                const active = isItemActive(item.href);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`block w-full text-left px-4 py-2 rounded text-sm font-medium transition cursor-pointer ${
                      active
                        ? "text-accent-orange bg-accent-orange/10 font-semibold"
                        : "text-text-secondary hover:text-text-primary hover:bg-surface-primary"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
}
