"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowUpRight, Mail } from "lucide-react"
import { LangKey, isWorld, defaultZhLang, updateLangInBrowser, getLangFromURL, REGION } from "@/lib/lang"

const content = {
  'zh-Hans': {
    nav: { work: "作品", contact: "联系" },
    hero: { line1: "我们相信好的应用", line2: "应该像树木一样生长" },
    about: {
      title: "阿博木",
      subtitle: " 是一个小型独立工作室，专注于设计和开发移动和 Web 应用。",
      desc1: "我们只做自己相信的产品，在技术与人文之间寻找平衡，在功能与美学之间保持分寸。每一款应用都是我们对某个问题的思考与回答，是我们与这个世界对话的方式。",
      desc2: "阿博木是前沿的科技之树，博学的知识之树，宏大的时间之树。根系深埋于土壤，枝叶向着光生长。它缓慢、扎实，记录生命的沉淀。",
    },
    work: {
      title: "作品",
      app: {
        name: "独木成林",
        tagline: "让每一天都值得记录",
        description: "愿我们每个人都能成为更丰富的自己。",
        note: "",
        year: "2026",
      },
      app2: {
        name: "为你",
        tagline: "一份用心准备的礼物",
        description: "正在精心打磨中。",
        year: "2027",
      },
      app3: {
        name: "回响",
        tagline: "让每一次提醒，都有诗意",
        description: "让每一次提醒，都有诗意。",
        year: "2026",
      },
    },
    contact: {
      title: "联系我们",
      tip: "如果您有任何需要，欢迎来信",
    },
    footer: {
      copyright: "2026 合肥阿博木科技有限公司 版权所有",
      icp: "皖ICP备2026007885号",
      gongan: "皖公网安备34011102003969号",
    },
  },
  'zh-Hant': {
    nav: { work: "作品", contact: "聯繫" },
    hero: { line1: "我們相信好的應用", line2: "應該像樹木一樣生長" },
    about: {
      title: "阿博木",
      subtitle: " 是一個小型獨立工作室，專注於設計和開發行動與 Web 應用。",
      desc1: "我們只做自己相信的產品，在技術與人文之間尋找平衡，在功能與美學之間保持分寸。每一款應用都是我們對某個問題的思考與回答，是我們與這個世界對話的方式。",
      desc2: "阿博木是前沿的科技之樹，博學的知識之樹，宏大的時間之樹。根系深埋於土壤，枝葉向著光生長。它緩慢、扎實，記錄生命的沉澱。",
    },
    work: {
      title: "作品",
      app: {
        name: "獨木成林",
        tagline: "讓每一天都值得記錄",
        description: "願我們每個人都能成為更豐富的自己。",
        note: "",
        year: "2026",
      },
      app2: {
        name: "為你",
        tagline: "一份用心準備的禮物",
        description: "正在精心打磨中。",
        year: "2027",
      },
      app3: {
        name: "回響",
        tagline: "讓每一次提醒，都有詩意",
        description: "讓每一次提醒，都有詩意。",
        year: "2026",
      },
    },
    contact: {
      title: "聯繫我們",
      tip: "如果您有任何需要，歡迎來信",
    },
    footer: {
      copyright: "2026 合肥阿博木科技有限公司 版權所有",
      icp: "皖ICP備2026007885號",
      gongan: "皖公網安備34011102003969號",
    },
  },
  en: {
    nav: { work: "Work", contact: "Contact" },
    hero: { line1: "We believe great apps", line2: "should grow like trees" },
    about: {
      title: "ArborM",
      subtitle: " is a small independent studio focused on designing and developing mobile and web apps.",
      desc1: "We only build products we believe in, seeking balance between technology and humanity, maintaining proportion between function and aesthetics. Each app is our reflection on a problem, our way of conversing with the world.",
      desc2: "ArborM is a tree of cutting-edge technology, a tree of profound knowledge, a tree of grand time. Roots buried deep in soil, branches reaching toward light. Slow, solid, recording the sedimentation of life.",
    },
    work: {
      title: "Work",
      app: {
        name: "Banyan Forest",
        tagline: "Make every day worth remembering",
        description: "May each of us become a richer self.",
        note: "",
        year: "2026",
      },
      app2: {
        name: "For You",
        tagline: "A gift crafted with care",
        description: "Being carefully crafted.",
        year: "2027",
      },
      app3: {
        name: "Echo",
        tagline: "Let every reminder be poetic",
        description: "Let every reminder be poetic.",
        year: "2026",
      },
    },
    contact: {
      title: "Get in Touch",
      tip: "Feel free to reach out if you need anything",
    },
    footer: {
      copyright: "2026 Hefei ArborM Technology Co., Ltd. All rights reserved",
      icp: "皖ICP备2026007885号",
      gongan: "皖公网安备34011102003969号",
    },
  },
}

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

