"use client";

import { motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getAssetUrl } from "@/data/projects";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: "Experiences", href: "#projects" },
    { label: "Arsenal", href: "#arsenal" },
    { label: "Journey", href: "#journey" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  // Scrollspy
  useEffect(() => {
    if (location.pathname !== "/") return;

    const sections = ["hero", "projects", "arsenal", "journey", "about", "contact"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
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

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 150);
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
      setIsOpen(false);
    }
  };

  // Hide navbar on case-files page (must be placed after all hooks)
  if (location.pathname === "/case-files") {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4 pb-2">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#FAF7EE] border-2 sm:border-3 border-[#121212] shadow-brutal-sm sm:shadow-brutal px-3 sm:px-6 py-2 sm:py-3 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
          >
            <div className="bg-[#FACC15] text-[#121212] border-2 border-[#121212] px-2 sm:px-2.5 py-1 font-mono font-extrabold text-xs sm:text-base shadow-brutal-xs flex items-center gap-1.5">
              <span className="inline-block w-2 sm:w-2.5 h-2 sm:h-2.5 bg-[#22C55E] border border-black rounded-none animate-ping" />
              <span>RIZKY.DEV</span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`font-mono text-xs xl:text-sm font-bold uppercase px-3 py-1.5 border-2 border-transparent transition-all ${
                  activeSection === item.href.replace("#", "")
                    ? "bg-[#121212] text-[#FAF7EE] border-[#121212] shadow-brutal-xs"
                    : "text-[#121212] hover:bg-[#F3ECE1] hover:border-[#121212]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getAssetUrl("CVRizky.pdf")}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brutal inline-flex items-center gap-1.5 bg-[#EA580C] text-white border-2 border-[#121212] px-3.5 py-1.5 font-mono text-xs sm:text-sm font-bold shadow-brutal uppercase min-h-[40px]"
            >
              <Download className="w-4 h-4" />
              <span>RESUME / CV</span>
            </a>
          </div>

          {/* Mobile Menu Toggle (44x44px touch target) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden min-w-[44px] min-h-[44px] p-2 bg-[#FACC15] border-2 border-[#121212] text-[#121212] shadow-brutal-xs btn-brutal flex items-center justify-center cursor-pointer"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-2 bg-[#FAF7EE] border-2 sm:border-3 border-[#121212] shadow-brutal p-3 sm:p-4 space-y-3"
          >
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="font-mono text-xs font-bold uppercase px-3.5 py-3 min-h-[44px] bg-white border-2 border-[#121212] text-[#121212] shadow-brutal-xs hover:bg-[#FACC15] active:bg-[#FACC15] flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-xs font-black">→</span>
                </a>
              ))}
            </div>

            <a
              href={getAssetUrl("CVRizky.pdf")}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[44px] flex items-center justify-center gap-2 bg-[#EA580C] text-white border-2 border-[#121212] py-3 px-4 font-mono text-xs font-bold shadow-brutal uppercase"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD CV (PDF)</span>
            </a>
          </motion.div>
        )}
      </div>
    </header>
  );
}
