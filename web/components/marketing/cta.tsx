import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/Container";

export function CTA() {
  return (
    <section className="border-y border-[#e4e4e7] bg-[#a855f7] py-16 text-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to automate your hosting workflow?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Start processing emails, calendars, and messages automatically. Keep
            control with human-in-the-loop replies and calm, prioritized workflows.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/pricing">View pricing</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10" asChild>
              <Link href="/features">Explore features</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
