import React from "react";
import Link from "next/link";
import { Code2, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center shadow-[0_0_10px_rgba(6,182,212,0.2)]">
              <Code2 className="w-4 h-4 text-slate-950 stroke-[2.5]" />
            </div>
            <span className="font-bold text-sm tracking-tight text-slate-300">
              Rule<span className="text-cyan-400">KitX</span>
            </span>
          </div>

          {/* Copyright/Credits */}
          <div className="text-xs text-slate-500 flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} RuleKitX. All rights reserved. Built with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>by</span>
            <Link
              href="https://github.com/sayed"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors font-semibold"
            >
              sayed
            </Link>
          </div>

          {/* Quick links */}
          <div className="flex gap-6 text-xs text-slate-500">
            <Link href="/docs" className="hover:text-slate-300 transition-colors">
              Docs
            </Link>
            <Link href="https://github.com/sayedio/rulekitx" target="_blank" className="hover:text-slate-300 transition-colors">
              GitHub
            </Link>
            <Link href="/docs" className="hover:text-slate-300 transition-colors">
              Skills
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
