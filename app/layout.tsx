import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vanshika Raghav | Portfolio',
  description: 'Vanshika Raghav — Computer Science student, Python developer, and web developer based in Gurgaon, Haryana, India.',
  metadataBase: new URL('https://vanshikaraghav.dev'),
  openGraph: {
    title: 'Vanshika Raghav | Portfolio',
    description: 'Computer Science undergraduate passionate about software development, AI, Python, and web technologies.',
    type: 'website',
    url: 'https://vanshikaraghav.dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vanshika Raghav | Portfolio',
    description: 'Computer Science undergraduate passionate about software development, AI, Python, and web technologies.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
