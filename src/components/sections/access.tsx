import { MapPin, Phone, Clock, CalendarCheck } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

export function Access() {
  return (
    <section id="access" className="scroll-mt-20 bg-muted/40 py-20 sm:py-28">
      <div className="section-x">
        <SectionHeading
          eyebrow="ACCESS"
          title="店舗情報・アクセス"
          description="海のそば、宜野湾市真志喜。お気軽にお立ち寄りください。"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* 情報 */}
          <div className="space-y-6">
            <InfoRow icon={MapPin} label="所在地">
              <p>〒{site.postalCode}</p>
              <p>{site.address}</p>
              <a
                href={site.mapLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-sm font-medium text-accent underline-offset-4 hover:underline"
              >
                Googleマップで見る →
              </a>
            </InfoRow>

            <InfoRow icon={Phone} label="電話番号">
              <a
                href={site.telHref}
                className="text-lg font-bold text-foreground hover:text-primary"
              >
                {site.tel}
              </a>
            </InfoRow>

            <InfoRow icon={Clock} label="営業時間">
              <ul className="space-y-1">
                {site.hours.map((h) => (
                  <li key={h.days} className="flex gap-3">
                    <span className="w-24 shrink-0 font-medium text-foreground">
                      {h.days}
                    </span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </InfoRow>

            <InfoRow icon={CalendarCheck} label="定休日">
              <p>{site.closed}</p>
            </InfoRow>
          </div>

          {/* 地図 */}
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <iframe
              src={site.mapEmbedUrl}
              title={`${site.name}の地図`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full sm:h-full sm:min-h-[420px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="size-5" />
      </div>
      <div className="pt-1">
        <p className="text-sm font-bold text-foreground">{label}</p>
        <div className="mt-1 text-sm leading-relaxed text-muted-foreground">
          {children}
        </div>
      </div>
    </div>
  );
}
