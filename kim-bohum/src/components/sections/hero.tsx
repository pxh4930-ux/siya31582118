import Image from "next/image";
import { MessageCircle, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { telHref } from "@/lib/links";
import { cn } from "@/lib/utils";

export function Hero() {
  const { profile, contact, labels } = siteConfig;

  return (
    <section id="hero" className="pt-12 pb-12 text-center">
      <div className="mx-auto flex size-28 items-center justify-center overflow-hidden rounded-full bg-brand-navy text-4xl font-bold text-primary-foreground shadow-sm">
        {profile.photo ? (
          <Image
            src={profile.photo}
            alt={profile.name}
            width={112}
            height={112}
            className="size-full object-cover"
            priority
          />
        ) : (
          <span aria-hidden="true">{profile.initial}</span>
        )}
      </div>

      <h1 className="mt-5 text-[30px] leading-tight font-bold text-brand-navy">
        {profile.name}
      </h1>
      <p className="mt-1.5 text-base text-muted-foreground">
        {`${profile.title} · ${profile.company}`}
      </p>
      <p className="mt-4 text-[17px] leading-relaxed text-foreground">
        {profile.tagline}
      </p>

      <ul className="mt-5 flex flex-wrap justify-center gap-2">
        {profile.badges.map((badge) => (
          <li key={badge}>
            <Badge className="h-7 bg-brand-apricot/20 px-3 text-sm text-foreground">
              {badge}
            </Badge>
          </li>
        ))}
      </ul>

      <div id="hero-cta" className="mt-8 flex flex-col gap-3">
        <a
          href={contact.kakaoChannelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants(),
            "h-13 w-full gap-2 rounded-xl bg-kakao text-base font-semibold text-kakao-foreground hover:bg-kakao/85 [&_svg:not([class*='size-'])]:size-5"
          )}
        >
          <MessageCircle aria-hidden="true" />
          {labels.kakao}
        </a>
        <a
          href={telHref(contact.phone)}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "h-13 w-full gap-2 rounded-xl border-brand-navy/25 text-base font-semibold text-brand-navy [&_svg:not([class*='size-'])]:size-5"
          )}
        >
          <Phone aria-hidden="true" />
          {labels.phone}
        </a>
      </div>
    </section>
  );
}
