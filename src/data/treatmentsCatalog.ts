/**
 * Treatment topics and copy are written for Nirvana Integrated Clinic.
 * Wording is original and not copied from third-party websites.
 */

export type TreatmentCatalogEntry = {
  slug: string
  title: string
  shortDescription: string
  image: string
  imageAlt: string
  intro: string
  highlights: string[]
}

export const treatmentsCatalog: TreatmentCatalogEntry[] = [
  {
    slug: 'womens-health-holistic-wellness',
    title: "Women's health and holistic wellness",
    shortDescription:
      'Cycle-aware nutrition, stress care, and natural therapies that support hormonal rhythm, fertility goals, and long-term vitality.',
    image: '/care.png',
    imageAlt: 'Calm clinical setting for holistic women’s wellness and supportive care',
    intro:
      'We take a whole-person view of women’s health—looking at sleep, digestion, movement, and emotional load alongside hormones. Plans are paced to your life stage, whether you are navigating menstrual pain, PCOS patterns, perimenopause, or simply want steadier energy and mood.',
    highlights: [
      'Personalized, dignified consultations',
      'Emphasis on sustainable habits',
      'Support for mind–body connection',
    ],
  },
  {
    slug: 'stress-lifestyle-disease-management',
    title: 'Stress and lifestyle-related conditions',
    shortDescription:
      'Structured support for burnout, poor sleep, weight drift, blood pressure variability, and other patterns tied to modern routines.',
    image: '/ShidhoraOil.png',
    imageAlt: 'Relaxation-focused therapy environment for stress and nervous system care',
    intro:
      'Many chronic issues begin as “busy life” problems—skipped meals, late screens, sedentary weeks, and shallow breathing. We help you map those triggers, then replace them with small, repeatable wins that rebuild resilience without an unrealistic overhaul on day one.',
    highlights: [
      'Root-cause lifestyle mapping',
      'Skills you can use between visits',
      'Gradual, confidence-building steps',
    ],
  },
  {
    slug: 'skin-hair-natural-care',
    title: 'Skin and hair support through natural care',
    shortDescription:
      'Nutrition, detox-style habits, and gentle external therapies aimed at clearer skin and stronger hair growth cycles.',
    image: '/oil-treatment.png',
    imageAlt: 'Therapeutic oil application supporting skin and scalp wellness',
    intro:
      'Skin and hair often mirror digestion, hydration, inflammation, and micronutrient status. We combine internal support with external routines that respect your barrier—no harsh promises, just consistent care that addresses common drivers like poor elimination, low iron, or high stress.',
    highlights: [
      'Barrier-friendly external care',
      'Digestion and inflammation focus',
      'Realistic timelines',
    ],
  },
  {
    slug: 'acupuncture-traditional-healing',
    title: 'Acupuncture and traditional healing methods',
    shortDescription:
      'Point-based therapy and related modalities to ease pain, improve sleep, and support organ systems through nervous-system regulation.',
    image: '/foot-therapy.png',
    imageAlt: 'Acupuncture-style therapeutic session in a quiet treatment room',
    intro:
      'Our acupuncture-style care follows classical channel theory while staying attentive to modern anatomy and safety. Sessions are unhurried: we listen, palpate where appropriate, and choose points based on your presentation that day—not a rigid cookie-cutter list.',
    highlights: [
      'Calm, explained procedures',
      'Needle-sensitive options available',
      'Integration with wider naturopathic plans',
    ],
  },
  {
    slug: 'naturopathy-integrative-care',
    title: 'Naturopathy and integrative lifestyle medicine',
    shortDescription:
      'Foundational natural medicine—diet, hydrotherapy, physical culture, and rational use of nature cure tools alongside conventional care.',
    image: '/mud-therapy.png',
    imageAlt: 'Earth and mud-based naturopathic therapy for grounding and inflammation support',
    intro:
      'Naturopathy, as we practice it, is structured lifestyle medicine rooted in stimulation of vitality, elimination, and sound sleep. We teach you how to read your own signals—energy, appetite, bowels, mood—and respond with habits that match the season and your capacity.',
    highlights: [
      'Education-forward visits',
      'Foundational habits first',
      'Safe co-management with allopathy',
    ],
  },
  {
    slug: 'manipulative-therapies',
    title: 'Manual and manipulative therapies',
    shortDescription:
      'Hands-on joint mobilization, soft-tissue work, and alignment-focused techniques to improve range and reduce mechanical pain.',
    image: '/yoga-rehab.png',
    imageAlt: 'Hands-on manual therapy for mobility and postural balance',
    intro:
      'Restricted joints and guarded muscles often perpetuate pain loops. Our manual therapists apply graded forces—never theatrical—to restore glide, reduce protective spasm, and reintroduce confident movement. You stay active in the process with simple homework that reinforces gains.',
    highlights: [
      'Graded, consent-based touch',
      'Movement homework included',
      'Posture and ergonomics tips',
    ],
  },
  {
    slug: 'physiotherapy-pain-management',
    title: 'Physiotherapy and pain rehabilitation',
    shortDescription:
      'Exercise progressions, manual therapy, and pacing strategies for back and neck pain, joint issues, and post-injury return to activity.',
    image: '/yogalife.jpeg',
    imageAlt: 'Movement-based rehabilitation and physiotherapy-style exercise',
    intro:
      'Pain is both a sensation and a learning problem in the nervous system. We blend classic physiotherapy exercise dosing with education about flare management so you rebuild capacity without boom–bust cycles.',
    highlights: [
      'Clear progression benchmarks',
      'Flare-up planning',
      'Blend of hands-on and exercise',
    ],
  },
  {
    slug: 'yoga-meditation',
    title: 'Yoga and meditation for clinical goals',
    shortDescription:
      'Small-group or one-to-one sessions that use breath, mindful movement, and stillness to support anxiety, blood pressure, flexibility, and sleep.',
    image: '/yoga-rehab.png',
    imageAlt: 'Therapeutic yoga and meditation in a bright, peaceful studio',
    intro:
      'Yoga here is therapeutic, not performative. Poses are modified for joint history, blood pressure, and balance. Meditation is short, repeatable, and tied to nervous-system outcomes you can feel—lower resting breath rate, softer shoulders, quieter mental chatter.',
    highlights: [
      'Accessible sequencing',
      'Breath-first regulation',
      'Therapeutic intent in every block',
    ],
  },
]

export function getTreatmentBySlug(slug: string): TreatmentCatalogEntry | undefined {
  return treatmentsCatalog.find((t) => t.slug === slug)
}
