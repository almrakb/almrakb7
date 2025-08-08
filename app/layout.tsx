// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "شركة المراكب للشحن والخدمات اللوجستية | المراكب",
  description:
    "المراكب للشحن: خدمة موثوقة لشحن الأثاث والطرود والبضائع داخل المملكة. أسعار منافسة وخدمة سريعة.",
  alternates: { canonical: "https://al6-vk76.vercel.app/" },
  openGraph: {
    title: "المراكب للشحن",
    description:
      "خدمة موثوقة لشحن الأثاث والطرود والبضائع داخل المملكة. أسعار منافسة وخدمة سريعة.",
    url: "https://al6-vk76.vercel.app/",
    siteName: "المراكب للشحن",
    locale: "ar_SA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Tahoma" }}>
        {children}
      </body>
    </html>
  );
}
