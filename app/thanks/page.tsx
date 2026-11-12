import type { Metadata } from "next";
import Link from "next/link";
import { DaisyMark } from "@/components/Logo";
import { screens } from "@/content/site";
import s from "../pages.module.css";

export const metadata: Metadata = { title: "Thank you", robots: { index: false } };

export default function Thanks() {
  return (
    <main id="main" className={`container ${s.screen}`}>
      <DaisyMark size={44} />
      <h1 className="h2">{screens.thanks.title}</h1>
      <p className="muted">{screens.thanks.body}</p>
      <Link href="/" className="btn btn-ghost">Back to home</Link>
    </main>
  );
}
