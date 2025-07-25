// src/app/layout.tsx
'use client';  // Add this at the very top

import FooterLinksGrid from '@/components/layout/FooterLinksGrid';
import { usePathname } from 'next/navigation';

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const showFooter = !(pathname?.startsWith('/workspace'));

  return (
    <html lang="en">
      <body>
        {children}
        {showFooter && <FooterLinksGrid />}
      </body>
    </html>
  );
}
