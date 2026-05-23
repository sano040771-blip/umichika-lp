import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { News } from "@/components/sections/news";
import { Recruit } from "@/components/sections/recruit";
import { Access } from "@/components/sections/access";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <About />
        <News />
        <Recruit />
        <Access />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
