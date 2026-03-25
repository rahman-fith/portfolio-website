"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

interface MetricCard {
  value: string;
  label: string;
}

interface Screenshot {
  src: string;
  alt: string;
  caption?: string;
}

interface CaseStudyTemplateProps {
  tag: string;
  title: string;
  tagColor?: string;
  metrics: MetricCard[];
  tldr?: string[];
  screenshots?: Screenshot[];
  workflowDiagramSrc?: string;
  overview?: string[];
  approach?: string[];
  resultsSummary?: string;
  takeaways?: string[];
}

// Renders paragraphs with bold first sentence for easy skimming
function Paragraphs({ lines }: { lines: string[] }) {
  return (
    <div className="flex flex-col gap-5">
      {lines.map((p, i) => {
        const firstPeriod = p.indexOf(". ");
        const firstSentence = firstPeriod > 0 ? p.slice(0, firstPeriod + 1) : "";
        const rest = firstPeriod > 0 ? p.slice(firstPeriod + 1) : p;
        return (
          <p key={i} className="text-[16px] text-[#444444] leading-relaxed">
            {firstSentence && (
              <strong className="text-[#1A1A1A] font-semibold">
                {firstSentence}
              </strong>
            )}
            {rest}
          </p>
        );
      })}
    </div>
  );
}

const NAV_ITEMS = [
  { label: "Overview", href: "#cs-overview" },
  { label: "Approach", href: "#cs-approach" },
  { label: "Results", href: "#cs-results" },
  { label: "Takeaways", href: "#cs-takeaways" },
];

