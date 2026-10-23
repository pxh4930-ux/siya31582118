import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <main className="mx-auto max-w-[480px] px-5 py-12">
      <h1 className="text-3xl font-bold text-brand-navy">{siteConfig.profile.name}</h1>
    </main>
  );
}
