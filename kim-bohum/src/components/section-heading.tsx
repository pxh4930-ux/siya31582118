export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 text-[22px] leading-snug font-semibold text-brand-navy">
      {children}
    </h2>
  );
}
