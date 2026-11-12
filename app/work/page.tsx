import type { Metadata } from "next";
import { CtaBand, PageHead, WorkTile } from "@/components/blocks";
import { clients, work } from "@/content/site";
import s from "./work.module.css";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  const others = clients.filter((c) => !work.some((w) => w.brand === c));
  return (
    <main id="main">
      <PageHead title="Work" intro="A look at the content and spaces we've made with the brands we work with." />
      <section className={`container ${s.grid}`} aria-label="Projects">
        {work.map((c, i) => <div key={c.slug} className="reveal"><WorkTile c={c} priority={i === 0} /></div>)}
      </section>
      <section className={`container ${s.also}`} aria-labelledby="also-h">
        <h2 id="also-h" className={s.alsoTitle}>Also worked with</h2>
        <p className={s.alsoList}>{others.join(" · ")}</p>
      </section>
      <CtaBand />
    </main>
  );
}
