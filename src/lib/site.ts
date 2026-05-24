export const site = {
  name: "うみちか食堂",
  nameEn: "UMICHIKA SHOKUDO",
  tagline: "地元も、観光客も、有名人も。みんなが通う食堂で働きませんか。",
  founded: "2005",
  yearsInBusiness: 20,
  postalCode: "901-2224",
  address: "沖縄県宜野湾市真志喜2丁目27-1",
  tel: "098-943-2204",
  telHref: "tel:098-943-2204",
  hours: [
    { days: "月〜木", time: "11:00〜21:30" },
    { days: "金・土・日", time: "11:00〜22:00" },
  ],
  closed: "年中無休",
  // Google フォームの埋め込みURL（iframe用に末尾は ?embedded=true）
  contactFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSdZjOLoWXBT1z55_Ku0k_WhhMijM_vhEvOO8-1UFUtc0LGB7Q/viewform?embedded=true",
  // Google マップ埋め込み用（住所から自動生成。差し替え可）
  mapEmbedUrl:
    "https://maps.google.com/maps?q=" +
    encodeURIComponent("沖縄県宜野湾市真志喜2丁目27-1") +
    "&hl=ja&z=16&output=embed",
  mapLinkUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("沖縄県宜野湾市真志喜2丁目27-1"),
} as const;

export const navLinks = [
  { href: "#about", label: "店について" },
  { href: "#news", label: "お知らせ" },
  { href: "#recruit", label: "採用情報" },
  { href: "#access", label: "アクセス" },
  { href: "#contact", label: "お問い合わせ" },
] as const;
