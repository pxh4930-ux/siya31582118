import { ContactBar } from "@/components/contact-bar";
import { Reveal } from "@/components/reveal";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <main className="mx-auto w-full max-w-[480px] px-5 pb-[calc(6rem+env(safe-area-inset-bottom))]">
        <Hero />
        <Separator />
        <Reveal><Services /></Reveal>
        <Separator />
        <Reveal><Process /></Reveal>
        <Separator />
        <Reveal><About /></Reveal>
        <Separator />
        <Reveal><Contact /></Reveal>
        <Footer />
      </main>
      <ContactBar />
    </>
  );
}
