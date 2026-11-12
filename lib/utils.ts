// Prefix files from /public with the GitHub Pages base path (next/link does this itself; <img> doesn't).
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

export const photo = (slug: string, file: string) => asset(`/work/${slug}/${file}.webp`);

export const cx = (...parts: Array<string | false | null | undefined>) => parts.filter(Boolean).join(" ");
