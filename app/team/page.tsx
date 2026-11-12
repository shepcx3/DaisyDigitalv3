import type { Metadata } from "next";
import { CtaBand, PageHead, TeamCard } from "@/components/blocks";
import { home, team } from "@/content/site";
import s from "../pages.module.css";

export const metadata: Metadata = { title: "Team" };

export default function TeamPage() {
  return (
    <main id="main">
      <PageHead title="The team" intro={home.teamIntro} />
      <section className={`container ${s.team}`} aria-label="Team members">
        {team.map((m) => <div key={m.slug} className="reveal"><TeamCard m={m} withBio /></div>)}
      </section>
      <CtaBand />
    </main>
  );
}
