import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'PARALLAX | DRAEVEN',

  description:
    'Autonomous intelligence for degraded, contested, and disconnected environments.',

  keywords: [
    'Draeven',
    'Parallax',
    'Autonomous Intelligence',
    'Defense Technology',
    'Decision Intelligence',
    'Reality Integrity Assessment',
    'Belief State Intelligence',
    'Belief Engine',
    'Evidence Reservoir',
    'Planetary Core',
    'Temporal Prediction',
    'Sensor Fusion',
    'Edge Intelligence',
    'Operational Intelligence',
    'Decision Superiority',
    'Contested Environments',
    'Autonomous Systems',
    'Defense Innovation',
    'Machine Reasoning',
    'Probabilistic Reasoning',
    'Cognitive Systems',
    'Trust Evaluation',
    'Autonomous Cognition',
  ],

  applicationName: 'DRAEVEN',

  openGraph: {
    title: 'PARALLAX | DRAEVEN',
    description:
      'Autonomous intelligence for the edge of certainty.',
    siteName: 'DRAEVEN',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'PARALLAX | DRAEVEN',
    description:
      'Autonomous intelligence for the edge of certainty.',
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}