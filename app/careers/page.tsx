import type { Metadata } from "next";
import { CareersForm } from "@/components/Forms";
import { brand, careers } from "@/content/site";
import s from "../pages.module.css";

export const metadata: Metadata = { title: "Careers" };

export default function CareersPage() {
  return (
    <main id="main" className={`container ${s.formPage}`}>
      <div className={s.formIntro}>
        <h1 className="display">{careers.title}</h1>
        <p className="lead muted">{careers.intro}</p>
        <div className={s.direct}>
          <span>Or send your resume to</span>
          <a href={`mailto:${brand.email}?subject=Application`} className="text-link">{brand.email}</a>
        </div>
      </div>
      <div className={s.formCard}><CareersForm /></div>
    </main>
  );
}
