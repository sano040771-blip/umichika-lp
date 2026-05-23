import { navLinks, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="section-x py-14">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="font-heading text-2xl font-bold">{site.name}</p>
            <p className="mt-1 text-xs tracking-[0.25em] text-background/60">
              {site.nameEn}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-background/70">
              海の近くの、いつもの場所。
              <br />
              創業{site.yearsInBusiness}年、年中無休で営業しています。
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-background/70 transition-colors hover:text-background"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="space-y-2 text-sm text-background/70">
              <p>〒{site.postalCode}</p>
              <p>{site.address}</p>
              <p>
                TEL：
                <a href={site.telHref} className="hover:text-background">
                  {site.tel}
                </a>
              </p>
              <p className="pt-2 text-xs">定休日：{site.closed}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-background/15 pt-6 text-center text-xs text-background/50">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
