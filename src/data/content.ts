export const TOPICS = [
  { key: "ip", label: "IP Law" },
  { key: "banking", label: "Banking & Finance" },
  { key: "ibc", label: "IBC / Resolution" },
];

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  topic: string;
  tags: string[];
  readingTime: number;
  featured: boolean;
  content: string;
}

export const SAMPLE_ARTICLES: Article[] = [
  {
    slug: "fair-use-ai-training-india",
    title: "Training AI on Copyrighted Works: Fair Dealing in India?",
    excerpt: "Testing the contours of Sections 52 and 14 with international guidance.",
    date: "2025-08-01",
    topic: "ip",
    tags: ["copyright", "AI", "fair dealing"],
    readingTime: 9,
    featured: true,
    content: `# Training AI on Copyrighted Works: Fair Dealing in India?

> *Abstract:* This explainer maps Indian fair dealing (s.52, Copyright Act) against US fair use tests, recent UK/EU trends, and practical guidance for rights holders and AI developers.

## Key Takeaways
1. No general fair use in India; *fair dealing* applies to limited purposes.
2. Database rights differ; scraping cases abroad are persuasive, not binding.
3. Contracts and TPMs often decide the outcome.

### Recent Developments
The intersection of AI training and copyright law presents unique challenges in the Indian context. Unlike the US fair use doctrine, Indian copyright law operates under a more restrictive fair dealing framework.

### Legal Framework
Section 52 of the Copyright Act, 1957 provides specific exceptions, including:
- Research and private study
- Criticism or review
- Reporting current events

### International Perspective
Recent decisions in the UK and EU suggest a more nuanced approach to AI training data, with courts considering:
- Purpose and character of use
- Nature of copyrighted work
- Amount used
- Effect on market value

### Footnotes
[1] Authors Guild v. Google, Inc., 804 F.3d 202 (2d Cir. 2015).
[2] The Copyright Act, 1957, § 52.
[3] EU Copyright Directive 2019/790, Article 4.`
  },
  {
    slug: "rbi-masala-bonds-2025-update",
    title: "Masala Bonds 2025: RBI Updates & Practical Issues",
    excerpt: "A practitioner-focused note on offshore rupee bonds, investor protection, and disclosure.",
    date: "2025-07-22",
    topic: "banking",
    tags: ["RBI", "debt", "markets"],
    readingTime: 7,
    featured: true,
    content: `# Masala Bonds 2025: RBI Updates & Practical Issues

This note summarises key circulars and typical covenant packages.

> *Practice Tip:* Align offering circular risk factors with SEBI (ICDR) style where applicable.

## Recent RBI Guidelines
The Reserve Bank of India has issued updated guidelines for Masala Bonds, addressing several practical concerns raised by market participants.

### Key Changes
- Enhanced disclosure requirements
- Modified hedging provisions
- Streamlined approval processes

### Market Impact
These changes are expected to increase investor confidence while maintaining regulatory oversight.

*This article will be expanded after initial publication.*`
  },
  {
    slug: "section7-ibc-payable-test",
    title: "When Debt is Due but Not Payable: Section 7 IBC Admissions",
    excerpt: "Parsing NCLT/NCLAT reasoning on 'due' vs 'payable' and how it controls admission.",
    date: "2025-06-30",
    topic: "ibc",
    tags: ["IBC", "Section 7", "CIRP"],
    readingTime: 8,
    featured: false,
    content: `# When Debt is Due but *Not Payable* under IBC s.7

Courts distinguish debt due from debt payable at admission.

> *Case Law Callout:* Key paras from recent judgments will be added here.

## The Due vs Payable Distinction
The Insolvency and Bankruptcy Code, 2016 creates an important distinction between debt that is "due" and debt that is "payable."

### NCLT Interpretations
Recent National Company Law Tribunal decisions have clarified that:
- Due debt may not always be immediately payable
- Future obligations require careful analysis
- Contingent liabilities need specific treatment

### Practical Implications
This distinction significantly affects:
- Admission criteria under Section 7
- Creditor rights and remedies
- Timeline for CIRP initiation`
  }
];

export interface CaseNote {
  title: string;
  citation: string;
  topic: string;
}

export const SAMPLE_CASES: CaseNote[] = [
  { title: "XYZ v. ABC (2025) SC", citation: "(2025) 4 SCC 123", topic: "ibc" },
  { title: "PQR v. UVW (2024) Bom HC", citation: "(2024) 6 BomCR 77", topic: "banking" },
  { title: "Innovate Corp. v. Creators (2023) Del HC", citation: "2023 SCC OnLine Del 9999", topic: "ip" },
];