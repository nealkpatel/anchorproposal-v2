import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { StructuredData } from '@/components/structured-data';
import { guides } from '@/lib/job-search-guides';
import { SITE_NAME, SITE_ORIGIN } from '@/lib/site';

type GuidePageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map(({ slug }) => ({ slug }));
}

async function getGuide(params: GuidePageProps['params']) {
  const { slug } = await params;
  const guide = guides.find((item) => item.slug === slug);
  if (!guide) notFound();
  return guide;
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const guide = await getGuide(params);
  const title = `${guide.title} | ${SITE_NAME}`;
  const url = `/guides/${guide.slug}`;

  return {
    title,
    description: guide.summary,
    alternates: { canonical: url },
    openGraph: { type: 'article', siteName: SITE_NAME, url, title, description: guide.summary },
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const guide = await getGuide(params);
  const breadcrumbs = [
    { name: SITE_NAME, path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: guide.title, path: `/guides/${guide.slug}` },
  ];

  return (
    <div className="mx-auto max-w-3xl px-5 py-10 sm:px-8 sm:py-16">
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map(({ name, path }, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name,
          item: `${SITE_ORIGIN}${path}`,
        })),
      }} />
      <nav aria-label="Breadcrumb" className="text-sm text-slate-600">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-2">
          {breadcrumbs.slice(0, -1).map(({ name, path }) => (
            <li key={path} className="flex items-center gap-2">
              <Link href={path} className="hover:text-primary hover:underline">{name}</Link>
              <span aria-hidden="true">/</span>
            </li>
          ))}
          <li aria-current="page">{guide.title}</li>
        </ol>
      </nav>

      <article className="mt-8">
        <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{guide.title}</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">{guide.summary}</p>

        {guide.sections.map((section) => (
          <section key={section.title} className="mt-9">
            <h2 className="text-2xl font-semibold tracking-tight">{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-4 leading-7 text-slate-700">{paragraph}</p>
            ))}
            {section.examples && (
              <dl className="mt-5 space-y-4 rounded-xl border border-slate-200 bg-surface-muted p-5">
                {section.examples.map(({ label, text }) => (
                  <div key={label}>
                    <dt className="text-sm font-semibold text-primary-deep">{label}</dt>
                    <dd className="mt-1 leading-7 text-slate-700">{text}</dd>
                  </div>
                ))}
              </dl>
            )}
          </section>
        ))}

        <aside aria-labelledby="workspace-tip" className="mt-10 rounded-xl bg-primary-deep p-6 text-white">
          <h2 id="workspace-tip" className="text-xl font-semibold">Use this workflow in AnchorProposal</h2>
          <p className="mt-3 leading-7 text-teal-50">{guide.workspaceTip}</p>
          <Link href="/#how-it-works" className="mt-4 inline-block font-semibold underline underline-offset-4">
            See how AnchorProposal works
          </Link>
        </aside>
      </article>

      <nav aria-label="Related guides" className="mt-10 border-t border-slate-200 pt-6">
        <h2 className="text-xl font-semibold">Related guides</h2>
        <ul className="mt-3 space-y-2">
          {guides.filter((item) => item.slug !== guide.slug).map((item) => (
            <li key={item.slug}>
              <Link href={`/guides/${item.slug}`} className="text-primary-deep underline underline-offset-4">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
