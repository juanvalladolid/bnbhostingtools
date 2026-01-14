import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/Container";

const stats = [
  { label: "Hours saved monthly", value: "45+" },
  { label: "Hosts using BNB", value: "2,000+" },
  { label: "Avg. ROI (weeks)", value: "3" },
];

export function Hero() {
  return (
    <section className="border-b border-[#e4e4e7] bg-gradient-to-b from-[#f4f4f5]/50 to-white py-20 md:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#e4e4e7] bg-white px-4 py-2 text-sm font-medium">
              <span className="h-2 w-2 rounded-full bg-[#a855f7]" />
              <span className="text-[#0a0a0a]">Airbnb workflow AI • 2026 ready</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-[#0a0a0a] sm:text-5xl lg:text-6xl">
              Automate your Airbnb hosting workflow
            </h1>
            <p className="text-lg text-[#71717a] sm:text-xl">
              BNB Hosting Tools parses WhatsApp, email, and calendars to surface
              what matters. Prioritize decisions, answer guests with AI-assisted
              replies, and keep every task aligned without the Airbnb API.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/pricing">Get started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/features">View features</Link>
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 rounded-lg border border-[#e4e4e7] bg-white p-4 shadow-sm">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold text-[#0a0a0a]">{stat.value}</p>
                  <p className="text-xs text-[#71717a]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-[#a855f7]/10 blur-3xl" />
            <div className="rounded-2xl border border-[#e4e4e7] bg-white p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-between text-xs text-[#71717a]">
                <span>Platform dashboard preview</span>
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-[#a855f7]" />
                  <span className="text-[#a855f7]">Live sync</span>
                </span>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg bg-[#a855f7] px-4 py-3 text-white">
                  <p className="text-sm opacity-90">Inbox prioritization</p>
                  <p className="mt-1 text-lg font-semibold">
                    3 urgent guest messages
                  </p>
                  <p className="mt-1 text-xs opacity-70">
                    Lockbox issue • Early check-in • Payment follow-up
                  </p>
                </div>
                <div className="rounded-lg border border-[#e4e4e7] bg-[#f4f4f5]/50 p-4">
                  <p className="text-sm font-semibold text-[#0a0a0a]">Today&apos;s automations</p>
                  <ul className="mt-2 space-y-2 text-sm text-[#71717a]">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#a855f7]" />
                      Calendar sync updated checkout at 11:00 AM
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#a855f7]" />
                      WhatsApp parsed &quot;we land at 9pm&quot; for unit 3B
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#a855f7]" />
                      AI drafted reply: &quot;We can hold luggage from 1pm&quot;
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
