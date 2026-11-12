import Link from "next/link";
import type { CaseStudy, Member } from "@/content/site";
import { brand, home } from "@/content/site";
import { photo } from "@/lib/utils";
import s from "./blocks.module.css";

export const Arrow = () => (
  <svg className="arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M2 8h11M9 3.5 13.5 8 9 12.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

/** Page title block for inner pages. */
export function PageHead({ title, intro }: { title: string; intro?: string }) {
  return (
    <header className={`container ${s.pageHead}`}>
      <h1 className="display">{title}</h1>
      {intro && <p className={`lead muted ${s.pageIntro}`}>{intro}</p>}
    </header>
  );
}

export function WorkTile({ c, priority }: { c: CaseStudy; priority?: boolean }) {
  const cover = c.gallery?.[0]?.photos[0];
  return (
    <Link href={`/work/${c.slug}/`} className={s.tile}>
      <span className={s.tileImg}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {cover && <img src={photo(c.slug, cover.file)} alt="" width={825} height={1100} loading={priority ? "eager" : "lazy"} decoding="async" />}
      </span>
      <span className={s.tileText}>
        <span className={s.tileName}>{c.brand}</span>
        <span className={s.tileKind}>{c.kind}</span>
      </span>
      <span className={s.tileMore}>View project <Arrow /></span>
    </Link>
  );
}

export function TeamCard({ m, withBio }: { m: Member; withBio?: boolean }) {
  return (
    <article className={s.member}>
      {/* where a headshot will go: an initial on lilac */}
      <div className={s.portrait} aria-hidden="true"><span>{m.name[0]}</span></div>
      <h3 className={s.memberName}>{m.name}</h3>
      <p className={s.memberRole}>{m.role}</p>
      {withBio && <p className={s.memberBio}>{m.bio}</p>}
    </article>
  );
}

export function CtaBand() {
  return (
    <section className={s.cta} aria-labelledby="cta-h">
      <div className={`container ${s.ctaInner}`}>
        <h2 id="cta-h" className="h2">{home.ctaTitle}</h2>
        <div className={s.ctaSide}>
          <p className={s.ctaBody}>{home.ctaBody}</p>
          <div className={s.ctaActions}>
            <Link href="/contact/" className="btn btn-light">{home.cta} <Arrow /></Link>
            <a href={`mailto:${brand.email}`} className={s.ctaMail}>{brand.email}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
