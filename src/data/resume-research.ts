export type Language = "zh" | "en";
export type Localized = Record<Language, string>;

export type Patent = {
  id: string;
  title: Localized;
  kind: Localized;
  status: "granted" | "application";
  sourceUrl?: string;
};

export type Paper = {
  id: string;
  title: string;
  venue: Localized;
  role: Localized;
  year: string;
  status: "journal" | "conference" | "underReview";
  authors?: string;
  sourceUrl?: string;
};

// The titles, identifiers and author positions follow the curated resume content.
// A patent without a stable record URL is shown as text instead of a brittle link.
export const patents: Patent[] = [
  {
    id: "ZL2023 2 0135062.8",
    title: { zh: "水下微塑料收集装置", en: "Underwater Microplastic Collection Device" },
    kind: { zh: "实用新型专利", en: "Utility Model" },
    status: "granted",
  },
  {
    id: "ZL 2023 3 0062702.2",
    title: { zh: "过滤网", en: "Filter Mesh" },
    kind: { zh: "外观设计专利", en: "Design Patent" },
    status: "granted",
  },
  {
    id: "ZL202511043698.X",
    title: { zh: "一种海洋工程装备的运行状态的预警方法", en: "Early Warning Method for the Operating Status of Marine Engineering Equipment" },
    kind: { zh: "发明专利", en: "Invention Patent" },
    status: "granted",
  },
  {
    id: "202511372767.1",
    title: { zh: "一种海工结构的强非线性信号的分解方法和装置", en: "Decomposition Method and Apparatus for Strongly Nonlinear Signals in Offshore Structures" },
    kind: { zh: "发明专利申请", en: "Invention Patent Application" },
    status: "application",
  },
  {
    id: "ZL202521459093.4",
    title: { zh: "一种深海采矿船月池抑波减阻装置", en: "Wave-Reduction and Drag-Reduction Device for the Moonpool of a Deep-Sea Mining Vessel" },
    kind: { zh: "实用新型专利", en: "Utility Model Patent" },
    status: "granted",
  },
];

export const papers: Paper[] = [
  {
    id: "moonpool-review",
    title: "Numerical investigation of resonance-induced slamming characteristics and flow mechanisms in stepped moonpools with different step lengths",
    venue: { zh: "在审稿件", en: "Manuscript under review" },
    role: { zh: "第一作者", en: "1st Author" },
    year: "2026",
    status: "underReview",
  },
  {
    id: "communications-engineering-2025",
    title: "A method for reconstructing the dynamic displacement of floating structures based on acceleration measurements and comparison with data-reconstruction techniques",
    venue: { zh: "Communications Engineering (Nature), 2025, 4(1): 68", en: "Communications Engineering (Nature), 2025, 4(1): 68" },
    authors: "Gao S.J., Chen X., Pan Z.W., Tian Z., Liu F.",
    role: { zh: "第二作者", en: "2nd Author" },
    year: "2025",
    status: "journal",
    sourceUrl: "https://doi.org/10.1038/s44172-025-00402-9",
  },
  {
    id: "physics-of-fluids-2025",
    title: "A new interpretation for the non-stationary behavior of offshore floating structures under complex environmental conditions",
    venue: { zh: "Physics of Fluids, 2025, 37(8): 087117 (中科院2区, IF=4.3)", en: "Physics of Fluids, 2025, 37(8): 087117 (CAS Q2, IF=4.3)" },
    authors: "Gao S.J., Pan Z.W., Chen X., Tian Z., Liu F.",
    role: { zh: "第三作者", en: "3rd Author" },
    year: "2025",
    status: "journal",
    sourceUrl: "https://doi.org/10.1063/5.0278223",
  },
  {
    id: "omae-2026",
    title: "Numerical simulation study of slamming loads on trimaran vessels at different entry speeds and angles",
    venue: { zh: "OMAE 2026, Tokyo, Japan, June 2026", en: "OMAE 2026, Tokyo, Japan, June 2026" },
    role: { zh: "第一作者", en: "1st Author" },
    year: "2026",
    status: "conference",
  },
  {
    id: "isope-moonpool-2025",
    title: "Analysis of the effect of different moonpool opening shapes on the motion response of deep-sea mining ships",
    venue: { zh: "ISOPE 2025, Seoul, Korea, June 2025", en: "ISOPE 2025, Seoul, Korea, June 2025" },
    role: { zh: "第一作者", en: "1st Author" },
    year: "2025",
    status: "conference",
    sourceUrl: "https://onepetro.org/ISOPEIOPEC/proceedings-abstract/ISOPE25/ISOPE25/ISOPE-I-25-022/713015",
  },
  {
    id: "national-cfd-2025",
    title: "Numerical Study on Slamming Effect of Stepped Moonpool",
    venue: { zh: "第十届全国船舶与海洋工程 CFD 会议, 南京, 2025", en: "10th National CFD Conf., Nanjing, 2025" },
    role: { zh: "第一作者", en: "1st Author" },
    year: "2025",
    status: "conference",
  },
  {
    id: "isope-vortex-2025",
    title: "Comparative study of modal decomposition methods for vortex-shedding pressure fields on a square column",
    venue: { zh: "ISOPE 2025, Seoul, Korea, June 2025", en: "ISOPE 2025, Seoul, Korea, June 2025" },
    role: { zh: "第二作者", en: "2nd Author" },
    year: "2025",
    status: "conference",
    sourceUrl: "https://onepetro.org/ISOPEIOPEC/proceedings-abstract/ISOPE25/ISOPE25/ISOPE-I-25-418/713641",
  },
];

export const researchCounts = {
  papers: papers.filter((paper) => paper.status !== "underReview").length,
  manuscripts: papers.filter((paper) => paper.status === "underReview").length,
  patents: patents.length,
  grantedPatents: patents.filter((patent) => patent.status === "granted").length,
  patentApplications: patents.filter((patent) => patent.status === "application").length,
};
