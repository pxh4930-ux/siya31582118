import { ClipboardCheck, Baby, HeartPulse, Users } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

const ICONS = { ClipboardCheck, Baby, HeartPulse, Users } as const;

export function Services() {
  return (
    <section id="services" className="py-12">
      <SectionHeading>{siteConfig.sections.services}</SectionHeading>
      <ul className="flex flex-col gap-3">
        {siteConfig.services.map((service) => {
          const Icon = ICONS[service.icon];
          return (
            <li key={service.title}>
              <Card className="flex-row items-start gap-4 p-5 text-base shadow-sm ring-border">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-navy/10 text-brand-navy">
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-navy">{service.title}</h3>
                  <p className="mt-1 leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </Card>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
