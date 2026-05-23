import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";

const newsItems = [
  {
    date: "2026.05.10",
    category: "お知らせ",
    title: "正社員スタッフを募集しています",
    body: "うみちか食堂では、一緒に働く正社員の仲間を募集しています。未経験の方も歓迎。まずはお気軽にお問い合わせください。",
  },
  {
    date: "2026.04.22",
    category: "メニュー",
    title: "春の限定メニューが登場しました",
    body: "沖縄県産の旬の食材を使った季節限定メニューをご用意しました。期間限定の味を、ぜひこの機会にお楽しみください。",
  },
  {
    date: "2026.03.15",
    category: "メディア",
    title: "テレビ番組で当店をご紹介いただきました",
    body: "人気バラエティ番組にて、うみちか食堂の看板メニューをご紹介いただきました。放送をご覧になったお客さまのご来店をお待ちしております。",
  },
];

const categoryStyles: Record<string, string> = {
  お知らせ: "bg-primary/10 text-primary",
  メニュー: "bg-accent/10 text-accent",
  メディア: "bg-secondary text-secondary-foreground",
};

export function News() {
  return (
    <section id="news" className="scroll-mt-20 bg-muted/40 py-20 sm:py-28">
      <div className="section-x">
        <SectionHeading
          eyebrow="NEWS"
          title="お知らせ"
          description="うみちか食堂からの最新情報をお届けします。"
        />

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          {newsItems.map((item) => (
            <article
              key={item.title}
              className="flex flex-col gap-2 p-6 transition-colors hover:bg-muted/50 sm:flex-row sm:items-start sm:gap-6 sm:p-7"
            >
              <div className="flex items-center gap-3 sm:w-44 sm:flex-col sm:items-start sm:gap-2">
                <time className="text-sm font-medium text-muted-foreground">
                  {item.date}
                </time>
                <Badge
                  variant="secondary"
                  className={`rounded-full border-0 ${
                    categoryStyles[item.category] ?? ""
                  }`}
                >
                  {item.category}
                </Badge>
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-base font-bold text-foreground sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
