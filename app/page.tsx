'use client'

import { useEffect } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="ar">
      <head>
        {/* ✅ Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-78MQL5N3P" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-78MQL5N3P');
          `}
        </Script>

        {/* ✅ TikTok Pixel */}
        <Script id="tiktok-pixel" strategy="afterInteractive">
          {`
            !function (w, d, t) {
              w.TiktokAnalyticsObject = t;
              var ttq = w[t] = w[t] || [];
              ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"];
              ttq.setAndDefer = function (t, e) {
                t[e] = function () {
                  t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
                }
              };
              for (var i = 0; i < ttq.methods.length; i++) {
                ttq.setAndDefer(ttq, ttq.methods[i])
              }
              ttq.load = function (e) {
                var n = "https://analytics.tiktok.com/i18n/pixel/events.js";
                ttq._i = ttq._i || {};
                ttq._i[e] = ttq._i[e] || [];
                ttq._i[e].t = +new Date;
                ttq._i[e].e = [];
                ttq._i[e].q = [];
                ttq._i[e].q.push = function () {
                  ttq._i[e].e.push(arguments);
                };
                var a = document.createElement("script");
                a.type = "text/javascript";
                a.async = !0;
                a.src = n + "?sdkid=" + e + "&lib=ttq";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(a, s);
              };
              ttq.load('D29MT83C7TUCUVSB65KG');
              ttq.page();
            }(window, document, 'ttq');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <main>
          {/* محتوى الصفحة هنا */}
        </main>
      </body>
    </html>
  )
}
