import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export const metadata: Metadata = {
  title: "FITH Brand Case Study | Abdul Siddiq",
  description:
    "How Abdul Siddiq co-founded and scaled FITH, a modest activewear DTC brand, from a cold garage to a multi-channel brand with millions of organic impressions.",
};

const overview = [
  "FITH started from a real problem. The Muslim community, particularly those who observe religious modesty, had been underserved by the activewear market for years. Brands were making token gestures, adding hijabs to product photos and calling it inclusive, without actually understanding what modest athletic wear requires in design, fit, or fabric. My co-founder and I saw this gap firsthand. We were the target customer. We knew exactly what was missing because we had spent years trying to find it ourselves.",
  "We built FITH out of a cold garage with zero fashion or retail background, funded by work bonuses. No manufacturer relationships, no retail playbook, no existing audience. Two people with full-time jobs, a shared conviction that our community deserved better, and enough grit to figure out what we did not know. The brand name is a play on two words: faith and fitness. That duality is the foundation of everything. Modest performance wear that does not ask the customer to choose between their beliefs and their athletic life.",
  "What started as a brand built for Muslim athletes has grown into something broader. The modesty-first positioning resonated beyond our original community, attracting customers across secular audiences who share the same values around covered, functional design. That expansion was not planned. It was earned through authentic storytelling, deep community investment, and a product that solved a real problem rather than performed one.",
];

const approach = [
  "We went to TikTok first because that is where our community lived, and where organic content could reach people without a paid budget. The strategy was straightforward: share the real struggle. Content that showed the pain points of being a Muslim woman trying to find gymwear that fit both her faith and her training. Content that showed two guys building a brand from a garage because the market was failing their community. The virality came from relatability and problem solving in a specific niche, not from production quality or influencer backing. Our early organic content was conceived entirely in brainstorming sessions between the two of us, with no whitelisting or paid amplification, and it drove millions of impressions before a dollar went toward paid media.",
  "The creator program grew the same way the brand did: organically, then systematically. We started by offering product in exchange for content and a commission structure, a simple affiliate model that fit our zero-budget reality. Then something shifted. As the brand gained visibility, influencers began reaching out to us. The Muslim community is close-knit, and word of a brand that genuinely understood the customer spread through it quickly. What began as outbound seeding became inbound demand. We built a proper system around it with clear KPIs, performance targets, and tiered partnerships across UGC creators, affiliate partners, and macro influencers. The result was a self-reinforcing content engine that expanded reach without relying on paid media.",
  "Running as a two-person team meant every hour had to count. We deployed AI automation to handle the operational load that would otherwise consume us. The biggest priority was inventory management. I built a custom forecasting system that tracked sell-through velocity, flagged restock thresholds in real time, and generated data-driven purchase order recommendations so we were never caught off guard by a stockout. Beyond inventory, we used AI tools to monitor competitors, produce creative assets, build custom landing pages for paid campaigns targeting colder audiences, and run performance dashboards. Doing everything ourselves on a constrained budget forced us to find and build tools that replaced the headcount we could not afford.",
  "The hardest thing about building a brand from zero is not the marketing. It is building a system where every piece works together. Product, fulfillment, marketing, customer experience, creator relations, and financial management all have to function as one machine before any of it scales cleanly. We learned this by feeling every breakdown personally. Every stockout, every delayed shipment, every creator that did not deliver on a commitment. Each one became a process improvement. That operational discipline is what allowed a two-person team to build and run a legitimate multi-channel brand.",
];

const resultsSummary =
  "FITH grew from a cold garage passion project into a multi-channel brand with millions of organic impressions, a community-driven creator program, and active revenue across Shopify, TikTok Shop, and Meta. The influencer program scaled from manual outreach into a structured system with measurable performance benchmarks and direct contribution to sales. Every dollar of profit is reinvested back into the business to accelerate growth. The long-term vision is to become a reliable brand for athletes at every level, built on a foundation of good intentions and a community that the market had ignored for too long.";

const takeaways = [
  "Build from passion, but build it like a business. Starting FITH from a genuine community need gave us a level of conviction and discipline that is hard to manufacture. But passion alone does not scale. The turning point came when we started applying real operational structure to what we cared about. Systems, data, and processes that could hold up under growth pressure. The combination of both is what made it work.",
  "Every resource constraint is a forcing function. Running a two-person brand on a limited budget forced us to find AI tools, build automation workflows, and develop creative and operational instincts that would otherwise have been outsourced. The limitation made us more capable operators across every function. The scrappiness became a genuine competitive advantage.",
  "Niche depth beats broad appeal at the start. We did not try to be an activewear brand for everyone. We built for one specific, underserved community, went deep on their needs, earned their trust, and then watched the positioning naturally attract a wider audience. If you are building from zero, specificity is not a limitation. It is your fastest path to real resonance.",
];

const tldr = [
  "Co-founded modest activewear DTC from a cold garage — zero budget, zero fashion background",
  "Millions of organic impressions via relatable community content, no paid amplification early on",
  "Creator program grew from outbound affiliate seeding to inbound demand from thousands of partners",
  "Built custom AI inventory system to forecast POs and prevent stockouts as a two-person team",
];

export default function FithBrandCaseStudy() {
  return (
    <>
      <Navigation />
      <div className="pt-16">
        <CaseStudyTemplate
          tag="DTC / Ecommerce"
          title="Launching FITH: Building a DTC Brand From Zero"
          tagColor="text-[#34D399] bg-[#34D399]/10"
          tldr={tldr}
          metrics={[
            { value: "Millions", label: "Organic Impressions Generated" },
            { value: "Thousands", label: "Creator Partners Activated" },
            { value: "2", label: "Founders. Zero Fashion Background." },
            { value: "$0", label: "Starting Budget. Funded by Work Bonuses." },
          ]}
          overview={overview}
          approach={approach}
          resultsSummary={resultsSummary}
          takeaways={takeaways}
        />
      </div>
      <Footer />
    </>
  );
}
