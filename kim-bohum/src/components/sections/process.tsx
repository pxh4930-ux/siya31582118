import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/config/site";

export function Process() {
  const { process } = siteConfig;

  return (
    <section id="process" className="py-12">
      <SectionHeading>{siteConfig.sections.process}</SectionHeading>
      <ol className="flex flex-col gap-6">
        {process.steps.map((step, index) => (
          <li key={step.title} className="flex gap-4">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-apricot text-lg font-bold text-brand-navy">
              {index + 1}
            </span>
            <div className="pt-1.5">
              <h3 className="font-semibold text-brand-navy">{step.title}</h3>
              <p className="mt-1 leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-8 rounded-xl bg-brand-apricot/15 px-4 py-3.5 text-center font-medium text-foreground">
        {process.note}
      </p>
    </section>
  );
}
