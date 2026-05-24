import {
  UtensilsCrossed,
  HeartHandshake,
  Users,
  Sparkles,
  TrendingUp,
  Smile,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const jobTasks = [
  {
    icon: UtensilsCrossed,
    title: "調理・キッチン",
    desc: "定番の沖縄料理から看板メニューまで。先輩が一から丁寧にお教えします。",
  },
  {
    icon: Smile,
    title: "ホール・接客",
    desc: "ご注文や配膳、お客さまとの何気ない会話。食堂の「顔」となるお仕事です。",
  },
  {
    icon: Users,
    title: "店舗運営サポート",
    desc: "仕込みや在庫管理、開店・閉店準備など。お店全体を支える役割も担います。",
  },
];

const rewards = [
  {
    icon: HeartHandshake,
    title: "「ありがとう」が近い",
    desc: "常連さんから観光のお客さままで。感謝の言葉を直接いただける距離の近さが魅力です。",
  },
  {
    icon: Sparkles,
    title: "幅広い経験が積める",
    desc: "地元にも観光客にも愛される食堂だからこそ、接客も調理もスキルが磨かれます。",
  },
  {
    icon: TrendingUp,
    title: "長く働ける環境",
    desc: "創業20年・年中無休の安定した経営。将来は店舗を任せられる人材も育てています。",
  },
];

const requirements = [
  { label: "雇用形態", value: "正社員・アルバイト" },
  { label: "職種", value: "ホールスタッフ／キッチンスタッフ（調理・接客）" },
  {
    label: "給与",
    value:
      "正社員：月給22万円〜／アルバイト：時給1,100円〜（経験・能力により優遇／昇給あり）",
  },
  {
    label: "勤務時間",
    value: "シフト制（実働8時間／休憩あり）月〜木 11:00〜21:30、金・土・日 11:00〜22:00 の間",
  },
  { label: "休日・休暇", value: "シフト制による週休／有給休暇あり" },
  {
    label: "待遇・福利厚生",
    value: "各種社会保険完備／まかない付き／交通費支給／昇給・賞与あり",
  },
  {
    label: "応募資格",
    value: "未経験者歓迎・経験者優遇／学歴不問／飲食店での勤務に興味のある方",
  },
  { label: "勤務地", value: `${site.address}（うみちか食堂）` },
];

const steps = [
  {
    no: "01",
    title: "お問い合わせ・応募",
    desc: "ページ下部の応募フォーム、またはお電話よりご連絡ください。",
  },
  {
    no: "02",
    title: "面談",
    desc: "店舗にて、お仕事内容や働き方についてお話しします。お店の雰囲気もぜひご覧ください。",
  },
  {
    no: "03",
    title: "採用・勤務開始",
    desc: "勤務開始日を相談のうえ決定。先輩スタッフが丁寧にサポートします。",
  },
];

export function Recruit() {
  return (
    <section id="recruit" className="scroll-mt-20 bg-background py-20 sm:py-28">
      <div className="section-x">
        <SectionHeading
          eyebrow="RECRUIT"
          title="うみちか食堂で働く"
          description="「人が好き」「料理が好き」――その気持ちがあれば大丈夫。経験よりも、お客さまを思う気持ちを大切にしています。"
        />

        {/* 仕事内容 */}
        <div className="mt-16">
          <h3 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
            仕事内容
          </h3>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {jobTasks.map((task) => (
              <div
                key={task.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <task.icon className="size-6" />
                </div>
                <h4 className="mt-4 font-heading text-lg font-bold text-foreground">
                  {task.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {task.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* やりがい */}
        <div className="mt-16">
          <h3 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
            この仕事のやりがい
          </h3>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {rewards.map((reward) => (
              <div
                key={reward.title}
                className="rounded-2xl bg-muted/50 p-6"
              >
                <reward.icon className="size-7 text-accent" />
                <h4 className="mt-4 font-heading text-lg font-bold text-foreground">
                  {reward.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {reward.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 募集要項 */}
        <div className="mt-16">
          <h3 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
            募集要項
          </h3>
          <dl className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            {requirements.map((req, i) => (
              <div
                key={req.label}
                className={`flex flex-col gap-1 p-5 sm:flex-row sm:gap-6 sm:p-6 ${
                  i !== 0 ? "border-t border-border" : ""
                }`}
              >
                <dt className="shrink-0 text-sm font-bold text-foreground sm:w-40">
                  {req.label}
                </dt>
                <dd className="text-sm leading-relaxed text-muted-foreground">
                  {req.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* 応募方法 */}
        <div className="mt-16">
          <h3 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
            応募の流れ
          </h3>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.no}
                className="relative rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <span className="font-heading text-3xl font-bold text-primary/30">
                  {step.no}
                </span>
                <h4 className="mt-2 font-heading text-lg font-bold text-foreground">
                  {step.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl bg-primary px-6 py-10 text-center text-primary-foreground sm:px-10">
            <p className="font-heading text-xl font-bold sm:text-2xl">
              まずは気軽に、話を聞きにきませんか？
            </p>
            <p className="max-w-xl text-sm text-primary-foreground/85 sm:text-base">
              ご応募・ご質問は、応募フォームまたはお電話で承っています。
              「見学だけ」「相談だけ」も大歓迎です。
            </p>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className={cn(
                  buttonVariants({ size: "lg", variant: "secondary" }),
                  "h-12 rounded-full px-8 text-base",
                )}
              >
                応募フォームへ
              </a>
              <a
                href={site.telHref}
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "h-12 rounded-full border-primary-foreground/40 bg-transparent px-8 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground",
                )}
              >
                電話で問い合わせる
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
