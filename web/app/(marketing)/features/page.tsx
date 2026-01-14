import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Features | Airbnb Host Automation Tools",
  description:
    "See how BNB Hosting Tools automates Airbnb workflows: WhatsApp and email parsing, AI message prioritization, human-in-the-loop reply suggestions, and calendar-driven task automation.",
};

const featureGroups = [
  {
    title: "WhatsApp & Email Parsing",
    tagline: "Capture every detail automatically",
    items: [
      {
        title: "Unified inbox parsing",
        what: "Extract booking details, guest info, and action items automatically from WhatsApp (via Twilio) and email threads.",
        why: "Eliminates manual copy/paste and keeps all context tied to the correct stay.",
        example:
          "A guest confirms arrival time on WhatsApp while a booking change arrives by email; both sync into the same reservation automatically.",
      },
      {
        title: "Cleaner summaries",
        what: "Summarize parsed data for teammates with context-rich briefs.",
        why: "Keeps cleaners and co-hosts aligned without forwarding long threads.",
        example:
          "A daily digest highlights arrival windows, guest requests, and prep tasks pulled from overnight messages.",
      },
    ],
  },
  {
    title: "AI Message Prioritization",
    tagline: "Decision support without noise",
    items: [
      {
        title: "Urgency scoring",
        what: "Highlights messages that need action first, such as check-in issues or payment questions.",
        why: "Reduces response delays and keeps attention on time-sensitive topics.",
        example:
          "An after-hours WhatsApp note about a lockbox issue surfaces above routine confirmation emails so you resolve it immediately.",
      },
      {
        title: "Smart routing",
        what: "Route messages to the right teammate based on skill and availability.",
        why: "Ensures specialists see relevant threads without digging through everything.",
        example:
          "Maintenance-related emails route to your ops lead while guest experience notes stay with you.",
      },
    ],
  },
  {
    title: "AI Reply Suggestions",
    tagline: "Human-in-the-loop assistance",
    items: [
      {
        title: "Draft replies",
        what: "Generate clear responses you can approve or edit before sending.",
        why: "Saves time while keeping you in control of tone and policy.",
        example:
          "For a late checkout request, the system drafts a polite reply with available options; you tweak and send in seconds.",
      },
      {
        title: "Policy-aware templates",
        what: "Blend AI suggestions with your own rules for refunds, check-ins, and add-ons.",
        why: "Ensures consistency while respecting your brand voice.",
        example:
          "When a guest asks about luggage storage, the draft highlights approved time windows plus access instructions.",
      },
    ],
  },
  {
    title: "Calendar & Task Automation",
    tagline: "Cleaner handoffs and predictable ops",
    items: [
      {
        title: "Calendar-driven playbooks",
        what: "Use .ics data to trigger handoffs, reminders, and prep tasks.",
        why: "Prevents gaps between bookings and aligns cleaners, co-hosts, and vendors.",
        example:
          "When a checkout updates to 11am, cleaning reminders shift automatically and a ready-notice queues for the next guest.",
      },
      {
        title: "Timeline visualization",
        what: "View arrivals, departures, and tasks on a single horizontal schedule.",
        why: "Gives an at-a-glance view of your day without spreadsheets.",
        example:
          "See all turnovers for Saturday, including which units still need approval on their reply drafts.",
      },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#a855f7]">
            Product tour
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#0a0a0a] sm:text-5xl">
            Powerful features for modern property managers
          </h1>
          <p className="mt-4 text-lg text-[#71717a]">
            Every capability is designed with your success in mind—from parsing
            daily noise to scaling thoughtful operations across multiple listings.
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {featureGroups.map((group) => (
            <Card key={group.title} className="border-2 border-[#e4e4e7]">
              <CardHeader className="border-b border-[#e4e4e7] pb-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#71717a]">
                  {group.tagline}
                </p>
                <CardTitle className="mt-2 text-2xl text-[#0a0a0a]">{group.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {group.items.map((item) => (
                    <Card key={item.title} className="border border-[#e4e4e7]">
                      <CardHeader>
                        <CardTitle className="text-lg text-[#0a0a0a]">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3 text-sm">
                        <div>
                          <p className="font-semibold text-[#0a0a0a]">What it does</p>
                          <p className="text-[#71717a]">{item.what}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-[#0a0a0a]">Why it matters</p>
                          <p className="text-[#71717a]">{item.why}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-[#0a0a0a]">Example</p>
                          <p className="text-[#71717a]">{item.example}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
