/**
 * Service descriptions are original content for Nirvana Integrated Clinic.
 */

export type ServiceCatalogEntry = {
  slug: string
  title: string
  shortDescription: string
  image: string
  imageAlt: string
  intro: string
  highlights: string[]
}

export const servicesCatalog: ServiceCatalogEntry[] = [
  {
    slug: 'specialized-wellness-programs',
    title: 'Specialized wellness programs',
    shortDescription:
      'Multi-week tracks for detoxification habits, metabolic reset, stress recovery, or targeted goals with a fixed schedule and clear milestones.',
    image: '/yoga-rehab.png',
    imageAlt: 'Structured wellness program with movement and restorative therapy',
    intro:
      'Programs bundle consultations, therapies, and accountability checkpoints so you are never guessing what comes next. Each track begins with baseline metrics you care about—energy, waist circumference, sleep minutes, pain scores—then adjusts weekly based on response.',
    highlights: ['Clear weekly rhythm', 'Metrics at start and finish', 'Written take-home plans'],
  },
  {
    slug: 'wellness-preventive-healthcare',
    title: 'Wellness and preventive healthcare',
    shortDescription:
      'Early risk conversations, vitals-style monitoring where appropriate, and lifestyle design to stay ahead of chronic disease.',
    image: '/mud-therapy.png',
    imageAlt: 'Preventive naturopathic care and grounding therapies',
    intro:
      'Prevention is not a single screening—it is the sum of sleep, food timing, social connection, and joyful movement. We help you spot blind spots before they become diagnoses, then install low-friction habits that age well.',
    highlights: ['Proactive, not reactive', 'Low-friction habit design', 'Family-history informed'],
  },
  {
    slug: 'customized-health-packages',
    title: 'Customized health packages',
    shortDescription:
      'Prepaid bundles that mix doctor time, therapies, and follow-up messages—priced for transparency and predictable budgeting.',
    image: '/Therapy-room.png',
    imageAlt: 'Personalised health package planning at the clinic',
    intro:
      'Packages remove the mental load of “should I book another session?” They are assembled after an initial assessment so every hour on the calendar earns its place. Upgrades or downshifts stay possible if your body responds faster or slower than expected.',
    highlights: ['Transparent inclusions', 'Flexible modality credits', 'Designed after assessment'],
  },
  {
    slug: 'workshops-training',
    title: 'Workshops and community training',
    shortDescription:
      'Evening or weekend small-group modules on cooking skills, breath training, desk stretches, or parent–child wellness.',
    image: '/yogalife.jpeg',
    imageAlt: 'Group workshop and wellness training session',
    intro:
      'Learning together lowers the activation energy for change. Workshops are practical: you leave with a printed recipe frame, a three-minute breathing script, or a stretch flow photographed on your own phone.',
    highlights: ['Hands-on materials', 'Beginner-friendly', 'Corporate options'],
  },
  {
    slug: 'online-teleconsultation',
    title: 'Online and teleconsultation',
    shortDescription:
      'Secure video visits for diet tweaks, herb safety checks, meditation coaching, or follow-up when travel is difficult.',
    image: '/Therapy-room.png',
    imageAlt: 'Professional video consultation setup',
    intro:
      'Remote care suits stable maintenance phases, second opinions on lifestyle plans, and education-heavy sessions. We are transparent about limits: acute chest pain, neurological emergencies, or unclear severe symptoms belong in emergency services, not a video window.',
    highlights: ['Secure scheduling', 'Clear scope of remote care', 'Written visit summaries'],
  },
  {
    slug: 'additional-healing-therapies',
    title: 'Complementary healing therapies',
    shortDescription:
      'Access to massage, hydrotherapy, thermal applications, and restorative bodywork when they support your main treatment plan.',
    image: '/swedana.png',
    imageAlt: 'Steam and hydrotherapy for relaxation and circulation',
    intro:
      'These modalities are not random add-ons; they are prescribed windows that improve sleep, soften pain spikes, or accelerate recovery between exercise days. Therapists communicate with your lead clinician so pressure, temperature, and duration stay coherent.',
    highlights: ['Clinician-coordinated', 'Safety screening first', 'Recovery-oriented'],
  },
  {
    slug: 'day-care-services',
    title: 'Day-care wellness visits',
    shortDescription:
      'Same-day multi-hour stays combining scheduled therapies, supervised rest, and nourishing meals or infusions as per plan.',
    image: '/treatment-area.png',
    imageAlt: 'Clinical day-care area for extended wellness visits',
    intro:
      'Think of this as a focused retreat without overnight travel. You arrive in comfortable clothes, follow a printed itinerary, and leave with homework and next appointment locked. Ideal when several modalities work best back-to-back.',
    highlights: ['Structured itinerary', 'Supervised rest between sessions', 'Meal guidance included'],
  },
  {
    slug: 'home-care',
    title: 'Home-care support',
    shortDescription:
      'Protocols and caregiver coaching so healing continues in your own space—with clear boundaries on what must remain in-clinic.',
    image: '/oil-treatment.png',
    imageAlt: 'Home-aligned therapeutic care and comfort measures',
    intro:
      'Home care extends independence: we teach safe hydrotherapy substitutes, kitchen staples for simple anti-inflammatory meals, and bed mobility drills after certain surgeries when medically cleared. When hands-on home nursing is required, we clarify referral pathways.',
    highlights: ['Family-friendly instructions', 'Safety-first scope', 'Continuity between visits'],
  },
  {
    slug: 'geriatrics-care',
    title: 'Geriatrics-focused naturopathic support',
    shortDescription:
      'Gentle pacing for mobility, bone health, sleep architecture, digestion, and mood—with attention to polypharmacy and fall risk.',
    image: '/foot-therapy.png',
    imageAlt: 'Gentle therapeutic care suitable for senior wellness goals',
    intro:
      'Aging well is not about reversing years—it is about preserving confidence, appetite, social connection, and pain-free movement windows. We favor low-impact therapies, abundant hydration reminders, and communication with adult children when consent allows.',
    highlights: ['Fall-aware exercise', 'Medication awareness', 'Family-inclusive planning'],
  },
  {
    slug: 'counseling-mind-body',
    title: 'Counseling and mind–body support',
    shortDescription:
      'Guided conversations that address stress habits, emotional eating, grief, or anxiety as part of an integrated healing plan.',
    image: '/ShidhoraOil.png',
    imageAlt: 'Calming environment for mind–body counseling support',
    intro:
      'Our counseling lens stays practical: we explore thought patterns and somatic cues, then tie insights to sleep schedules, boundary setting, and breath skills. This is not a substitute for psychiatric care when severe depression, mania, or self-harm risk is present—we escalate responsibly.',
    highlights: ['Integrated with medical plan', 'Short-term focus available', 'Clear escalation ethics'],
  },
]

export function getServiceBySlug(slug: string): ServiceCatalogEntry | undefined {
  return servicesCatalog.find((s) => s.slug === slug)
}
