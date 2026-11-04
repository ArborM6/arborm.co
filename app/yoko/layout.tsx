import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Yoko",
  description: "脑子里总是长出一些奇怪的问题",
}

export default function YokoLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
