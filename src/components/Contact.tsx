"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Copy,
  Check,
  Send,
  Download,
  Gamepad2,
  MessageSquare,
  Coins,
  Globe,
  Share2,
  Terminal,
} from "lucide-react";
import { useState } from "react";
import { getAssetUrl } from "@/data/projects";

// Clean Pixel / Brutalist Social SVGs
function GithubIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [discordCopied, setDiscordCopied] = useState(false);
  const email = "rizkyfauziradit@gmail.com";
  const discordUser = "kikyyy___";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyDiscord = () => {
    navigator.clipboard.writeText(discordUser);
    setDiscordCopied(true);
    setTimeout(() => setDiscordCopied(false), 2500);
  };

  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/rizkyenjoyy",
      handle: "@rizkyenjoyy",
      icon: GithubIcon,
      tag: "REPO / CODE",
      color: "bg-[#FFFFFF]",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rizkyfauzir/",
      handle: "in/rizkyfauzir",
      icon: LinkedinIcon,
      tag: "CAREER NETWORK",
      color: "bg-[#06B6D4]",
    },
    {
      name: "Roblox",
      url: "https://www.roblox.com/users/3744472194/profile",
      handle: "Roblox Profile",
      icon: Gamepad2,
      tag: "GAMES & ASSETS",
      color: "bg-[#EA580C]",
      textWhite: true,
    },
    {
      name: "Discord",
      handle: `@${discordUser}`,
      isDiscord: true,
      icon: MessageSquare,
      tag: "USERNAME",
      color: "bg-[#5865F2]",
      textWhite: true,
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-20 bg-[#FAF7EE] relative border-t-2 sm:border-t-3 border-[#121212] bg-arcade-grid">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FACC15] text-[#121212] border-2 border-[#121212] px-3 sm:px-3.5 py-1 font-mono text-[10px] sm:text-xs font-bold uppercase shadow-brutal-xs">
            <Mail className="w-3.5 h-3.5" />
            <span>COMMUNICATION CHANNEL // CONNECT</span>
          </div>

          <h2 className="text-fluid-h2 font-extrabold uppercase text-[#121212] tracking-tight">
            LET'S WORK TOGETHER // GET IN TOUCH
          </h2>

          <p className="font-mono text-xs sm:text-sm md:text-base text-[#4B5563] px-2">
            Have a game development idea, a web system to build, or an exciting career opportunity? Let's connect!
          </p>
        </div>

        {/* Main Arcade Ticket Contact Card */}
        <div className="max-w-4xl mx-auto bg-[#FFFFFF] border-2 sm:border-3 border-[#121212] shadow-brutal-sm sm:shadow-brutal-lg p-4 xs:p-6 sm:p-10 relative">
          
          {/* Top Bar */}
          <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-3 sm:gap-4 border-b-2 sm:border-b-3 border-[#121212] pb-4 sm:pb-6 mb-6 sm:mb-8">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#FACC15] border-2 border-[#121212] flex items-center justify-center shadow-brutal-xs shrink-0">
                <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-[#121212]" />
              </div>
              <div>
                <span className="font-mono text-[10px] sm:text-xs font-bold text-[#6B7280] uppercase">
                  DISPATCH CHANNEL: ACTIVE
                </span>
                <h3 className="text-lg sm:text-2xl font-black uppercase text-[#121212]">
                  DIRECT COMMS TICKET
                </h3>
              </div>
            </div>

            <span className="bg-[#22C55E] text-[#121212] border-2 border-[#121212] font-mono text-[10px] sm:text-xs font-black px-2.5 sm:px-3 py-1 shadow-brutal-xs uppercase self-start xs:self-auto">
              STATUS: OPEN FOR WORK
            </span>
          </div>

          {/* Quick Email Copy Box */}
          <div className="bg-[#FAF7EE] border-2 border-[#121212] p-3.5 sm:p-6 mb-6 sm:mb-8 shadow-brutal-xs">
            <p className="font-mono text-[11px] sm:text-xs text-[#6B7280] uppercase font-bold mb-2">
              // DIRECT EMAIL ADDRESS:
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 font-mono text-xs xs:text-sm sm:text-base font-bold text-[#121212] bg-white border-2 border-[#121212] px-3 py-2 overflow-hidden">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#EA580C] shrink-0" />
                <span className="select-all break-all">{email}</span>
              </div>

              <div className="flex flex-col xs:flex-row items-stretch gap-2 shrink-0">
                <button
                  onClick={copyEmail}
                  className="btn-brutal min-h-[44px] flex items-center justify-center gap-1.5 bg-[#FACC15] text-[#121212] border-2 border-[#121212] px-4 py-2.5 font-mono text-xs font-bold shadow-brutal-xs uppercase cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#16A34A]" />
                      <span>COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>COPY EMAIL</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${email}`}
                  className="btn-brutal min-h-[44px] flex items-center justify-center gap-1.5 bg-[#121212] text-[#FAF7EE] border-2 border-[#121212] px-4 py-2.5 font-mono text-xs font-bold shadow-brutal-xs uppercase"
                >
                  <Send className="w-4 h-4" />
                  <span>MAILTO</span>
                </a>
              </div>
            </div>
          </div>

          {/* Social Platforms Grid */}
          <div className="space-y-3 sm:space-y-4">
            <p className="font-mono text-[11px] sm:text-xs text-[#6B7280] uppercase font-bold">
              // CONNECT ON EXTERNAL NETWORKS:
            </p>
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {socials.map((social) => {
                const Icon = social.icon;
                if (social.isDiscord) {
                  return (
                    <button
                      key={social.name}
                      onClick={copyDiscord}
                      type="button"
                      className={`btn-brutal min-h-[44px] text-left ${social.color} ${
                        social.textWhite ? "text-white" : "text-[#121212]"
                      } border-2 border-[#121212] p-3.5 sm:p-4 shadow-brutal-xs flex flex-col justify-between group cursor-pointer`}
                    >
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                        <span className="font-mono text-[8px] sm:text-[9px] font-black uppercase px-1.5 py-0.5 bg-black text-white">
                          {discordCopied ? "✓ COPIED" : social.tag}
                        </span>
                      </div>
                      <div>
                        <span className="font-mono text-xs sm:text-sm font-extrabold uppercase flex items-center justify-between">
                          <span>{social.name}</span>
                          {discordCopied ? (
                            <Check className="w-3.5 h-3.5 text-[#86EFAC]" />
                          ) : (
                            <Copy className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
                          )}
                        </span>
                        <span className="block font-mono text-[9px] sm:text-[10px] opacity-90 mt-0.5 font-bold">
                          {discordCopied ? "COPIED TO CLIPBOARD!" : `${social.handle} (COPY)`}
                        </span>
                      </div>
                    </button>
                  );
                }

                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn-brutal min-h-[44px] ${social.color} ${
                      social.textWhite ? "text-white" : "text-[#121212]"
                    } border-2 border-[#121212] p-3.5 sm:p-4 shadow-brutal-xs flex flex-col justify-between group`}
                  >
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      <span className="font-mono text-[8px] sm:text-[9px] font-black uppercase px-1.5 py-0.5 bg-black text-white">
                        {social.tag}
                      </span>
                    </div>
                    <div>
                      <span className="font-mono text-xs sm:text-sm font-extrabold uppercase">
                        {social.name}
                      </span>
                      <span className="block font-mono text-[9px] sm:text-[10px] opacity-75 mt-0.5">
                        {social.handle || "VISIT PROFILE →"}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Download Resume Action */}
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t-2 border-[#121212] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
            <p className="font-mono text-[11px] sm:text-xs text-[#4B5563]">
              Need an offline version of my credentials and project history?
            </p>
            <a
              href={getAssetUrl("CVRizky.pdf")}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brutal min-h-[44px] inline-flex items-center justify-center gap-2 bg-[#EA580C] text-white border-2 border-[#121212] px-5 sm:px-6 py-2.5 font-mono text-xs font-black shadow-brutal-xs uppercase"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD RESUME / CV</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
