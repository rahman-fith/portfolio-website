import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export const metadata: Metadata = {
  title: "Creator Program Case Study | Abdul Siddiq",
  description:
    "How Abdul Siddiq built a creator and affiliate program from zero at Innova Electronics, scaling to thousands of TikTok Shop partners and 200 active monthly creators driving halo effects across all sales channels.",
};

const overview = [
  "When I joined Innova Electronics, there was no creator marketing program in place. No affiliates, no influencer relationships, no content pipeline. The opportunity was clear: a product category with strong purchase intent and an untapped creator ecosystem on TikTok Shop that most competitors had not yet moved into with any real structure.",
  "The goal at the outset was not revenue. It was volume and visibility, a top-of-funnel awareness play modeled after brands like Goli that used sheer creator scale to generate halo effects across every sales channel: Amazon, brick-and-mortar retail, the direct website, and affiliate channels. The thesis was that if enough creators were talking about the product, the downstream lift would be measurable across all channels, not just direct attribution from creator links.",
  "That thesis proved correct. As creator volume scaled, we saw correlated lifts in Amazon search velocity, organic brand traffic, and retail sell-through that could not be explained by paid media alone. The program eventually shifted from awareness-first to revenue-focused once the brand awareness foundation was established and ROAS targets on creator content were consistently being met.",
];

const approach = [
  "The program started with TikTok Shop's native affiliate portal, which gave us access to a large pool of creators already active in commerce content. The initial model was simple: approve applications, send product, pay commissions on sales. No upfront costs, no guarantees. This low-barrier entry point allowed us to move at volume quickly and let performance data do the filtering. Thousands of TikTok Shop affiliates were activated across this model, generating a constant stream of content and conversion data.",
  "The real leverage came in how we used that data. Rather than treating all creators equally, we tracked every affiliate against a core set of KPIs: engagement rate, CTR, CPM, CPA, conversion rate, and ROAS on creator-attributed content. The top converters were then approached about transitioning off commission-only arrangements and onto monthly retainer contracts, giving us guaranteed content output, repurposing rights, and a more predictable relationship. At peak, we had 200 creators on active monthly arrangements across three hero products, with hundreds holding signed agreements that allowed us to repost and amplify their content across our own organic channels.",
  "Content repurposing was a force multiplier. Every piece of creator content we owned the rights to became fuel for our organic social pages. As those pages grew from the content volume, our brand profile became more attractive to larger creators, which made outreach and inbound inquiries easier to convert. The flywheel reinforced itself: more content led to more channel growth, which led to better creator interest, which led to better content. We ran this across three hero SKUs simultaneously, which kept the program focused while still generating enough volume to find winning content at scale.",
  "The biggest operational lesson came from a process gap we identified mid-program. Early on, we were not guiding content creation closely enough. Creators were producing content to their own instincts, which sometimes missed the mark for our specific demographics across different platforms. Once we introduced light creative direction, providing platform-specific talking points, demographic context, and product angle guidance without over-scripting the creator, content efficacy improved meaningfully. The best performing content still came from creators speaking in their own voice. We just got better at pointing them in the right direction before they started.",
];

const resultsSummary =
  "The program scaled from zero to thousands of active TikTok Shop affiliates, with 200 creators on monthly retainer agreements producing content across three hero products simultaneously. Creator content generated measurable halo effects across Amazon, retail, and direct channels beyond what affiliate attribution could capture directly. As creator volume and brand visibility grew, inbound creator interest increased, reducing the cost and effort of sourcing new partners over time. The program ultimately transitioned from a brand awareness initiative into a revenue-contributing channel with tracked ROAS, demonstrating that volume-first creator strategies can mature into performance-driven programs without losing their scale advantages.";

const takeaways = [
  "Volume is how you find winners. You cannot optimize what you have not tested. Running thousands of affiliates through a low-barrier entry model generates more signal faster than any curated, high-cost influencer strategy at the start. The data tells you who performs. Your job is to build a system that captures that signal and acts on it quickly.",
  "Quality over quantity kicks in after the foundation is built. The shift from affiliate volume to a curated retainer roster was the right move, but it had to come after we had enough performance data to know who deserved a contract. Brands that skip the volume phase and go straight to expensive retainer deals are betting on instinct instead of evidence.",
  "Attribution understates the real impact. Creator programs drive lift across channels that standard attribution models will never capture. Amazon search velocity, organic brand traffic, and retail performance all moved with the creator program in ways that last-click or even multi-touch models could not fully account for. If you are measuring creator ROI purely on direct conversions, you are undervaluing the program and will underinvest in it.",
];

const tldr = [
  "Built from zero: no affiliates, no creators, no infrastructure at Innova Electronics",
  "Volume-first model: 1,000+ TikTok Shop affiliates activated via native affiliate portal",
  "Top converters upgraded to monthly retainer contracts; 200 active creators at peak",
  "Creator volume drove halo effects on Amazon, retail, and direct that attribution models undercount",
];

export default function CreatorProgramCaseStudy() {
  return (
    <>
      <Navigation />
      <div className="pt-16">
        <CaseStudyTemplate
          tag="Influencer & Creator"
          title="Scaling a Creator Program With Thousands of Partners"
          tagColor="text-[#F472B6] bg-[#F472B6]/10"
          tldr={tldr}
          metrics={[
            { value: "1,000s", label: "TikTok Shop Affiliates Activated" },
            { value: "200", label: "Active Monthly Retainer Creators" },
            { value: "3", label: "Hero SKUs Run Simultaneously" },
            { value: "0", label: "Existing Infrastructure at Start" },
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
