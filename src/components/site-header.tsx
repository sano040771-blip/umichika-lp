"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navLinks, site } from "@/lib/site";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-md shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="section-x flex h-16 items-center justify-between gap-4 md:h-20">
        <a
          href="#top"
          className="flex flex-col leading-none"
          aria-label={`${site.name} トップへ`}
        >
          <span className="font-heading text-xl font-bold tracking-wide text-primary md:text-2xl">
            {site.name}
          </span>
          <span className="text-[10px] tracking-[0.25em] text-muted-foreground md:text-xs">
            {site.nameEn}
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.telHref}
            className="flex items-center gap-1.5 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            <Phone className="size-4" />
            {site.tel}
          </a>
          <a
            href="#contact"
            className={cn(buttonVariants({ size: "lg" }), "rounded-full px-5")}
          >
            応募・お問い合わせ
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-md text-foreground lg:hidden"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* モバイルメニュー */}
      <div
        className={cn(
          "overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-md transition-[max-height] duration-300 lg:hidden",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <nav className="section-x flex flex-col py-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/40 py-3 text-base font-medium text-foreground/90"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-4">
            <a
              href={site.telHref}
              className="flex items-center gap-2 text-base font-medium text-foreground/90"
            >
              <Phone className="size-4 text-primary" />
              {site.tel}
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full rounded-full",
              )}
            >
              応募・お問い合わせ
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
