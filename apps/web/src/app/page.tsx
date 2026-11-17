import type { Metadata } from 'next';
import Link from 'next/link';
import { BrandMark } from '@/components/brand-mark';
import { StructuredData } from '@/components/structured-data';
import { guides } from '@/lib/job-search-guides';
import {
  ABOUT_PATH, RESUME_DEMO_PATH, SITE_ALTERNATE_NAME, SITE_ICON_PATH, SITE_NAME, SITE_ORIGIN, SITE_REPOSITORY_URL,
} from '@/lib/site';

const title = 'AnchorProposal | AI Resume Tailoring & Job Application Tracker';
const description =
  'Use AnchorProposal to tailor your resume and cover letter to a job description, review and export your documents, and track your job applications in one place.';
const siteUrl = `${SITE_ORIGIN}/`;
const publisherId = `${siteUrl}#organization`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/' },
  openGraph: { type: 'website', siteName: SITE_NAME, url: '/', title, description },
};

const features = [
  {
    title: 'AI resume tailoring',
    description:
      'Use your saved profile and a job description to prepare a tailored resume. Review the wording, edit your document, and export the version you want to use.',
  },
  {
    title: 'Cover letter generation',
    description:
      'Create a cover letter from your profile and the role you are applying for. Review and refine the draft before including it in your application.',
  },
  {
    title: 'Job application tracking',
    description:
      'Keep application records, statuses, notes, and document versions together so you can follow your progress and find the materials you used.',
  },
];

const steps = [
  {
    title: 'Choose a candidate profile',
    description:
      'Choose an available candidate profile with the relevant experience, skills, and qualifications.',
  },
  {
    title: 'Add a job description',
    description:
      'Choose a role and provide the job description for the application.',
  },
  {
    title: 'Generate, review, and export',
    description:
      'Prepare your resume and cover letter, check the details, and export your documents.',
  },
  {
    title: 'Apply and track your progress',
    description:
      'Submit on the original job website, then keep your application record up to date.',
  },
];

