import Link from "next/link";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "/docs", external: true },
  { label: "Blog", href: "/blog", external: true },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e4e4e7] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-semibold text-[#0a0a0a]">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#a855f7] text-white font-bold">
            B
          </div>
          <span className="text-[#0a0a0a]">BNB Hosting Tools</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[#0a0a0a]/80 transition-colors hover:text-[#0a0a0a]"
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/signin"
            className="hidden text-sm font-medium text-[#71717a] transition-colors hover:text-[#0a0a0a] md:block"
          >
            Sign in
          </Link>
          <Button asChild>
            <Link href="/pricing">Get started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
