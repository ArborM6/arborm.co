"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight, Mail } from "lucide-react"

const content = {
  zh: {
    nav: { work: "作品", contact: "联系" },
    hero: { line1: "我们相信好的应用", line2: "应该像树木一样生长" },
    about: {
      title: "阿博木",
      subtitle: " 是一个小型独立工作室，专注于设计和开发 iOS 应用。",
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
    },
    contact: {
      title: "联系我们",
      tip: "如果您有任何需要，欢迎来信",
    },
    footer: {
      copyright: "2026 合肥阿博木科技有限公司 版权所有",
      icp: "皖ICP备2026007885号",
    },
  },
  en: {
    nav: { work: "Work", contact: "Contact" },
    hero: { line1: "We believe great apps", line2: "should grow like trees" },
    about: {
      title: "ArborM",
      subtitle: " is a small independent studio focused on designing and developing iOS apps.",
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
    },
    contact: {
      title: "Get in Touch",
      tip: "Feel free to reach out if you need anything",
    },
    footer: {
      copyright: "2026 Hefei ArborM Technology Co., Ltd. All rights reserved",
      icp: "ICP License: Wan ICP No. 2026007885",
    },
  },
}

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

export default function Home() {
  const [lang, setLang] = useState<"zh" | "en">("zh")
  const t = content[lang]

  return (
    <main className="min-h-screen bg-white text-foreground font-[system-ui,'PingFang_SC','Noto_Sans_SC','Hiragino_Sans_GB','Microsoft_YaHei',sans-serif]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/[0.04]">
        <nav className="max-w-6xl mx-auto grid grid-cols-3 items-center px-4 py-2.5 md:px-10 md:py-4">
          <a href="/" className="flex items-center gap-2.5">
            <Image
              src="/arborm-logo.png"
              alt="ArborM Logo"
              width={28}
              height={40}
              className="object-contain"
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
              onClick={() => setLang("zh")}
              className={`px-1.5 py-0.5 rounded transition-colors ${lang === "zh" ? "text-foreground bg-black/[0.04]" : "hover:text-foreground"}`}
            >
              中文
            </button>
            <span className="text-black/20">/</span>
            <button
              onClick={() => setLang("en")}
              className={`px-1.5 py-0.5 rounded transition-colors ${lang === "en" ? "text-foreground bg-black/[0.04]" : "hover:text-foreground"}`}
            >
              EN
            </button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-14 md:pt-16">
        <div className="w-full aspect-[2/1] relative">
          <div
            className="absolute inset-0 bg-contain bg-center bg-no-repeat"
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
      <section id="about" className="bg-stone-50/70">
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
          <div className="max-w-3xl mx-auto space-y-6">
            {/* App 1: 独木成林 */}
            <a href="/dmcl" className="block group cursor-pointer rounded-2xl bg-stone-50/80 border border-black/[0.04] p-6 md:p-8 hover:bg-stone-100/80 hover:border-black/[0.06] transition-all duration-300">
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
            <div className="group cursor-pointer rounded-2xl bg-stone-50/80 border border-black/[0.04] p-6 md:p-8 hover:bg-stone-100/80 hover:border-black/[0.06] transition-all duration-300">
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
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="text-[#4a3828]" style={{ backgroundColor: '#d9cfbf' }}>
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-14 md:py-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-xl md:text-2xl font-light mb-2 tracking-wide">{t.contact.title}</h2>
              <p className="text-[#4a3828]/50 text-sm">{t.contact.tip}</p>
            </div>
            <a
              href="mailto:hello@arborm.com"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-white hover:opacity-90 transition-all duration-300 group"
              style={{ backgroundColor: '#7a8c4e' }}
            >
              <Mail className="w-4 h-4 text-white/80" />
              <span className="text-sm font-medium">hello@arborm.com</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/60 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white/60" style={{ backgroundColor: '#553d26' }}>
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-5">
          <div className="flex items-center justify-center gap-4 flex-wrap text-[10px] md:text-xs">
            <p className="whitespace-nowrap">&copy; {t.footer.copyright}</p>
            <a
              href="https://beian.miit.gov.cn/#/Integrated/index"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/60 transition-colors whitespace-nowrap"
            >
              {t.footer.icp}
            </a>
            <a
              href="https://beian.mps.gov.cn/#/query/webSearch?code=34011102003969"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white/60 transition-colors whitespace-nowrap flex items-center gap-1"
            >
              <img src="/gongan.png" alt="" className="w-4 h-4 inline-block" />
              皖公网安备34011102003969号
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
