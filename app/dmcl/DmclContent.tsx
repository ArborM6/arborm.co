"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Shield } from "lucide-react"
import { LangKey, isWorld, defaultZhLang, updateLangInBrowser, getLangFromURL, REGION } from "@/lib/lang"

const content = {
  'zh-Hans': {
    back: "返回",
    name: "独木成林",
    tagline: "让每一天都值得记录",
    description: "愿我们每个人都能成为更丰富的自己。",
    privacy: {
      title: "隐私与条款",
      terms: "用户协议",
      policy: "隐私政策",
    },
    footer: {
      copyright: "2026 合肥阿博木科技有限公司 版权所有",
    },
  },
  'zh-Hant': {
    back: "返回",
    name: "獨木成林",
    tagline: "讓每一天都值得記錄",
    description: "願我們每個人都能成為更豐富的自己。",
    privacy: {
      title: "隱私與條款",
      terms: "用戶協議",
      policy: "隱私政策",
    },
    footer: {
      copyright: "2026 合肥阿博木科技有限公司 版權所有",
    },
  },
  en: {
    back: "Back",
    name: "Banyan Forest",
    tagline: "Make every day worth remembering",
    description: "May each of us become a richer self.",
    privacy: {
      title: "Privacy & Terms",
      terms: "Terms of Service",
      policy: "Privacy Policy",
    },
    footer: {
      copyright: "2026 Hefei ArborM Technology Co., Ltd. All rights reserved",
    },
  },
}

export default function DmclContent({ initialLang }: { initialLang: LangKey }) {
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
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/[0.04]">
        <nav className="max-w-6xl mx-auto grid grid-cols-3 items-center px-4 py-2.5 md:px-10 md:py-4">
          <Link href="/" className="flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>{t.back}</span>
          </Link>
          <div className="flex items-center justify-center gap-2.5">
            <Image
              src="/dumuchenglin-icon.jpg"
              alt={t.name}
              width={28}
              height={28}
              className="rounded-[7px] shadow-sm"
            />
            <span className="text-base font-medium">{t.name}</span>
          </div>
          <div className="flex items-center justify-end gap-1.5 text-xs text-muted-foreground">
            <button
              onClick={() => switchLang(defaultZhLang)}
              className={`px-1.5 py-0.5 rounded transition-colors ${lang !== "en" ? "text-foreground bg-black/[0.04]" : "hover:text-foreground"}`}
            >
              {isWorld ? "繁體" : "中文"}
            </button>
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

      {/* Content */}
      <div className="flex-1 pt-20 md:pt-24 max-w-3xl mx-auto px-6 md:px-12">
        {/* App Info */}
        <div className="text-center mb-12 md:mb-16">
          <Image
            src="/dumuchenglin-icon.jpg"
            alt={t.name}
            width={96}
            height={96}
            className="rounded-[22px] shadow-md mx-auto mb-4"
          />
          <h1 className="text-3xl md:text-4xl font-light mb-2">{t.name}</h1>
          <p className="text-foreground/60 text-base">{t.tagline}</p>
          <p className="text-foreground/40 text-sm mt-2">{t.description}</p>
        </div>

        {/* Privacy & Terms Section */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-4 h-4 text-foreground/40" />
            <h2 className="text-sm font-medium text-foreground/60 tracking-wide uppercase">
              {t.privacy.title}
            </h2>
          </div>
          <div className="rounded-2xl bg-stone-50/80 border border-black/[0.04] divide-y divide-black/[0.04]">
            <Link
              href="/dmcl/terms"
              className="group flex items-center justify-between px-5 py-4 hover:bg-stone-100/80 transition-colors rounded-t-2xl"
            >
              <span className="text-sm text-foreground/80">{t.privacy.terms}</span>
              <ArrowUpRight className="w-4 h-4 text-foreground/20 group-hover:text-foreground/50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </Link>
            <Link
              href="/dmcl/privacy"
              className="group flex items-center justify-between px-5 py-4 hover:bg-stone-100/80 transition-colors rounded-b-2xl"
            >
              <span className="text-sm text-foreground/80">{t.privacy.policy}</span>
              <ArrowUpRight className="w-4 h-4 text-foreground/20 group-hover:text-foreground/50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </Link>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="text-white/60" style={{ backgroundColor: '#553d26' }}>
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-5">
          <div className="text-center text-[10px] md:text-xs">
            <p>&copy; {footer.copyright}</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
