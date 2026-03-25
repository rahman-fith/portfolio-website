"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    category: "Advertising Platforms",
    skills: [
      "Meta Ads", "Google Ads", "YouTube Ads", "TikTok Ads",
      "Amazon Ads", "Snapchat Ads", "Reddit Ads", "X/Twitter Ads", "Bing Ads",
    ],
  },
  {
    category: "AI & Automation",
    skills: [
      "AI Agent Development", "Workflow Automation", "Claude", "OpenAI/ChatGPT",
      "Gemini", "Lovable", "Replit",
    ],
  },
  {
    category: "Ecommerce",
    skills: [
      "Shopify", "Amazon Seller Central", "TikTok Seller Center", "TikTok Shop",
    ],
  },
  {
    category: "Marketing Automation",
    skills: [
      "Klaviyo", "Brevo", "A/B Testing", "Email Marketing", "Lead Scoring",
    ],
  },
  {
    category: "Analytics",
    skills: [
      "Google Analytics", "Data Dashboards", "KPI Tracking", "Performance Reporting",
    ],
  },
  {
    category: "Creator & Partnerships",
    skills: [
      "Influencer Management", "Creator Whitelisting", "Branded Content", "UGC", "Affiliate Programs",
    ],
  },
  {
    category: "Project Management",
    skills: ["Monday.com", "Jira", "Wrike", "Notion", "Slack"],
  },
  {
    category: "Creative",
    skills: [
      "Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Figma", "Lightroom",
    ],
  },
];

function SkillGroup({
  group,
  index,
}: {
  group: (typeof skillGroups)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="flex flex-col gap-3"
    >
      <h3 className="text-xs font-semibold tracking-widest text-[#999999] uppercase">
        {group.category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="text-sm text-[#444444] bg-white border border-[#E5E5E5] px-3.5 py-1.5 rounded-full font-medium hover:border-[#2563EB] hover:text-[#2563EB] transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 md:py-32 px-6 bg-[#FAFAFA]">
      <div className="max-w-[1200px] mx-auto">
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-xs font-semibold tracking-widest text-[#999999] uppercase mb-4"
        >
          Skills &amp; Tools
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-[36px] md:text-[40px] font-semibold text-[#1A1A1A] leading-tight tracking-tight mb-14"
        >
          The platforms and tools I use.
        </motion.h2>

        <div className="flex flex-col gap-10">
          {skillGroups.map((group, index) => (
            <SkillGroup key={group.category} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
