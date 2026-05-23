import type { Metadata } from "next";
import { Noto_Sans_JP, Shippori_Mincho } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const shipporiMincho = Shippori_Mincho({
  variable: "--font-shippori-mincho",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "うみちか食堂｜沖縄・宜野湾の老舗食堂｜正社員募集中",
  description:
    "創業20年、沖縄・宜野湾市真志喜の老舗「うみちか食堂」。地元も観光客も有名人も通う食堂で一緒に働く仲間を募集しています。年中無休。",
  keywords: [
    "うみちか食堂",
    "沖縄",
    "宜野湾",
    "食堂",
    "求人",
    "正社員募集",
    "飲食",
  ],
  openGraph: {
    title: "うみちか食堂｜沖縄・宜野湾の老舗食堂｜正社員募集中",
    description:
      "地元も、観光客も、有名人も。みんなが通う食堂で働きませんか。創業20年の老舗「うみちか食堂」が仲間を募集しています。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${shipporiMincho.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
