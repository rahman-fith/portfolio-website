import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export const metadata: Metadata = {
  title: "Paid Media Case Study | Abdul Siddiq",
  description:
    "How Abdul Siddiq scaled multi-channel paid campaigns to $10M+ revenue with a sustained 4.1x ROAS across 5 platforms.",
};

const overview = [
  "When I stepped into this role, paid media at Innova Electronics was absorbing hundreds of thousands of dollars a year and delivering mediocre returns. Amazon Sponsored Products were netting a sub-3x ROAS with no structured testing framework behind them. Meta had no presence at all. The budget existed. The strategy did not.",
  "Rather than try to fix what was there, I made the decision to restart from the ground up. Before committing any serious budget to scale, I built a proper testing foundation across both platforms: establishing campaign architecture, audience frameworks, and a creative system that could generate reliable data before money was spent at volume. The priority was not short-term performance. It was building something that could sustain and compound.",
  "The product category added a layer of real complexity. We were marketing outdated technology using modern tactics, to a primary demographic of men 35 and older who do not impulse buy. Every result we drove came from positioning, creative discipline, and strategic targeting. There was no viral product moment to lean on. That constraint shaped how I approach paid media today.",
];

const approach = [
  "Each platform ran its own full-funnel strategy, but Meta and Amazon served fundamentally different roles in the customer journey. Meta's job was to build demand and drive research intent. Amazon's job was to capture it. Because the product sat at a higher price point, customers rarely converted on first touch. They would see a Meta ad, get interested, then go to Amazon to research reviews, compare pricing, and make the final purchase. We knew this was happening not just from attribution data, but from the ad comments themselves. 'Amazon has a better price' became one of the most common responses on our Meta campaigns, confirming that Meta was consistently feeding Amazon's bottom of funnel. We stopped treating that as a problem and started designing the channel relationship around it intentionally.",
  "On Amazon, the rebuild was structural. I reconstructed campaign architecture from scratch, tightened keyword targeting to high-intent terms, and ran systematic A/B tests across every listing component: titles, hero images, bullet points, and A+ content. Bidding used a mix of manual and automated strategies depending on the maturity of each campaign. Once the foundation was producing consistent, predictable results, I brought in an agency to manage day-to-day operations and shifted my focus to oversight, strategic direction, and performance accountability. That transition freed me to focus on channel strategy without losing continuity on execution.",
  "Meta required a different kind of build entirely. We started at $50 per day across all campaigns and scaled methodically to over $4,000 in daily spend. I owned the creative process end to end, from concept and scripting through production and publishing. The creative mix included AI-generated content, UGC from customers, affiliate-produced content, and whitelisted influencer creative. But the insight that consistently drove performance was simpler than most people expect: creative was the only variable that moved results. Audience targeting stayed constant. The offer remained the same, and if anything became less competitive over time as costs increased. Placements did not change. Every meaningful shift in performance traced back to a change in creative.",
  "The testing framework I ran was an 80/20 split. Eighty percent of active spend went toward proven formats and concepts we knew converted. Twenty percent ran as controlled experiments. This kept revenue stable while continuously generating new data. One of the most valuable lessons from running hundreds of creative tests was about bias. Some of the ads I was least confident in became top performers that ran for months without audience fatigue. The content that resonated with a 40-year-old buying a higher-ticket product looked nothing like what I personally would have engaged with. I learned to let the data make the final call. On the competitive research side, I studied what competitors were running, identified what was clearly working based on creative longevity and engagement signals, and rebuilt it with our brand voice and product differentiation. There is no award for originality when you have no data foundation. Replicate what works, then make it better.",
];

const resultsSummary =
  "Across Meta and Amazon Sponsored Products, the rebuilt paid media operation generated over $2 million in directly attributed revenue and drove more than 25 million impressions across a single rolling period. Amazon Sponsored Products reached a 7.83x ROAS, more than doubling the sub-3x baseline we inherited. Meta averaged a 3.93x ROAS across six active campaigns, with top campaigns exceeding 6x. The most meaningful outcome, however, was not any single platform metric. It was the cross-platform relationship between them: Meta campaigns consistently reinforced Amazon conversion rates by warming audiences before purchase intent crystallized, turning two separate channels into one coordinated revenue engine contributing to $10M+ in annual digital revenue.";

const takeaways = [
  "Creative is the only variable that scales. On Meta, the audience, offer, and placements stayed constant across months of testing. Every meaningful performance shift traced back to a change in creative. Before adjusting targeting, budget, or placements, exhaust the creative variable first. It will tell you more about your audience than almost anything else.",
  "Your personal taste is irrelevant to your audience. Some of the highest-performing ads in this program were ones I expected to underperform. The demographic responded to formats and tones I would not have chosen myself. Build a testing culture that separates instinct from data. Run the content you are unsure about. Let results make the final call.",
  "Platforms are not silos. Meta and Amazon should not be evaluated independently when the customer journey connects them. Our Meta spend was actively converting on Amazon, a relationship confirmed by customer comments on our own ads. Before optimizing each platform in isolation, understand how they interact in your customer's path to purchase. The halo effect is real, and it is measurable if you look for it.",
];

const tldr = [
  "Rebuilt Amazon from sub-3x to 7.83x ROAS; Meta scaled from $50/day to $4,000+/day",
  "Meta drove research intent on a higher-ticket product; Amazon captured the purchase",
  "Creative was the only variable that moved performance — audience and offer stayed constant",
  "80/20 testing framework: 80% proven, 20% experiments. Full creative production ownership",
];

export default function PaidMediaCaseStudy() {
  return (
    <>
      <Navigation />
      <div className="pt-16">
        <CaseStudyTemplate
          tag="Paid Media"
          title="Scaling Multi-Channel Paid Campaigns to $10M+ Revenue"
          tagColor="text-[#60A5FA] bg-[#60A5FA]/10"
          tldr={tldr}
          screenshots={[
            {
              src: "/amazon-metrics.png",
              alt: "Amazon Sponsored Products dashboard showing 7.83x ROAS, $163,935 spend, and $1,283,936 in sales across 173 targets",
              caption: "Amazon Sponsored Products — Dec 18, 2025 to Mar 1, 2026. 173 targets. 7.83x ROAS. $1.28M in attributed sales.",
            },
            {
              src: "/meta-metrics.png",
              alt: "Meta Ads campaigns dashboard showing 3.93x average ROAS across 6 campaigns, $202,082 spend, and $785,955 in conversion value",
              caption: "Meta Ads — Nov 1, 2025 to Mar 1, 2026. 6 campaigns. 3.93x average ROAS. $785K in conversion value.",
            },
          ]}
          metrics={[
            { value: "7.83x", label: "Amazon Sponsored Products ROAS" },
            { value: "3.93x", label: "Meta Ads Average ROAS (6 Campaigns)" },
            { value: "$2M+", label: "Combined Revenue Attributed (Meta + Amazon)" },
            { value: "25M+", label: "Total Ad Impressions Across Both Platforms" },
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
