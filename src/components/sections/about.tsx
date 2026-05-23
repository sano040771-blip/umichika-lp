import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

const stats = [
  { value: `${site.yearsInBusiness}年`, label: "地域とともに歩んだ歴史" },
  { value: "年中無休", label: "毎日、変わらず暖簾を掲げて" },
  { value: "県内外", label: "地元から観光客まで幅広い客層" },
  { value: "海のそば", label: "宜野湾・真志喜の好立地" },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-background py-20 sm:py-28">
      <div className="section-x">
        <SectionHeading
          eyebrow="ABOUT"
          title="海の近くの、いつもの場所。"
          description="創業から20年。うみちか食堂は、ただの飲食店ではなく、地域の暮らしの一部であり続けてきました。"
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-5 text-sm leading-loose text-foreground/85 sm:text-base">
            <p>
              うみちか食堂が宜野湾・真志喜の地に暖簾を掲げたのは、今から20年前のこと。
              海のすぐ近くという立地から「うみちか（海近）」と名付けられた小さな食堂は、
              はじめは近所のお客さまに支えられる、ごく普通の食堂でした。
            </p>
            <p>
              変わらない味と、気取らない居心地のよさ。
              通ってくださる常連さんの「いつものね」に応え続けるうちに、口コミは静かに広がっていきました。
              いつしか観光ガイドやSNSで紹介されるようになり、
              県外からわざわざ足を運ぶお客さまや、テレビでおなじみの有名人の姿も
              珍しくない――そんな食堂へと育っていきました。
            </p>
            <p>
              それでも、私たちが大切にしていることは創業当時と変わりません。
              目の前のお客さまに、あたたかい一皿と笑顔を。
              観光地として知られるようになった今も、
              <span className="font-semibold text-primary">
                「地元の人がいちばん通う食堂」
              </span>
              であり続けたい。その想いを、次の世代へ受け継いでいきます。
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <p className="font-heading text-2xl font-bold text-primary sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
