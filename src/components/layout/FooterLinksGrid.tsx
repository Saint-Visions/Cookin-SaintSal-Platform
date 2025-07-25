import Link from 'next/link';

const FooterColumn = ({ title, links }: { title: string; links: { label: string; href: string }[] }) => (
  <div className="space-y-2 text-sm text-white">
    <h4 className="text-yellow-300 font-semibold mb-2">{title}</h4>
    {links.map((link) => (
      <Link key={link.label} href={link.href} className="hover:underline block">
        {link.label}
      </Link>
    ))}
  </div>
);

const FooterLinksGrid = () => {
  return (
    <footer className="bg-black text-gray-300 border-t border-yellow-800 py-12 px-6 lg:px-24">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-8 max-w-screen-xl mx-auto">
        <FooterColumn
          title="Platform"
          links={[
            { label: 'Console', href: '/dashboard' },
            { label: 'CRM', href: '/crm' },
            { label: 'Workspace', href: '/workspace' },
            { label: 'Upgrade', href: '/pricing' },
            { label: 'HACP™ Patent', href: '/hacp' },
          ]}
        />
        <FooterColumn
          title="AI + Tech"
          links={[
            { label: 'Supersal™ Architecture', href: '/supersal/architecture' },
            { label: 'Dual AI Mode', href: '/dual-mode' },
            { label: 'Companion Mode', href: '/companion' },
            { label: 'Azure Integration', href: '/integration' },
            { label: 'HACP™ Explained', href: '/hacp' },
          ]}
        />
        <FooterColumn
          title="Support"
          links={[
            { label: 'Help Desk', href: '/help' },
            { label: 'Quick Start', href: '/help#start' },
            { label: 'Schedule a Call', href: '/help#call' },
            { label: 'Live Chat', href: '/help#chat' },
            { label: 'Video Guides', href: '/help#videos' },
          ]}
        />
        <FooterColumn
          title="Legal & Trust"
          links={[
            { label: 'Privacy Policy', href: '/privacy' },
            { label: 'Terms of Service', href: '/terms' },
            { label: 'Data Processing', href: '/data-processing' },
            { label: 'Security', href: '/security' },
            { label: 'Disclosures', href: '/disclosures' },
          ]}
        />
        <FooterColumn
          title="Company"
          links={[
            { label: 'About Us', href: '/about' },
            { label: 'Careers', href: '/careers' },
            { label: 'Charter', href: '/charter' },
            { label: 'Brand', href: '/brand' },
            { label: 'Vault', href: '/vault' },
          ]}
        />
        <FooterColumn
          title="Partners"
          links={[
            { label: 'White Label', href: '/partner' },
            { label: 'CRM Bundles', href: '/crm-agency' },
            { label: 'Affiliate Program', href: '/affiliates' },
            { label: 'Investor Deck', href: '/invest' },
            { label: 'Book a Demo', href: '/demo' },
          ]}
        />
        <FooterColumn
          title="Resources"
          links={[
            { label: 'Docs', href: '/docs' },
            { label: 'Product Updates', href: '/changelog' },
            { label: 'Training', href: '/supersal/train' },
            { label: 'API Usage', href: '/api' },
          ]}
        />
      </div>
      <div className="text-xs text-center mt-12 text-gray-500">
        &copy; 2025 Saint Vision Group LLC. Powered by HACP™ · Patent 10,290,222 · All rights reserved.
      </div>
    </footer>
  );
};

export default FooterLinksGrid;
