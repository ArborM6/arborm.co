import { defaultZhLang, isWorld } from '@/lib/lang'
import HomeContent from './HomeContent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: isWorld ? '阿博木' : '阿博木',
  description: isWorld ? '我們用心打造每一款應用' : '我们用心打造每一款应用',
}

export default function Home() {
  return <HomeContent initialLang={defaultZhLang} />
}
