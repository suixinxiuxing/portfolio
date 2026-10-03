"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { HiX } from "react-icons/hi";
import SectionHeading from "./SectionHeading";
import { useT } from "@/i18n/LanguageContext";
import { resumeAwards } from "@/data/resume-awards";

const awardsByDate = [...resumeAwards].sort((a, b) => b.date.localeCompare(a.date));

type GalleryImage = { src: string; zh: string; en: string };

const awardImage = (name: string, zh: string, en: string): GalleryImage => ({ src: `images/awards/${name}`, zh, en });
const groups = [
  {
    id: "scholarships",
    title: { zh: "奖学金", en: "Scholarships" },
    images: [
      awardImage("scholarship-national-2025.jpg", "国家奖学金证书", "National Scholarship"),
      awardImage("scholarship-2021-1-1st.jpg", "专业一等奖学金证书", "First-Class Academic Scholarship"),
      awardImage("scholarship-chen-jiageng.jpg", "陈嘉庚教育基金奖学金证书", "Chen Jiageng Education Fund Scholarship"),
      awardImage("scholarship-2021-2-2nd.jpg", "专业二等奖学金证书", "Second-Class Academic Scholarship"),
      awardImage("scholarship-2020-1-3rd.jpg", "专业三等奖学金证书", "Third-Class Academic Scholarship"),
      awardImage("scholarship-2020-2-2nd.jpg", "专业二等奖学金证书", "Second-Class Academic Scholarship"),
    ],
  },
  {
    id: "competitions",
    title: { zh: "竞赛", en: "Competitions" },
    images: [
      awardImage("award-innovation-gold.png", "互联网+ 校级金奖证书", "Internet+ University Gold"),
      awardImage("award-challenge-cup.jpg", "挑战杯校级三等奖证书", "Challenge Cup University Third Prize"),
    ],
  },
  {
    id: "honors",
    title: { zh: "荣誉", en: "Honors" },
    images: [
      awardImage("honor-outstanding-postgraduate.png", "优秀研究生证书", "Outstanding Graduate Student"),
      awardImage("honor-outstanding-graduate-2024.jpg", "优秀毕业生证书", "Outstanding Graduate"),
      awardImage("honor-merit-student-2022.jpg", "三好学生证书", "Merit Student"),
      awardImage("honor-merit-student-2023.jpg", "三好学生证书", "Merit Student"),
      awardImage("honor-student-leader-2021.jpg", "优秀学生干部证书", "Excellent Student Leader"),
      awardImage("honor-league-member-2021.jpg", "优秀共青团员证书", "Excellent League Member"),
      awardImage("honor-league-leader-2022.jpg", "优秀共青团干部证书", "Excellent League Leader"),
      awardImage("award-teaching-officer-2021.jpg", "优秀学生教学信息员证书", "Excellent Teaching Information Officer"),
      awardImage("award-teaching-officer-2022.jpg", "优秀学生教学信息员证书", "Excellent Teaching Information Officer"),
      awardImage("award-teaching-officer-2024.jpg", "优秀学生教学信息员证书", "Excellent Teaching Information Officer"),
    ],
  },
] as const;

function thumbnail(src: string) {
  const filename = src.split("/").pop() ?? "";
  return `images/awards/thumbs/${filename.replace(/\.(jpe?g|png)$/i, ".webp")}`;
}

function CertificateGallery({ images }: { images: readonly GalleryImage[] }) {
  const { lang } = useT();
  const [selected, setSelected] = useState<GalleryImage | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!selected) return;
    const previous = document.activeElement as HTMLElement | null;
    const oldOverflow = document.body.style.overflow;
    dialog.current?.showModal();
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = oldOverflow; previous?.focus(); };
  }, [selected]);

  return <>
    <div className="certificate-grid">
      {images.map((image) => <button type="button" className="certificate-button" key={image.src} onClick={() => setSelected(image)} aria-label={`${lang === "zh" ? "放大查看" : "Enlarge"}: ${image[lang]}`}>
        <Image width={640} height={450} src={thumbnail(image.src)} alt="" loading="lazy" />
        <span>{image[lang]}</span>
      </button>)}
    </div>
    {selected && <dialog className="certificate-dialog" ref={dialog} aria-label={selected[lang]} onClose={() => setSelected(null)} onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <button autoFocus type="button" className="dialog-close" aria-label={lang === "zh" ? "关闭证书预览" : "Close certificate preview"} onClick={() => dialog.current?.close()}><HiX aria-hidden="true" /></button>
      <Image width={1120} height={790} src={selected.src} alt={selected[lang]} />
      <p>{selected[lang]}</p>
    </dialog>}
  </>;
}

export default function Awards() {
  const { lang } = useT();
  return <section id="awards" className="resume-section">
    <div className="section-container">
      <SectionHeading label={lang === "zh" ? "荣誉 / 08" : "Recognition / 08"} title={lang === "zh" ? "荣誉与认可" : "Awards & recognition"} />
      <p className="section-intro">{lang === "zh" ? "按时间整理的获奖记录。需要查看证明材料时，可展开证书档案。" : "A dated record of awards, with certificate evidence available on demand."}</p>
      <div className="recent-awards">{awardsByDate.slice(0, 4).map((award) => <span className="tag-framer" key={`${award.date}-${award.name.zh}`}>{award.name[lang]} · {award.date}</span>)}</div>
      <details className="award-history"><summary>{lang === "zh" ? `查看完整获奖记录 · ${resumeAwards.length} 项` : `View complete award history · ${resumeAwards.length}`}</summary>
        <ol className="award-records">{awardsByDate.map((award, index) => <li key={`${award.date}-${award.name.zh}-${index}`}><time dateTime={award.date}>{award.date}</time><span>{award.name[lang]}{award.rank ? ` · ${award.rank[lang]}` : ""}</span><small>{award.level[lang]}</small></li>)}</ol>
      </details>
      <div className="certificate-sections">
        {groups.map((group, index) => <details className="certificate-archive" key={group.id}>
          <summary><span>0{index + 1} / {group.title[lang]}</span><span>{group.images.length} {lang === "zh" ? "张证书" : "certificates"}</span></summary>
          <CertificateGallery images={group.images} />
        </details>)}
      </div>
    </div>
  </section>;
}
