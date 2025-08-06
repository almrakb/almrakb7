import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=[
              "page","track","identify","instances","debug","on","off","once","ready",
              "alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"];
              ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};
              ttq.instance=function(t){var e=ttq._i[t]||[];return{on:function(n,i){e.push([n,i])},off:function(n,i){},track:function(n,i){e.push([n,i])}}};
              ttq.load=function(e,n){var i=d.createElement("script");i.type="text/javascript",i.async=!0,i.src="https://analytics.tiktok.com/i18n/pixel/events.js";
              var o=d.getElementsByTagName("script")[0];o.parentNode.insertBefore(i,o)};
              ttq.load('D29MT83C7TUCUVSB65KGa');ttq.page();
            }(window, document, 'ttq');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
