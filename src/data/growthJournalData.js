export const journalEntries = [
  {
    id: 'performance-pivot',
    type: 'Strategy Breakdown',
    title: "Documenting a ₹2M Performance Pivot",
    date: "Feb 12, 2026",
    readingTime: "12 min read",
    summary: "How we analyzed attribution drop-offs and re-allocated budget during a 48-hour crisis.",
    metrics: [
      { label: "ROAS Recovery", value: "3.2x" }
    ],
    tags: ["Paid Media", "Data Analysis", "Crisis Management"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1500",
    content: `
      During the Q1 peak, we encountered a significant drop in attribution accuracy across our primary social channels. This entry documents the rapid response and strategic pivot that protected a ₹2M monthly budget.

      ### The Observation
      We noticed a 40% discrepancy between platform-reported conversions and internal data-warehouse figures. Relying on platform metrics was leading to inefficient scaling.

      ### The Strategy
      1. **Attribution Hardening**: Integrated server-side API tracking to bypass cookie degradation.
      2. **Budget Re-allocation**: Shifted 60% of the top-of-funnel budget to remarketing sequences with higher high-intent signals.
      3. **Creative Refresh**: Launched a 'Proof-based' creative series to lower CPMs.

      ### The Execution
      We executed the pivot in three 8-hour sprints. The result was a stabilized CAC and a recovery of ROAS to the 3.2x target within 72 hours.
    `
  },
  {
    id: 'landing-page-test',
    type: 'Experiment Log',
    title: "AB Testing: Short-form vs long-form landing pages",
    date: "Jan 28, 2026",
    readingTime: "8 min read",
    summary: "Comparing a high-intent long-form page against a quick-capture short-form variant in the B2B tech sector.",
    metrics: [
      { label: "CVR Lift", value: "+24.5%" }
    ],
    tags: ["CRO", "UX Design", "B2B Marketing"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1500",
    content: `
      In the B2B Tech space, conventional wisdom often favors long-form pages for authority. We put this to the test.

      ### The Hypothesis
      For our target persona (busy C-suite executives), a hyper-reduced short-form page focusing only on "Time to Value" would outperform the standard 3,000-word authority page.

      ### The Setup
      - **Control**: 5-section authority page with case studies and deep technical docs.
      - **Variant**: Single-fold page with a 30-second video and a direct calendar link.

      ### The Results
      The short-form variant saw a massive +24.5% increase in conversion rate. Surprisingly, the Lead Quality (MQL to SQL conversion) remained constant, suggesting that the "Authority" sections were actually causing friction rather than building trust.
    `
  },
  {
    id: 'social-retail-insight',
    type: 'Execution Insight',
    title: "Social Retail: Beyond the Click-through",
    date: "Jan 15, 2026",
    readingTime: "10 min read",
    summary: "Analyzing why our high CTR creatives failed at the checkout line and how we fixed the funnel intent.",
    metrics: [
      { label: "Churn Decrease", value: "-15%" }
    ],
    tags: ["Paid Social", "Funnel Strategy", "Consumer Behavior"],
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=1500",
    content: `
      CREATIVE VS INTENT: A post-mortem on a viral campaign that drove traffic but stalled at the cart.

      ### The Problem
      A specific UGC creative went viral, resulting in our lowest ever CPC. However, the bounce rate on the product page was 92%. We were attracting 'Window Shoppers' rather than 'Buyers'.

      ### The Pivot
      We introduced an 'Education Gate'—a pre-lander that explained the price point and premium benefits before allowing the user to click through to the shop.

      ### The Learning
      Traffic volume is a vanity metric if the intent is mismatched. Adding 'friction' (the pre-lander) actually improved our ultimate ROI by filtering for serious buyers.
    `
  },
  {
    id: 'branding-psychology',
    type: 'Learning Journal',
    title: "Mistakes We Made During a Branding Project",
    date: "Dec 10, 2025",
    readingTime: "6 min read",
    summary: "Transparency first. How we misjudged a target demographic's color psychology and corrected it.",
    metrics: [
      { label: "Pivots", value: "1" },
      { label: "Launch", value: "Success" }
    ],
    tags: ["Psychology", "Branding", "Lessons"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000",
    content: `
      Admitting mistakes is the first step to optimization. This entry documents a branding pivot for a luxury lifestyle client.

      ### The Initial Approach
      We leaned heavily into 'Minimalist White' and 'Gold' accents, assuming it would resonate with high-net-worth individuals interested in wellness.

      ### The Feedback
      Post-launch focus groups revealed the brand felt 'sterile' and 'clinical' rather than 'luxurious'. The color psychology was triggering health-anxiety rather than comfort.

      ### The Correction
      We pivoted to deep forest greens and textured cream backgrounds, leaning into 'Quiet Luxury'.

      The Result
      The brand sentiment improved by 60% in sentiment analysis tools, and the initial launch phase exceeded projected revenue by 12%.
    `
  }
];

export const categories = ["All", "Strategy Breakdown", "Execution Insight", "Experiment Log", "Learning Journal"];