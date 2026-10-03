"use client";

import { FiArrowUpRight } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { useT } from "@/i18n/LanguageContext";
import { papers, patents, researchCounts, type Language, type Paper } from "@/data/resume-research";

const statusLabels: Record<Paper["status"], Record<Language, string>> = {
  journal: { zh: "期刊论文", en: "Journal article" },
  conference: { zh: "会议论文", en: "Conference paper" },
  underReview: { zh: "在审稿件", en: "Under review" },
};

export default function Research() {
  const { lang } = useT();

  return (
    <section id="research" className="resume-section">
      <div className="section-container">
        <SectionHeading label={lang === "zh" ? "科研 / 02" : "Research / 02"} title={lang === "zh" ? "研究与发表" : "Research & publications"} />
        <p className="section-intro">
          {lang === "zh"
            ? `以海洋结构动力学与流体仿真为主线，形成 ${researchCounts.papers} 篇论文、${researchCounts.manuscripts} 篇在审稿件及 ${researchCounts.patents} 项专利与申请。`
            : `Research in offshore dynamics and fluid simulation: ${researchCounts.papers} papers, ${researchCounts.manuscripts} manuscript under review, and ${researchCounts.patents} patents and applications.`}
        </p>

        <div className="research-group">
          <div className="research-group-heading"><span>01 / {lang === "zh" ? "论文与稿件" : "Papers & manuscripts"}</span><span>{String(papers.length).padStart(2, "0")}</span></div>
          <div className="research-paper-list">
            {papers.map((paper) => (
              <article className="research-paper" key={paper.id}>
                <span className="research-year">{paper.year}</span>
                <div className="research-paper-main">
                  <span className={`research-status research-status-${paper.status}`}>{statusLabels[paper.status][lang]}</span>
                  <h3>
                    {paper.sourceUrl ? <a href={paper.sourceUrl} target="_blank" rel="noopener noreferrer">{paper.title}<FiArrowUpRight aria-hidden="true" /></a> : paper.title}
                  </h3>
                  <p>{paper.venue[lang]}</p>
                  {paper.authors && <p className="research-authors">{paper.authors}</p>}
                </div>
                <span className="research-role">{paper.role[lang]}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="research-group research-patent-group">
          <div className="research-group-heading"><span>02 / {lang === "zh" ? "专利与申请" : "Patents & applications"}</span><span>{String(patents.length).padStart(2, "0")}</span></div>
          <div className="research-patent-grid">
            {patents.map((patent, index) => (
              <article className="research-patent" key={patent.id}>
                <div className="research-patent-top"><span>{String(index + 1).padStart(2, "0")}</span><span>{patent.kind[lang]}</span></div>
                <h3>{patent.sourceUrl ? <a href={patent.sourceUrl} target="_blank" rel="noopener noreferrer">{patent.title[lang]}<FiArrowUpRight aria-hidden="true" /></a> : patent.title[lang]}</h3>
                <p>{patent.id}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
