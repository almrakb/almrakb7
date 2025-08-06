'use client'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const whatsapp = document.querySelector('[href^="https://wa.me"], [href*="&type=whatsapp"]')
    if (whatsapp) {
      whatsapp.addEventListener('click', () => {
        (window as any).ttq?.track('Contact');
        (window as any).gtag?.('event', 'whatsapp_click');
      });
    }

    const form = document.querySelector('form');
    if (form) {
      form.addEventListener('submit', () => {
        (window as any).ttq?.track('Lead');
        (window as any).gtag?.('event', 'form_submit');
      });
    }
  }, []);

  return (
    <main>
      {/* ضع هنا محتوى صفحة الهبوط */}
      <h1>مرحباً بك في شركة المراكب للشحن والخدمات اللوجستية</h1>
    </main>
  )
}
