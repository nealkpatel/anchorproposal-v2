import type { Metadata } from 'next';
import Link from 'next/link';
import { guides } from '@/lib/job-search-guides';
import { SITE_NAME } from '@/lib/site';

const title = 'Resume, Cover Letter & Job Search Guides | AnchorProposal';
const description = 'Practical examples for tailoring your resume, writing a cover letter, and keeping track of your job applications.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/guides' },
  openGraph: { type: 'website', siteName: SITE_NAME, url: '/guides', title, description },
};

export default function GuidesPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <h1 className="text-4xl font-semibold tracking-tight">Job search guides</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
        Work through a sample resume edit, draft a cover letter, or set up a tracker for the roles you apply to.
      </p>
      <ul className="mt-8 grid gap-5 md:grid-cols-3">
        {guides.map((guide) => (
          <li key={guide.slug} className="rounded-xl border border-slate-200 bg-surface-muted p-6">
            <h2 className="text-xl font-semibold leading-snug text-primary-deep">
              <Link href={`/guides/${guide.slug}`} className="underline-offset-4 hover:underline">
                {guide.title}
              </Link>
            </h2>
            <p className="mt-3 leading-7 text-slate-600">{guide.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
