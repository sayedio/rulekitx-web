"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
  showLineNumbers?: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = "bash",
  className,
  showLineNumbers = false,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };

  const lines = code.trim().split("\n");

  return (
    <div className={cn("relative group rounded-xl border border-slate-800 bg-slate-950/80 overflow-hidden text-sm font-mono my-4", className)}>
      {/* Top Header/Tab */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800 bg-slate-950">
        <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-cyan-400 bg-slate-900/50 hover:bg-slate-900 border border-slate-800/80 hover:border-cyan-500/30 rounded px-2 py-1 transition-all duration-150 cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Area */}
      <div className="overflow-x-auto p-4 max-h-[500px]">
        <pre className="text-slate-300 leading-relaxed font-mono">
          <code>
            {showLineNumbers ? (
              lines.map((line, i) => (
                <span key={i} className="table-row">
                  <span className="table-cell select-none pr-4 text-right text-slate-600 border-r border-slate-800/40 w-8">{i + 1}</span>
                  <span className="table-cell pl-4 whitespace-pre">{line}</span>
                </span>
              ))
            ) : (
              code.trim()
            )}
          </code>
        </pre>
      </div>
    </div>
  );
};
