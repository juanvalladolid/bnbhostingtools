import Link from "next/link";

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Updates", href: "/updates", external: true },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about", external: true },
      { label: "Blog", href: "/blog", external: true },
      { label: "Contact", href: "/contact", external: true },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy", external: true },
      { label: "Terms", href: "/terms", external: true },
      { label: "Security", href: "/security", external: true },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Status", href: "/status", external: true },
      { label: "Support", href: "/support", external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[#e4e4e7] bg-[#f4f4f5]/40">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 md:py-16">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-semibold text-[#0a0a0a]">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#a855f7] text-white text-sm font-bold">
                B
              </div>
              <span>BNB Hosting Tools</span>
            </Link>
            <p className="text-sm text-[#71717a]">
              Automate guest communication and operations with a calm workspace
              that keeps every Airbnb detail organized.
            </p>
            <p className="text-xs text-[#71717a]">
              Made for modern property managers.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="mb-4 text-sm font-semibold text-[#0a0a0a]">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-[#71717a] transition-colors hover:text-[#0a0a0a]"
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-[#e4e4e7] pt-8">
          <p className="text-xs text-[#71717a]">
            © {new Date().getFullYear()} BNB Hosting Tools. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
