import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { BrandLogo } from "../components/BrandLogo";
import { HealingAura } from "../assets/Icon/HealingAura";
import { ScrollRevealText } from "../components/ScrollRevealText";
import { ScrollReveal } from "../components/ScrollReveal";
import { AnimatedStat } from "../components/AnimatedStat";
import Aurora from "../components/Aurora";
import CursorConfetti from "../components/CursorConfetti";
import Service from "./Service";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { DoctorLeadershipSection } from "../components/DoctorLeadershipSection";

const easeReveal = [0.16, 1, 0.3, 1] as const;

const HERO_BANNER = "/hero-banner.jpg";
const HERO_MAIN_IMAGE = "/hero-buddha-tree.jpg";
const ESSENCE_BACKGROUND = "/essence-naturopathy.jpg";

const treatments = [
    {
        title: "Integrated naturopathy",
        description: "Whole-person assessment and natural protocols that support the body’s own capacity to restore balance.",
        image: "/mud-therapy.png",
        imageAlt: "Natural mud therapy as part of holistic naturopathic care",
    },
    {
        title: "Yoga & therapeutic movement",
        description: "Gentle, guided practices to improve mobility, breath, and steadiness without strain.",
        image: "/yoga-rehab.png",
        imageAlt: "Therapeutic yoga and guided movement for recovery and balance",
    },
    {
        title: "Acupuncture",
        description: "Precise, evidence-informed needling to ease tension, support energy flow, and complement your plan.",
        image: "/foot-therapy.png",
        imageAlt: "Focused therapeutic work on the feet supporting energy and relaxation",
    },
    {
        title: "Hydrotherapy",
        description: "Water-based therapies that soothe circulation, recovery, and deep relaxation.",
        image: "/swedana.png",
        imageAlt: "Steam and water-based therapy for circulation and deep relaxation",
    },
    {
        title: "Massage & bodywork",
        description: "Hands-on care to release tightness, reduce stress, and support musculoskeletal comfort.",
        image: "/kizhi-potli.png",
        imageAlt: "Warm herbal bolus massage and therapeutic bodywork",
    },
    {
        title: "Diet & lifestyle guidance",
        description: "Practical nutrition and daily habits aligned with your constitution and treatment goals.",
        image: "/care.png",
        imageAlt: "Supportive, personalised guidance for daily wellness and nutrition",
    },
] as const;

type HomeServiceIconProps = { className?: string };

function IconManipulative({ className }: HomeServiceIconProps) {
    return (
        <svg className={className} viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M28 8c-4 8-12 10-16 18-2 4-1 9 2 12 3 3 8 4 12 2" />
            <path d="M28 8c4 8 12 10 16 18 2 4 1 9-2 12-3 3-8 4-12 2" />
            <path d="M28 22v20M22 36h12" />
            <circle cx="28" cy="14" r="3" />
        </svg>
    );
}

function IconWomensHealth({ className }: HomeServiceIconProps) {
    return (
        <svg className={className} viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M28 10c-6 0-10 5-10 11 0 4 2 8 5 10v6h10v-6c3-2 5-6 5-10 0-6-4-11-10-11z" />
            <path d="M18 42h20" />
            <path d="M38 18c3 2 6 6 6 11M40 14l4-4" />
        </svg>
    );
}

function IconYoga({ className }: HomeServiceIconProps) {
    return (
        <svg className={className} viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <ellipse cx="28" cy="12" rx="6" ry="6" />
            <path d="M28 18v8M18 28l10 6 10-6M22 40l6-8 6 8" />
            <path d="M16 46h24" />
        </svg>
    );
}

function IconPhysio({ className }: HomeServiceIconProps) {
    return (
        <svg className={className} viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <rect x="10" y="30" width="36" height="8" rx="2" />
            <path d="M18 30V22c0-4 4-8 10-8s10 4 10 8v8" />
            <path d="M32 18c4 2 8 6 8 12v6" />
        </svg>
    );
}

