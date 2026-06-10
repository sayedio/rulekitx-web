"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Shield, 
  Sparkles, 
  Terminal as TerminalIcon, 
  Code2, 
  Layers, 
  Cpu, 
  RefreshCw, 
  Zap, 
  ArrowRight,
  Settings,
  Flame,
  CheckCircle,
  Copy,
  Check
} from "lucide-react";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { CodeBlock } from "@/components/CodeBlock";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [copiedState, setCopiedState] = useState(false);

  const handleCopyInstall = async () => {
    try {
      await navigator.clipboard.writeText("npm install -g rulekitx");
      setCopiedState(true);
      setTimeout(() => setCopiedState(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  const skills = [
    {
      command: "/rulekitx-architect",
      title: "Architect",
      desc: "Design scalable, maintainable system architectures.",
      category: "engineering",
      color: "from-cyan-500 to-blue-600",
      glow: "cyan"
    },
    {
      command: "/rulekitx-refactor",
      title: "Refactor",
      desc: "Improve code maintainability without changing behavior.",
      category: "engineering",
      color: "from-blue-500 to-indigo-600",
      glow: "cyan"
    },
    {
      command: "/rulekitx-reviewer",
      title: "Reviewer",
      desc: "Review code for production risks and security.",
      category: "engineering",
      color: "from-indigo-500 to-purple-600",
      glow: "cyan"
    },
    {
      command: "/rulekitx-safe-feature",
      title: "Safe Feature",
      desc: "Implement new features safely inside existing systems.",
      category: "engineering",
      color: "from-purple-500 to-pink-600",
      glow: "cyan"
    },
    {
      command: "/rulekitx-premium-ui",
      title: "Premium UI",
      desc: "Build professional, accessible, production-grade UIs.",
      category: "design",
      color: "from-pink-500 to-rose-600",
      glow: "purple"
    },
    {
      command: "/rulekitx-redesign",
      title: "Redesign",
      desc: "Improve existing interfaces without workflow disruption.",
      category: "design",
      color: "from-rose-500 to-orange-600",
      glow: "purple"
    },
    {
      command: "/rulekitx-exec-complete",
      title: "Exec Complete",
      desc: "Produce fully working, production-ready implementations.",
      category: "execution",
      color: "from-orange-500 to-amber-600",
      glow: "purple"
    },
    {
      command: "/rulekitx-api",
      title: "API Standard",
      desc: "Design and review APIs to a consistent production standard.",
      category: "standards",
      color: "from-amber-500 to-yellow-600",
      glow: "none"
    },
    {
      command: "/rulekitx-testing",
      title: "Testing Standard",
      desc: "Write and structure tests to a consistent production standard.",
      category: "standards",
      color: "from-yellow-500 to-emerald-600",
      glow: "none"
    }
  ];

  const features = [
    {
      icon: <Layers className="w-6 h-6 text-cyan-400" />,
      title: "3-Layer Memory Architecture",
      desc: "Delivers a universal Core floor (L1), model-selected Domain Skills (L2), and auto-detected Project Memory (L3) in perfect, structured layers."
    },
    {
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
      title: "Smart Token-Efficient Context",
      desc: "Only relevant rules activate when needed, cutting unnecessary context load and token usage by up to 70% in Cursor and agent CLIs."
    },
    {
      icon: <TerminalIcon className="w-6 h-6 text-pink-400" />,
      title: "Project Memory Autodetection",
      desc: "Initialize locally to scan your dependencies and generate a tailored stack summary (Next.js, Tailwind, etc.) with smart placeholders."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden relative">
      <Navbar />

      {/* Decorative Glow Spots */}
      <div className="glow-spot top-[-100px] left-[-100px] md:left-[10%]" />
      <div className="glow-spot-purple top-[300px] right-[-100px] md:right-[15%]" />

      {/* Main Landing Area */}
      <main className="flex-1 pt-24">
        {/* HERO SECTION */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-16 pb-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-950/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-8"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Next-Gen Prompt Governance</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8"
            >
              <span className="text-gradient block">Composable AI</span>
              <span className="text-gradient-purple">Engineering Governance</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10"
            >
              Deliver strict, universal engineering guidelines and specialized on-demand skills directly to Claude Code, OpenCode, Cursor, VS Code, and JetBrains. Keep your AI grounded and your context window lean.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <Link href="/docs">
                <Button size="lg" variant="primary" glow className="w-full sm:w-auto gap-2">
                  <span>Explore Documentation</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="https://github.com/sayedio/rulekitx" target="_blank">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  View on GitHub
                </Button>
              </Link>
            </motion.div>

            {/* Quick Install Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-full max-w-lg rounded-xl border border-slate-800 bg-slate-900/50 p-4 backdrop-blur flex items-center justify-between gap-4 shadow-lg shadow-black/40"
            >
              <div className="flex items-center gap-3 font-mono text-sm text-cyan-400">
                <span className="text-slate-600 select-none">$</span>
                <span>npm install -g rulekitx</span>
              </div>
              <button
                onClick={handleCopyInstall}
                className="p-2 rounded-lg hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/30 text-slate-500 hover:text-cyan-400 transition-all cursor-pointer"
              >
                {copiedState ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </motion.div>
          </div>
        </section>

        {/* CORE FEATURES GRID */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20 border-t border-slate-900 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col items-start gap-4">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    {feat.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-100">{feat.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{feat.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* COMPOSE PREVIEW SIMULATOR */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20 border-t border-slate-900 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text description */}
            <div className="lg:col-span-5 flex flex-col items-start gap-6">
              <div className="px-3 py-1.5 rounded-full border border-purple-500/20 bg-purple-950/20 text-purple-400 text-xs font-semibold uppercase tracking-wider">
                Built-in Intelligence
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Bulletproof Prompt Orchestration
              </h2>
              <p className="text-slate-400 leading-relaxed">
                When you invoke any skill via slash command, RuleKitX seamlessly extracts the target logic and compiles the active system constraints into strict, structured XML containers.
              </p>
              <div className="flex flex-col gap-3 w-full">
                <div className="flex items-center gap-2.5 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>Enforces system-level constraints first</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>Deduplicates rules dynamically</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>Separates instructions cleanly from user tasks</span>
                </div>
              </div>
              <Link href="/docs" className="mt-2">
                <Button variant="outline" className="gap-2 border-slate-800">
                  <span>How Composition Works</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Code Block Showcase */}
            <div className="lg:col-span-7">
              <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-1 backdrop-blur shadow-2xl relative">
                <div className="absolute -top-3 -left-3 px-3 py-1 rounded bg-gradient-to-r from-cyan-500 to-purple-600 text-xs font-extrabold text-slate-950 tracking-wider uppercase shadow-lg shadow-cyan-500/10">
                  Composed Context
                </div>
                <CodeBlock 
                  language="xml" 
                  code={`<RULEKITX_SYSTEM_PROMPT version="2.0" priority="MAXIMUM">
  <MANDATORY_INSTRUCTIONS>
    You MUST follow ALL instructions in this system block...
  </MANDATORY_INSTRUCTIONS>

  <CORE_RULES priority="CRITICAL">
    # Core floor guidelines: Correctness, safety, security...
  </CORE_RULES>

  <ACTIVE_SKILLS>
    <SKILL name="architect" priority="HIGH">
      # Selected design directives, boundaries, data flows...
    </SKILL>
  </ACTIVE_SKILLS>

  <COMPLIANCE_CHECK>
    Verify you applied core floor guidelines before replying...
  </COMPLIANCE_CHECK>
</RULEKITX_SYSTEM_PROMPT>

<USER_TASK>
  build custom authentication layer
</USER_TASK>`} 
                />
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS CARDS GRID */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-24 border-t border-slate-900 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Explore Available Skills
            </h2>
            <p className="text-slate-400">
              RuleKitX ships with 9 premium, handcrafted engineering, design, and validation directives designed to maximize LLM compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.command}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card 
                  hoverEffect 
                  glowColor={skill.glow as "cyan" | "purple" | "none"}
                  className="h-full flex flex-col justify-between"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-cyan-400 bg-slate-900 border border-slate-800 rounded px-2 py-0.5 font-semibold">
                        {skill.command}
                      </span>
                      <span className="text-[10px] text-slate-500 font-extrabold tracking-widest uppercase">
                        {skill.category}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-100 mb-2">{skill.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{skill.desc}</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-900/60 flex items-center justify-between">
                    <span className="text-xs text-slate-500">Loads alongside Core Memory</span>
                    <Link href={`/docs#${skill.title.toLowerCase().replace(/\s+/g, "-")}`} className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                      <span>View details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CURSOR INTEGRATION SHOWCASE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-24 border-t border-slate-900 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Code block showcase */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-1 backdrop-blur shadow-2xl relative">
                <div className="absolute -top-3 -right-3 px-3 py-1 rounded bg-cyan-400 text-xs font-extrabold text-slate-950 tracking-wider uppercase shadow-lg shadow-cyan-400/20">
                  .cursor/rules/rulekitx-core.mdc
                </div>
                <CodeBlock 
                  language="yaml" 
                  code={`---
description: Always-on reasoning and safety kernel for every task. Defines decision hierarchy, verification, and safety baselines.
alwaysApply: true
---

# Core Memory (Layer 1)

The universal floor for every task. Always active, never domain-specific.

## Decision Priority
1. Correctness
2. Safety
3. Security
4. Clarity
5. Simplicity

## Warn First, Stop Only If Critical
Default to warning and proceeding with an explicit, labelled assumption.`} 
                />
              </div>
            </div>

            {/* Text description */}
            <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start gap-6">
              <div className="px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-950/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                Smart Cursor Rules
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Native Layered Compliance
              </h2>
              <p className="text-slate-400 leading-relaxed">
                By initializing RuleKitX locally, the CLI generates optimal `.cursor/rules/*.mdc` rules. To prevent prompt and context bloat, rules are loaded smartly according to their architecture layer.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Core rules and Project Memory use <code className="text-cyan-400 font-mono">alwaysApply: true</code> so they are loaded everywhere. Domain skills are written as description-only so they are model-selected on-demand.
              </p>
              <div className="flex flex-col gap-3 w-full">
                <div className="flex items-center gap-2.5 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>alwaysApply: true on universal core safety (Layer 1)</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>alwaysApply: true on auto-detected Project Memory (Layer 3)</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>Agent-Requested on-demand Domain Skills (Layer 2)</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>Create and sync your own <Link href="/docs/custom-skills" className="text-cyan-400 hover:text-cyan-300 transition-colors underline underline-offset-4 decoration-cyan-400/30">Custom Skills</Link></span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
