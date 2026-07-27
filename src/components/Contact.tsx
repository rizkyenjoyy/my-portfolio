"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageCircle, MapPin, ChevronDown, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

function CustomSelect({ options, value, onChange, placeholder }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div className="relative w-full" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-3 bg-surface-secondary border rounded text-left flex items-center justify-between transition-all duration-200 focus:outline-none ${
          isOpen
            ? "border-accent-orange ring-1 ring-accent-orange/30 shadow-[0_0_15px_rgba(245,158,11,0.15)]"
            : "border-border-subtle hover:border-text-tertiary"
        }`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={selectedOption ? "text-text-primary font-medium" : "text-text-tertiary"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          size={18}
          className={`text-text-tertiary transition-transform duration-300 ${
            isOpen ? "rotate-180 text-accent-orange" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 4, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 z-50 bg-surface-primary border border-border-subtle rounded-lg shadow-2xl overflow-hidden backdrop-blur-xl py-1.5 mt-1"
            role="listbox"
          >
            {options.map((option) => {
              const isSelected = option.value === value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 text-sm flex items-center justify-between transition-colors duration-150 ${
                    isSelected
                      ? "bg-accent-orange/15 text-accent-orange font-medium"
                      : "text-text-primary hover:bg-surface-secondary hover:text-accent-orange"
                  }`}
                  role="option"
                  aria-selected={isSelected}
                >
                  <span>{option.label}</span>
                  {isSelected && <Check size={16} className="text-accent-orange" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [projectType, setProjectType] = useState("");
  const [estimatedTimeline, setEstimatedTimeline] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setProjectType("");
    setEstimatedTimeline("");
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const projectTypeOptions: Option[] = [
    { value: "web-app", label: "Web Application" },
    { value: "info-system", label: "Information System" },
    { value: "backend", label: "Backend Development" },
    { value: "frontend", label: "Frontend Development" },
    { value: "database", label: "Database Design" },
    { value: "consultation", label: "Consultation" },
  ];

  const timelineOptions: Option[] = [
    { value: "1-2-weeks", label: "1-2 weeks" },
    { value: "1-month", label: "1 month" },
    { value: "2-3-months", label: "2-3 months" },
    { value: "3-plus-months", label: "3+ months" },
  ];

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "rizkyfauziradit@gmail.com",
      href: "mailto:rizkyfauziradit@gmail.com",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+62 813 8852 3035",
      href: "https://wa.me/6281388523035",
    },
    {
      icon: Mail,
      label: "LinkedIn",
      value: "Rizky Fauzi R.",
      href: "https://linkedin.com/in/rizkyfauzir",
    },
    {
      icon: Mail,
      label: "GitHub",
      value: "@rizkyenjoyy",
      href: "https://github.com/rizkyenjoyy",
    },
  ];

  return (
    <section className="py-20 bg-surface-secondary relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 space-y-4 text-center"
        >
          <div className="inline-block bg-accent-cyan/10 px-3 py-2 rounded border border-accent-cyan/30 mx-auto">
            <h2 className="text-sm font-mono text-accent-cyan uppercase tracking-widest">
              CONTACT STATION
            </h2>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-text-primary">
            Submit a project request or start a professional conversation
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, borderColor: "rgb(245, 158, 11)" }}
                className="bg-surface-primary border border-border-subtle rounded p-4 hover:bg-surface-secondary transition group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-accent-orange/10 group-hover:bg-accent-orange/20 transition flex items-center justify-center">
                    <Icon
                      size={20}
                      className="text-accent-orange group-hover:text-accent-orange"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-text-tertiary uppercase mb-1">
                      {link.label}
                    </div>
                    <div className="text-sm font-semibold text-text-primary">
                      {link.value}
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12 p-4 bg-surface-primary border border-border-subtle rounded"
        >
          <div className="flex items-center justify-center gap-2">
            <MapPin size={18} className="text-accent-orange" />
            <div>
              <div className="text-xs font-mono text-text-tertiary uppercase mb-1">
                Workshop Location
              </div>
              <div className="text-sm font-semibold text-text-primary">
                Bandung, West Java, Indonesia
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-surface-primary border border-border-subtle rounded p-8"
        >
          <h4 className="text-lg font-semibold text-text-primary mb-6">
            Or submit a work order below
          </h4>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-4 bg-accent-green/10 border border-accent-green rounded text-accent-green text-center"
            >
              ✓ Work order received. I will review the project details and
              respond as soon as possible.
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-4 py-3 bg-surface-secondary border border-border-subtle rounded text-text-primary placeholder-text-tertiary focus:outline-none focus:border-accent-orange transition"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-3 bg-surface-secondary border border-border-subtle rounded text-text-primary placeholder-text-tertiary focus:outline-none focus:border-accent-orange transition"
                  required
                />
              </div>

              <input
                type="text"
                placeholder="Company or Organization"
                className="w-full px-4 py-3 bg-surface-secondary border border-border-subtle rounded text-text-primary placeholder-text-tertiary focus:outline-none focus:border-accent-orange transition"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CustomSelect
                  options={projectTypeOptions}
                  value={projectType}
                  onChange={setProjectType}
                  placeholder="Select Project Type"
                />
                <CustomSelect
                  options={timelineOptions}
                  value={estimatedTimeline}
                  onChange={setEstimatedTimeline}
                  placeholder="Estimated Timeline"
                />
              </div>

              <textarea
                placeholder="Project Description"
                rows={5}
                className="w-full px-4 py-3 bg-surface-secondary border border-border-subtle rounded text-text-primary placeholder-text-tertiary focus:outline-none focus:border-accent-orange transition resize-none"
                required
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-accent-orange text-surface-primary font-semibold rounded hover:bg-accent-orange/90 transition"
              >
                Submit Work Order
              </motion.button>
            </form>
          )}
        </motion.div>

        {/* Availability Status */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-sm text-text-tertiary font-mono"
        >
          <div className="inline-flex items-center gap-2 bg-surface-primary px-4 py-2 rounded border border-border-subtle">
            <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse" />
            WORKSHOP STATUS: OPERATIONAL & AVAILABLE FOR PROJECTS
          </div>
        </motion.div>
      </div>
    </section>
  );
}
