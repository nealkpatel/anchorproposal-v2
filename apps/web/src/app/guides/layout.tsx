import Link from 'next/link';
import { BrandMark } from '@/components/brand-mark';

export default function GuidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <a
        href="#guide-content"
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
      <main id="guide-content">{children}</main>
    </div>
  );
}
