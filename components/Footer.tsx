import Link from "next/link";
import { brand, nav } from "@/content/site";
import { Logo } from "./Logo";
import s from "./chrome.module.css";

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={`container ${s.footGrid}`}>
        <div className={s.footBrand}>
          <Logo onDark />
          <p className={s.footTag}>{brand.tagline}</p>
        </div>
        <nav aria-label="Footer" className={s.footCol}>
          <p className={s.footHead}>Explore</p>
          {nav.map((n) => <Link key={n.href} href={n.href}>{n.label}</Link>)}
          <Link href="/contact/">Contact</Link>
        </nav>
        <div className={s.footCol}>
          <p className={s.footHead}>Say hello</p>
          <a href={`mailto:${brand.email}`}>{brand.email}</a>
          <a href={`https://instagram.com/${brand.instagram}`} target="_blank" rel="noopener noreferrer">Instagram @{brand.instagram}</a>
        </div>
      </div>
      <div className={`container ${s.footBase}`}>
        <p>© {new Date().getFullYear()} Daisy Digital</p>
        <p className={s.motto}>{brand.motto}</p>
      </div>
    </footer>
  );
}
