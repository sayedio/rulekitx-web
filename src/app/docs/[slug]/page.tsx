import React from "react";
import { getDocBySlug, getDocSlugs } from "@/lib/docs";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { CodeBlock } from "@/components/CodeBlock";
import { Card } from "@/components/Card";
import { ArrowRight, BookOpen, ChevronRight, Hash } from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Custom components to pass to MDX
const mdxComponents = {
  h1: (props: any) => (
    <h1
      className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-6 border-b border-slate-900 pb-4"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      className="text-xl sm:text-2xl font-bold text-slate-200 mt-10 mb-4 flex items-center gap-2 group"
      {...props}>
      <span className="text-cyan-500">#</span>
      {props.children}
    </h2>
  ),
  h3: (props: any) => (
    <h3 className="text-lg font-bold text-slate-300 mt-8 mb-3" {...props} />
  ),
  p: (props: any) => (
    <p className="text-slate-400 leading-relaxed mb-5" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-disc pl-6 space-y-2 text-slate-400 mb-6" {...props} />
  ),
  ol: (props: any) => (
    <ol
      className="list-decimal pl-6 space-y-2 text-slate-400 mb-6"
      {...props}
    />
  ),
  li: (props: any) => <li className="pl-1" {...props} />,
  code: (props: any) => {
    // If it's inline code (does not have multi-line structure)
    if (typeof props.children === "string" && !props.children.includes("\n")) {
      return (
        <code
          className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800/80 font-mono text-xs text-cyan-400 font-semibold"
          {...props}
        />
      );
    }
    // For codeblocks, next-mdx-remote renders pre containing code.
    // However, gray-matter output and standard markdown maps ``` blocks to pre > code.
    return <code {...props} />;
  },
  pre: (props: any) => {
    // extract children code text
    const codeElement = props.children;
    const code = codeElement?.props?.children || "";
    const className = codeElement?.props?.className || "";
    const language = className.replace("language-", "") || "bash";
    return <CodeBlock code={code} language={language} showLineNumbers />;
  },
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-cyan-500/50 bg-cyan-950/10 px-5 py-4 rounded-r-lg text-slate-300 italic my-6 leading-relaxed"
      {...props}
    />
  ),
  hr: () => <hr className="my-10 border-slate-900" />,
  table: (props: any) => (
    <div className="overflow-x-auto mb-6">
      <table className="min-w-full divide-y divide-slate-800 border border-slate-800 rounded-lg" {...props} />
    </div>
  ),
  thead: (props: any) => <thead className="bg-slate-900/50" {...props} />,
  tbody: (props: any) => <tbody className="divide-y divide-slate-800 bg-slate-900/20" {...props} />,
  tr: (props: any) => <tr className="hover:bg-slate-800/50 transition-colors" {...props} />,
  th: (props: any) => (
    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider whitespace-nowrap" {...props} />
  ),
  td: (props: any) => (
    <td className="px-6 py-4 text-sm text-slate-400 align-top" {...props} />
  ),
  Card,
  Link,
  ArrowRight,
};

export async function generateStaticParams() {
  const slugs = getDocSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params;
  const doc = getDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  return (
    <article className="prose prose-invert max-w-none">
      <div className="flex items-center gap-2 text-xs text-slate-500 mb-4 font-semibold">
        <span className="hover:text-slate-300 transition-colors">Docs</span>
        <ChevronRight className="w-3 h-3" />
        <span className="text-cyan-400">{doc.metadata.title}</span>
      </div>
      <MDXRemote 
        source={doc.content} 
        components={mdxComponents} 
        options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
      />
    </article>
  );
}
