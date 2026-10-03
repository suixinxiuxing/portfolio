"use client";
import {useT} from "@/i18n/LanguageContext";
import SectionHeading from "./SectionHeading";
export default function About(){const {lang}=useT();
 const cards=lang==="zh"?[
 ["理解问题","在校学生教学信息中心开展3次全校调研，建立“收集—反馈—改进”流程，推动100+条建议转化为改进举措。","#experience"],
 ["用数据验证","在项目中使用 Python、SQL 与数值仿真处理复杂问题：从5600组载荷数据分析，到微塑料收集装置的效率与阻力优化。","#projects"],
 ["协同推进","管理覆盖16个学院的学生团队，协调3个核心部门，组织20+场会议与活动；参与技术方案、项目报告及成果转化。","#experience"]]:[
 ["Understand the problem","Ran 3 campus-wide surveys, established a collect–review–improve process and helped turn 100+ suggestions into improvements.","#experience"],
 ["Validate with data","Applied Python, SQL and numerical analysis to complex problems, from 5,600 load datasets to efficiency and resistance optimization.","#projects"],
 ["Coordinate delivery","Managed student teams across 16 colleges, coordinated 3 departments and delivered 20+ meetings and events, alongside technical reporting and technology transfer.","#experience"]];
 return <section id="about" className="resume-section"><div className="section-container"><SectionHeading label={lang==="zh"?"关于我":"About"} title={lang==="zh"?"从问题出发，让方案落地。":"From understanding problems to delivering solutions."}/><p className="about-intro">{lang==="zh"?"工科研究训练与学生组织实践，让我习惯从调研中识别问题，通过分析验证判断，再与团队一起推进执行。中共党员，国家奖学金获得者。":"Engineering research and student leadership shaped how I work: identify problems through research, test assumptions with analysis, and collaborate to deliver. CPC member and National Scholarship recipient."}</p><div className="about-grid">{cards.map(([title,body,href],i)=><article key={title}><span className="item-index">0{i+1}</span><h3>{title}</h3><p>{body}</p><a className="evidence-link" href={href}>{lang==="zh"?"查看相关经历 ↗":"See related experience ↗"}</a></article>)}</div></div></section>;
}
