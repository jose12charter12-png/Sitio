import { LanguageDetection } from "@/components/language-detection";
export default function RootPage() { return <><LanguageDetection /><main className="empty-state"><p>Loading your language…</p><noscript><a href="/es">Continuar en español</a> · <a href="/en">Continue in English</a></noscript></main></>; }
