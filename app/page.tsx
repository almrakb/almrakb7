// app/page.tsx
"use client";

export default function HomePage() {
  const phone = "+9665XXXXXXXX"; // عدّل الرقم لاحقًا

  const openWhatsApp = () => {
    const msg = encodeURIComponent("مرحباً، أود الحصول على عرض سعر للشحن.");
    window.open(`https://wa.me/${phone.replace("+", "")}?text=${msg}`, "_blank");
  };

  return (
    <main style={{ padding: "32px" }}>
      <h1 style={{ marginBottom: 16 }}>
        المراكب للشحن — خدمة موثوقة لجميع أنحاء المملكة
      </h1>
      <p style={{ marginBottom: 24 }}>
        ننقل الأثاث والطرود والبضائع بسرعة وأمان وبأسعار منافسة.
      </p>
      <button
        onClick={openWhatsApp}
        style={{
          background: "#25D366",
          color: "#fff",
          padding: "12px 20px",
          borderRadius: 8,
          border: "none",
          cursor: "pointer",
        }}
      >
        تواصل واتساب
      </button>
    </main>
  );
}
