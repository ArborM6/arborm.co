"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { LangKey, isWorld, defaultZhLang, updateLangInBrowser, getLangFromURL } from "@/lib/lang"

const content = {
  'zh-Hans': {
    back: "返回",
    title: "隐私政策",
    lastUpdated: "最后更新：",
    sections: [
      {
        heading: "一、我们收集的信息",
        body: "为提供服务，我们可能收集以下信息：您的注册信息（电子邮箱）、个人资料（昵称、头像）、内容浏览与收藏记录，以及设备基本信息（操作系统版本、屏幕分辨率）。",
      },
      {
        heading: "二、信息使用目的",
        body: "我们收集的信息仅用于：提供和改善服务、维护账号安全、发送服务相关通知。我们不会将您的信息用于与本应用无关的商业推广。",
      },
      {
        heading: "三、信息存储与保护",
        body: "您的数据存储在安全的云服务器上，传输过程使用 TLS/SSL 加密。我们采取合理的技术和管理措施保护您的个人信息安全。",
      },
      {
        heading: "四、第三方共享",
        body: "我们不会出售、出租您的个人信息。仅在以下情况下可能共享：提供核心服务所必需的基础设施服务商（如 Supabase 身份验证和数据存储）；法律法规要求的情况。",
      },
      {
        heading: "五、未成年人信息保护",
        body: "本应用不面向未满 14 周岁的儿童。我们不会主动收集未满 14 周岁儿童的个人信息。若您是未满 14 周岁儿童的监护人，发现我们可能收集了您孩子的信息，请联系我们，我们将尽快删除。",
      },
      {
        heading: "六、数据保留与删除",
        body: "我们仅在为您提供服务所必要的期限内保留您的个人信息。账号注销后，我们将在 15 个工作日内删除您的个人信息，法律法规另有规定的除外。",
      },
      {
        heading: "七、您的权利",
        body: "您有权访问、更正和删除您的个人信息。您可以通过应用设置修改个人资料，或联系我们请求删除账号及相关数据。",
      },
      {
        heading: "八、隐私政策更新",
        body: "我们可能会不时更新本隐私政策。更新后的政策将在应用内公布，建议您定期查阅。",
      },
      {
        heading: "九、联系我们",
        body: "如您对本隐私政策有任何疑问，请通过 support@arborm.com 联系我们。",
      },
    ],
    copyright: "© 2026 独木成林 · 保留所有权利",
  },
  'zh-Hant': {
    back: "返回",
    title: "隱私政策",
    lastUpdated: "最後更新：",
    sections: [
      {
        heading: "一、我們收集的資訊",
        body: "為提供服務，我們可能收集以下資訊：您的註冊資訊（電子郵箱）、個人資料（暱稱、頭像）、內容瀏覽與收藏記錄，以及裝置基本資訊（作業系統版本、螢幕解析度）。",
      },
      {
        heading: "二、資訊使用目的",
        body: "我們收集的資訊僅用於：提供和改善服務、維護帳號安全、發送服務相關通知。我們不會將您的資訊用於與本應用無關的商業推廣。",
      },
      {
        heading: "三、資訊儲存與保護",
        body: "您的資料儲存在安全的雲端伺服器上，傳輸過程使用 TLS/SSL 加密。我們採取合理的技術和管理措施保護您的個人資訊安全。",
      },
      {
        heading: "四、第三方共享",
        body: "我們不會出售、出租您的個人資訊。僅在以下情況下可能共享：提供核心服務所必需的基礎設施服務商（如 Supabase 身份驗證和資料儲存）；法律法規要求的情況。",
      },
      {
        heading: "五、未成年人資訊保護",
        body: "本應用不面向未滿 14 周歲的兒童。我們不會主動收集未滿 14 周歲兒童的個人資訊。若您是未滿 14 周歲兒童的監護人，發現我們可能收集了您孩子的資訊，請聯繫我們，我們將盡快刪除。",
      },
      {
        heading: "六、資料保留與刪除",
        body: "我們僅在為您提供服務所必要的期限內保留您的個人資訊。帳號註銷後，我們將在 15 個工作日內刪除您的個人資訊，法律法規另有規定的除外。",
      },
      {
        heading: "七、您的權利",
        body: "您有權存取、更正和刪除您的個人資訊。您可以透過應用設定修改個人資料，或聯繫我們請求刪除帳號及相關資料。",
      },
      {
        heading: "八、隱私政策更新",
        body: "我們可能會不時更新本隱私政策。更新後的政策將在應用內公佈，建議您定期查閱。",
      },
      {
        heading: "九、聯繫我們",
        body: "如您對本隱私政策有任何疑問，請透過 support@arborm.com 聯繫我們。",
      },
    ],
    copyright: "© 2026 獨木成林 · 保留所有權利",
  },
  en: {
    back: "Back",
    title: "Privacy Policy",
    lastUpdated: "Last updated: ",
    sections: [
      {
        heading: "1. Information We Collect",
        body: "To provide our services, we may collect the following information: your registration details (email), profile information (nickname, avatar), content browsing and favorites history, and basic device information (OS version, screen resolution).",
      },
      {
        heading: "2. Purpose of Data Use",
        body: "The information we collect is used solely to: provide and improve our services, maintain account security, and send service-related notifications. We will not use your information for commercial promotions unrelated to the App.",
      },
      {
        heading: "3. Data Storage & Protection",
        body: "Your data is stored on secure cloud servers and encrypted during transmission using TLS/SSL. We employ reasonable technical and administrative measures to protect your personal information.",
      },
      {
        heading: "4. Third-Party Sharing",
        body: "We do not sell or rent your personal information. Data may only be shared with infrastructure providers essential to our core services (e.g., Supabase for authentication and data storage), or when required by law.",
      },
      {
        heading: "5. Children's Privacy",
        body: "The App is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe we may have collected information about your child, please contact us and we will promptly delete it.",
      },
      {
        heading: "6. Data Retention & Deletion",
        body: "We retain your personal information only for as long as necessary to provide our services. Upon account deletion, your data will be removed within 30 days, unless retention is required by applicable law.",
      },
      {
        heading: "7. Your Rights",
        body: "You have the right to access, correct, and delete your personal information. You can modify your profile through the App settings, or contact us to request account and data deletion. If you are in the European Economic Area, you also have the right to data portability and the right to restrict or object to processing of your personal data under the GDPR.",
      },
      {
        heading: "8. Policy Updates",
        body: "We may update this Privacy Policy from time to time. Updated policies will be published within the App. We recommend reviewing it periodically.",
      },
      {
        heading: "9. Contact Us",
        body: "If you have any questions about this Privacy Policy, please contact us at support@arborm.com.",
      },
    ],
    copyright: "© 2026 BanyanForest · All rights reserved.",
  },
}

export default function PrivacyContent({ initialLang }: { initialLang: LangKey }) {
  const [lang, setLang] = useState<LangKey>(initialLang)

  useEffect(() => {
    const urlLang = getLangFromURL()
    if (urlLang) setLang(urlLang)
  }, [])
  const t = content[lang]

  const switchLang = (newLang: LangKey) => {
    setLang(newLang)
    updateLangInBrowser(newLang)
  }

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
