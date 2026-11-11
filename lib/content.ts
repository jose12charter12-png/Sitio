import type { Locale } from "./config";

export type Article = {
  slug: string; category: string; readTime: string;
  title: Record<Locale, string>; excerpt: Record<Locale, string>;
  body: Record<Locale, string[]>;
};

export const articles: Article[] = [
  {
    slug: "build-a-consistent-sleep-routine", category: "Sleep", readTime: "6 min",
    title: { es: "Cómo construir una rutina de sueño constante", en: "How to build a consistent sleep routine" },
    excerpt: { es: "Hábitos sencillos que pueden ayudarte a preparar el cuerpo y el entorno para descansar mejor.", en: "Simple habits that can help prepare your body and environment for better rest." },
    body: {
      es: ["Dormir bien depende de varios factores y no existe una rutina idéntica para todas las personas. Mantener horarios relativamente estables puede ayudar a organizar el descanso.", "Prueba crear un periodo de desconexión antes de acostarte: reduce las pantallas, baja la intensidad de las luces y elige una actividad tranquila como leer.", "Procura que el dormitorio sea oscuro, silencioso y cómodo. Ajusta la temperatura y limita las interrupciones que puedas controlar.", "Si los problemas de sueño son persistentes, afectan tu vida diaria o se acompañan de otros síntomas, consulta a un profesional sanitario. Este contenido es educativo y no sustituye una evaluación médica."],
      en: ["Good sleep depends on several factors, and no single routine works for everyone. Keeping reasonably consistent sleep and wake times may help structure rest.", "Create a wind-down period before bed: reduce screen use, dim the lights and choose a quiet activity such as reading.", "Aim for a bedroom that is dark, quiet and comfortable. Adjust the temperature and reduce avoidable interruptions.", "If sleep problems persist, affect daily life or occur with other symptoms, speak with a qualified healthcare professional. This educational article is not a substitute for medical advice."]
    }
  },
  {
    slug: "beginner-strength-training", category: "Fitness", readTime: "7 min",
    title: { es: "Entrenamiento de fuerza: una guía para principiantes", en: "Strength training: a beginner's guide" },
    excerpt: { es: "Principios básicos para empezar de forma gradual, aprender la técnica y mantener la constancia.", en: "The basics of starting gradually, learning technique and building consistency." },
    body: {
      es: ["El entrenamiento de fuerza puede realizarse con el peso corporal, bandas elásticas, mancuernas o máquinas. Lo importante al comenzar es elegir movimientos que puedas controlar.", "Empieza con pocas sesiones semanales y deja tiempo para recuperarte. Aprende primero la técnica con una carga ligera y aumenta la dificultad poco a poco.", "Una sesión equilibrada puede incluir movimientos de empuje, tracción, sentadilla o bisagra de cadera, adaptados a tu capacidad.", "Si tienes una lesión, una condición médica o dolor durante el ejercicio, busca orientación profesional antes de continuar."],
      en: ["Strength training can use body weight, resistance bands, dumbbells or machines. When starting out, choose movements you can control comfortably.", "Begin with a manageable number of weekly sessions and allow time to recover. Learn technique with light resistance before gradually increasing difficulty.", "A balanced session may include pushing, pulling, squat or hip-hinge patterns adapted to your ability.", "If you have an injury, medical condition or pain during exercise, seek professional guidance before continuing."]
    }
  },
  {
    slug: "active-recovery-basics", category: "Recovery", readTime: "5 min",
    title: { es: "Recuperación activa: conceptos básicos", en: "Active recovery: the essentials" },
    excerpt: { es: "Qué significa moverse suavemente entre entrenamientos y cómo adaptar la actividad a tu energía.", en: "What gentle movement between workouts means and how to adapt it to your energy." },
    body: {
      es: ["La recuperación activa consiste en realizar actividad ligera en lugar de una sesión exigente. Puede incluir caminar, movilidad suave o ciclismo tranquilo.", "La intensidad debe permitirte hablar con comodidad. La recuperación no es una obligación: descansar por completo también puede ser apropiado.", "Presta atención a la fatiga, al sueño y a cómo te sientes. Reduce la actividad si aparece dolor nuevo, mareo o malestar.", "Las necesidades individuales varían. Si tienes dudas relacionadas con una lesión o condición de salud, consulta a un profesional."],
      en: ["Active recovery means choosing light activity instead of a demanding workout. It may include walking, gentle mobility or easy cycling.", "Keep the effort low enough to speak comfortably. Active recovery is not mandatory; complete rest may also be appropriate.", "Pay attention to fatigue, sleep and how you feel. Stop or reduce activity if new pain, dizziness or discomfort appears.", "Individual needs vary. Ask a qualified professional if you have questions related to an injury or health condition."]
    }
  }
];

export const categories = [
  { slug: "wellness", es: "Bienestar", en: "Wellness", descriptionEs: "Hábitos sostenibles para el día a día.", descriptionEn: "Sustainable habits for everyday life." },
  { slug: "fitness", es: "Fitness", en: "Fitness", descriptionEs: "Movimiento, fuerza y actividad física.", descriptionEn: "Movement, strength and physical activity." },
  { slug: "sleep", es: "Sueño", en: "Sleep", descriptionEs: "Rutinas y entorno para descansar.", descriptionEn: "Routines and environments for rest." },
  { slug: "recovery", es: "Recuperación", en: "Recovery", descriptionEs: "Descanso y equilibrio después de la actividad.", descriptionEn: "Rest and balance after activity." }
];

export function getArticle(slug: string) { return articles.find((article) => article.slug === slug); }
