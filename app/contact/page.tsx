import type { Metadata } from "next";
import { ContactForm } from "@/components/Forms";
import { brand, contact } from "@/content/site";
import s from "../pages.module.css";

export const metadata: Metadata = { title: "Start a project" };

export default function ContactPage() {
  return (
    <main id="main" className={`container ${s.formPage}`}>
      <div className={s.formIntro}>
        <h1 className="display">{contact.title}</h1>
        <p className="lead muted">{contact.intro}</p>
        <div className={s.direct}>
          <span>Prefer email?</span>
          <a href={`mailto:${brand.email}`} className="text-link">{brand.email}</a>
        </div>
      </div>
      <div className={s.formCard}><ContactForm /></div>
    </main>
  );
}
