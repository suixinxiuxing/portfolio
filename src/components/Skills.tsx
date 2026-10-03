"use client";
import {FiSearch,FiCode,FiUsers,FiCpu} from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import {useT} from "@/i18n/LanguageContext";
export default function Skills(){
 const {lang}=useT();
 const groups=lang==="zh"?[
 {icon:FiSearch,name:"调研与方案",items:["需求收集","可行性调研","技术方案","报告撰写"]},
 {icon:FiCode,name:"数据与分析",items:["Python","SQL","Excel","MATLAB","数据处理"]},
 {icon:FiUsers,name:"沟通与执行",items:["跨部门协调","活动统筹","新媒体运营","英文学术交流"]},
 {icon:FiCpu,name:"技术理解",items:["CFD","PINN","流固耦合","参数优化"]}]:[
 {icon:FiSearch,name:"Research & solutions",items:["Needs collection","Feasibility research","Technical proposals","Reporting"]},
 {icon:FiCode,name:"Data & analysis",items:["Python","SQL","Excel","MATLAB","Data processing"]},
 {icon:FiUsers,name:"Communication & delivery",items:["Cross-team coordination","Event planning","Media operations","Academic English"]},
 {icon:FiCpu,name:"Technical fluency",items:["CFD","PINN","Fluid–structure interaction","Parameter optimization"]}];
 return <section id="skills" className="resume-section"><div className="section-container"><SectionHeading label={lang==="zh"?"能力与工具":"Capabilities"} title={lang==="zh"?"连接调研、分析与执行。":"Connecting research, analysis and delivery."}/><div className="skills-grid">{groups.map(g=><article className="skill-card" key={g.name}><g.icon aria-hidden="true"/><h3>{g.name}</h3><div className="skill-tags">{g.items.map(s=><span key={s}>{s}</span>)}</div></article>)}</div>
 <details className="tools-details"><summary>{lang==="zh"?"完整工具与语言能力":"All tools & languages"}</summary><div className="skill-tags">{["Java","STAR-CCM+","ANSYS Fluent","Abaqus","Tecplot","Origin","SolidWorks","CATIA","AutoCAD","Autodesk Revit","ArcGIS","Word","PowerPoint"].map(s=><span key={s}>{s}</span>)}</div><p>{lang==="zh"?"英语 CET-4：482 · CET-6：434；中文（母语）。全国计算机等级考试二级：MS Office 高级应用与设计，优秀（2023.03）。":"English CET-4: 482 · CET-6: 434; Mandarin (native). National Computer Rank Examination Level 2: Advanced MS Office Applications and Design, Excellent (March 2023)."}</p></details></div></section>
}
