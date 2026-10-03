import type {ReactNode} from "react";
export default function SectionHeading({label,title}:{label:ReactNode;title:ReactNode}){return <div className="section-heading"><p className="eyebrow">{label}</p><h2>{title}</h2><div className="section-line"/></div>}
