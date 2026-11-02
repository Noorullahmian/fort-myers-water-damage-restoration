'use client';

import './globals.css';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={pathname === '/' ? 'home' : undefined}>{children}</body>
    </html>
  );
}
