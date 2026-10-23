import { siteConfig } from "@/config/site";

export function Footer() {
  const { legal } = siteConfig;

  return (
    <footer className="border-t border-border py-10 text-center text-xs leading-relaxed text-muted-foreground">
      <p>{legal.affiliation}</p>
      <p>{legal.registrationNo}</p>
      <p>{legal.adReviewNo}</p>
      <p className="mt-2">{legal.notice}</p>
      <p className="mt-2">{legal.copyright}</p>
    </footer>
  );
}
