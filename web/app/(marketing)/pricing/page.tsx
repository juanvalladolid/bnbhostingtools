import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PricingCard } from "@/components/marketing/pricing-card";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Pricing | BNB Hosting Tools",
  description:
    "Simple pricing for small Airbnb hosts. Try free, then pick a monthly plan. Cancel anytime with no lock-in.",
};

const tiers = [
  {
    name: "Starter",
    price: "$0",
    period: "per month",
    description: "Try every workflow with full access for 14 days.",
    badge: "Free trial",
    cta: { label: "Start free trial", href: "/signup" },
    features: [
      "WhatsApp & email parsing",
      "AI reply suggestions",
      "Calendar (.ics) ingestion",
      "Up to 2 active properties",
      "Email support",
    ],
  },
  {
    name: "Professional",
    price: "$49",
    period: "per month",
    description: "For hosts automating multiple listings end to end.",
    badge: "Most popular",
    cta: { label: "Choose Professional", href: "/signup" },
    features: [
      "Everything in Starter",
      "AI message prioritization",
      "Task automation from calendar changes",
      "Up to 10 active properties",
      "Shared inbox for teams",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Growth",
    price: "$99",
    period: "per month",
    description: "Scale operations with advanced controls and handoffs.",
    badge: "For teams",
    cta: { label: "Talk to sales", href: "/contact" },
    features: [
      "Everything in Professional",
      "Unlimited properties",
      "Role-based permissions",
      "Custom automations & webhooks",
      "Dedicated success manager",
      "Priority onboarding",
    ],
  },
];

const faqs = [
  {
    question: "Can I try BNB Hosting Tools for free?",
    answer:
      "Yes. New accounts include 14 days with every feature enabled. No credit card required. Upgrade only if it fits your workflow.",
  },
  {
    question: "How do I cancel or change my plan?",
    answer:
      "Plans are month-to-month. You can downgrade, upgrade, or cancel anytime directly from your billing settings—no emails required.",
  },
  {
    question: "Do you integrate with the Airbnb API?",
    answer:
      "We focus on parsing communications you already receive (WhatsApp, email, calendars). That keeps things dependable even if APIs change.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. Data is encrypted at rest and in transit. You control retention, and we never share customer information with third parties.",
  },
];

export default function PricingPage() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#a855f7]">
            Pricing
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#0a0a0a] sm:text-5xl">
            Simple, transparent pricing
          </h1>
          <p className="mt-4 text-lg text-[#71717a]">
            Choose the plan that works for you. Scale as you grow. No hidden fees.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-[#e4e4e7] bg-[#f4f4f5]/50 px-4 py-2 text-sm text-[#71717a]">
            <span className="h-2 w-2 rounded-full bg-[#a855f7]" />
            14-day free trial · No credit card required · Cancel anytime
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <Card className="border border-[#e4e4e7]">
            <CardContent className="pt-6">
              <h2 className="mb-6 text-2xl font-semibold text-[#0a0a0a]">
                Frequently asked questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-lg border border-[#e4e4e7] bg-[#f4f4f5]/30 p-4"
                  >
                    <summary className="cursor-pointer font-semibold text-[#0a0a0a]">
                      {faq.question}
                    </summary>
                    <p className="mt-2 text-sm text-[#71717a]">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mx-auto mt-12 max-w-3xl text-center text-sm text-[#71717a]">
          No setup fees. No long-term contracts. Switch or cancel anytime.
        </div>
      </Container>
    </section>
  );
}