function IconStress({ className }: HomeServiceIconProps) {
    return (
        <svg className={className} viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M18 22c0-6 5-11 12-11s12 5 12 11c0 3-1 6-3 8" />
            <path d="M22 38c2-4 6-6 10-6s8 2 10 6" />
            <path d="M24 26l-4 4M32 26l4 4" />
            <path d="M14 14c-2 4-2 8 0 12M42 14c2 4 2 8 0 12" />
        </svg>
    );
}

function IconAcupuncture({ className }: HomeServiceIconProps) {
    return (
        <svg className={className} viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <ellipse cx="28" cy="36" rx="14" ry="6" />
            <path d="M22 36v-16M28 36V14M34 36v-12" />
            <circle cx="22" cy="18" r="1.5" fill="currentColor" stroke="none" />
            <circle cx="28" cy="12" r="1.5" fill="currentColor" stroke="none" />
            <circle cx="34" cy="22" r="1.5" fill="currentColor" stroke="none" />
        </svg>
    );
}

const homeServiceShowcase = [
    {
        title: "Manipulative therapies",
        Icon: IconManipulative,
        to: "/treatments" as const,
    },
    {
        title: "Women\u2019s health & holistic wellness",
        Icon: IconWomensHealth,
        to: "/services" as const,
    },
    {
        title: "Yoga & meditation",
        Icon: IconYoga,
        to: "/treatments" as const,
    },
    {
        title: "Physiotherapy & pain management",
        Icon: IconPhysio,
        to: "/treatments" as const,
    },
    {
        title: "Stress & lifestyle care",
        Icon: IconStress,
        to: "/services" as const,
    },
    {
        title: "Acupuncture & traditional healing",
        Icon: IconAcupuncture,
        to: "/treatments" as const,
    },
] as const;

const metrics = [
    { end: 15, suffix: "+", formatK: false as const, label: "Years of holistic care" },
    { end: 2.5, suffix: "+", formatK: true as const, label: "Guests guided toward wellness" },
    { end: 12, suffix: "+", formatK: false as const, label: "Natural therapy modalities" },
    { end: 98, suffix: "%", formatK: false as const, label: "Would recommend our centre" },
];

