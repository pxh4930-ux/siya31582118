import { CircleCheck } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/config/site";

export function About() {
  const { about } = siteConfig;

  return (
    <section id="about" className="py-12">
      <SectionHeading>{siteConfig.sections.about}</SectionHeading>
      <p className="leading-[1.7] text-foreground">{about.greeting}</p>
      <ul className="mt-6 flex flex-col gap-3">
        {about.credentials.map((credential) => (
          <li key={credential} className="flex items-center gap-3">
            <CircleCheck className="size-5 shrink-0 text-brand-navy" aria-hidden="true" />
            <span>{credential}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