export default function HomeContent({ initialLang }: { initialLang: LangKey }) {
  const [lang, setLang] = useState<LangKey>(initialLang)

  useEffect(() => {
    const urlLang = getLangFromURL()
    if (urlLang) setLang(urlLang)
  }, [])
  const t = content[lang]
  // 国内环境 footer（备案号等）始终用简体中文，不随语言切换
  const footer = REGION === "china" ? content['zh-Hans'].footer : t.footer

  const switchLang = (newLang: LangKey) => {
    setLang(newLang)
    updateLangInBrowser(newLang)
  }

  return (
    <main className="min-h-screen bg-white text-foreground font-[system-ui,'PingFang_SC','Noto_Sans_SC','Hiragino_Sans_GB','Microsoft_YaHei',sans-serif]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/[0.04]">
        <nav className="max-w-6xl mx-auto grid grid-cols-3 items-center px-4 py-2.5 md:px-10 md:py-4">
          <a href="/" className="flex items-center gap-2.5">
            <Image
              src="/arborm-logo.png?v=20260517"
              alt="ArborM Logo"
              width={28}
              height={40}
              className="object-contain grayscale"
            />
            <div className="flex flex-col">
              <span className="text-lg font-medium tracking-wide">阿博木</span>
              <span className="text-[11px] text-muted-foreground tracking-[0.2em] uppercase">ArborM</span>
            </div>
          </a>
          <div className="flex items-center justify-center gap-8">
            <button
              onClick={() => scrollToSection("work")}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              {t.nav.work}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              {t.nav.contact}
            </button>
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

      {/* Hero */}
      <section className="pt-14 md:pt-16">
        <div className="w-full aspect-[211/90] relative">
          <div
            className="absolute inset-0 bg-contain bg-center bg-no-repeat grayscale"
            style={{ backgroundImage: "url('/arborm-hero.jpg')" }}
          />
        </div>
        <div className="max-w-5xl mx-auto w-full flex justify-end px-6 md:px-12 pt-8 pb-4">
          <div className="text-right">
            <h1 className="text-4xl md:text-[3.25rem] font-normal leading-[1.4] tracking-tight text-foreground/90">
              {t.hero.line1}
              <br />
              {t.hero.line2}
            </h1>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-neutral-50">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-20">
          <div className="max-w-2xl md:max-w-3xl">
            <p className="text-xl md:text-2xl leading-relaxed mb-6">
              <span className="text-3xl md:text-4xl font-light">{t.about.title}</span>
              <span className="text-foreground/80">{t.about.subtitle}</span>
            </p>
            <p className="text-foreground/50 leading-[1.8] text-base mb-5">
              {t.about.desc1}
            </p>
            <p className="text-foreground/50 leading-[1.8] text-base">
              {t.about.desc2}
            </p>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-light text-center mb-12 tracking-[0.25em] text-foreground/80">
            {t.work.title}
          </h2>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-6 md:gap-x-10">
            {/* App 1: 独木成林 */}
            <a href="https://banyanforest.arborm.co/" target="_blank" rel="noopener noreferrer" className="block group cursor-pointer rounded-2xl bg-neutral-50 border border-black/[0.06] p-6 md:p-8 hover:bg-neutral-100 hover:border-black/[0.12] transition-all duration-300 md:col-start-1 md:row-start-1">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/dumuchenglin-icon.jpg"
                  alt={t.work.app.name}
                  width={64}
                  height={64}
                  className="rounded-[14px] shadow-sm"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl md:text-2xl font-medium">{t.work.app.name}</h3>
                    <ArrowUpRight className="w-4 h-4 text-foreground/30 group-hover:text-foreground/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <p className="text-base text-foreground/60 mt-0.5">{t.work.app.tagline}</p>
                </div>
              </div>
              <p className="text-foreground/45 leading-[1.8] text-sm mb-2">
                {t.work.app.description}
              </p>
              {t.work.app.note && (
                <p className="text-foreground/45 leading-[1.8] text-sm mb-4">
                  {t.work.app.note}
                </p>
              )}
              <p className="text-foreground/30 text-xs tracking-widest uppercase">
                {t.work.app.year}
              </p>
            </a>

            {/* App 2: 为你 */}
            <div className="group cursor-pointer rounded-2xl bg-neutral-50 border border-black/[0.06] p-6 md:p-8 hover:bg-neutral-100 hover:border-black/[0.12] transition-all duration-300 md:col-start-1 md:row-start-2">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/foryou-icon.jpg"
                  alt={t.work.app2.name}
                  width={64}
                  height={64}
                  className="rounded-[14px] shadow-sm"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl md:text-2xl font-medium">{t.work.app2.name}</h3>
                    <ArrowUpRight className="w-4 h-4 text-foreground/30 group-hover:text-foreground/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <p className="text-base text-foreground/60 mt-0.5">{t.work.app2.tagline}</p>
                </div>
              </div>
              <p className="text-foreground/45 leading-[1.8] text-sm mb-4">
                {t.work.app2.description}
              </p>
              <p className="text-foreground/30 text-xs tracking-widest uppercase">
                {t.work.app2.year}
              </p>
            </div>

            {/* Vertical divider between columns */}
            <div className="hidden md:block md:col-start-2 md:row-start-1 md:row-span-2 w-px bg-black/10" />

            {/* App 3: 回响 ECHO */}
            <a href="https://echo.arborm.co/" target="_blank" rel="noopener noreferrer" className="block group cursor-pointer rounded-2xl bg-neutral-50 border border-black/[0.06] p-6 md:p-8 hover:bg-neutral-100 hover:border-black/[0.12] transition-all duration-300 md:col-start-3 md:row-start-1 md:row-span-2 md:self-start">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/echo-icon.png"
                  alt={t.work.app3.name}
                  width={64}
                  height={64}
                  className="rounded-[14px] shadow-sm"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl md:text-2xl font-medium">{t.work.app3.name}</h3>
                    <ArrowUpRight className="w-4 h-4 text-foreground/30 group-hover:text-foreground/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <p className="text-base text-foreground/60 mt-0.5">{t.work.app3.tagline}</p>
                </div>
              </div>
              <p className="text-foreground/45 leading-[1.8] text-sm mb-4">
                {t.work.app3.description}
              </p>
              <p className="text-foreground/30 text-xs tracking-widest uppercase">
                {t.work.app3.year}
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-neutral-100 text-black">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-14 md:py-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-xl md:text-2xl font-light mb-2 tracking-wide">{t.contact.title}</h2>
              <p className="text-black/55 text-sm">{t.contact.tip}</p>
            </div>
            <a
              href="mailto:hello@arborm.com"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black border border-black/10 hover:bg-neutral-50 hover:border-black/20 transition-all duration-300 group"
            >
              <Mail className="w-4 h-4 text-black/70" />
              <span className="text-sm font-medium">hello@arborm.com</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-black/45 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white/65">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-5">
          <div className="flex items-center justify-center gap-4 flex-wrap text-[10px] md:text-xs">
            <p className="whitespace-nowrap">&copy; {footer.copyright}</p>
            {REGION === "china" && (
              <>
                <a
                  href="https://beian.miit.gov.cn/#/Integrated/index"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors whitespace-nowrap"
                >
                  {footer.icp}
                </a>
                <a
                  href="https://beian.mps.gov.cn/#/query/webSearch?code=34011102003969"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors whitespace-nowrap flex items-center gap-1"
                >
                  <img src="/gongan.png" alt="" className="w-4 h-4 inline-block" />
                  {footer.gongan}
                </a>
              </>
            )}
          </div>
        </div>
      </footer>
    </main>
  )
}
