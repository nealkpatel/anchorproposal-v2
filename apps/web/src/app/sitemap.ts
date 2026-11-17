import type { MetadataRoute } from 'next';
import { guides } from '@/lib/job-search-guides';
import { ABOUT_PATH, RESUME_DEMO_PATH, SITE_ORIGIN } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['/', ABOUT_PATH, RESUME_DEMO_PATH, '/download', '/guides', ...guides.map(({ slug }) => `/guides/${slug}`)];
  return paths.map((path) => ({ url: `${SITE_ORIGIN}${path}` }));
}
