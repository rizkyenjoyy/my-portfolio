"use client";

import { motion } from "framer-motion";

export default function About() {
  const principles = [
    {
      title: "Problem First",
      description:
        "Every system begins with identifying genuine user needs and operational challenges.",
    },
    {
      title: "Structured Build",
      description:
        "Codebases and system architecture must be clean, testable, and maintainable.",
    },
    {
      title: "User-Centered",
      description:
        "Systems should empower users to accomplish tasks effortlessly, without adding operational complexity.",
    },
    {
      title: "Iterative Improvement",
      description:
        "Software products evolve continuously through structured evaluation, testing, and feedback.",
    },
  ];

  return (
    <section className="py-20 bg-surface-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 space-y-4"
        >
          <div className="inline-block bg-accent-orange/10 px-3 py-2 rounded border border-accent-orange/30">
            <h2 className="text-sm font-mono text-accent-orange uppercase tracking-widest">
              ABOUT THE BUILDER
            </h2>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-text-primary">
            The person behind the systems
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <p className="text-text-secondary text-lg leading-relaxed">
              Rizky Fauzi Rimansyah is an Informatics Engineering student with a
              primary focus on web software engineering. His focus is on
              architecting web-based systems that not only function reliably
              technically, but also solve real operational problems in business
              workflows.
            </p>

            <p className="text-text-secondary text-lg leading-relaxed">
              He brings hands-on experience in Laravel, PHP, React, TypeScript,
              JavaScript, Tailwind CSS, and relational databases. With professional
              internship experience at PT Inovindo Academy (Web Developer), PT Pilar
              Sembilan Naga (Recruitment Officer), PT. Alyusro Bandung (Web Developer),
              and technical mentorship at LPKIA, Rizky understands real-world business system complexity and clear technical communication.
            </p>

            <p className="text-text-secondary text-lg leading-relaxed">
              He is passionate about building structured, maintainable, user-friendly,
              and scalable applications tailored to user needs. Every project is
              approached as an opportunity to streamline operational workflows through
              technology.
            </p>
          </motion.div>

          {/* Technical Identity Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-surface-primary border border-border-subtle rounded p-6 space-y-4"
          >
            <div className="text-xs font-mono text-accent-orange uppercase tracking-widest pb-4 border-b border-border-subtle">
              TECHNICAL IDENTITY
            </div>

            <div className="space-y-3">
              <div>
                <div className="text-xs font-mono text-text-tertiary uppercase mb-1">
                  Full Name
                </div>
                <div className="text-sm font-semibold text-text-primary">
                  Rizky Fauzi Rimansyah
                </div>
              </div>

              <div>
                <div className="text-xs font-mono text-text-tertiary uppercase mb-1">
                  Discipline
                </div>
                <div className="text-sm font-semibold text-text-primary">
                  Informatics Engineering
                </div>
              </div>

              <div>
                <div className="text-xs font-mono text-text-tertiary uppercase mb-1">
                  Specialization
                </div>
                <div className="text-sm font-semibold text-text-primary">
                  Web Application Development
                </div>
              </div>

              <div>
                <div className="text-xs font-mono text-text-tertiary uppercase mb-1">
                  Approach
                </div>
                <div className="text-sm font-semibold text-text-primary">
                  Problem-Oriented Development
                </div>
              </div>

              <div>
                <div className="text-xs font-mono text-text-tertiary uppercase mb-1">
                  Current Stage
                </div>
                <div className="text-sm font-semibold text-text-primary">
                  Final-Year Student
                </div>
              </div>

              <div>
                <div className="text-xs font-mono text-text-tertiary uppercase mb-1">
                  Location
                </div>
                <div className="text-sm font-semibold text-text-primary">
                  Bandung, Indonesia
                </div>
              </div>

              <div>
                <div className="text-xs font-mono text-text-tertiary uppercase mb-1">
                  Contact
                </div>
                <div className="text-sm font-semibold text-accent-orange break-all">
                  rizkyfauziradit@gmail.com
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Workshop Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 pt-16 border-t border-border-subtle"
        >
          <h4 className="text-xl font-semibold text-text-primary mb-8">
            Workshop Standards
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-surface-secondary p-4 rounded border border-border-subtle hover:border-accent-orange/50 transition"
              >
                <h5 className="font-semibold text-text-primary mb-2">
                  {principle.title}
                </h5>
                <p className="text-text-secondary text-sm">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
