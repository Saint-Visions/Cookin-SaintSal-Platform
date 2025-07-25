import FooterLinksGrid from '@/components/layout/FooterLinksGrid';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const showFooter = !pathname.startsWith('/workspace');

  return (
    <html lang="en">
      <body>
        {children}
        {showFooter && <FooterLinksGrid />}
      </body>
    </html>
  );
}
