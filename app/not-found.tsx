import Link from "next/link";
import { DaisyMark } from "@/components/Logo";
import { screens } from "@/content/site";
import s from "./pages.module.css";

export default function NotFound() {
  return (
    <main id="main" className={`container ${s.screen}`}>
      <DaisyMark size={44} />
      <h1 className="h2">{screens.notFound.title}</h1>
      <p className="muted">{screens.notFound.body}</p>
      <Link href="/" className="btn btn-ghost">Back to home</Link>
    </main>
  );
}
