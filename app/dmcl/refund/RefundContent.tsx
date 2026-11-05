"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { LangKey, isWorld, defaultZhLang, updateLangInBrowser, getLangFromURL } from "@/lib/lang"

const content = {
  'zh-Hans': {
    back: "返回",
    title: "退款政策",
    lastUpdated: "最后更新：",
    sections: [
      {
        heading: "一、适用范围",
        body: "本退款政策适用于独木成林（BanyanDay）付费会员及相关订阅服务，由合肥阿博木科技有限公司提供。购买渠道包括 Apple App Store 应用内购买，以及未来通过网页或第三方支付服务商（如 Paddle、Lemon Squeezy 等）完成的订阅。",
      },
      {
        heading: "二、App Store 购买",
        body: "通过 Apple App Store 完成的订阅（含年度会员等）由 Apple 作为销售方处理取消与退款。您可在 Apple ID → 订阅 中取消自动续订。退款请通过 Apple 的退款流程申请（例如 reportaproblem.apple.com 或设备上的「报告问题」）。删除独木成林账号不会自动取消订阅，也不会产生退款；取消订阅与退款须分别通过 Apple 办理。",
      },
      {
        heading: "三、网页 / 第三方结账（Paddle、Lemon Squeezy 等）",
        body: "若您通过网页或第三方商户记录方（Merchant of Record，如 Paddle、Lemon Squeezy 等）购买订阅，可登录该服务商的客户门户取消续订，或发送邮件至 hello@arborm.com 申请协助。在购买后 14 日内，若会员权益尚未被实质使用，您可申请退款，具体以适用法律及该支付服务商的买家保护政策为准。退款可能由该服务商作为商户记录方直接处理。",
      },
      {
        heading: "四、部分期限与续订",
        body: "取消订阅通常仅停止未来自动续订，已开始的计费周期一般不按未使用天数按比例退款，除非适用法律或支付服务商政策另有要求。",
      },
      {
        heading: "五、如何联系我们",
        body: "如需协助，请发送邮件至 hello@arborm.com，并尽可能提供订单号、购买邮箱，以及 Apple 交易号或其他支付凭证，以便我们尽快处理。",
      },
      {
        heading: "六、政策更新",
        body: "我们可能适时更新本退款政策。更新版本将在本页面公布，并注明最后更新日期。继续购买或使用付费会员即视为知悉更新后的政策。",
      },
      {
        heading: "七、适用法律",
        body: "本政策的订立、执行和解释适用中华人民共和国法律。因本政策产生的争议，双方应友好协商；协商不成的，可向合肥阿博木科技有限公司所在地有管辖权的人民法院提起诉讼。您亦可能享有所在地强制性消费者保护法赋予的权利，该等权利不受本政策限制。",
      },
    ],
    copyright: "© 2026 独木成林 · 保留所有权利",
  },
  'zh-Hant': {
    back: "返回",
    title: "退款政策",
    lastUpdated: "最後更新：",
    sections: [
      {
        heading: "一、適用範圍",
        body: "本退款政策適用於獨木成林（BanyanDay）付費會員及相關訂閱服務，由合肥阿博木科技有限公司提供。購買管道包括 Apple App Store 應用內購買，以及未來透過網頁或第三方支付服務商（如 Paddle、Lemon Squeezy 等）完成的訂閱。",
      },
      {
        heading: "二、App Store 購買",
        body: "透過 Apple App Store 完成的訂閱（含年度會員等）由 Apple 作為銷售方處理取消與退款。您可在 Apple ID → 訂閱 中取消自動續訂。退款請透過 Apple 的退款流程申請（例如 reportaproblem.apple.com 或裝置上的「回報問題」）。刪除獨木成林帳號不會自動取消訂閱，也不會產生退款；取消訂閱與退款須分別透過 Apple 辦理。",
      },
      {
        heading: "三、網頁 / 第三方結帳（Paddle、Lemon Squeezy 等）",
        body: "若您透過網頁或第三方商戶記錄方（Merchant of Record，如 Paddle、Lemon Squeezy 等）購買訂閱，可登入該服務商的客戶入口取消續訂，或發送郵件至 hello@arborm.com 申請協助。在購買後 14 日內，若會員權益尚未被實質使用，您可申請退款，具體以適用法律及該支付服務商的買家保護政策為準。退款可能由該服務商作為商戶記錄方直接處理。",
      },
      {
        heading: "四、部分期限與續訂",
        body: "取消訂閱通常僅停止未來自動續訂，已開始的計費週期一般不按未使用天數按比例退款，除非適用法律或支付服務商政策另有要求。",
      },
      {
        heading: "五、如何聯繫我們",
        body: "如需協助，請發送郵件至 hello@arborm.com，並盡可能提供訂單號、購買郵箱，以及 Apple 交易號或其他支付憑證，以便我們盡快處理。",
      },
      {
        heading: "六、政策更新",
        body: "我們可能適時更新本退款政策。更新版本將在本頁面公佈，並註明最後更新日期。繼續購買或使用付費會員即視為知悉更新後的政策。",
      },
      {
        heading: "七、適用法律",
        body: "本政策的訂立、執行和解釋適用中華人民共和國法律。因本政策產生的爭議，雙方應友好協商；協商不成的，可向合肥阿博木科技有限公司所在地有管轄權的人民法院提起訴訟。您亦可能享有所在地強制性消費者保護法賦予的權利，該等權利不受本政策限制。",
      },
    ],
    copyright: "© 2026 獨木成林 · 保留所有權利",
  },
  en: {
    back: "Back",
    title: "Refund Policy",
    lastUpdated: "Last updated: ",
    sections: [
      {
        heading: "1. Scope",
        body: "This Refund Policy applies to paid membership and related subscriptions for BanyanDay (独木成林), provided by Hefei ArborM Technology Co., Ltd. Purchase channels include Apple App Store in-app purchases and, when available, web or third-party checkout providers (such as Paddle, Lemon Squeezy, and similar).",
      },
      {
        heading: "2. App Store Purchases",
        body: "Subscriptions purchased through the Apple App Store (including yearly membership) are sold by Apple. Cancel auto-renewal in Apple ID → Subscriptions. Request refunds through Apple's process (for example reportaproblem.apple.com or \"Report a Problem\" on your device). Deleting your BanyanDay account does not cancel a subscription or issue a refund; cancellation and refunds must be handled with Apple separately.",
      },
      {
        heading: "3. Web / Third-Party Checkout (Paddle, Lemon Squeezy, etc.)",
        body: "If you purchase via the web or a third-party Merchant of Record (such as Paddle or Lemon Squeezy), cancel renewal through that provider's customer portal, or email hello@arborm.com for help. Within 14 days of purchase, if membership benefits have not been substantially used, you may request a refund, subject to applicable law and the payment provider's buyer-protection policies. The provider may process the refund as Merchant of Record.",
      },
      {
        heading: "4. Partial Periods and Renewals",
        body: "Canceling a subscription generally stops future renewals only. We do not typically issue pro-rata refunds for unused time in an already-started billing period, unless required by law or the payment provider's policy.",
      },
      {
        heading: "5. How to Contact Us",
        body: "For assistance, email hello@arborm.com and include your order ID, purchase email, and Apple transaction ID or other payment proof when available so we can help promptly.",
      },
      {
        heading: "6. Policy Updates",
        body: "We may update this Refund Policy from time to time. The updated version will be posted on this page with a revised last-updated date. Continued purchase or use of paid membership constitutes notice of the updated policy.",
      },
      {
        heading: "7. Governing Law",
        body: "This policy is governed by the laws of the People's Republic of China. Disputes should first be resolved amicably; if negotiation fails, either party may bring a claim before a court of competent jurisdiction where Hefei ArborM Technology Co., Ltd. is located. You may also have mandatory consumer-protection rights under the laws of your place of residence, which this policy does not limit.",
      },
    ],
    copyright: "© 2026 BanyanForest · All rights reserved.",
  },
}

export default function RefundContent({ initialLang }: { initialLang: LangKey }) {
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
        <p className="text-foreground/40 text-xs mb-8">{t.lastUpdated}2026-11-06</p>
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