export default function CaseStudyTemplate({
  tag,
  title,
  tagColor = "text-[#60A5FA] bg-[#60A5FA]/10",
  metrics,
  tldr,
  screenshots,
  workflowDiagramSrc,
  overview,
  approach,
  resultsSummary,
  takeaways,
}: CaseStudyTemplateProps) {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      {/* Back nav */}
      <div className="px-6 pt-8">
        <div className="max-w-[1200px] mx-auto">
          <Link
            href="/#case-studies"
            className="inline-flex items-center gap-2 text-sm text-[#666666] hover:text-[#1A1A1A] transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Case Studies
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span
              className={`text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full ${tagColor}`}
            >
              {tag}
            </span>
            <h1 className="text-[36px] md:text-[48px] font-bold text-[#1A1A1A] leading-tight tracking-tight mt-5 mb-4">
              {title}
            </h1>
            <div className="w-16 h-1 bg-[#2563EB] rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* TL;DR strip — quick scan for recruiters */}
      {tldr && tldr.length > 0 && (
        <section className="px-6 pb-8 border-b border-[#E5E5E5]">
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="bg-[#EEF3FF] border border-[#DBEAFE] rounded-2xl p-6"
            >
              <p className="text-xs font-semibold tracking-widest text-[#2563EB] uppercase mb-4">
                At a Glance
              </p>
              <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2.5">
                {tldr.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-2.5 text-[14px] text-[#1A1A1A] leading-snug"
                  >
                    <span className="text-[#2563EB] shrink-0 mt-0.5 font-bold">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>
      )}

      {/* Sticky in-page section nav */}
      <nav className="sticky top-16 z-40 bg-[#FAFAFA]/95 backdrop-blur-sm border-b border-[#E5E5E5]">
        <div className="max-w-[1200px] mx-auto px-6 overflow-x-auto">
          <div className="flex gap-7 py-3 min-w-max">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[13px] font-medium text-[#666666] hover:text-[#1A1A1A] transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Overview */}
      <section id="cs-overview" className="py-12 px-6 border-b border-[#E5E5E5]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-[22px] font-semibold text-[#1A1A1A] mb-6">Overview</h2>
            {overview ? (
              <Paragraphs lines={overview} />
            ) : (
              <div className="bg-[#F5F5F5] border border-[#E5E5E5] rounded-xl p-6 text-[#999999] text-sm italic">
                [PLACEHOLDER: Write 2-3 paragraphs describing the challenge, approach, and context]
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Workflow Diagram — only shown when a src is provided */}
      {workflowDiagramSrc && (
        <section className="py-12 px-6 border-b border-[#E5E5E5]">
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.13 }}
            >
              <h2 className="text-[22px] font-semibold text-[#1A1A1A] mb-2">
                System Architecture
              </h2>
              <p className="text-sm text-[#999999] mb-6">
                Before vs. after workflow showing the manual process replaced by automated
                replenishment logic.
              </p>
              <div className="rounded-2xl overflow-hidden border border-[#1e1e1e] bg-[#0a0a0a]">
                <iframe
                  src={workflowDiagramSrc}
                  title="FITH Inventory Workflow — Before vs. After"
                  className="w-full"
                  style={{ height: "1380px", border: "none", display: "block" }}
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* The Approach */}
      <section id="cs-approach" className="py-12 px-6 border-b border-[#E5E5E5]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h2 className="text-[22px] font-semibold text-[#1A1A1A] mb-6">The Approach</h2>
            {approach ? (
              <Paragraphs lines={approach} />
            ) : (
              <div className="bg-[#F5F5F5] border border-[#E5E5E5] rounded-xl p-6 text-[#999999] text-sm italic">
                [PLACEHOLDER: Write 3-4 paragraphs on strategy and execution]
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section id="cs-results" className="py-12 px-6 border-b border-[#E5E5E5]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-[22px] font-semibold text-[#1A1A1A] mb-8">Results</h2>

            {/* Metric cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {metrics.map((m, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#E5E5E5] rounded-2xl p-5 text-center shadow-sm"
                >
                  <p className="text-[28px] font-bold text-[#1A1A1A]">{m.value}</p>
                  <p className="text-xs text-[#999999] mt-1 leading-snug">{m.label}</p>
                </div>
              ))}
            </div>

            {/* Screenshots — real dashboard evidence */}
            {screenshots && screenshots.length > 0 && (
              <div className="flex flex-col gap-6 mb-8">
                {screenshots.map((shot, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden border border-[#E5E5E5] shadow-sm">
                    <div className="relative w-full">
                      <Image
                        src={shot.src}
                        alt={shot.alt}
                        width={1200}
                        height={600}
                        className="w-full h-auto object-contain"
                        quality={90}
                      />
                    </div>
                    {shot.caption && (
                      <div className="px-5 py-3 bg-[#F8F8F8] border-t border-[#E5E5E5]">
                        <p className="text-xs text-[#999999] font-medium">{shot.caption}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {resultsSummary ? (
              <p className="text-[16px] text-[#444444] leading-relaxed">{resultsSummary}</p>
            ) : (
              <div className="bg-[#F5F5F5] border border-[#E5E5E5] rounded-xl p-6 text-[#999999] text-sm italic">
                [PLACEHOLDER: Write 1-2 paragraphs summarizing outcomes]
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section id="cs-takeaways" className="py-12 px-6 border-b border-[#E5E5E5]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <h2 className="text-[22px] font-semibold text-[#1A1A1A] mb-5">Key Takeaways</h2>
            {takeaways ? (
              <div className="flex flex-col gap-3">
                {takeaways.map((t, i) => (
                  <div
                    key={i}
                    className="bg-white border border-[#E5E5E5] rounded-xl p-6 shadow-sm"
                  >
                    <div className="flex gap-4">
                      <span className="text-[#2563EB] font-bold text-sm mt-0.5 shrink-0">
                        0{i + 1}
                      </span>
                      <p className="text-[15px] text-[#444444] leading-relaxed">{t}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className="bg-[#F5F5F5] border border-[#E5E5E5] rounded-xl p-5 text-[#999999] text-sm italic"
                  >
                    [PLACEHOLDER: Key takeaway {n}]
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Back link */}
      <section className="py-12 px-6">
        <div className="max-w-[1200px] mx-auto">
          <Link
            href="/#case-studies"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#2563EB] hover:gap-3 transition-all"
          >
            <ArrowLeft size={14} />
            Back to all case studies
          </Link>
        </div>
      </section>
    </main>
  );
}
