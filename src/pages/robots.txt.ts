import type { APIRoute } from "astro";

// Both paths below must carry the base path on sub-path deployments
// (GitHub Pages serves *project* repos from /<repo>/, e.g. /hao-blog/).
// import.meta.env.BASE_URL already starts and ends with "/", so it can be
// concatenated directly. Previously the sitemap URL was resolved against
// import.meta.env.SITE (origin only), which dropped the base entirely.
const base = import.meta.env.BASE_URL;
const sitemapUrl = new URL(`${base}sitemap-index.xml`, import.meta.env.SITE)
	.href;

const robotsTxt = `
User-agent: *
Disallow: ${base}_astro/

Sitemap: ${sitemapUrl}
`.trim();

export const GET: APIRoute = () => {
	return new Response(robotsTxt, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
};
