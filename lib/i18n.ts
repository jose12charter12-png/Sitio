import type { Locale } from "./config";
export const messages = {
  es: {
    nav: { home: "Inicio", wellness: "Bienestar", fitness: "Fitness", sleep: "Sueño", recovery: "Recuperación", about: "Nosotros" },
    heroEyebrow: "BIENESTAR CON INFORMACIÓN CLARA",
    heroTitle: "Pequeños hábitos. Una vida más equilibrada.",
    heroText: "Ideas prácticas y contenido responsable sobre bienestar, movimiento, sueño y recuperación para acompañarte en tu día a día.",
    explore: "Explorar artículos", latest: "Ideas para sentirte mejor, a tu ritmo", featured: "Lecturas destacadas",
    read: "Leer artículo", minutes: "de lectura", newsletter: "Ideas útiles, sin ruido.",
    newsletterText: "Próximamente: novedades editoriales y recursos prácticos. No enviaremos mensajes sin tu consentimiento.",
    about: "Un espacio editorial dedicado a hábitos sostenibles y educación general sobre bienestar.",
    disclaimer: "El contenido es informativo y no sustituye el consejo de profesionales de la salud.",
    footer: "Contenido educativo. Consulta a un profesional para recibir orientación personal.",
    language: "Idioma", homeLabel: "Volver al inicio", privacy: "Privacidad", cookies: "Cookies", terms: "Términos", affiliates: "Divulgación de afiliados", contact: "Contacto"
  },
  en: {
    nav: { home: "Home", wellness: "Wellness", fitness: "Fitness", sleep: "Sleep", recovery: "Recovery", about: "About" },
    heroEyebrow: "WELLBEING, MADE CLEAR",
    heroTitle: "Small habits. A more balanced life.",
    heroText: "Practical ideas and responsible content about wellbeing, movement, sleep and recovery for everyday life.",
    explore: "Explore articles", latest: "Feel-good ideas, at your own pace", featured: "Featured reads",
    read: "Read article", minutes: "read", newsletter: "Useful ideas, without the noise.",
    newsletterText: "Coming soon: editorial updates and practical resources. We will not email you without consent.",
    about: "An editorial space dedicated to sustainable habits and general wellbeing education.",
    disclaimer: "Content is informational and does not replace advice from healthcare professionals.",
    footer: "Educational content. Consult a professional for personal guidance.",
    language: "Language", homeLabel: "Back to home", privacy: "Privacy", cookies: "Cookies", terms: "Terms", affiliates: "Affiliate disclosure", contact: "Contact"
  }
} satisfies Record<Locale, Record<string, any>>;
