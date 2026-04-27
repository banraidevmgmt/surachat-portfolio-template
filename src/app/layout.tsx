import type { Metadata } from 'next';
import { Public_Sans, Source_Serif_4 } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';

const bodyFont = Public_Sans({
  subsets: ['latin'],
  variable: '--font-body',
});

const displayFont = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Surachat Rueangtara | Portfolio',
  description: 'Full-stack developer turning business workflows into production-ready systems.',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>{children}</body>
    </html>
  );
}
