"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { siXiaohongshu, siTiktok, siYoutube, siThreads, siBilibili } from "simple-icons"
import { LangKey, isWorld, defaultZhLang, updateLangInBrowser, getLangFromURL, REGION } from "@/lib/lang"

const content = {
  "zh-Hans": {
    back: "返回",
    bio: "脑子里总是长出一些奇怪的问题",
    social: "自媒体",
    apps: "应用",
    novels: "小说",
    appDumuchenglin: "独木成林",
    appForyou: "为你",
    novelBeige: "碑歌",
    novelYuji: "雩祭",
    novelYeluo: "叶落",
    socialLabels: {
      xiaohongshu: "小红书",
      douyin: "抖音",
      tiktok: "TikTok",
      youtube: "YouTube",
      threads: "Threads",
      bilibili: "B站",
    },
    footer: { copyright: "2026 合肥阿博木科技有限公司 版权所有" },
  },
  "zh-Hant": {
    back: "返回",
    bio: "脑子里总是长出一些奇怪的问题",
    social: "自媒體",
    apps: "應用",
    novels: "小說",
    appDumuchenglin: "獨木成林",
    appForyou: "為你",
    novelBeige: "碑歌",
    novelYuji: "雩祭",
    novelYeluo: "葉落",
    socialLabels: {
      xiaohongshu: "小紅書",
      douyin: "抖音",
      tiktok: "TikTok",
      youtube: "YouTube",
      threads: "Threads",
      bilibili: "B站",
    },
    footer: { copyright: "2026 合肥阿博木科技有限公司 版權所有" },
  },
  en: {
    back: "Back",
    bio: "Strange questions keep growing in my mind",
    social: "Self-media",
    apps: "Apps",
    novels: "Novels",
    appDumuchenglin: "BanyanDay",
    appForyou: "For You",
    novelBeige: "碑歌",
    novelYuji: "雩祭",
    novelYeluo: "叶落",
    socialLabels: {
      xiaohongshu: "Xiaohongshu",
      douyin: "Douyin",
      tiktok: "TikTok",
      youtube: "YouTube",
      threads: "Threads",
      bilibili: "Bilibili",
    },
    footer: { copyright: "2026 Hefei ArborM Technology Co., Ltd. All rights reserved" },
  },
} as const

type SocialId = keyof (typeof content)["zh-Hans"]["socialLabels"]

/** Simple Icons brand marks (CC0). Douyin has no separate slug — TikTok glyph reused. */
const socials: {
  id: SocialId
  title: string
  hex: string
  path: string
  href: string | null
}[] = [
  // Order: Threads → 抖音 → TikTok → B站 → YouTube → 小红书 (3 per row in UI)
  // Threads: user-confirmed clean profile URL (no igshid tracking).
  {
    id: "threads",
    title: siThreads.title,
    hex: siThreads.hex,
    path: siThreads.path,
    href: "https://www.threads.com/@yoko_unfinished",
  },
  // Douyin: Simple Icons has no douyin slug; closest open mark is TikTok (same ByteDance family).
  // Profile share short link (stable redirect to sec_uid MS4wLjABAAAAFO7fBXv2T_EPUYoazyooHavJt5-wbmF8YXw3a3AXuf8).
  { id: "douyin", title: "Douyin", hex: "000000", path: siTiktok.path, href: "https://v.douyin.com/5X5p3HOARYs/" },
  {
    id: "tiktok",
    title: siTiktok.title,
    hex: siTiktok.hex,
    path: siTiktok.path,
    href: "https://www.tiktok.com/@yoko_unfinished",
  },
  {
    id: "bilibili",
    title: siBilibili.title,
    hex: siBilibili.hex,
    path: siBilibili.path,
    href: "https://space.bilibili.com/486013279",
  },
  {
    id: "youtube",
    title: siYoutube.title,
    hex: siYoutube.hex,
    path: siYoutube.path,
    href: "https://www.youtube.com/@yoko_unfinished",
  },
  {
    id: "xiaohongshu",
    title: siXiaohongshu.title,
    hex: siXiaohongshu.hex,
    path: siXiaohongshu.path,
    href: "https://www.xiaohongshu.com/user/profile/6880882b000000000d02e450",
  },
]

