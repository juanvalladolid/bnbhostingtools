import type { Metadata } from "next";
import { Hero } from "@/components/marketing/hero";
import { FeatureCard } from "@/components/marketing/feature-card";
import { CTA } from "@/components/marketing/cta";
import { Container } from "@/components/Container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Mail,
  MessageSquare,
  Calendar,
  Zap,
  Shield,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Airbnb Host Automation Tools | AI Workflow Assistant",
  description:
    "Automate your Airbnb hosting workflow with AI-powered tools. Parse emails, sync calendars, and manage WhatsApp messages. Streamline guest communications and booking management.",
  keywords: [
    "Airbnb host automation tools",
    "Airbnb workflow AI",
    "Airbnb message assistant",
    "hosting automation",
    "guest communication",
  ],
};

const features = [
  {
    title: "Email parsing",
    description:
      "Automatically extract booking details, guest information, and important dates from your email inbox. No manual data entry required.",
    icon: Mail,
  },
  {
    title: "Calendar synchronization",
    description:
      "Import and sync calendar events from .ics files. Keep your availability up to date across all platforms automatically.",
    icon: Calendar,
  },
  {
    title: "WhatsApp integration",
    description:
      "Connect your Twilio account to receive and process WhatsApp messages. Respond to guest inquiries without switching apps.",
    icon: MessageSquare,
  },
  {
    title: "AI-assisted automation",
    description:
      "Leverage AI to understand context, extract relevant information, and automate routine tasks. Focus on what matters most.",
    icon: Zap,
  },
  {
    title: "No API dependencies",
    description:
      "Works independently without requiring Airbnb API access. Process information from any source you already use.",
    icon: Shield,
  },
  {
    title: "Privacy-first",
    description:
      "Your data stays secure. We process information locally when possible and never share your hosting details with third parties.",
    icon: BarChart3,
  },
];

const useCases = [
  {
    title: "Automated booking management",
    description:
      "Never miss a booking confirmation. Our AI-powered email parsing automatically extracts booking details, guest information, and check-in dates from your inbox, keeping everything organized in one place.",
  },
  {
    title: "Multi-platform calendar sync",
    description:
      "Import .ics calendar files from Airbnb, Booking.com, or any platform. Keep your availability synchronized across all channels without manual updates or API integrations.",
  },
  {
    title: "Unified message handling",
    description:
      "Connect your WhatsApp via Twilio to receive and process guest messages alongside your email communications. Respond faster with all conversations in one dashboard.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      
      <section className="py-12">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-6 rounded-lg border border-[#e4e4e7] bg-[#f4f4f5]/50 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#71717a]">
            <span>Trusted by 2,000+ hosts</span>
            <span>•</span>
            <span>4.9/5 rating</span>
            <span>•</span>
            <span>99.9% uptime</span>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#0a0a0a] sm:text-4xl">
              Everything you need to streamline hosting
            </h2>
            <p className="mt-4 text-lg text-[#71717a]">
              Built for hosts who want to automate repetitive tasks without
              compromising on control or security.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[#e4e4e7] bg-[#f4f4f5]/30 py-20 md:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#0a0a0a] sm:text-4xl">
              How hosts use our automation tools
            </h2>
            <p className="mt-4 text-lg text-[#71717a]">
              Real workflows that save time and reduce manual work.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {useCases.map((useCase) => (
              <Card key={useCase.title}>
                <CardHeader>
                  <CardTitle className="text-[#0a0a0a]">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-[#71717a]">
                    {useCase.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#0a0a0a] sm:text-4xl">
              Trusted by hosts who value their time
            </h2>
            <p className="mt-4 text-lg text-[#71717a]">
              Hosts use our Airbnb workflow AI to automate routine tasks and
              focus on what matters—providing excellent guest experiences.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="pt-6">
                <p className="text-[#71717a]">
                  &quot;The email parsing feature alone saves me hours each week.
                  I no longer have to manually extract booking details from
                  confirmation emails.&quot;
                </p>
                <footer className="mt-4 text-sm font-medium text-[#0a0a0a]">
                  — Host managing 3 properties
                </footer>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-[#71717a]">
                  &quot;Being able to handle WhatsApp messages alongside email
                  makes communication so much easier. Everything is in one place
                  now.&quot;
                </p>
                <footer className="mt-4 text-sm font-medium text-[#0a0a0a]">
                  — Host using multiple booking platforms
                </footer>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
