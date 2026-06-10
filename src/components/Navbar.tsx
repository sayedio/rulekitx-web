"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Terminal, Menu, X, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

const GithubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"
    />
  </svg>
);

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/docs", label: "Documentation" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-slate-950/80 backdrop-blur-md border-slate-800/80 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent py-2"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-transform group-hover:scale-105">
              <Code2 className="w-5 h-5 text-slate-950 stroke-[2.5]" />
            </div>
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent group-hover:text-cyan-400 transition-colors">
              Rule<span className="text-cyan-400 font-extrabold">KitX</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname?.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-cyan-400",
                    isActive ? "text-cyan-400" : "text-slate-400"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="https://github.com/sayedio/rulekitx"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white p-2 transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
            </Link>
            <Link href="/docs">
              <Button variant="outline" size="sm" className="border-slate-800">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuMenuOpen(!mobileMenuOpen)}
              className="text-slate-400 hover:text-white p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 px-4 pt-2 pb-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-5 duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname?.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuMenuOpen(false)}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-cyan-400",
                    isActive ? "text-cyan-400" : "text-slate-400"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <hr className="border-slate-800/80" />
          <div className="flex items-center justify-between">
            <Link
              href="https://github.com/sayedio/rulekitx"
              target="_blank"
              onClick={() => setMobileMenuMenuOpen(false)}
              className="text-slate-400 hover:text-white flex items-center gap-2"
            >
              <GithubIcon className="w-5 h-5" />
              <span>GitHub Repository</span>
            </Link>
            <Link href="/docs" onClick={() => setMobileMenuMenuOpen(false)}>
              <Button size="sm" className="w-full">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
