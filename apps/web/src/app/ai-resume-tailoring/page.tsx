import type { Metadata } from 'next';
import Link from 'next/link';
import { BrandMark } from '@/components/brand-mark';
import { RESUME_DEMO_PATH, SITE_NAME } from '@/lib/site';

const title = `AI Resume Tailoring Demo | ${SITE_NAME}`;
const description = 'See how AnchorProposal tailors a resume to a job description. Follow a sample backend engineering application from saved profile to a reviewed resume.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: RESUME_DEMO_PATH },
  openGraph: { type: 'website', siteName: SITE_NAME, url: RESUME_DEMO_PATH, title, description },
};

const roleRequirements = [
  'Build REST APIs for order and shipment workflows.',
  'Write automated tests for integrations and failure paths.',
  'Support production services and document incident follow-up.',
  'Operate Kubernetes deployments in production.',
];

const candidateEvidence = [
  'Built an order status endpoint in TypeScript and documented its response format.',
  'Added integration tests for duplicate tracking events from a shipping partner.',
  'Traced a delay to failed worker retries and wrote the recovery steps for the support team.',
  'Used Docker in local development and worked on services deployed by a platform team.',
];

const resumeBullets = [
  'Built a TypeScript REST endpoint that exposed order status and documented its response format for downstream consumers.',
  'Added integration tests for duplicate shipment tracking events to exercise how the service handled repeated partner messages.',
  'Investigated a production delay, traced it to failed worker retries, and documented the recovery steps for support.',
];

export default function ResumeTailoringDemoPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <a
        href="#demo-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:p-3"
      >
        Skip to content
      </a>
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5 px-5 py-5 sm:px-8">
          <BrandMark href="/" />
          <nav aria-label="Main navigation" className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-slate-600">
            <Link href="/guides" className="hover:text-primary">Guides</Link>
            <Link href="/download" className="hover:text-primary">Downloads</Link>
            <Link href="/login" prefetch={false} className="hover:text-primary">Sign in</Link>
          </nav>
        </div>
      </header>

      <main id="demo-content">
        <section aria-labelledby="demo-title" className="border-b border-slate-200 bg-surface-muted">
          <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
            <h1 id="demo-title" className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              See how AI resume tailoring works in AnchorProposal
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Follow a sample backend engineering application. Compare the job description, the candidate’s saved experience, and the resume bullets they could use after reviewing the draft.
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              The role and candidate are fictional. You can read the full example without an account.
            </p>
            <nav aria-label="On this page" className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-primary-deep">
              <a href="#job-and-profile" className="underline underline-offset-4">Job and profile</a>
              <a href="#resume-example" className="underline underline-offset-4">Before and after</a>
              <a href="#review" className="underline underline-offset-4">Review checklist</a>
            </nav>
          </div>
        </section>

        <div className="mx-auto max-w-6xl space-y-12 px-5 py-12 sm:px-8 sm:py-16">
          <section id="job-and-profile" aria-labelledby="job-and-profile-title" className="scroll-mt-6">
            <h2 id="job-and-profile-title" className="text-3xl font-semibold tracking-tight">
              Compare the job with your saved profile
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              The posting describes what the employer needs. The profile supplies the facts you can use to show where your experience fits.
            </p>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div className="rounded-xl border border-slate-200 p-5 sm:p-6">
                <h3 className="text-xl font-semibold text-primary-deep">Sample job description</h3>
                <p className="mt-2 font-medium">Backend Engineer, order fulfillment</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-slate-700">
                  {roleRequirements.map((requirement) => <li key={requirement}>{requirement}</li>)}
                </ul>
              </div>
              <div className="rounded-xl border border-slate-200 p-5 sm:p-6">
                <h3 className="text-xl font-semibold text-primary-deep">Sample saved profile</h3>
                <p className="mt-2 font-medium">Software Engineer, logistics team</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-slate-700">
                  {candidateEvidence.map((evidence) => <li key={evidence}>{evidence}</li>)}
                </ul>
              </div>
            </div>
          </section>

          <section id="resume-example" aria-labelledby="resume-example-title" className="scroll-mt-6">
            <h2 id="resume-example-title" className="text-3xl font-semibold tracking-tight">Before and after resume example</h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              The tailored excerpt brings the candidate’s API work, testing, and production support forward. Each bullet draws from an example in the profile.
            </p>
            <div className="mt-6 grid gap-5 md:grid-cols-[1fr_1.5fr]">
              <div className="rounded-xl border border-slate-200 p-5 sm:p-6">
                <h3 className="text-xl font-semibold">Before tailoring</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-slate-700">
                  <li>Worked on backend features for a logistics team.</li>
                  <li>Wrote tests and helped troubleshoot issues.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-teal-200 bg-surface-muted p-5 sm:p-6">
                <h3 className="text-xl font-semibold text-primary-deep">After tailoring</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-slate-700">
                  {resumeBullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </div>
            </div>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
              The posting asks for production Kubernetes experience. This profile supports a claim about local Docker use. Leave Kubernetes off the resume unless you can describe actual work with it.
            </p>
          </section>

          <section id="review" aria-labelledby="review-title" className="max-w-3xl scroll-mt-6">
            <h2 id="review-title" className="text-3xl font-semibold tracking-tight">Review the draft before exporting</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-slate-700">
              <li>Trace each new claim back to something you did. Check tools, job titles, dates, and any numbers you include.</li>
              <li>Use the employer’s terminology where it accurately describes your work. Keep your strongest relevant evidence near the top of each role.</li>
              <li>Open the exported document to check the layout and contact details. Keep the version you submit with the job posting.</li>
            </ul>
            <Link href="/guides/tailor-resume-to-job-description" className="mt-4 inline-block font-semibold text-primary-deep underline underline-offset-4">
              Read the resume tailoring guide
            </Link>
          </section>

          <section aria-labelledby="workspace-title" className="rounded-2xl bg-primary-deep p-6 text-white sm:p-8">
            <h2 id="workspace-title" className="text-2xl font-semibold">Use your own profile and job description</h2>
            <p className="mt-3 max-w-3xl leading-7 text-teal-50">
              Start an application in AnchorProposal, choose a profile, and add the job description. Review and edit the generated documents, then export them and track the application in the same workspace.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-5">
              <Link href="/register" prefetch={false} className="rounded-lg bg-white px-5 py-3 font-semibold text-primary-deep hover:bg-teal-50">
                Request access
              </Link>
              <Link href="/login" prefetch={false} className="font-semibold underline underline-offset-4">Sign in</Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
