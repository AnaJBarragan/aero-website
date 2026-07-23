/** Prefix an internal, root-relative path with the configured base (astro.config.mjs `base`). */
export function withBase(path: string): string {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	const normalized = path.startsWith('/') ? path : `/${path}`;
	return `${base}${normalized}`;
}
