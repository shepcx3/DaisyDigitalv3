"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/content/site";
import { cx } from "@/lib/utils";
import { Logo } from "./Logo";
import s from "./chrome.module.css";

export function Header() {
  const path = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [open]);

  const active = (href: string) => !href.includes("#") && path.startsWith(href);

  return (
    <header className={cx(s.header, scrolled && s.scrolled)}>
      <div className={cx("container", s.bar)}>
        <Logo />
        <nav className={s.nav} aria-label="Main">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className={s.navLink} aria-current={active(n.href) ? "page" : undefined}>{n.label}</Link>
          ))}
        </nav>
        <Link href="/contact/" className={cx("btn btn-primary", s.cta)}>Start a project</Link>
        <button type="button" className={s.menuBtn} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className={s.burger} data-open={open || undefined} aria-hidden="true"><i /><i /></span>
        </button>
      </div>
      <div id="mobile-menu" className={s.mobile} data-open={open || undefined} hidden={!open}>
        <nav aria-label="Main (mobile)" className="container">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className={s.mobileLink} onClick={() => setOpen(false)}>{n.label}</Link>
          ))}
          <Link href="/contact/" className={s.mobileLink} onClick={() => setOpen(false)}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
