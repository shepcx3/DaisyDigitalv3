"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { brand, careers, contact } from "@/content/site";
import { Arrow } from "./blocks";
import s from "./forms.module.css";

type Errors = Record<string, string>;
const MAX_MB = 8;

/** Post to the form service when one is set; otherwise open the visitor's email app with the message filled in. */
async function send(data: FormData, subject: string) {
  if (brand.formEndpoint) {
    const res = await fetch(brand.formEndpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
    if (!res.ok) throw new Error(String(res.status));
    return "sent";
  }
  const lines = [...data.entries()].filter(([, v]) => typeof v === "string" && v).map(([k, v]) => `${k}: ${v}`);
  location.href = `mailto:${brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
  return "mailto";
}

function validate(data: FormData, needMessage: boolean): Errors {
  const e: Errors = {};
  if (!String(data.get("name") ?? "").trim()) e.name = contact.errors.name;
  if (!/^\S+@\S+\.\S+$/.test(String(data.get("email") ?? "").trim())) e.email = contact.errors.email;
  if (needMessage && !String(data.get("message") ?? "").trim()) e.message = contact.errors.message;
  return e;
}

function Field({ label, name, errors, optional, children }: { label: string; name: string; errors: Errors; optional?: boolean; children: React.ReactElement }) {
  return (
    <div className={s.field}>
      <label htmlFor={name}>
        {label} {optional && <span className={s.optional}>(optional)</span>}
      </label>
      {children}
      {errors[name] && <p id={`${name}-err`} className={s.error}>{errors[name]}</p>}
    </div>
  );
}

const aria = (errors: Errors, k: string) => (errors[k] ? { "aria-invalid": true, "aria-describedby": `${k}-err` } : {});

export function ContactForm() {
  const router = useRouter();
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const errs = validate(data, true);
    setErrors(errs);
    if (Object.keys(errs).length) return form.querySelector<HTMLElement>(`[name="${Object.keys(errs)[0]}"]`)?.focus();
    setBusy(true);
    try {
      if ((await send(data, `New enquiry from ${data.get("name")}`)) === "sent") router.push("/thanks/");
    } catch {
      setStatus(contact.errors.send);
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className={s.form} onSubmit={onSubmit} noValidate>
      <div className={s.row}>
        <Field label="Name" name="name" errors={errors}><input id="name" name="name" autoComplete="name" {...aria(errors, "name")} /></Field>
        <Field label="Email" name="email" errors={errors}><input id="email" name="email" type="email" autoComplete="email" {...aria(errors, "email")} /></Field>
      </div>
      <div className={s.row}>
        <Field label="Brand or company" name="company" errors={errors} optional><input id="company" name="company" autoComplete="organization" /></Field>
        <Field label="What do you need?" name="service" errors={errors} optional>
          <select id="service" name="service" defaultValue="">
            <option value="" disabled>Choose one</option>
            {contact.services.map((o) => <option key={o}>{o}</option>)}
          </select>
        </Field>
      </div>
      <Field label="Tell us about it" name="message" errors={errors}><textarea id="message" name="message" rows={6} {...aria(errors, "message")} /></Field>
      <div className={s.actions}>
        <button type="submit" className="btn btn-primary" disabled={busy}>{busy ? "Sending…" : contact.submit} <Arrow /></button>
        {!brand.formEndpoint && <p className={s.hint}>{contact.mailtoNote}</p>}
      </div>
      <p role="status" className={s.status}>{status}</p>
    </form>
  );
}

export function CareersForm() {
  const router = useRouter();
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const errs = validate(data, false);
    const file = data.get("resume");
    if (file instanceof File && file.size > MAX_MB * 1024 * 1024) errs.resume = `Please keep your resume under ${MAX_MB} MB.`;
    setErrors(errs);
    if (Object.keys(errs).length) return form.querySelector<HTMLElement>(`[name="${Object.keys(errs)[0]}"]`)?.focus();
    setBusy(true);
    try {
      // an email link can't carry a file, so the visitor attaches it themselves
      if (!brand.formEndpoint) data.delete("resume");
      const how = await send(data, `Application from ${data.get("name")}`);
      if (how === "sent") router.push("/thanks/");
      else setStatus(careers.sentNoFile);
    } catch {
      setStatus(contact.errors.send);
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className={s.form} onSubmit={onSubmit} noValidate>
      <div className={s.row}>
        <Field label="Name" name="name" errors={errors}><input id="name" name="name" autoComplete="name" {...aria(errors, "name")} /></Field>
        <Field label="Email" name="email" errors={errors}><input id="email" name="email" type="email" autoComplete="email" {...aria(errors, "email")} /></Field>
      </div>
      <Field label="Instagram or portfolio link" name="portfolio" errors={errors} optional><input id="portfolio" name="portfolio" type="url" inputMode="url" placeholder="https://" /></Field>
      <Field label="A little about you" name="about" errors={errors} optional><textarea id="about" name="about" rows={5} /></Field>
      <Field label="Resume" name="resume" errors={errors} optional>
        <input id="resume" name="resume" type="file" accept=".pdf,.doc,.docx" className={s.file} {...aria(errors, "resume")} />
      </Field>
      <div className={s.actions}>
        <button type="submit" className="btn btn-primary" disabled={busy}>{busy ? "Sending…" : careers.submit} <Arrow /></button>
        {!brand.formEndpoint && <p className={s.hint}>{contact.mailtoNote} You&apos;ll attach your resume there.</p>}
      </div>
      <p role="status" className={s.status}>{status}</p>
    </form>
  );
}
