"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const content = {
  zh: {
    back: "返回",
    title: "用户协议",
    lastUpdated: "最后更新：",
    sections: [
      {
        heading: "一、服务说明",
        body: "独木成林（以下简称\u201C本应用\u201D）是一款由合肥阿博木科技有限公司开发和运营的内容浏览与收藏应用。本协议适用于您使用本应用的所有服务。注册或使用本应用即表示您同意本协议的全部条款。",
      },
      {
        heading: "二、账号注册与管理",
        body: "您需提供有效的电子邮箱地址进行注册。您有责任妥善保管账号信息，因账号保管不善导致的损失由您自行承担。",
      },
      {
        heading: "三、用户行为规范",
        body: "您不得利用本应用从事违反法律法规的行为，不得干扰本应用的正常运行，不得未经授权获取其他用户的信息。",
      },
      {
        heading: "四、知识产权",
        body: "本应用中展示的所有内容（包括但不限于文字、图片、音频、视频）的知识产权归原作者或相关权利人所有。未经授权，您不得复制、传播或用于商业目的。",
      },
      {
        heading: "五、未成年人保护",
        body: "本应用不面向未满 14 周岁的儿童。若您未满 14 周岁，请在监护人的陪同和同意下使用本应用。若我们发现在未经监护人同意的情况下收集了儿童的个人信息，将尽快删除相关数据。",
      },
      {
        heading: "六、账号注销",
        body: "您有权随时申请注销您的账号。您可以通过应用内\u201C设置\u201D中的注销功能自行操作，或发送邮件至 support@dumuchenglin.com 申请注销。账号注销后，我们将在 15 个工作日内删除您的个人信息，法律法规另有规定的除外。",
      },
      {
        heading: "七、服务终止",
        body: "如您违反本协议的任何条款，我们有权暂停或终止向您提供服务，并不承担由此产生的任何责任。您也可以随时停止使用本应用并注销账号。",
      },
      {
        heading: "八、免责声明",
        body: "本应用按\u201C现状\u201D提供服务，不对服务的及时性、安全性或无错误做出任何保证。因不可抗力或第三方原因导致的服务中断，本应用不承担责任。",
      },
      {
        heading: "九、协议修改",
        body: "本应用保留随时修改本协议的权利。修改后的协议将在应用内公布，继续使用本应用即视为同意修改后的条款。",
      },
      {
        heading: "十、适用法律与争议解决",
        body: "本协议的订立、执行和解释均适用中华人民共和国法律。因本协议产生的任何争议，双方应友好协商解决；协商不成的，任何一方均可向合肥阿博木科技有限公司所在地有管辖权的人民法院提起诉讼。",
      },
    ],
    copyright: "© 2026 独木成林 · 保留所有权利",
  },
  en: {
    back: "Back",
    title: "Terms of Service",
    lastUpdated: "Last updated: ",
    sections: [
      {
        heading: "1. Service Description",
        body: "BanyanForest (hereinafter referred to as \"the App\") is a content browsing and collection application developed and operated by Hefei ArborM Technology Co., Ltd. This agreement applies to all services you use within the App. By registering or using the App, you agree to all terms of this agreement.",
      },
      {
        heading: "2. Account Registration & Management",
        body: "You must provide a valid email address to register. You are responsible for keeping your account information secure. Any loss resulting from failure to safeguard your account is your own responsibility.",
      },
      {
        heading: "3. User Conduct",
        body: "You may not use the App for any activity that violates applicable laws or regulations, interfere with the normal operation of the App, or access other users' information without authorization.",
      },
      {
        heading: "4. Intellectual Property",
        body: "All content displayed in the App (including but not limited to text, images, audio, and video) is the intellectual property of the original authors or rights holders. You may not copy, distribute, or use such content for commercial purposes without authorization.",
      },
      {
        heading: "5. Age Requirement",
        body: "You must be at least 13 years old to use the App. If you are between 13 and 18 years old, you must have permission from a parent or legal guardian. If we learn that we have collected personal information from a child under the applicable age without parental consent, we will take steps to delete that information promptly.",
      },
      {
        heading: "6. Account Deletion",
        body: "You may request deletion of your account at any time through the \"Settings\" section within the App, or by contacting us at support@dumuchenglin.com. Upon account deletion, we will remove your personal data within 30 days, unless retention is required by law.",
      },
      {
        heading: "7. Service Termination",
        body: "We reserve the right to suspend or terminate your access to the App if you violate any terms of this agreement. You may also stop using the App and delete your account at any time.",
      },
      {
        heading: "8. Disclaimer",
        body: "The App is provided \"as is\" without any warranties regarding timeliness, security, or error-free operation. The App is not liable for service interruptions caused by force majeure or third-party actions.",
      },
      {
        heading: "9. Agreement Modifications",
        body: "The App reserves the right to modify this agreement at any time. Updated terms will be published within the App. Continued use of the App constitutes acceptance of the modified terms.",
      },
      {
        heading: "10. Governing Law",
        body: "For users in the European Economic Area, this agreement is governed by the laws of your country of residence. For all other users, this agreement is governed by the laws of the People's Republic of China. Any disputes shall be resolved through friendly negotiation; if negotiation fails, the dispute shall be submitted to the competent court.",
      },
    ],
    copyright: "© 2026 BanyanForest · All rights reserved.",
  },
}

export default function TermsPage() {
  const [lang, setLang] = useState<"zh" | "en">("zh")
  const t = content[lang]

  return (
    <main className="min-h-screen bg-white text-foreground font-[system-ui,'PingFang_SC','Noto_Sans_SC','Hiragino_Sans_GB','Microsoft_YaHei',sans-serif]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/[0.04]">
        <nav className="max-w-6xl mx-auto grid grid-cols-3 items-center px-4 py-2.5 md:px-10 md:py-4">
          <Link href="/dmcl" className="flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>{t.back}</span>
          </Link>
          <div className="flex items-center justify-center">
            <span className="text-base font-medium">{t.title}</span>
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

      {/* Content */}
      <div className="pt-20 md:pt-24 max-w-3xl mx-auto px-6 md:px-12 pb-16">
        <h1 className="text-2xl md:text-3xl font-light mb-3">{t.title}</h1>
        <p className="text-foreground/40 text-xs mb-8">{t.lastUpdated}2026-04-03</p>
        <div className="space-y-6">
          {t.sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-base font-medium text-foreground/80 mb-2">{section.heading}</h2>
              <p className="text-sm text-foreground/60 leading-[1.8]">{section.body}</p>
            </div>
          ))}
        </div>
        <p className="text-foreground/30 text-xs mt-12 text-center">{t.copyright}</p>
      </div>
    </main>
  )
}
