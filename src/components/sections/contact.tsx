import { Phone, FormInput } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-background py-20 sm:py-28">
      <div className="section-x">
        <SectionHeading
          eyebrow="CONTACT"
          title="お問い合わせ・ご応募"
          description="採用へのご応募、見学のご希望、その他ご質問はこちらから。お電話でも承っています。"
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-8 lg:grid-cols-[1.5fr_1fr]">
          {/* Google フォーム埋め込みエリア */}
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            {site.contactFormUrl ? (
              <iframe
                src={site.contactFormUrl}
                title="お問い合わせフォーム"
                loading="lazy"
                className="h-[640px] w-full"
              >
                読み込んでいます…
              </iframe>
            ) : (
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center gap-4 p-8 text-center">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <FormInput className="size-7" />
                </div>
                <p className="font-heading text-lg font-bold text-foreground">
                  Googleフォーム埋め込みエリア
                </p>
                <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                  ここにGoogleフォームが表示されます。
                  <br />
                  <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
                    src/lib/site.ts
                  </code>{" "}
                  の{" "}
                  <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
                    contactFormUrl
                  </code>{" "}
                  に、Googleフォームの「埋め込みHTML」のURL
                  （末尾が <code className="text-xs">?embedded=true</code>）
                  を設定してください。
                </p>
              </div>
            )}
          </div>

          {/* 電話 */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-card p-7 text-center shadow-sm">
              <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Phone className="size-7" />
              </div>
              <p className="mt-4 text-sm font-medium text-muted-foreground">
                お電話でのお問い合わせ
              </p>
              <a
                href={site.telHref}
                className="mt-1 block font-heading text-3xl font-bold text-primary"
              >
                {site.tel}
              </a>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                受付時間：営業時間内
                <br />
                {site.hours.map((h) => `${h.days} ${h.time}`).join("／")}
              </p>
            </div>

            <div className="rounded-2xl bg-muted/50 p-6 text-sm leading-relaxed text-muted-foreground">
              <p className="font-bold text-foreground">採用へのご応募について</p>
              <p className="mt-2">
                「まずは話を聞いてみたい」「お店を見学したい」といった
                ご相談だけでも大歓迎です。お気軽にご連絡ください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
