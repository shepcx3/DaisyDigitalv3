import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow, CtaBand } from "@/components/blocks";
import { work } from "@/content/site";
import { photo } from "@/lib/utils";
import s from "../work.module.css";

export const dynamicParams = false;
export function generateStaticParams() {
  return work.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  return { title: work.find((c) => c.slug === slug)?.brand ?? "Work" };
}

export default async function CasePage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const i = work.findIndex((c) => c.slug === slug);
  if (i < 0) notFound();
  const c = work[i];
  const next = work[(i + 1) % work.length];
  const all = c.gallery?.flatMap((g) => g.photos) ?? [];
  const hero = all.find((p) => p.landscape) ?? all[0];

  return (
    <main id="main">
      <div className="container">
        <header className={s.caseHead}>
          <div>
            <Link href="/work/" className={s.back}><Arrow /> All work</Link>
            <h1 className="display">{c.brand}</h1>
            <p className={s.kind}>{c.kind}</p>
          </div>
        </header>

        {hero && (
          <figure className={s.cover}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photo(c.slug, hero.file)} alt={hero.alt} fetchPriority="high" />
          </figure>
        )}

        {/* [placeholder] the brief, what we did and results, once the client sends them */}
        <p className={s.note}>The full story behind this project is coming soon. In the meantime, here&apos;s a selection of the work.</p>

        {c.gallery?.map((g) => (
          <section key={g.title} className={s.gallery} aria-labelledby={`g-${g.title}`}>
            <h2 id={`g-${g.title}`} className={`h2 ${s.galleryTitle}`}>{g.title}</h2>
            <ul className={s.photos}>
              {g.photos.filter((p) => p !== hero).map((p) => (
                <li key={p.file} className="reveal">
                  <figure>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={photo(c.slug, p.file)} alt={p.alt} width={p.landscape ? 1100 : 825} height={p.landscape ? 733 : 1100} loading="lazy" decoding="async" />
                    <figcaption>{p.caption}</figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </section>
        ))}

        {next.slug !== c.slug && (
          <nav className={s.next} aria-label="Next project">
            <Link href={`/work/${next.slug}/`} className={s.nextLink}>
              <span>Next project</span>
              <span>{next.brand}</span>
            </Link>
          </nav>
        )}
      </div>
      <CtaBand />
    </main>
  );
}
