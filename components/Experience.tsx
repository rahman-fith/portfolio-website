"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "Innova Electronics Corporation",
    title: "Digital Marketing Specialist, Ecommerce",
    location: "Irvine, CA",
    dates: "June 2023 - Present",
    bullets: [
      "Led multi-channel ecommerce marketing strategy across Meta, Amazon, TikTok, Shopify, and retail channels, contributing to $10M+ annual digital revenue.",
      "Architected and managed full-funnel ad campaigns across Meta Ads, Google Ads, Amazon Ads, TikTok Ads, and Bing Ads, achieving a sustained 4.1x average ROAS across all platforms.",
      "Developed and deployed AI-powered automation agents to streamline operational workflows including automated data reporting dashboards, competitor analysis pipelines, lead generation systems, and content production, enabling the team to scale output without additional headcount.",
      "Spearheaded influencer and affiliate marketing programs, coordinating with thousands of creators to produce high-converting UGC content and driving measurable sales attribution.",
      "Managed TikTok Shop operations and affiliate program end-to-end, scaling the channel into a significant revenue contributor.",
      "Drove web development initiatives and product detail page (PDP) optimizations that directly increased on-site conversion rates and revenue.",
    ],
  },
  {
    company: "FITH",
    title: "Co-Founder & Ecommerce Marketing Manager",
    location: "Orange, CA",
    dates: "November 2022 - Present",
    label: "Independent Venture",
    bullets: [
      "Co-founded and scaled a direct-to-consumer ecommerce brand across Shopify, TikTok Shop, and Meta, managing all aspects of strategy, operations, marketing, and growth.",
      "Designed and executed data-driven marketing campaigns generating millions of organic impressions across social platforms, building a loyal customer community from scratch.",
      "Developed and deployed AI automation agents for operational workflows including competitor analysis, graphic design production, content creation, custom landing page builds, and data analytics dashboards.",
      "Directed TikTok Shop and affiliate programs, partnering with thousands of creators to generate high-converting UGC content.",
      "Established end-to-end operational workflows for product sourcing, inventory management, logistics, and order fulfillment, ensuring seamless customer experience.",
    ],
  },
  {
    company: "VisualArtistry Collective",
    title: "Marketing Project Coordinator",
    location: "Anaheim, CA",
    dates: "September 2020 - July 2023",
    bullets: [
      "Led end-to-end project execution for high-profile events, overseeing pre-production planning, on-site coordination, and post-production delivery.",
      "Coordinated cross-functional teams of designers, videographers, and editors to deliver high-quality media assets on schedule and within budget.",
      "Served as primary client liaison, managing expectations and providing strategic recommendations to ensure deliverables exceeded brand and marketing goals.",
      "Built and maintained long-term client relationships, driving repeat business and sustained partnership growth.",
    ],
  },
  {
    company: "VisualArtistry Collective",
    title: "Marketing Operations Assistant",
    location: "Anaheim, CA",
    dates: "July 2017 - September 2020",
    bullets: [
      "Managed day-to-day agency operations reporting directly to the COO, ensuring seamless execution across all departments.",
      "Developed and implemented Standard Operating Procedures (SOPs) for company-wide policies, optimizing workflow efficiency and operational consistency.",
      "Led onboarding and training programs for new hires, ensuring smooth integration into company processes and culture.",
      "Directed client relationship management and customer success initiatives, ensuring high satisfaction and long-term partnerships.",
    ],
  },
  {
    company: "VERG LLC",
    title: "Freelance Video Editor & Production Specialist",
    location: "Anaheim, CA",
    dates: "June 2019 - December 2024",
    bullets: [
      "Captured and edited professional video content for corporate events, red carpet events, and weddings, ensuring footage aligned with client brand standards.",
      "Collaborated with clients and creative teams to develop compelling visual storytelling tailored to each event's unique narrative.",
      "Managed end-to-end video production workflows from pre-production planning through post-production editing and final delivery.",
    ],
  },
];

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 md:pl-12"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-[#2563EB] border-2 border-[#FAFAFA] ring-2 ring-[#2563EB]" />

      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#F0F0F0]">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h3 className="text-lg font-semibold text-[#1A1A1A]">{exp.company}</h3>
              {exp.label && (
                <span className="text-xs font-semibold tracking-wider text-[#2563EB] uppercase bg-[#EEF3FF] px-2 py-0.5 rounded-full">
                  {exp.label}
                </span>
              )}
            </div>
            <p className="text-[15px] text-[#444444] font-medium">{exp.title}</p>
            <p className="text-sm text-[#999999] mt-0.5">{exp.location}</p>
          </div>
          <span className="text-sm text-[#999999] font-medium whitespace-nowrap">{exp.dates}</span>
        </div>

        {/* Bullets */}
        <ul className="flex flex-col gap-3">
          {exp.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-3 text-[15px] text-[#555555] leading-relaxed">
              <span className="text-[#2563EB] mt-1.5 shrink-0">
                <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                  <circle cx="3" cy="3" r="3" />
                </svg>
              </span>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 md:py-32 px-6 bg-[#FAFAFA]">
      <div className="max-w-[1200px] mx-auto">
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-xs font-semibold tracking-widest text-[#999999] uppercase mb-4"
        >
          Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-[36px] md:text-[40px] font-semibold text-[#1A1A1A] leading-tight tracking-tight mb-14"
        >
          Where I&apos;ve worked.
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[5px] md:left-[5px] top-3 bottom-3 w-px bg-[#E5E5E5]" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, index) => (
              <ExperienceCard key={`${exp.company}-${index}`} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
