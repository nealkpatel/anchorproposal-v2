import type { Metadata, Viewport } from 'next';
import { AuthProvider } from '@/lib/auth-context';
import { TimeZoneProvider } from '@/components/time-zone-settings';
import { Toaster } from 'sonner';
import { SITE_ICON_PATH, SITE_NAME, SITE_ORIGIN } from '@/lib/site';
import './fonts/fonts.css';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: `${SITE_NAME} | AI Resume Platform`,
  description: 'AI-assisted resume tailoring and job application management',
  manifest: '/manifest.webmanifest',
  applicationName: SITE_NAME,
  icons: {
    icon: { url: SITE_ICON_PATH, type: 'image/png', sizes: '192x192' },
    apple: SITE_ICON_PATH,
  },
};

export const viewport: Viewport = { themeColor: '#095d63' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <AuthProvider>
          <TimeZoneProvider>{children}</TimeZoneProvider>
          <Toaster richColors position="top-right" closeButton />
        </AuthProvider>
      </body>
    </html>
  );
}
