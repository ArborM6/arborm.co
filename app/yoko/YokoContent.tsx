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
    bio: "脑子里总是长出一些奇怪的问题。",
    social: "社交平台",
    placeholder: "即将开放",
    projects: "项目",
    apps: "应用",
    novels: "小说",
    appDumuchenglin: "独木成林",
    appForyou: "为你",
    novelBeige: "《碑歌》",
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
    bio: "脑子里总是长出一些奇怪的问题。",
    social: "社交平台",
    placeholder: "即將開放",
    projects: "項目",
    apps: "應用",
    novels: "小說",
    appDumuchenglin: "獨木成林",
    appForyou: "為你",
    novelBeige: "《碑歌》",
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
    bio: "Strange questions keep growing in my mind.",
    social: "Social",
    placeholder: "Coming soon",
    projects: "Projects",
    apps: "Apps",
    novels: "Novels",
    appDumuchenglin: "BanyanDay",
    appForyou: "For You",
    novelBeige: "Monument Song",
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
}[] = [
  { id: "xiaohongshu", title: siXiaohongshu.title, hex: siXiaohongshu.hex, path: siXiaohongshu.path },
  // Douyin: Simple Icons has no douyin slug; closest open mark is TikTok (same ByteDance family).
  { id: "douyin", title: "Douyin", hex: "000000", path: siTiktok.path },
  { id: "tiktok", title: siTiktok.title, hex: siTiktok.hex, path: siTiktok.path },
  { id: "youtube", title: siYoutube.title, hex: siYoutube.hex, path: siYoutube.path },
  { id: "threads", title: siThreads.title, hex: siThreads.hex, path: siThreads.path },
  { id: "bilibili", title: siBilibili.title, hex: siBilibili.hex, path: siBilibili.path },
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

        <section className="mt-16 text-center" aria-label={t.social}>
          <div className="flex flex-wrap items-start justify-center gap-4 md:gap-6">
            {socials.map(({ id, title, hex, path }) => {
              const label = t.socialLabels[id]
              return (
                <a
                  key={id}
                  href="#"
                  aria-disabled="true"
                  aria-label={`${label} (${t.placeholder}, placeholder)`}
                  title={`${label} · ${t.placeholder} (placeholder)`}
                  onClick={(event) => event.preventDefault()}
                  className="flex flex-col items-center gap-2 w-20 text-foreground/55 cursor-not-allowed"
                >
                  <span
                    className="w-12 h-12 rounded-full border border-black/[0.08] bg-neutral-50 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <BrandIcon path={path} title={title} hex={hex} />
                  </span>
                  <span className="text-xs">{label}</span>
                </a>
              )
            })}
          </div>
          <p className="mt-6 text-xs text-foreground/35">{t.placeholder}</p>
        </section>

        <section className="mt-16" aria-label={t.projects}>
          <h2 className="text-2xl md:text-3xl font-light text-center mb-10 tracking-[0.25em] text-foreground/80">
            {t.projects}
          </h2>

          <div className="space-y-10">
            <div>
              <h3 className="text-sm font-medium tracking-[0.2em] text-foreground/45 uppercase mb-4 text-center md:text-left">
                {t.apps}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://banyanforest.arborm.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl bg-neutral-50 border border-black/[0.06] p-4 md:p-5 hover:bg-neutral-100 hover:border-black/[0.12] transition-all duration-300"
                >
                  <Image
                    src="/dumuchenglin-icon.jpg"
                    alt={t.appDumuchenglin}
                    width={64}
                    height={64}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-[14px] shadow-sm shrink-0"
                  />
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-lg md:text-xl font-medium truncate">{t.appDumuchenglin}</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0 text-foreground/30 group-hover:text-foreground/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </a>

                <a
                  href="https://foryou.arborm.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl bg-neutral-50 border border-black/[0.06] p-4 md:p-5 hover:bg-neutral-100 hover:border-black/[0.12] transition-all duration-300"
                >
                  <Image
                    src="/foryou-icon.jpg"
                    alt={t.appForyou}
                    width={64}
                    height={64}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-[14px] shadow-sm shrink-0"
                  />
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-lg md:text-xl font-medium truncate">{t.appForyou}</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0 text-foreground/30 group-hover:text-foreground/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium tracking-[0.2em] text-foreground/45 uppercase mb-4 text-center md:text-left">
                {t.novels}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="#"
                  aria-disabled="true"
                  aria-label={`${t.novelBeige} (${t.placeholder}, Fanqie novel link placeholder)`}
                  title={`${t.novelBeige} · ${t.placeholder} (Fanqie URL placeholder)`}
                  onClick={(event) => event.preventDefault()}
                  className="group flex items-center gap-4 rounded-2xl bg-neutral-50 border border-black/[0.06] p-4 md:p-5 cursor-not-allowed"
                >
                  <Image
                    src="/novel-beige.jpg"
                    alt={t.novelBeige}
                    width={64}
                    height={64}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-[14px] shadow-sm object-cover object-top shrink-0"
                  />
                  <div className="flex flex-col items-start gap-0.5 min-w-0">
                    <span className="text-lg md:text-xl font-medium truncate">{t.novelBeige}</span>
                    <span className="text-xs text-foreground/35">{t.placeholder}</span>
                  </div>
                </a>
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
