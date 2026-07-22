export type LangKey = 'en' | 'zh-Hant' | 'zh-Hans'

export const REGION = process.env.NEXT_PUBLIC_REGION || "china"
export const isWorld = REGION === "world"
export const defaultZhLang: LangKey = 'zh-Hans'

const validLangs: LangKey[] = ['en', 'zh-Hant', 'zh-Hans']

/**
 * Resolve initial language from URL ?lang= parameter.
 * Falls back to Simplified Chinese.
 */
export function resolveInitialLang(langParam?: string): LangKey {
  if (langParam && validLangs.includes(langParam as LangKey)) {
    return langParam as LangKey
  }
  return defaultZhLang
}

/**
 * Read ?lang= from the current browser URL. Returns null on the server
 * or when no valid lang param is present.
 */
export function getLangFromURL(): LangKey | null {
  if (typeof window === 'undefined') return null
  const params = new URLSearchParams(window.location.search)
  const value = params.get('lang')
  if (value && validLangs.includes(value as LangKey)) {
    return value as LangKey
  }
  return null
}

/**
 * Update browser URL and html lang attribute when language changes.
 * Call this from client components when the user toggles language.
 */
export function updateLangInBrowser(newLang: LangKey) {
  if (typeof window !== 'undefined') {
    const url = new URL(window.location.href)
    url.searchParams.set('lang', newLang)
    window.history.replaceState({}, '', url.toString())
    document.documentElement.lang = newLang === 'en' ? 'en' : newLang
  }
}
