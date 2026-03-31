"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

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
        tagline: "文化与艺术的小型展览",
        description: "碎片知识并不是无用的，在未来的某一天，某一个时刻，你会想起那片飘落于你掌心的叶子。这棵树会一直陪伴你，同你一起记录时间。",
        note: "愿我们每个人都能成为更丰富的自己。",
        year: "2026  即将上线",
      },
    },
    contact: {
      title: "联系",
      tip: "如果您有任何需要，欢迎来信。",
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
        name: "One Tree Forest",
        tagline: "A Mini Exhibition of Culture and Art",
        description: "Fragmented knowledge is not useless. Someday, at some moment, you will remember the leaf that fell into your palm. This tree will always accompany you, recording time together.",
        note: "May each of us become a richer self.",
        year: "2026  Coming Soon",
      },
    },
    contact: {
      title: "Contact",
      tip: "Feel free to reach out if you need anything.",
    },
    footer: {
      copyright: "2026 Hefei ArborM Technology Co., Ltd. All rights reserved",
      icp: "ICP: 皖ICP备2026007885号",
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
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-sm">
        <nav className="grid grid-cols-3 items-center px-6 py-4 md:px-10">
          <a href="/" className="flex flex-col">
            <span className="text-lg font-medium tracking-wide">阿博木</span>
            <span className="text-xs text-muted-foreground tracking-widest">ArborM</span>
          </a>
          <div className="flex items-center justify-center gap-8">
            <button
              onClick={() => scrollToSection("work")}
              className="text-lg font-semibold text-foreground hover:text-muted-foreground transition-colors"
            >
              {t.nav.work}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-lg font-semibold text-foreground hover:text-muted-foreground transition-colors"
            >
              {t.nav.contact}
            </button>
          </div>
          <div className="flex items-center justify-end gap-1 text-sm text-muted-foreground">
            <button
              onClick={() => setLang("zh")}
              className={`transition-colors ${lang === "zh" ? "text-foreground" : "hover:text-foreground"}`}
            >
              中文
            </button>
            <span>/</span>
            <button
              onClick={() => setLang("en")}
              className={`transition-colors ${lang === "en" ? "text-foreground" : "hover:text-foreground"}`}
            >
              EN
            </button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-0">
        <div className="w-full aspect-[2/1] relative">
          <div
            className="absolute inset-0 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/arborm-hero.jpg')" }}
          />
        </div>
        <div className="max-w-4xl mx-auto w-full flex justify-end px-6 md:px-12 pt-6">
          <div className="text-right">
            <h1 className="text-3xl md:text-4xl font-light leading-relaxed tracking-tight">
              {t.hero.line1}
              <br />
              {t.hero.line2}
            </h1>
          </div>
        </div>
      </section>

      {/* About - 紧跟 Hero，作为补充说明 */}
      <section id="about" className="max-w-4xl mx-auto px-6 md:px-12 pt-12 pb-12">
        <div className="max-w-2xl md:max-w-3xl text-left">
          <p className="text-xl leading-relaxed mb-4">
            <span className="text-3xl font-light">{t.about.title}</span>
            <span>{t.about.subtitle}</span>
          </p>
          <p className="text-muted-foreground leading-relaxed text-base mb-4">
            {t.about.desc1}
          </p>
          <p className="text-muted-foreground leading-relaxed text-base">
            {t.about.desc2}
          </p>
        </div>
      </section>

      {/* Work - 紧凑的作品展示 */}
      <section id="work" className="max-w-4xl mx-auto px-6 md:px-12 py-12 border-t border-border">
        <h2 className="text-2xl md:text-3xl font-light text-center mb-8">{t.work.title}</h2>
        <div className="max-w-2xl md:max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="group cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <Image 
                  src="/dumuchenglin-icon.jpg" 
                  alt={t.work.app.name}
                  width={40} 
                  height={40} 
                  className="rounded-[8px]"
                />
                <h3 className="text-2xl font-normal">{t.work.app.name}</h3>
                <ArrowUpRight className="w-5 h-5" />
              </div>
              <p className="text-lg text-foreground/80 mb-4">{t.work.app.tagline}</p>
              <p className="text-muted-foreground leading-relaxed text-base mb-2">
                {t.work.app.description}
              </p>
              <p className="text-muted-foreground leading-relaxed text-base mb-4">
                {t.work.app.note}
              </p>
              <p className="text-muted-foreground/50 text-sm tracking-wide">
                {t.work.app.year}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer: Contact + Copyright */}
      <footer id="contact" className="max-w-4xl mx-auto px-6 md:px-12 py-6 border-t border-border">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="font-medium text-foreground">{t.contact.title}</span>
            <a
              href="mailto:hello@arborm.com"
              className="inline-flex items-center gap-1 hover:text-foreground transition-colors group"
            >
              <span>hello@arborm.com</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
          <div className="flex items-center gap-4">
            <p>&copy; {t.footer.copyright}</p>
            <a 
              href="https://beian.miit.gov.cn/#/Integrated/index" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              {t.footer.icp}
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
