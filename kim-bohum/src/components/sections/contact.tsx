import { ChevronRight, Mail, MessageCircle, MessageSquare, Phone } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { mailHref, smsHref, telHref } from "@/lib/links";
import { cn } from "@/lib/utils";

export function Contact() {
  const { contact, labels } = siteConfig;

  const methods = [
    { label: labels.kakaoShort, value: undefined, href: contact.kakaoChannelUrl, icon: MessageCircle, external: true, iconClass: "bg-kakao text-kakao-foreground" },
    { label: labels.phone, value: contact.phone, href: telHref(contact.phone), icon: Phone, external: false, iconClass: "bg-brand-navy/10 text-brand-navy" },
    { label: labels.sms, value: undefined, href: smsHref(contact.phone), icon: MessageSquare, external: false, iconClass: "bg-brand-navy/10 text-brand-navy" },
    { label: labels.email, value: contact.email, href: mailHref(contact.email), icon: Mail, external: false, iconClass: "bg-brand-navy/10 text-brand-navy" },
  ];

  return (
    <section id="contact" className="py-12">
      <SectionHeading>{siteConfig.sections.contact}</SectionHeading>
      <Card className="gap-0 py-0 text-base shadow-sm ring-border">
        <ul className="divide-y divide-border">
          {methods.map(({ label, value, href, icon: Icon, external, iconClass }) => (
            <li key={label}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex min-h-16 items-center gap-4 px-4 py-3 transition-colors hover:bg-muted"
              >
                <span className={cn("flex size-10 shrink-0 items-center justify-center rounded-full", iconClass)}>
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="flex min-w-0 flex-1 flex-col">
                  <span className="font-semibold text-brand-navy">{label}</span>
                  {value ? (
                    <span className="truncate text-[15px] text-muted-foreground">{value}</span>
                  ) : null}
                </span>
                <ChevronRight className="size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </Card>

      <dl className="mt-6 flex flex-col gap-4">
        <div>
          <dt className="text-sm font-semibold text-brand-navy">{labels.hoursLabel}</dt>
          <dd className="mt-1 text-foreground">{contact.hours}</dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-brand-navy">{labels.regionsLabel}</dt>
          <dd className="mt-1 text-foreground">{contact.regions}</dd>
        </div>
      </dl>
    </section>
  );
}
