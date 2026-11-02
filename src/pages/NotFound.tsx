"use client";

import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowLeft,
  Home,
  FolderGit2,
  Terminal,
  AlertTriangle,
  Compass,
  CornerDownLeft,
} from "lucide-react";

export default function NotFound() {
  const location = useLocation();

  return (
    <div className="min-h-[calc(100vh-140px)] bg-[#FAF7EE] flex items-center justify-center px-4 pt-24 sm:pt-28 pb-16 sm:pb-24 bg-arcade-grid relative overflow-hidden">
      
      {/* Decorative Blueprint Corner Badges */}
      <div className="hidden sm:block absolute top-6 left-6 font-mono text-[10px] text-[#9CA3AF] select-none">
        <div>SYS_KERNEL // ROUTER_V7</div>
        <div>ERROR_CODE: ERR_404_ROUTE_UNDEFINED</div>
      </div>

      <div className="hidden sm:block absolute bottom-6 right-6 font-mono text-[10px] text-[#9CA3AF] select-none text-right">
        <div>RECOVERY_PROTOCOL: ACTIVE</div>
        <div>STANDBY // RETURN_FALLBACK</div>
      </div>

      {/* Main 404 Brutalist Window */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="max-w-2xl w-full bg-[#FFFFFF] border-3 sm:border-4 border-[#121212] shadow-brutal-md sm:shadow-brutal-lg overflow-hidden relative z-10"
      >
        {/* Window Top Chrome Bar */}
        <div className="bg-[#121212] text-white px-3 sm:px-4 py-2.5 flex items-center justify-between border-b-3 border-[#121212]">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444] border border-black inline-block animate-pulse" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FACC15] border border-black inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] border border-black inline-block" />
            </div>
            <span className="font-mono text-[10px] sm:text-xs text-[#9CA3AF] ml-1 font-bold">
              SYS_ERROR // 404_PAGE_NOT_FOUND
            </span>
          </div>

          <span className="font-mono text-[9px] sm:text-[10px] font-black uppercase px-2 py-0.5 border border-black bg-[#EF4444] text-white">
            STATUS: 404
          </span>
        </div>

        {/* Window Body */}
        <div className="p-6 sm:p-10 space-y-6">
          
          {/* Header Alert & 404 Display */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#FACC15] text-[#121212] border-2 border-[#121212] px-3 py-1 font-mono text-xs font-black uppercase shadow-brutal-xs">
              <AlertTriangle className="w-4 h-4 text-[#EA580C]" />
              <span>SEKTOR NAVIGASI TIDAK DITEMUKAN</span>
            </div>

            {/* Huge Brutalist 404 Visual */}
            <div className="relative select-none">
              <h1 className="text-6xl sm:text-8xl md:text-9xl font-black text-[#121212] tracking-tighter leading-none">
                404
              </h1>
              <span className="absolute -top-1 left-24 sm:left-36 text-xs sm:text-sm font-mono font-bold text-[#EA580C] bg-[#FAF7EE] px-2 py-0.5 border border-black rotate-6 shadow-brutal-xs">
                MODULE_MISSING
              </span>
            </div>

            <h2 className="text-fluid-h2 font-extrabold uppercase text-[#121212] tracking-tight">
              HALAMAN TIDAK DITEMUKAN
            </h2>

            <p className="font-mono text-xs sm:text-sm text-[#4B5563] leading-relaxed max-w-lg">
              Ups! Rute atau tautan yang Anda tuju sepertinya tidak ada di direktori sistem kami, telah dipindahkan, atau alamat URL yang dimasukkan kurang tepat.
            </p>
          </div>

          {/* Terminal Diagnostic Log Box */}
          <div className="bg-[#121212] text-[#FACC15] p-3 sm:p-4 border-2 border-[#121212] shadow-brutal-xs font-mono text-[11px] sm:text-xs space-y-1.5 overflow-x-auto">
            <div className="flex items-center gap-2 text-[#9CA3AF] border-b border-[#262626] pb-1.5 mb-2">
              <Terminal className="w-3.5 h-3.5 text-[#06B6D4]" />
              <span className="text-[10px] uppercase font-bold tracking-wider">
                DIAGNOSTIC TERMINAL LOG
              </span>
            </div>
            <p className="text-[#9CA3AF]">
              &gt; REQUESTED_ROUTE: <span className="text-[#FAF7EE] underline font-bold">{location.pathname}</span>
            </p>
            <p className="text-[#EF4444]">
              &gt; STATUS: [404] NO MATCHING CONTROLLER OR VIEW FOUND
            </p>
            <p className="text-[#22C55E]">
              &gt; ACTION: RE-ROUTING TO SAFE ANCHOR POINTS...
            </p>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              to="/"
              className="btn-brutal flex-1 min-h-[44px] inline-flex items-center justify-center gap-2 bg-[#FACC15] text-[#121212] border-2 border-[#121212] px-5 py-2.5 font-mono text-xs sm:text-sm font-black uppercase shadow-brutal-xs hover:bg-[#121212] hover:text-[#FACC15] transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>KEMBALI KE BERANDA</span>
            </Link>

            <Link
              to="/case-files"
              className="btn-brutal flex-1 min-h-[44px] inline-flex items-center justify-center gap-2 bg-[#FFFFFF] text-[#121212] border-2 border-[#121212] px-5 py-2.5 font-mono text-xs sm:text-sm font-black uppercase shadow-brutal-xs hover:bg-[#FAF7EE] transition-colors"
            >
              <FolderGit2 className="w-4 h-4 text-[#EA580C]" />
              <span>BUKA REPOSITORI PROYEK</span>
            </Link>
          </div>

        </div>

        {/* Card Footer Bar */}
        <div className="bg-[#FAF7EE] border-t-2 border-[#121212] px-4 py-2 flex items-center justify-between font-mono text-[9px] sm:text-[10px] text-[#6B7280]">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-[#22C55E] inline-block rounded-full" />
            <span>PORTFOLIO CORE ONLINE</span>
          </div>
          <span className="font-bold uppercase text-[#121212]">
            RIZKY.DEV // PORTFOLIO
          </span>
        </div>

      </motion.div>

    </div>
  );
}
