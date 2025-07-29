import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "المراكب للشحن - خدمة شحن موثوقة لجميع أنحاء المملكة",
  description:
    "نشحن الأثاث والطرود والبضائع من الرياض إلى جدة وجيزان وخميس مشيط وجميع مدن المملكة. نخدم القطعة الواحدة والكميات الكبيرة مع توفير شاحنات خاصة عند الطلب.",
  keywords: "شحن, نقل, أثاث, طرود, بضائع, الرياض, جدة, جيزان, خميس مشيط, المراكب للشحن",
  authors: [{ name: "المراكب للشحن" }],
  openGraph: {
    title: "المراكب للشحن - خدمة شحن موثوقة",
    description: "خدمات شحن احترافية لجميع أنحاء المملكة العربية السعودية",
    type: "website",
    locale: "ar_SA",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
