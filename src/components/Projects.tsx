"use client";

import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { useT } from "@/i18n/LanguageContext";
import { resumeProjects } from "@/data/resume-projects";

export default function Projects() {
  const { t, lang } = useT();
  const ordered = [resumeProjects[5], resumeProjects[6], resumeProjects[1], resumeProjects[3], resumeProjects[0], resumeProjects[2], resumeProjects[4]];

  return (
    <section id="projects" className="resume-section">
      <div className="section-container">
        <SectionHeading label={t("projects.label")} title={lang === "zh" ? "项目实践与成果" : "Projects & outcomes"} />
        <p className="section-intro">{lang === "zh" ? "从海洋环境议题到流体仿真与数据建模，选取能说明问题、方法与结果的代表项目。" : "Selected work spanning marine challenges, fluid simulation and data modelling—each framed by its problem, method and outcome."}</p>
        <div className="project-grid">
          {ordered.map((project, index) => {
            const featured = project.images.length > 0;
            return (
              <article className={`project-card ${featured ? "project-card-featured" : "project-card-compact"}`} key={project.id}>
                {featured ? (
                  <div className="project-media">
                    <a className="project-main-image" href={project.images[0]} target="_blank" rel="noopener noreferrer" aria-label={`${project.title[lang]} · ${lang === "zh" ? "查看大图" : "view image"}`}>
                      <Image src={project.images[0]!} alt={"imageAlt" in project ? project.imageAlt[lang] : project.title[lang]} width={640} height={480} loading="lazy" />
                    </a>
                    <div className="project-thumbs">
                      {project.images.slice(1).map((src, imageIndex) => (
                        <a href={src} target="_blank" rel="noopener noreferrer" key={src} aria-label={`${project.title[lang]} · ${imageIndex + 2}`}>
                          <Image src={src} alt={`${project.title[lang]} · ${lang === "zh" ? "补充项目图像" : "additional project image"} ${imageIndex + 2}`} width={240} height={180} loading="lazy" />
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="project-index" aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span><p>{project.category[lang]}</p></div>
                )}
                <div className="project-content">
                  <div className="project-meta"><span>{project.period}</span><span>{project.role[lang]}</span></div>
                  <h3>{project.title[lang]}</h3>
                  <p>{project.summary[lang]}</p>
                  {"outcome" in project && <p className="project-highlight">{project.outcome[lang]}</p>}
                  <div className="project-techs">{project.techs.map((tech) => <span key={tech}>{tech}</span>)}</div>
                  <details className="project-details">
                    <summary>{lang === "zh" ? "查看我的贡献与项目成果" : "Read my contribution & outcomes"}</summary>
                    <ul>{project.details[lang].map((detail) => <li key={detail}>{detail}</li>)}</ul>
                  </details>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
