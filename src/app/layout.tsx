import { IBM_Plex_Mono, Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display', display: 'swap', weight: ['400', '500', '600', '700'] });
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap', weight: ['400', '500', '600'] });

export const metadata: Metadata = {
  title: 'Color Robotics - AI That Sees Why Your Robot Stopped',
  description: 'Bring your robots back online in minutes, not days. AI-powered visual diagnostics for robotic arms. No special hardware required.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${plexMono.variable}`}>
      <body className="font-sans bg-surface-0 text-text-0 antialiased">{children}</body>
    </html>
  );
}
