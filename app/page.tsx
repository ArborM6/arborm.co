import { defaultZhLang } from '@/lib/lang'
import HomeContent from './HomeContent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '阿博木',
  description: '我们用心打造每一款应用',
}

export default function Home() {
  return <HomeContent initialLang={defaultZhLang} />
}