const Home = () => {
    const reduceMotion = useReducedMotion();
    const heroRef = useRef<HTMLElement>(null);
    const essenceRef = useRef<HTMLElement>(null);
    const metricsRef = useRef<HTMLElement>(null);
    const treatmentsParallaxRef = useRef<HTMLElement>(null);
    const testimonialsRef = useRef<HTMLElement>(null);

    const { scrollYProgress: heroProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });
    const heroImageY = useTransform(heroProgress, [0, 1], [0, 80]);
    const heroHeadingY = useTransform(heroProgress, [0, 1], [0, -32]);
    const heroContentY = useTransform(heroProgress, [0, 1], [0, 52]);

    const { scrollYProgress: essenceProgress } = useScroll({
        target: essenceRef,
        offset: ["start end", "end start"],
    });
    const essenceBgY = useTransform(essenceProgress, [0, 1], ["-12%", "12%"]);
    const essenceHeadingY = useTransform(essenceProgress, [0, 1], [0, -28]);
    const essenceContentY = useTransform(essenceProgress, [0, 1], [0, 42]);

    const { scrollYProgress: metricsProgress } = useScroll({
        target: metricsRef,
        offset: ["start end", "end start"],
    });
    const metricsBgY = useTransform(metricsProgress, [0, 1], ["-12%", "12%"]);
    const metricsHeadingY = useTransform(metricsProgress, [0, 1], [0, -24]);
    const metricsContentY = useTransform(metricsProgress, [0, 1], [0, 46]);

    const { scrollYProgress: treatmentsProgress } = useScroll({
        target: treatmentsParallaxRef,
        offset: ["start end", "end start"],
    });
    const treatmentsDecorY = useTransform(treatmentsProgress, [0, 1], [0, -60]);
    const treatmentsDecorY2 = useTransform(treatmentsProgress, [0, 1], [0, 40]);
    const treatmentsHeadingY = useTransform(treatmentsProgress, [0, 1], [0, -26]);
    const treatmentsContentY = useTransform(treatmentsProgress, [0, 1], [0, 44]);

    const { scrollYProgress: testimonialsProgress } = useScroll({
        target: testimonialsRef,
        offset: ["start end", "end start"],
    });
    const testimonialsHeadingY = useTransform(testimonialsProgress, [0, 1], [0, -22]);
    const testimonialsContentY = useTransform(testimonialsProgress, [0, 1], [0, 40]);

    return (
        <div className="relative">
            <div className="fixed inset-0 -z-10">
                <Aurora colorStops={['#2d545e', '#8ba68e', '#c0d4c0']} amplitude={1.2} blend={0.55} speed={0.8} />
            </div>
            <CursorConfetti />
            {/* Hero Section */}
            {/* Theme: visiting card — forest #2d545e, olive #8ba68e, sage #c0d4c0 */}
            <section ref={heroRef} className="relative w-full  py-20 lg:py-32 overflow-hidden">
                {/* Subtle texture overlay */}
                <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%232d545e" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Text Content */}
                        <motion.div
                            className="text-left space-y-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            {/* Headline with cut words effect */}
                            <motion.div style={{ y: heroHeadingY }}>
                            <motion.h1
                                className="text-4xl md:text-5xl lg:text-[48px] font-bold leading-[1.1] flex flex-col"
                            >
                                <span className="inline-block relative">
                                    {['E', 'm', 'p', 'o', 'w', 'e','r','i','n','g',].map((letter, i) => (
                                        <motion.span
                                            key={i}
                                            className="text-brand-forest inline-block relative"
                                            initial={{ opacity: 0, filter: 'blur(10px)' }}
                                            animate={{ opacity: 1, filter: 'blur(0px)' }}
                                            transition={{ duration: 0.6, delay: 0.1 + i * 0.05, ease: "easeOut" }}
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                    <span className="pl-3">
                                        {['L','i','f','e'].map((letter, i) => (
                                            <motion.span
                                                key={i}
                                                className="text-brand-forest inline-block relative"
                                                initial={{ opacity: 0, filter: 'blur(10px)' }}
                                                animate={{ opacity: 1, filter: 'blur(0px)' }}
                                                transition={{ duration: 0.6, delay: 0.1 + i * 0.05, ease: "easeOut" }}
                                            >
                                                {letter}
                                            </motion.span>
                                        ))}
                                    </span>
                                    
                                    <span className="pl-3">
                                        {['T','h','r','o','u','g','h'].map((letter, i) => (
                                            <motion.span
                                                key={i}
                                                className="text-brand-forest inline-block relative"
                                                initial={{ opacity: 0, filter: 'blur(10px)' }}
                                                animate={{ opacity: 1, filter: 'blur(0px)' }}
                                                transition={{ duration: 0.6, delay: 0.1 + i * 0.05, ease: "easeOut" }}
                                            >
                                                {letter}
                                            </motion.span>
                                        ))}
                                    </span>
                                </span>
                                    <motion.span
                                        className="block h-[2px] bg-brand-forest/40 mt-4 mb-2"
                                        initial={{ width: 0 }}
                                        animate={{ width: '100%' }}
                                        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                                    />
                                <span>
                                    {['N', 'a', 't', 'u', 'r','a','l'].map((letter, i) => (
                                        <motion.span
                                            key={i}
                                            className="relative z-10 text-brand-olive inline-block"
                                            initial={{ opacity: 0, filter: 'blur(10px)' }}
                                            animate={{ opacity: 1, filter: 'blur(0px)' }}
                                            transition={{ duration: 0.6, delay: 0.45 + i * 0.05, ease: "easeOut" }}
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}{' '}
                                    {['H', 'e', 'a', 'l', 'i', 'n','g'].map((letter, i) => (
                                        <motion.span
                                            key={i}
                                            className="text-brand-forest inline-block"
                                            initial={{ opacity: 0, filter: 'blur(10px)' }}
                                            animate={{ opacity: 1, filter: 'blur(0px)' }}
                                            transition={{ duration: 0.6, delay: 0.95 + i * 0.05, ease: "easeOut" }}
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                </span>
                            </motion.h1>
                            </motion.div>

                            <motion.div className="space-y-8" style={{ y: heroContentY }}>
                            <motion.p
                                className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl space-y-3"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            >
                                <span className="block font-semibold text-brand-forest text-xl md:text-2xl">Delivering Nature&apos;s Gift To Mankind</span>
                                <span className="block">We all need a little space to grow. Give yourself the space you need to find your inner you.</span>
                            </motion.p>

                            {/* Dual CTAs */}
                            <motion.div
                                className="flex flex-wrap gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                            >
                                <motion.button
                                    className="bg-linear-to-r from-brand-forest to-brand-olive text-white px-8 py-4 rounded-full font-semibold text-base shadow-lg shadow-brand-forest/25 hover:shadow-xl hover:shadow-brand-forest/30 transition-all"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Book Appointment
                                </motion.button>
                                <motion.a
                                    href="#treatments"
                                    className="inline-flex items-center justify-center bg-white text-brand-forest px-8 py-4 rounded-full font-semibold text-base border-2 border-brand-olive/40 hover:border-brand-olive hover:bg-brand-sage/30 transition-all"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    View Treatments
                                </motion.a>
                            </motion.div>

                            {/* Trust badges */}
                            <motion.div
                                className="flex flex-wrap items-center gap-6 text-sm text-gray-600"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                            >
                                <span className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-brand-forest" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Evidence-based therapies
                                </span>
                                <span className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-brand-forest" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Personalized plans
                                </span>
                                <span className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-brand-forest" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Calm healing space
                                </span>
                            </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Right: Image with glass frame */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        >
                            <div className="relative w-full h-[400px] lg:h-[550px] rounded-3xl overflow-hidden">
                                <motion.img
                                    src={HERO_MAIN_IMAGE}
                                    alt="Peaceful Buddha statue beneath trees—reflecting calm and mindful healing"
                                    className="w-full h-full object-cover object-center scale-110"
                                    style={{ y: heroImageY }}
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                                        if (fallback) fallback.style.display = 'flex';
                                    }}
                                />
                                {/* Fallback only shows on error */}
                                <div className="hidden absolute inset-0 bg-linear-to-br from-brand-sage/50 to-brand-olive/30 items-center justify-center p-8">
                                    <BrandLogo variant="card" className="max-w-[min(100%,260px)] drop-shadow-md" />
                                </div>
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-brand-forest/25 via-transparent to-transparent" />
                            </div>
                            {/* Glass border effect */}
                            <div className="absolute inset-0 rounded-3xl border-2 border-white/25 shadow-2xl shadow-brand-forest/10" />
                            {/* Subtle glow */}
                            <div className="absolute -inset-4 bg-linear-to-r from-brand-forest/15 to-brand-olive/15 rounded-3xl blur-2xl -z-10" />
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className="">

                {/* About Nirvana — backdrop matches metrics strip */}
                <section
                    ref={essenceRef}
                    className="relative w-full mt-8 lg:mt-12 overflow-hidden py-20 lg:py-28"
                >
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                            aria-hidden
                            className="absolute inset-0 -top-[15%] -bottom-[15%] bg-cover bg-center scale-110"
                            style={{
                                backgroundImage: `url("${ESSENCE_BACKGROUND}")`,
                                backgroundPositionY: essenceBgY,
                            }}
                        />
                        <div className="absolute inset-0 bg-linear-to-br from-brand-forest/92 via-brand-forest/88 to-brand-olive/75" />
                    </div>
                    <div className="max-w-6xl mx-auto px-4 relative z-10">
                        <motion.div style={{ y: essenceHeadingY }}>
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold text-center mb-8 text-white"
                            initial={reduceMotion ? false : { opacity: 0, y: 44 }}
                            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: easeReveal }}
                            viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.2 }}
                        >
                            Essence of{" "}
                            <span className="bg-linear-to-r from-brand-sage to-white bg-clip-text text-transparent">Nirvana</span>
                        </motion.h2>
                        </motion.div>
                        <motion.div style={{ y: essenceContentY }}>
                        <ScrollRevealText textClassName="text-brand-sage/95" />
                        <img 
            className='max-w-[300px] h-auto object-contain mx-auto my-4'
            src="/brand/divider.png"/>
                        </motion.div>
                    </div>
                </section>

                {/* Treatments — parallax decor */}
                <section
                    id="treatments"
                    ref={treatmentsParallaxRef}
                    className="relative w-full mt-16 lg:mt-24 py-16 lg:py-24 overflow-hidden scroll-mt-24"
                >
                    <motion.div
                        aria-hidden
                        className="pointer-events-none absolute -left-1/4 top-1/4 h-[420px] w-[420px] rounded-full bg-brand-olive/20 blur-3xl"
                        style={{ y: treatmentsDecorY }}
                    />
                    <motion.div
                        aria-hidden
                        className="pointer-events-none absolute -right-1/4 bottom-0 h-[360px] w-[360px] rounded-full bg-brand-forest/15 blur-3xl"
                        style={{ y: treatmentsDecorY2 }}
                    />
                    <div className="max-w-7xl mx-auto px-4 relative z-10">
                        <motion.div className="text-center space-y-4 mb-12 lg:mb-16" style={{ y: treatmentsHeadingY }}>
                            <ScrollReveal y={32}>
                                <p className="text-sm font-bold tracking-widest uppercase text-brand-forest">What we offer</p>
                            </ScrollReveal>
                            <ScrollReveal delay={0.08} y={48}>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                                    Treatments tailored to{" "}
                                    <span className="bg-linear-to-r from-brand-forest to-brand-olive bg-clip-text text-transparent">
                                        your healing journey
                                    </span>
                                </h2>
                            </ScrollReveal>
                            <ScrollReveal delay={0.14} y={28}>
                                <img
                                    className="max-w-[300px] h-auto object-contain mx-auto my-4"
                                    src="/brand/divider.png"
                                    alt=""
                                />
                            </ScrollReveal>
                        </motion.div>
                        <motion.div style={{ y: treatmentsContentY }}>
                            <ScrollReveal className="mb-12 lg:mb-16" y={36}>
                                <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                    From naturopathy and yoga to hydrotherapy and acupuncture—each modality is chosen to support your body, mind, and daily life.
                                </p>
                            </ScrollReveal>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {treatments.map((item, i) => (
                                <motion.article
                                    key={item.title}
                                    className="group overflow-hidden rounded-2xl border border-brand-sage/60 bg-white/65 backdrop-blur-sm shadow-lg shadow-brand-forest/5"
                                    initial={{ opacity: 0, y: 48 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: i * 0.08, ease: easeReveal }}
                                    viewport={{ once: true, margin: "0px 0px -12% 0px", amount: 0.12 }}
                                >
                                    <div className="relative aspect-4/3 overflow-hidden bg-brand-sage/20">
                                        <img
                                            src={item.image}
                                            alt={item.imageAlt}
                                            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-brand-forest/35 via-transparent to-transparent" />
                                        <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-brand-forest font-semibold text-sm shadow-md backdrop-blur-sm">
                                            {String(i + 1).padStart(2, "0")}
                                        </div>
                                    </div>
                                    <div className="p-6 lg:p-7">
                                        <h3 className="text-xl font-semibold text-brand-forest mb-2">{item.title}</h3>
                                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">{item.description}</p>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                        </motion.div>
                    </div>
                </section>

                {/* Services — grid reference layout, Nirvana palette */}
                <section
                    id="service-offerings"
                    className="relative w-full mt-12 lg:mt-20 py-16 lg:py-24 scroll-mt-24 overflow-hidden"
                    aria-labelledby="home-services-heading"
                >
                    <div
                        className="absolute inset-0 bg-brand-forest"
                        aria-hidden
                    />
                    <div
                        className="absolute inset-0 opacity-[0.12]"
                        style={{
                            backgroundImage: `
                radial-gradient(ellipse 120% 80% at 10% 20%, rgba(192,212,192,0.45) 0%, transparent 55%),
                radial-gradient(ellipse 90% 70% at 90% 80%, rgba(139,166,142,0.35) 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, transparent 40%, rgba(0,0,0,0.15) 100%)
              `,
                        }}
                        aria-hidden
                    />
                    <div
                        className="absolute inset-0 opacity-[0.08]"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cpath fill='none' stroke='%23c0d4c0' stroke-width='0.6' d='M20 60c20-30 60-30 80 0s-20 40-40 40-40-10-40-40zm40 0c15 25 35 25 50 0'/%3E%3C/svg%3E")`,
                            backgroundSize: "120px 120px",
                        }}
                        aria-hidden
                    />

                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal y={36}>
                            <h2
                                id="home-services-heading"
                                className="text-3xl sm:text-4xl md:text-[2.75rem] font-semibold text-white tracking-tight max-w-xl leading-[1.15] mb-12 lg:mb-14"
                            >
                                Discover the healing power of nature
                            </h2>
                        </ScrollReveal>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                            {homeServiceShowcase.map((item, i) => {
                                const Icon = item.Icon;
                                return (
                                    <motion.article
                                        key={item.title}
                                        className="rounded-2xl bg-white shadow-lg shadow-black/10 border border-white/80 flex gap-4 p-5 sm:p-6 items-start"
                                        initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                                        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                                        transition={{ duration: 0.55, delay: i * 0.07, ease: easeReveal }}
                                        viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.15 }}
                                    >
                                        <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-brand-sage/35 flex items-center justify-center text-brand-forest">
                                            <Icon className="w-8 h-8 sm:w-9 sm:h-9" />
                                        </div>
                                        <div className="min-w-0 flex flex-col gap-2 pt-0.5">
                                            <h3 className="text-lg sm:text-xl font-semibold text-brand-forest leading-snug">
                                                {item.title}
                                            </h3>
                                            <Link
                                                to={item.to}
                                                className="inline-flex items-center gap-1 text-sm font-medium font-['Poppins'] text-rose-400 hover:text-rose-500 transition-colors w-fit group/link"
                                            >
                                                Learn more
                                                <span className="translate-x-0 group-hover/link:translate-x-0.5 transition-transform" aria-hidden>
                                                    ›
                                                </span>
                                            </Link>
                                        </div>
                                    </motion.article>
                                );
                            })}
                        </div>

                        <div className="mt-10 lg:mt-12 flex justify-start">
                            <ScrollReveal y={24}>
                                <Link
                                    to="/services"
                                    className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold text-white font-['Poppins'] bg-linear-to-r from-brand-forest to-brand-olive shadow-lg shadow-brand-forest/25 transition hover:shadow-xl hover:shadow-brand-forest/30 active:scale-[0.98]"
                                >
                                    View all services
                                    <span className="text-lg leading-none" aria-hidden>
                                        ↗
                                    </span>
                                </Link>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                <DoctorLeadershipSection />

                {/* Metrics — background parallax */}
                <section
                    ref={metricsRef}
                    id="metrics"
                    className="relative w-full py-20 lg:py-28 overflow-hidden scroll-mt-24"
                >
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                            aria-hidden
                            className="absolute inset-0 -top-[15%] -bottom-[15%] bg-cover bg-center scale-110"
                            style={{
                                backgroundImage: `url("${HERO_BANNER}")`,
                                backgroundPositionY: metricsBgY,
                            }}
                        />
                        <div className="absolute inset-0 bg-linear-to-br from-brand-forest/92 via-brand-forest/88 to-brand-olive/75" />
                    </div>
                    <div className="max-w-6xl mx-auto px-4 relative z-10">
                        <motion.div className="text-center mb-12 lg:mb-16" style={{ y: metricsHeadingY }}>
                            <ScrollReveal y={36}>
                                <p className="text-sm font-bold tracking-widest uppercase text-brand-sage/90">Nirvana in numbers</p>
                            </ScrollReveal>
                            <ScrollReveal delay={0.08} y={40}>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Care you can feel—results that add up</h2>
                            </ScrollReveal>
                        </motion.div>
                        <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" style={{ y: metricsContentY }}>
                            {metrics.map((m, i) => (
                                <motion.div
                                    key={m.label}
                                    className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md px-5 py-8 text-center"
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.65, delay: i * 0.1, ease: easeReveal }}
                                    viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.2 }}
                                >
                                    <AnimatedStat
                                        end={m.end}
                                        suffix={m.suffix}
                                        formatK={m.formatK}
                                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tabular-nums"
                                    />
                                    <p className="mt-2 text-sm md:text-base text-brand-sage/95 leading-snug">{m.label}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto mt-20 px-4 space-y-16">
                    

                    {/* Why choose us — services & pillars */}
                    <Service />
                    <motion.div
                        className="flex items-center justify-center gap-6 py-2 m-0"
                        initial={reduceMotion ? false : { opacity: 0, y: 32 }}
                        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                        transition={{ duration: 0.75, ease: easeReveal }}
                        viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.25 }}
                    >
                        <motion.div
                            className="flex-1 h-px bg-linear-to-r from-transparent via-brand-olive to-brand-forest max-w-md"
                            initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
                            whileInView={reduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: easeReveal }}
                            viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.3 }}
                            style={{ transformOrigin: "right center" }}
                        />
                        <motion.div
                            className="w-48 h-48"
                            initial={reduceMotion ? false : { opacity: 0, scale: 0.85 }}
                            whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.12, ease: easeReveal }}
                            viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.25 }}
                        >
                            <HealingAura />
                        </motion.div>

                        <motion.div
                            className="flex-1 h-px bg-linear-to-l from-transparent via-gray-300 to-gray-300 max-w-md"
                            initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
                            whileInView={reduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: easeReveal }}
                            viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.3 }}
                            style={{ transformOrigin: "left center" }}
                        />
                    </motion.div>
                    {/* Testimonials (reference: client feedback) */}
                    <section ref={testimonialsRef} id="testimonials" className="scroll-mt-24 py-16">
                        <motion.div className="text-center mb-12" style={{ y: testimonialsHeadingY }}>
                            <ScrollReveal y={32}>
                                <p className="text-sm font-bold tracking-widest uppercase text-brand-forest mb-2">Clients feedback</p>
                            </ScrollReveal>
                            <ScrollReveal delay={0.06} y={44}>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What people say</h2>
                            </ScrollReveal>
                            <ScrollReveal delay={0.12} y={28}>
                                <img
                                    className="max-w-[300px] h-auto object-contain mx-auto my-4"
                                    src="/brand/divider.png"
                                    alt=""
                                />
                            </ScrollReveal>
                        </motion.div>
                        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ y: testimonialsContentY }}>
                            {[
                                {
                                    quote: 'Has been a great experience at the nature cure center. Seeing definite improvement in the ailments. Very happy to learn natural techniques for our health issues. The team is very knowledgeable, patient, and offers corrective treatments. Thanks to the well trained staff.',
                                    author: 'Ganga S.',
                                },
                                {
                                    quote: 'My long lasting knee pain found relief and the various therapies have helped. Thankful for the accurate diagnosis and timely treatment. The staff were courteous and professional. I hope the results last.',
                                    author: 'Meghna V.',
                                },
                                {
                                    quote: 'I have seen many positive changes—more regular cycles, more energy, and better emotional balance. The team stood by me during a difficult phase. Staff are kind and supportive; I overcame my fear of therapeutic movement with their guidance.',
                                    author: 'Sangeetha S.',
                                },
                                {
                                    quote: 'Amazing experience—the ambience feels premium yet pricing was very reasonable compared to other centres. Kind, patient, knowledgeable care without pushing unnecessary therapies. Honest guidance. Highly recommended.',
                                    author: 'Swaminathan J.',
                                },
                                {
                                    quote: 'After many treatments elsewhere, tablet-free natural care here with no unpleasant side effects. Friendly team, easier than I expected, and much better now with lifestyle changes and exercises. Pleasant ambience.',
                                    author: 'Deepika',
                                },
                            ].map((t, i) => (
                                <motion.article
                                    key={i}
                                    className="rounded-2xl bg-white/70 backdrop-blur border border-brand-sage/50 p-6 shadow-md"
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: i * 0.07, ease: easeReveal }}
                                    viewport={{ once: true, margin: "0px 0px -12% 0px", amount: 0.12 }}
                                >
                                    <p className="text-brand-gold mb-2" aria-hidden>★★★★★</p>
                                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">&ldquo;{t.quote}&rdquo;</p>
                                    <p className="mt-4 font-semibold text-brand-forest">{t.author}</p>
                                </motion.article>
                            ))}
                        </motion.div>
                    </section>
                </section>
            </div>
        </div>
    );
};

export default Home;
