"use client";

import { motion } from "framer-motion";
import { Code2, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: Code2,
      href: "https://github.com/rizkyenjoyy",
      label: "GitHub",
    },
    {
      icon: Mail,
      href: "https://linkedin.com/in/rizkyfauzir",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:rizkyfauziradit@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-background border-t border-border-subtle py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="text-sm font-mono text-text-tertiary uppercase tracking-widest">
              DIGITAL WORKSHOP — RFR
            </div>
            <p className="text-text-secondary text-sm max-w-sm">
              Designed and built by Rizky Fauzi Rimansyah. Building digital
              systems that solve real operational problems.
            </p>
            <div className="text-xs font-mono text-text-tertiary">
              © {new Date().getFullYear()} All Rights Reserved
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded bg-surface-secondary border border-border-subtle flex items-center justify-center text-text-secondary hover:text-accent-orange hover:border-accent-orange transition"
                  aria-label={link.label}
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded bg-surface-secondary border border-border-subtle flex items-center justify-center text-text-secondary hover:text-accent-orange hover:border-accent-orange transition"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>

        {/* Status Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-border-subtle text-center text-xs font-mono text-text-tertiary"
        >
          SYSTEM STATUS: OPERATIONAL
        </motion.div>
      </div>
    </footer>
  );
}
