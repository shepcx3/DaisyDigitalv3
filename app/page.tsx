import Link from "next/link";
import { Arrow, CtaBand, TeamCard, WorkTile } from "@/components/blocks";
import { DaisyMark } from "@/components/Logo";
import { brand, clients, home, team, work } from "@/content/site";
import { photo } from "@/lib/utils";
import s from "./home.module.css";

export default function Home() {
  return (
    <main id="main">
      {/* HERO */}
      <section className={`container ${s.hero}`} aria-labelledby="hero-h">
        <div className={s.heroText}>
          <h1 id="hero-h" className={`display ${s.heroTitle}`}>
            Creative <em>by nature.</em>
          </h1>
          <p className={`lead ${s.heroLead}`}>{home.lead}</p>
          <p className={`muted ${s.heroBody}`}>{home.body}</p>
          <div className={s.heroActions}>
            <Link href="/contact/" className="btn btn-primary">{home.cta} <Arrow /></Link>
            <Link href="/work/" className="btn btn-ghost">{home.secondary}</Link>
          </div>
        </div>
        <div className={s.heroArt}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={s.heroMain} src={photo("lay-low", "the-room")} alt="The Lay Low café: a curved green velvet banquette under arched lights" width={825} height={1100} fetchPriority="high" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={s.heroSmall} src={photo("holistically-hip", "shelf-wall")} alt="A shopper reaching up to a wall of colourful products at Holistically Hip" width={825} height={1100} />
        </div>
      </section>

      {/* CLIENTS */}
      <section className={s.clients} aria-labelledby="clients-h">
        <div className="container">
          <h2 id="clients-h" className={s.clientsTitle}>{home.clientsTitle}</h2>
          <ul className={s.clientList}>
            {clients.map((c, i) => (
              <li key={c}>{i > 0 && <DaisyMark size={14} className={s.clientDot} />}{c}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className={`container ${s.section}`} aria-labelledby="services-h">
        <div className={`${s.split} reveal`}>
          <h2 id="services-h" className="h2">{home.servicesTitle}</h2>
          <p className="lead muted">{home.servicesIntro}</p>
        </div>
        <ul className={s.services}>
          {home.services.map((sv) => (
            <li key={sv.name} className="reveal">
              <h3 className={s.serviceName}>{sv.name}</h3>
              <p className="muted">{sv.blurb}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* WORK */}
      <section className={s.workBand} aria-labelledby="work-h">
        <div className={`container ${s.section}`}>
          <div className={`${s.split} reveal`}>
            <h2 id="work-h" className="h2">{home.workTitle}</h2>
            <p className="lead muted">{home.workIntro}</p>
          </div>
          <div className={s.workGrid}>
            {work.map((c) => <div key={c.slug} className="reveal"><WorkTile c={c} /></div>)}
          </div>
          <p className={s.more}><Link href="/work/" className="text-link">All work</Link></p>
        </div>
      </section>

      {/* MOTTO */}
      <section className={s.motto} aria-label="Our motto">
        <div className="container">
          <p className={`${s.mottoText} reveal`}>{brand.motto}</p>
        </div>
      </section>

      {/* TEAM */}
      <section className={`container ${s.section}`} aria-labelledby="team-h">
        <div className={`${s.split} reveal`}>
          <h2 id="team-h" className="h2">{home.teamTitle}</h2>
          <p className="lead muted">{home.teamIntro}</p>
        </div>
        <div className={s.teamGrid}>
          {team.map((m) => <div key={m.slug} className="reveal"><TeamCard m={m} /></div>)}
        </div>
        <p className={s.more}><Link href="/team/" className="text-link">Meet the team</Link></p>
      </section>

      <CtaBand />
    </main>
  );
}
