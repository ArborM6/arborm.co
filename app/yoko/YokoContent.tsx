"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Youtube } from "lucide-react"
import { LangKey, isWorld, defaultZhLang, updateLangInBrowser, getLangFromURL, REGION } from "@/lib/lang"

const content = {
  'zh-Hans': {
    back: "返回",
    bio: "脑子里总是长出一些奇怪的问题。",
    social: "社交平台",
    placeholder: "即将开放",
    footer: { copyright: "2026 合肥阿博木科技有限公司 版权所有" },
  },
  'zh-Hant': {
    back: "返回",
    bio: "脑子里总是长出一些奇怪的问题。",
    social: "社交平台",
    placeholder: "即將開放",
    footer: { copyright: "2026 合肥阿博木科技有限公司 版權所有" },
  },
  en: {
    back: "Back",
    bio: "Strange questions keep growing in my mind.",
    social: "Social",
    placeholder: "Coming soon",
    footer: { copyright: "2026 Hefei ArborM Technology Co., Ltd. All rights reserved" },
  },
}

const socials = [
  { name: "小红书", mark: "书" },
  { name: "抖音", mark: "抖" },
  { name: "TikTok", mark: "♪" },
  { name: "YouTube", mark: null },
  { name: "Threads", mark: "@" },
]

export default function YokoContent({ initialLang }: { initialLang: LangKey }) {
  const [lang, setLang] = useState<LangKey>(initialLang)

  useEffect(() => {
    const urlLang = getLangFromURL()
    if (urlLang) setLang(urlLang)
  }, [])
  const t = content[lang]
  // 国内环境 footer 始终用简体中文
  const footer = REGION === "china" ? content['zh-Hans'].footer : t.footer

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
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-10">Yoko</h1>
          <Image
            src="/author-yoko.jpg"
            alt="Yoko"
            width={160}
            height={160}
            className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover mx-auto mb-8"
          />
          <p className="text-base md:text-lg text-foreground/60 leading-relaxed">{t.bio}</p>
        </div>

        <section className="mt-16 text-center" aria-label={t.social}>
          <div className="flex flex-wrap items-start justify-center gap-4 md:gap-6">
            {socials.map(({ name, mark }) => (
              <a
                key={name}
                href="#"
                aria-disabled="true"
                aria-label={`${name} (${t.placeholder}, placeholder)`}
                title={`${name} · ${t.placeholder} (placeholder)`}
                onClick={(event) => event.preventDefault()}
                className="flex flex-col items-center gap-2 w-20 text-foreground/45 cursor-not-allowed"
              >
                <span className="w-12 h-12 rounded-full border border-black/[0.08] bg-neutral-50 flex items-center justify-center text-lg font-medium" aria-hidden="true">
                  {mark ?? <Youtube className="w-5 h-5" />}
                </span>
                <span className="text-xs">{name}</span>
              </a>
            ))}
          </div>
          <p className="mt-6 text-xs text-foreground/35">{t.placeholder}</p>
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
