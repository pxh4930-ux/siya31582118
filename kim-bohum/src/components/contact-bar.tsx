"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MessageCircle, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { telHref } from "@/lib/links";
import { cn } from "@/lib/utils";

export function ContactBar() {
  const [visible, setVisible] = useState(false);
  const { contact, labels } = siteConfig;

  useEffect(() => {
    const target = document.getElementById("hero-cta");
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0);
    });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="contact-bar"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed inset-x-0 bottom-0 z-50"
        >
          <div className="mx-auto flex w-full max-w-[480px] gap-2 border-t border-border bg-background/95 px-5 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur">
            <a
              href={contact.kakaoChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants(),
                "h-13 flex-1 gap-2 rounded-xl bg-kakao text-base font-semibold text-kakao-foreground hover:bg-kakao/85 [&_svg:not([class*='size-'])]:size-5"
              )}
            >
              <MessageCircle aria-hidden="true" />
              {labels.kakaoShort}
            </a>
            <a
              href={telHref(contact.phone)}
              aria-label={labels.phone}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "size-13 rounded-xl border-brand-navy/25 text-brand-navy [&_svg:not([class*='size-'])]:size-5"
              )}
            >
              <Phone aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
