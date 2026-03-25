import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export const metadata: Metadata = {
  title: "AI Automation Case Study | Abdul Siddiq",
  description:
    "How Abdul Siddiq built AI agents that replaced hours of daily manual work across reporting, content production, and inventory management, with no development background.",
};

const overview = [
  "The problem was time. Running multi-channel marketing operations across paid media, ecommerce, content, and creator programs generates enormous amounts of data, and that data needs to be collected, reconciled, and turned into decisions on a regular basis. At both Innova Electronics and FITH, this work fell to one person: me. Hours each week spent moving between spreadsheets, pulling data from separate platforms, formatting reports, and compiling them into something a stakeholder could actually read and act on. That was hours not spent on forecasting, strategy, purchase order planning, or anything that actually required human judgment.",
  "I had no development background. No computer science degree, no prior coding experience. What I had was a clear understanding of the problem, a willingness to learn through doing, and access to tools that made building possible without traditional engineering skills. Claude Code, Replit, Lovable, and ElevenLabs became the foundation of a self-taught automation practice built entirely around solving real operational problems. The approach was simple: identify what was consuming time, plan the solution thoroughly before touching any code, and build it through prompt-based development and iteration.",
  "The result was a growing library of AI agents and automated workflows deployed across both companies that reclaimed hours of daily manual work and redirected that capacity toward higher-level strategy. These were not experiments or proof-of-concept demos. They were production tools, used every day, continuously improved, and directly tied to business outcomes.",
];

const approach = [
  "The first major workflow was a data reporting agent built to eliminate the most time-consuming recurring task: weekly performance reporting. The agent exports raw data from source platforms into CSV files, parses and reconciles those files, generates slide decks with structured visualizations, and produces a high-level written analysis of the data. This workflow was deployed across Meta Ads performance, Shopify sales data, product sales forecasting, purchase order forecasting, and content creation analytics for both Innova and FITH. What previously took hours of manual spreadsheet work per reporting cycle now runs with minimal human input, producing outputs that go directly to stakeholders.",
  "The most technically complex workflow built was a content production pipeline that connected competitor intelligence directly to video editor task queues. The agent ingests transcripts from competitor video content, analyzes the messaging and structure, adapts the script to our own products and brand voice, and outputs the adapted scripts to a tracking sheet. From there, it integrates with ElevenLabs to generate AI voiceovers from the finalized scripts, then connects to JIRA to automatically create project tickets and assign them to the appropriate video editors. A process that previously required manual research, writing, briefing, and administrative follow-up across multiple tools became a single automated workflow from input to assigned task.",
  "For FITH specifically, the most operationally critical tool was a custom inventory management system built to solve a problem that could directly kill revenue: stockouts. The system tracks real-time sell-through velocity per SKU, applies weighted demand calculations across recent sales windows, detects suppressed demand from out-of-stock periods, calculates dynamic reorder points based on lead time and safety stock logic, and generates suggested purchase order quantities automatically. When stock hits a reorder threshold, the system sends an alert and surfaces a replenishment recommendation in the dashboard. What had been a reactive, gut-feel ordering process running weekly off manual spreadsheet checks became a proactive, data-driven system that flagged issues before they became lost sales.",
  "Every workflow was built with the same principle: automate the process, but keep a human in the loop before anything consequential happens. Reports are reviewed before they go to stakeholders. Content scripts are approved before voiceovers are generated. Purchase order recommendations are vetted before orders are placed. The automation handles data collection, calculation, formatting, and routing. The decisions remain with people. This distinction matters because automated systems will produce errors, and they did during development and after launch. Because the tools were accessible to the team, bugs were documented, reported back, and fixed iteratively through the same prompt-based development process used to build them in the first place.",
];

const resultsSummary =
  "Across both companies, the automation workflows reclaimed hours of daily manual work that had previously consumed capacity needed for higher-level strategy. Reporting cycles that took hours now run with minimal input. Content production pipelines that required research, writing, briefing, and task management across multiple tools now execute end-to-end from a single trigger. Inventory management shifted from reactive weekly checks to proactive real-time monitoring with automated alerts. The entire system was built by one person with no development background, using Claude Code, Replit, Lovable, and ElevenLabs, in under a week per tool, and has been continuously improved over months of production use.";

const takeaways = [
  "AI agents are more powerful when they work together than when they work alone. The biggest efficiency gains did not come from building individual automations in isolation. They came from connecting them, letting the output of one agent become the input of another. The content pipeline that goes from competitor transcript to ElevenLabs voiceover to JIRA ticket only works because each piece hands off cleanly to the next. Pre-planning the architecture before writing a single line of code is what makes that possible.",
  "No dev background is not a blocker anymore. Every workflow in this case study was built through prompt-based development using Claude Code and Replit, with no prior coding experience. The skill that mattered was not knowing how to write code. It was knowing exactly what problem needed to be solved, being able to articulate it clearly, and being willing to iterate through errors without giving up. The tools have changed what is buildable by non-engineers.",
  "Automation without oversight is a liability. Every workflow requires a human checkpoint before anything consequential is executed. Tax-related processes, payments, and stakeholder-facing outputs are not automated end-to-end, and they should not be. The value of automation is reclaiming time for higher-level judgment, not replacing judgment entirely. The goal is a system where machines handle the repetitive and humans handle the consequential.",
];

const tldr = [
  "Built production AI tools with zero dev background using Claude Code, Replit, and Lovable",
  "Data pipeline: platform exports → CSV analysis → auto-generated slide decks and written reports",
  "Content pipeline: competitor transcript → adapted script → ElevenLabs voiceover → JIRA ticket",
  "All outputs include a human review checkpoint. Nothing consequential runs without sign-off",
];

export default function AIAutomationCaseStudy() {
  return (
    <>
      <Navigation />
      <div className="pt-16">
        <CaseStudyTemplate
          tag="AI Automation"
          title="Building AI Agents That Replaced 30+ Hours of Manual Work"
          tagColor="text-[#A78BFA] bg-[#A78BFA]/10"
          tldr={tldr}
          metrics={[
            { value: "30+", label: "Hours of Manual Work Automated Weekly" },
            { value: "0", label: "Lines of Code Written From Scratch" },
            { value: "2", label: "Companies Running Production Workflows" },
            { value: "Days", label: "To Build. Months of Continuous Use." },
          ]}
          overview={overview}
          approach={approach}
          resultsSummary={resultsSummary}
          takeaways={takeaways}
          workflowDiagramSrc="/fith-inventory-workflow.html"
        />
      </div>
      <Footer />
    </>
  );
}
