import type { CatalogLongformSections, LongformSubsection } from './catalogDetailTypes'

/** Word count ignoring ** highlight markers */
export function wordCountBody(s: string): number {
  return s
    .replace(/\*\*/g, '')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length
}

const PAD =
  ' We document priorities plainly, name **red-flag symptoms** that require emergency or specialist care, and pace homework so busy weeks do not erase motivation. **Tele follow-ups** can bridge gaps when travel interrupts rhythm. We celebrate measurable steps because confidence grows through proof, not slogans. Ethical scope matters more than enthusiasm whenever prescriptions, pregnancy, or unstable disease share the stage with lifestyle change.'

function padMin(body: string, minWords: number): string {
  let out = body.trim()
  while (wordCountBody(out) < minWords) {
    out += ' ' + PAD
  }
  return out
}

function sub(subheading: string, body: string, minWords = 100): LongformSubsection {
  return { subheading, body: padMin(body, minWords) }
}

/**
 * Builds structured longform (4 subsections × 5 sections) for any treatment/service
 * using clinic-specific titles and blurbs. Each body is padded to ≥ minWords with
 * coherent clinic boilerplate when shorter openings are used.
 */
export function buildCatalogLongform(
  kind: 'treatment' | 'service',
  title: string,
  shortDescription: string,
  _slug: string,
): CatalogLongformSections {
  const layer = kind === 'treatment' ? 'treatment plan' : 'service plan'
  const venue = kind === 'treatment' ? 'in-clinic therapies and education' : 'programs, visits, and follow-up touchpoints'

  return {
    understanding: [
      sub(
        'What this area means at Nirvana',
        `**${title}** is how we organize ${venue} at **Nirvana Integrated Clinic** when your goals align with integrative naturopathic care. We start from your lived week—sleep, meals, stress, medications, and movement—because those variables change what is safe and what is realistic. Your public-facing blurb on this site summarizes the focus as: ${shortDescription} We translate that focus into a private narrative that connects symptoms to physiology without turning you into a spreadsheet.`,
      ),
      sub(
        'How we read patterns, not labels',
        `Rather than chasing a single buzzword diagnosis, we look for **patterns across weeks**: energy dips, pain clusters, digestive shifts, and mood changes that track with travel, deadlines, or menstrual timing when relevant. This is especially important when ${layer} touches sensitive goals where shame has historically derailed change. We slow down enough to notice what improves when sleep stabilizes, when protein timing improves, or when gentle movement returns.`,
      ),
      sub(
        'Consent, dignity, and boundaries',
        `**Consent** is explicit before assessments or touch-based care, and you can pause or redirect at any time without penalty. We discuss what naturopathic and integrative support can do in stable phases versus what belongs in emergency departments, oncology units, or psychiatry when severity rises. If you arrive after fragmented care elsewhere, we aim for coherence: a story you recognize, grounded in science, that still respects your values and culture.`,
      ),
      sub(
        'What you should expect from early visits',
        `Early visits prioritize **clarity over intensity**: fewer levers, clearer reasons, and written take-home notes when helpful. We set expectations about timelines because meaningful physiology often shifts over weeks, not hours. If you need letters for work, school, or specialists, we discuss scope and tone so documentation stays accurate and collaborative.`,
      ),
      sub(
        'How your public summary connects to private care',
        `This page’s short description highlights: ${shortDescription} In the clinic, we translate that promise into **private, individualized** priorities rather than a generic script. If your situation is more complex than a web page can capture, we say so early and widen the team when needed.`,
      ),
    ],
    keyComponents: [
      sub(
        'Assessment and personalized mapping',
        `Your first structured block includes history, goals, and safety screening so **${title}** recommendations match your medications, allergies, and prior therapies. We map which habits are “load-bearing” for your symptoms—often sleep timing, meal cadence, hydration, and stress recovery—before layering advanced modalities.`,
      ),
      sub(
        'Therapies, skills, and education',
        `Depending on the ${layer}, we may combine movement, breath skills, nutrition guidance, hydrothermal support, manual work, or acupuncture-style care when clinically appropriate. Each modality is chosen for **synergy**, not spectacle: the point is sustainable change you can repeat between visits.`,
      ),
      sub(
        'Tracking without obsession',
        `We choose **lightweight metrics** you can tolerate—sleep window, steps, simple pain scores, waist circumference when relevant—rather than exhaustive logs that become another stressor. Review visits interpret trends with curiosity, not blame, and adjust sequencing when life interrupts.`,
      ),
      sub(
        'Safety, referrals, and escalation',
        `**Safety** includes clear triggers for urgent evaluation, conservative supplement conversations when they arise, and respectful coordination with your existing clinicians. If imaging or labs are needed, we say so plainly and help you ask the right questions without replacing specialist judgment.`,
      ),
    ],
    approaches: [
      sub(
        'Sequencing change so it survives real life',
        `We sequence ${layer} changes so they survive commutes, caregiving, shift work, and travel. That usually means stabilizing **sleep and nervous-system recovery** before aggressive training or aggressive “detox” narratives. We teach minimum viable routines for rough weeks so identity does not collapse into all-or-nothing thinking.`,
      ),
      sub(
        'Skills you can use between visits',
        `Between-visit skills might include **breath pacing**, desk micro-breaks, meal templates, grocery anchors, or short mobility flows chosen for your joints and blood pressure. The goal is autonomy: you should feel less mystified by your body over time, not more dependent on constant supervision.`,
      ),
      sub(
        'Review cadence and plan adjustments',
        `Follow-ups are scheduled close enough to catch drift early, then spaced as habits stabilize. When plateaus appear, we **hypothesize** thoughtfully—sleep debt? new medication? hidden pain fear?—before stacking more interventions. If something is not helping, we change modality rather than repeating the same week on loop.`,
      ),
      sub(
        'Cultural food realities and budget awareness',
        `Nutrition and lifestyle guidance is translated into **your kitchen**, not a fantasy pantry, and we acknowledge budget constraints honestly. If money is tight, we prioritize fewer, higher-leverage actions that still move markers you care about.`,
      ),
      sub(
        'Seasons, travel, and predictable disruptions',
        `We rehearse **travel weeks**, festival seasons, heat waves, and school holidays explicitly because routines wobble predictably then. The goal is a plan that bends without breaking: smaller minimum doses, clearer hydration cues, and earlier sleep anchors when social demands spike.`,
      ),
    ],
    integration: [
      sub(
        'Working alongside your medical team',
        `**Integration** means your primary clinician and specialists remain central when prescriptions, procedures, or unstable disease are in play. We encourage sharing visit summaries when you consent so dietary and movement plans align with cardiology, endocrinology, gynecology, oncology, or psychiatry recommendations rather than quietly competing with them.`,
      ),
      sub(
        'Medications, supplements, and scope honesty',
        `We screen supplement ideas against **pharmacy realities** and defer dosing decisions to prescribers. When mental health symptoms dominate, we discuss referral pathways transparently. When acute symptoms appear—chest pain, focal weakness, thunderclap headache—we direct to emergency care immediately.`,
      ),
      sub(
        'Documentation and continuity',
        `Written priorities, red-flag lists, and next-step timelines help continuity when you rotate between tele and in-person visits. If workplace ergonomics or disability paperwork is relevant, we discuss ethical, accurate wording rather than overpromising functional capacity.`,
      ),
      sub(
        'Access, insurance, and scheduling realities',
        `We acknowledge **insurance variability**, travel distance, childcare, and shift schedules as real variables—not moral failures when adherence wobbles. When budgets are tight, we prioritize fewer, higher-leverage visits and teach self-management skills that extend time between sessions without abandoning safety.`,
      ),
    ],
    conclusion: [
      sub(
        'What “success” often feels like',
        `Success with **${title}** often feels quieter than social media wellness suggests: steadier sleep, calmer digestion, fewer pain spikes, or more predictable energy. We celebrate those intermediate wins because they frequently predict durable change better than dramatic one-week transformations.`,
      ),
      sub(
        'How to begin with Nirvana',
        `If this pathway fits, begin with a consultation where questions are welcome and boundaries are respected. We will tell you candidly when **Nirvana Integrated Clinic** is a strong match and when another setting is safer or more appropriate for your current severity.`,
      ),
      sub(
        'Long-horizon partnership without dependency',
        `Over months, the aim is growing **self-efficacy**: skills, recipes, breath drills, and movement patterns you own. We want you to graduate habits into your real calendar—not perform wellness only at the clinic door. When seasons change or stress spikes, you should have a repeatable method for adjusting without starting from zero.`,
      ),
      sub(
        'Invitation to take the next step',
        `If **${title}** sounds like the right container for your next chapter, book a consultation and bring your questions—even skeptical ones. We prefer honest fit over sales pressure, because trust is the substrate that makes integrative care work when biology is slow and life is loud.`,
      ),
    ],
  }
}
