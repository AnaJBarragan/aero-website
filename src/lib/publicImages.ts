import type { ImageMetadata } from 'astro';

const images = import.meta.glob<{ default: ImageMetadata }>('/public/images/**/*', {
	eager: true,
});

/** Resolve a data-driven path (e.g. `/images/team/${photo}`) to its processed, base-aware asset. */
export function publicImage(path: string): ImageMetadata {
	const normalized = path.startsWith('/') ? path : `/${path}`;
	const key = `/public${normalized}`;
	const mod = images[key];
	if (!mod) {
		throw new Error(`Image not found in public/images: ${path}`);
	}
	return mod.default;
}
