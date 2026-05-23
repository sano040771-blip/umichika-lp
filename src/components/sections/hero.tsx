import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      {/* 背景グラデーション（沖縄の海と夕焼け） */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[oklch(0.7_0.12_55)] via-[oklch(0.66_0.1_85)] to-[oklch(0.6_0.09_215)]" />
      <div className="absolute inset-0 -z-10 bg-grain opacity-70" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background/30 via-transparent to-black/15" />

      <div className="section-x relative z-10 py-28 text-center text-white">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs font-medium tracking-wider backdrop-blur-sm sm:text-sm">
          沖縄・宜野湾　創業{site.yearsInBusiness}年の老舗食堂　／　年中無休
        </p>

        <h1 className="font-heading text-[1.7rem] font-bold leading-[1.45] drop-shadow-md sm:text-4xl md:text-5xl lg:text-[3.4rem]">
          地元も、観光客も、有名人も。
          <br className="hidden sm:block" />
          みんなが通う食堂で
          <br className="sm:hidden" />
          働きませんか。
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-sm leading-relaxed text-white/90 drop-shadow sm:text-base md:text-lg">
          海の近く、いつもの味。
          <br className="sm:hidden" />
          うみちか食堂は、20年変わらず地域に愛されてきました。
          <br />
          そんな食堂を、次の20年へ。一緒につくる仲間を募集しています。
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#recruit"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 w-full rounded-full px-8 text-base shadow-lg sm:w-auto",
            )}
          >
            採用情報を見る
          </a>
          <a
            href="#contact"
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "h-12 w-full rounded-full border-white/70 bg-white/10 px-8 text-base text-white backdrop-blur-sm hover:bg-white/20 hover:text-white sm:w-auto",
            )}
          >
            応募・お問い合わせ
          </a>
        </div>
      </div>

      {/* 下部の波 */}
      <div className="absolute inset-x-0 bottom-0 -z-0 leading-none text-background">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="h-[60px] w-full sm:h-[90px]"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M0,64 C240,112 480,16 720,40 C960,64 1200,120 1440,72 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
    </section>
  );
}
