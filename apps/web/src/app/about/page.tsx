import type { Metadata } from 'next';
import Link from 'next/link';
import { BrandMark } from '@/components/brand-mark';
import { ABOUT_PATH, RESUME_DEMO_PATH, SITE_NAME, SITE_REPOSITORY_URL } from '@/lib/site';

const title = `About ${SITE_NAME} | AI Resume Tailoring & Application Tracking`;
const description = 'Learn what AnchorProposal does, see its public resume tailoring demo, and find the project repository and official app downloads.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: ABOUT_PATH },
  openGraph: { type: 'website', siteName: SITE_NAME, url: ABOUT_PATH, title, description },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <a
        href="#about-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:p-3"
      >
        Skip to content
      </a>
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5 px-5 py-5 sm:px-8">
          <BrandMark />
          <nav aria-label="Main navigation" className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-slate-600">
            <Link href={RESUME_DEMO_PATH} className="hover:text-primary">Resume demo</Link>
            <Link href="/guides" className="hover:text-primary">Guides</Link>
            <Link href="/download" className="hover:text-primary">Downloads</Link>
          </nav>
        </div>
      </header>

      <main id="about-content" className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">About AnchorProposal</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          AnchorProposal is an AI resume tailoring and job application tracker. It brings the job description,
          your saved experience, and the documents you prepare for a role into one application record.
        </p>

        <section aria-labelledby="workflow-title" className="mt-10">
          <h2 id="workflow-title" className="text-2xl font-semibold">From a job posting to an application record</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-700">
            Start with a saved candidate profile and the original job description. Review and edit the generated
            resume and cover letter, then export your documents as PDF or Word files. After applying on the
            employer’s website, update the status and keep your notes and document versions together for follow-up.
          </p>
          <Link href={RESUME_DEMO_PATH} className="mt-4 inline-block font-semibold text-primary-deep underline underline-offset-4">
            See a sample resume before and after tailoring
          </Link>
        </section>

        <section aria-labelledby="project-title" className="mt-10 rounded-xl border border-slate-200 bg-surface-muted p-6 sm:p-8">
          <h2 id="project-title" className="text-2xl font-semibold">AnchorProposal project and downloads</h2>
          <p className="mt-3 leading-7 text-slate-700">
            The project repository contains the source code and development documentation. Get the Windows app and Chrome
            extension from the AnchorProposal download page and use your existing account to sign in.
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3 font-semibold text-primary-deep">
            <li><a href={SITE_REPOSITORY_URL} className="underline underline-offset-4">AnchorProposal on GitHub</a></li>
            <li><Link href="/download" className="underline underline-offset-4">Official app downloads</Link></li>
          </ul>
        </section>

        <section aria-labelledby="access-title" className="mt-10">
          <h2 id="access-title" className="text-2xl font-semibold">Get access</h2>
          <p className="mt-3 leading-7 text-slate-700">
            The public guides and resume demo are available without signing in. To use the application workspace, create
            an account, verify your email, and wait for approval.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 font-semibold text-primary-deep">
            <Link href="/register" prefetch={false} className="underline underline-offset-4">Request access</Link>
            <Link href="/login" prefetch={false} className="underline underline-offset-4">Sign in</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