const apps = [
  {
    key: "dumuchenglin" as const,
    href: "https://dmcl.arborm.co",
    src: "/dumuchenglin-icon.jpg",
    external: true,
  },
  {
    key: "foryou" as const,
    href: "https://foryou.arborm.co/",
    src: "/foryou-icon.jpg",
    external: true,
  },
]

const novels = [
  // Fanqie/常读 share short links (changdunovel.com) decoded from poster QRs; open in new tab.
  {
    key: "beige" as const,
    src: "/novel-beige.jpg",
    href: "https://changdunovel.com/t/LLIokIRJoPc/",
  },
  {
    key: "yuji" as const,
    src: "/novel-yuji.jpg",
    href: "https://changdunovel.com/t/k_eyyl9xBrE/",
  },
  {
    key: "yeluo" as const,
    src: "/novel-yeluo.jpg",
    href: "https://changdunovel.com/t/Ew3qZm52LAM/",
  },
]

function BrandIcon({ path, title, hex }: { path: string; title: string; hex: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <title>{title}</title>
      <path d={path} fill={`#${hex}`} />
    </svg>
  )
}

export default function YokoContent({ initialLang }: { initialLang: LangKey }) {
  const [lang, setLang] = useState<LangKey>(initialLang)

  useEffect(() => {
    const urlLang = getLangFromURL()
    if (urlLang) setLang(urlLang)
  }, [])
  const t = content[lang]
  // 国内环境 footer 始终用简体中文
  const footer = REGION === "china" ? content["zh-Hans"].footer : t.footer

  const switchLang = (newLang: LangKey) => {
    setLang(newLang)
    updateLangInBrowser(newLang)
  }

  const appName = (key: (typeof apps)[number]["key"]) =>
    key === "dumuchenglin" ? t.appDumuchenglin : t.appForyou

  const novelName = (key: (typeof novels)[number]["key"]) => {
    if (key === "beige") return t.novelBeige
    if (key === "yuji") return t.novelYuji
    return t.novelYeluo
  }

  return (
    <main className="min-h-screen flex flex-col bg-white text-foreground font-[system-ui,'PingFang_SC','Noto_Sans_SC','Hiragino_Sans_GB','Microsoft_YaHei',sans-serif]">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/[0.04]">
        <nav className="max-w-6xl mx-auto grid grid-cols-3 items-center px-4 py-2.5 md:px-10 md:py-4">
          <Link href="/" className="flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>{t.back}</span>
          </Link>
          <span className="text-center text-base font-medium">Yoko</span>
          <div className="flex items-center justify-end gap-1.5 text-xs text-muted-foreground">
            <button
              onClick={() => switchLang(defaultZhLang)}
              className={`px-1.5 py-0.5 rounded transition-colors ${lang === defaultZhLang ? "text-foreground bg-black/[0.04]" : "hover:text-foreground"}`}
            >
              {isWorld ? "简体" : "中文"}
            </button>
            {isWorld && (
              <>
                <span className="text-black/20">/</span>
                <button
                  onClick={() => switchLang("zh-Hant")}
                  className={`px-1.5 py-0.5 rounded transition-colors ${lang === "zh-Hant" ? "text-foreground bg-black/[0.04]" : "hover:text-foreground"}`}
                >
                  繁體
                </button>
              </>
            )}
            <span className="text-black/20">/</span>
            <button
              onClick={() => switchLang("en")}
              className={`px-1.5 py-0.5 rounded transition-colors ${lang === "en" ? "text-foreground bg-black/[0.04]" : "hover:text-foreground"}`}
            >
              EN
            </button>
          </div>
        </nav>
      </header>

      <div className="flex-1 w-full max-w-3xl mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-20">
        <div className="text-center">
          <Image
            src="/author-yoko.jpg"
            alt="Yoko"
            width={160}
            height={160}
            className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover mx-auto mb-6"
            priority
          />
          <h1 className="text-2xl md:text-3xl font-medium tracking-[0.12em] mb-4">Yoko</h1>
          <p className="text-base md:text-lg text-foreground/60 leading-relaxed">{t.bio}</p>
        </div>

        <section className="mt-12">
          <div className="space-y-4">
            <div className="rounded-2xl border border-black/[0.06] bg-neutral-50/60 p-5 md:p-6">
              <h3 className="text-sm font-medium tracking-[0.2em] text-foreground/45 uppercase mb-4">
                {t.social}
              </h3>
              <div className="grid grid-cols-3 gap-x-3 gap-y-4 md:gap-x-4 place-items-center">
                {socials.map(({ id, title, hex, path, href }) => {
                  const label = t.socialLabels[id]
                  const isLive = Boolean(href)
                  return (
                    <a
                      key={id}
                      href={href ?? "#"}
                      target={isLive ? "_blank" : undefined}
                      rel={isLive ? "noopener noreferrer" : undefined}
                      aria-disabled={isLive ? undefined : true}
                      aria-label={label}
                      title={label}
                      onClick={isLive ? undefined : (event) => event.preventDefault()}
                      className={`flex flex-col items-center gap-1 w-[4.5rem] ${
                        isLive
                          ? "text-foreground/70 hover:text-foreground transition-colors"
                          : "text-foreground/55 cursor-not-allowed"
                      }`}
                    >
                      <span
                        className="w-11 h-11 rounded-full border border-black/[0.08] bg-neutral-50 flex items-center justify-center"
                        aria-hidden="true"
                      >
                        <BrandIcon path={path} title={title} hex={hex} />
                      </span>
                      <span className="text-[11px] leading-tight">{label}</span>
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="rounded-2xl border border-black/[0.06] bg-neutral-50/60 p-5 md:p-6">
                <h3 className="text-sm font-medium tracking-[0.2em] text-foreground/45 uppercase mb-4">
                  {t.apps}
                </h3>
                <div className="flex flex-wrap gap-4 md:gap-5">
                  {apps.map((app) => {
                    const name = appName(app.key)
                    return (
                      <a
                        key={app.key}
                        href={app.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-2 w-[4.75rem] md:w-[5.25rem] text-center"
                      >
                        <Image
                          src={app.src}
                          alt={name}
                          width={72}
                          height={72}
                          className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-[14px] shadow-sm object-cover"
                        />
                        <span className="inline-flex items-center gap-0.5 text-xs md:text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                          <span className="truncate max-w-[4.75rem] md:max-w-[5.25rem]">{name}</span>
                          <ArrowUpRight className="w-3 h-3 shrink-0 text-foreground/30 group-hover:text-foreground/55 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </span>
                      </a>
                    )
                  })}
                </div>
              </div>

              <div className="rounded-2xl border border-black/[0.06] bg-neutral-50/60 p-5 md:p-6">
                <h3 className="text-sm font-medium tracking-[0.2em] text-foreground/45 uppercase mb-4">
                  {t.novels}
                </h3>
                <div className="flex flex-wrap gap-4 md:gap-5">
                  {novels.map((novel) => {
                    const name = novelName(novel.key)
                    return (
                      <a
                        key={novel.key}
                        href={novel.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={name}
                        title={name}
                        className="group flex flex-col items-center gap-2 w-[4.75rem] md:w-[5.25rem] text-center"
                      >
                        <Image
                          src={novel.src}
                          alt={name}
                          width={72}
                          height={100}
                          className="w-16 h-[5.5rem] md:w-[72px] md:h-[100px] rounded-[14px] shadow-sm object-cover object-top"
                        />
                        <span className="inline-flex items-center gap-0.5 text-xs md:text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                          <span className="truncate max-w-[4.75rem] md:max-w-[5.25rem]">{name}</span>
                          <ArrowUpRight className="w-3 h-3 shrink-0 text-foreground/30 group-hover:text-foreground/55 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="bg-black text-white/65">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-5">
          <p className="text-center text-[10px] md:text-xs">&copy; {footer.copyright}</p>
        </div>
      </footer>
    </main>
  )
}
