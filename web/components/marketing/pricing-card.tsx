import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

type PricingCardProps = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: { label: string; href: string };
  highlighted?: boolean;
};

export function PricingCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  highlighted = false,
}: PricingCardProps) {
  return (
    <Card className={highlighted ? "border-[#a855f7] border-2 shadow-lg" : ""}>
      <CardHeader>
        {highlighted && (
          <div className="mb-2 inline-flex rounded-full bg-[#a855f7]/10 px-3 py-1 text-xs font-semibold text-[#a855f7]">
            Most Popular
          </div>
        )}
        <CardTitle className="text-2xl">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-4xl font-bold text-[#0a0a0a]">{price}</span>
          <span className="text-sm text-[#71717a]">{period}</span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#a855f7]" />
              <span className="text-sm text-[#71717a]">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          variant={highlighted ? "default" : "outline"}
          asChild
        >
          <Link href={cta.href}>{cta.label}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
