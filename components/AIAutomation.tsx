"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  BarChart3,
  Search,
  Users,
  PenTool,
  Layout,
  Shield,
} from "lucide-react";

const automations = [
  {
    icon: BarChart3,
    title: "Data Reporting & Dashboards",
    desc: "Automated agents that pull, clean, and visualize performance data across platforms. No more manual spreadsheet pulls.",
  },
  {
    icon: Search,
    title: "Competitor Analysis",
    desc: "AI pipelines that monitor competitor pricing, positioning, and campaigns, delivering weekly intelligence reports automatically.",
  },
  {
    icon: Users,
    title: "Lead Generation",
    desc: "Automated lead scoring, enrichment, and routing workflows that feed qualified prospects directly into the sales funnel.",
  },
  {
    icon: PenTool,
    title: "Content Production",
    desc: "AI-assisted content creation workflows for social media, email, and ad creative, scaling output without scaling headcount.",
  },
  {
    icon: Layout,
    title: "Landing Page Generation",
    desc: "Custom landing pages built and deployed through AI automation, accelerating go-to-market timelines from weeks to hours.",
  },
  {
    icon: Shield,
    title: "Web Scraping & Monitoring",
    desc: "Automated tools for website scraping, security monitoring, and competitive intelligence gathering at scale.",
  },
];

function AutomationCard({
  item,
  index,
}: {
  item: (typeof automations)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-white/5 rounded-2xl p-6 border border-white/8 hover:bg-white/8 hover:border-white/15 transition-all duration-300"
    >
      <div className="w-10 h-10 rounded-xl bg-[#2563EB]/15 flex items-center justify-center mb-4">
        <Icon size={20} className="text-[#60A5FA]" />
      </div>
      <h3 className="text-[16px] font-semibold text-white mb-2">{item.title}</h3>
      <p className="text-sm text-[#888888] leading-relaxed">{item.desc}</p>
    </motion.div>
  );
}

export default function AIAutomation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="ai-automation"
      className="py-24 md:py-32 px-6"
      style={{
        background:
          "linear-gradient(135deg, #0D1B2A 0%, #111827 50%, #0F172A 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-xs font-semibold tracking-widest text-[#666666] uppercase mb-4"
        >
          AI &amp; Automation
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="text-[22px] md:text-[26px] font-semibold text-white leading-snug mb-4 max-w-2xl"
        >
          I don&apos;t just use AI tools. I build AI systems that solve real business problems.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[16px] text-[#888888] leading-relaxed mb-14 max-w-xl"
        >
          From production-grade automation pipelines to custom AI agents, here&apos;s how I put AI to work.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-4">
          {automations.map((item, index) => (
            <AutomationCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