const questions = [
  {
    question: 'What is AnchorProposal?',
    answer:
      'AnchorProposal is an AI-assisted resume tailoring and job application management platform. It helps you prepare resumes and cover letters and organize the applications associated with them.',
  },
  {
    question: 'How do I get access?',
    answer:
      'Create an account, verify your email, and wait for account approval. Once approved, you can sign in to your workspace.',
  },
  {
    question: 'Can I edit the generated documents?',
    answer:
      'Yes. You can review and edit your generated resumes and cover letters, save a revised version, and export your documents. Check all details before using them.',
  },
  {
    question: 'Does AnchorProposal submit job applications for me?',
    answer:
      'You submit applications on the original job website. AnchorProposal helps you prepare the documents and record your application progress.',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebSite',
            '@id': `${siteUrl}#website`,
            name: SITE_NAME,
            alternateName: SITE_ALTERNATE_NAME,
            url: siteUrl,
            description,
            publisher: { '@id': publisherId },
          },
          {
            '@type': 'Organization',
            '@id': publisherId,
            name: SITE_NAME,
            alternateName: SITE_ALTERNATE_NAME,
            url: siteUrl,
            description: 'AnchorProposal develops software for AI resume tailoring and job application tracking.',
            logo: `${SITE_ORIGIN}${SITE_ICON_PATH}`,
            sameAs: [SITE_REPOSITORY_URL],
          },
        ],
      }} />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:p-3"
      >
        Skip to content
      </a>

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5 px-5 py-5 sm:px-8">
          <BrandMark variant="dark" href="/" />

          <nav
            aria-label="Main navigation"
            className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-medium text-slate-600"
          >
            <a href="#features" className="hover:text-primary">
              Features
            </a>

            <Link href={RESUME_DEMO_PATH} className="hover:text-primary">
              Resume demo
            </Link>

            <Link href="/guides" className="hover:text-primary">
              Guides
            </Link>

            <Link href="/download" className="hover:text-primary">
              Downloads
            </Link>

            <Link
              href="/login"
              prefetch={false}
              className="rounded-lg border border-slate-300 px-4 py-2 text-slate-900 hover:bg-slate-50"
            >
              Sign in
            </Link>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section aria-labelledby="hero-title" className="bg-surface-muted">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary-deep">
                Resumes, cover letters, and applications
              </p>

              <h1
                id="hero-title"
                className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl"
              >
                AI resume tailoring{' '}
                <span className="text-primary">
                  with AnchorProposal
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                AnchorProposal combines AI resume tailoring, cover letter
                generation, and a job application tracker. Start with your
                saved profile and a job description, then review, edit, and
                export your documents.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/register"
                  prefetch={false}
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-deep"
                >
                  Request access
                </Link>

                <Link
                  href={RESUME_DEMO_PATH}
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold hover:bg-slate-50"
                >
                  See a resume example
                </Link>
              </div>

              <p className="mt-4 text-sm text-slate-600">
                Email verification and account approval are required.
              </p>
            </div>

            <aside
              aria-labelledby="workspace-title"
              className="rounded-2xl bg-primary-deep p-7 text-white shadow-lg sm:p-9"
            >
              <p className="text-sm font-medium text-teal-100">
                YOUR APPLICATION WORKSPACE
              </p>

              <h2
                id="workspace-title"
                className="mt-3 text-2xl font-semibold"
              >
                From job description to reviewed documents
              </h2>

              <ul className="mt-6 space-y-4 text-base leading-7 text-teal-50">
                <li>
                  Prepare documents using your saved candidate profile.
                </li>
                <li>
                  Review and edit each resume and cover letter.
                </li>
                <li>
                  Keep document versions with your application history.
                </li>
              </ul>

              <Link
                href="/dashboard"
                prefetch={false}
                className="mt-7 inline-block rounded-lg bg-white px-5 py-3 font-semibold text-primary-deep hover:bg-teal-50"
              >
                Open your workspace
              </Link>

              <p className="mt-3 text-sm text-teal-100">
                Existing users can sign in to continue.
              </p>
            </aside>
          </div>
        </section>

        <section
          id="features"
          aria-labelledby="features-title"
          className="mx-auto max-w-6xl scroll-mt-8 px-5 py-16 sm:px-8"
        >
          <h2
            id="features-title"
            className="text-3xl font-semibold tracking-tight"
          >
            Tools for each application
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            Prepare your documents and organize your job search in one
            workspace.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-xl font-semibold text-primary-deep">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="how-it-works"
          aria-labelledby="workflow-title"
          className="scroll-mt-8 bg-surface-muted"
        >
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
            <h2
              id="workflow-title"
              className="text-3xl font-semibold tracking-tight"
            >
              How AnchorProposal works
            </h2>

            <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <li key={step.title}>
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white"
                  >
                    {index + 1}
                  </span>

                  <h3 className="mt-4 text-lg font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          aria-labelledby="apps-title"
          className="mx-auto max-w-6xl px-5 py-16 sm:px-8"
        >
          <div className="rounded-2xl border border-slate-200 p-7 sm:p-10">
            <h2
              id="apps-title"
              className="text-3xl font-semibold tracking-tight"
            >
              Use AnchorProposal alongside your job search
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
              Find the Windows app and Chrome extension installation
              instructions, and continue working with your AnchorProposal
              account.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/download"
                className="rounded-lg bg-primary px-5 py-3 font-semibold text-white hover:bg-primary-deep"
              >
                Apps and downloads
              </Link>

              <Link
                href="/download#chrome-extension"
                className="rounded-lg border border-slate-300 px-5 py-3 font-semibold hover:bg-slate-50"
              >
                Chrome installation guide
              </Link>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="guides-title"
          className="border-y border-slate-200 bg-surface-muted"
        >
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h2 id="guides-title" className="text-3xl font-semibold tracking-tight">
                Job search guides
              </h2>
              <Link href="/guides" className="font-semibold text-primary-deep underline underline-offset-4">
                Browse all guides
              </Link>
            </div>
            <ul className="mt-7 grid gap-5 md:grid-cols-3">
              {guides.map((guide) => (
                <li key={guide.slug} className="rounded-xl border border-slate-200 bg-white p-5">
                  <Link href={`/guides/${guide.slug}`} className="font-semibold text-primary-deep hover:underline">
                    {guide.title}
                  </Link>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{guide.summary}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="faq"
          aria-labelledby="faq-title"
          className="mx-auto max-w-4xl px-5 py-16 sm:px-8"
        >
          <h2
            id="faq-title"
            className="text-3xl font-semibold tracking-tight"
          >
            Common questions
          </h2>

          <div className="mt-8 space-y-4">
            {questions.map((item) => (
              <details
                key={item.question}
                className="rounded-xl border border-slate-200 p-5"
              >
                <summary className="cursor-pointer text-lg font-semibold">
                  {item.question}
                </summary>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-surface-muted">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5 px-5 py-8 sm:px-8">
          <p className="text-sm text-slate-600">
            AnchorProposal · AI resume tailoring and job application tracking
          </p>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-5 text-sm font-medium text-primary-deep"
          >
            <Link href="/register" prefetch={false}>
              Request access
            </Link>

            <Link href="/login" prefetch={false}>
              Sign in
            </Link>

            <Link href="/download">
              Downloads
            </Link>

            <Link href="/guides">Guides</Link>

            <Link href={ABOUT_PATH}>About AnchorProposal</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
