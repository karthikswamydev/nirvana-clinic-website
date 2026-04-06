import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

const PORTRAIT_SRC = "/brand/dr-vishva.jpg";

export function DoctorLeadershipSection() {
    const [portraitFailed, setPortraitFailed] = useState(false);

    return (
        <section
            className="relative py-16 lg:py-24 px-4 sm:px-6 bg-linear-to-b from-white via-brand-sage/12 to-brand-sage/25 border-b border-brand-olive/25"
            aria-labelledby="doctor-leadership-heading"
        >
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <motion.div
                    className="relative mx-auto w-full max-w-md lg:max-w-none"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55 }}
                    viewport={{ once: true, margin: "-40px" }}
                >
                    <div className="relative rounded-[28px] overflow-hidden shadow-xl shadow-brand-forest/10 aspect-4/5 max-h-[min(100vw,560px)] lg:max-h-[580px] bg-brand-sage/25">
                        {!portraitFailed ? (
                            <img
                                src={PORTRAIT_SRC}
                                alt="Dr Vishva V, Chief Medical Officer, Nirvana Integrated Clinic"
                                className="w-full h-full object-cover object-top"
                                onError={() => setPortraitFailed(true)}
                            />
                        ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-linear-to-b from-brand-sage/40 to-brand-olive/20">
                                <span className="text-5xl font-semibold text-brand-forest/80 font-['Cormorant_Garamond',serif]">
                                    Dr V. V.
                                </span>
                                <span className="mt-2 text-sm text-brand-forest/70 font-['Poppins']">
                                    Portrait: place <span className="font-medium">dr-vishva.jpg</span> in{" "}
                                    <span className="font-medium">public/brand/</span>
                                </span>
                            </div>
                        )}
                    </div>
                    <div className="absolute bottom-5 left-4 right-4 sm:left-auto sm:right-0 sm:translate-x-4 lg:translate-x-8 max-w-[220px] sm:max-w-[240px] ml-auto sm:ml-0 rounded-2xl px-5 py-4 shadow-lg shadow-brand-forest/10 border border-brand-olive/35 bg-white/90 backdrop-blur-sm">
                        <p className="text-2xl md:text-3xl font-bold text-brand-forest tracking-tight font-['Poppins'] tabular-nums">
                            2.5K+
                        </p>
                        <p className="text-sm text-gray-600 mt-1 font-['Poppins'] leading-snug">
                            Guests guided toward wellness
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className="space-y-6 text-left"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.08 }}
                    viewport={{ once: true, margin: "-40px" }}
                >
                    <h2
                        id="doctor-leadership-heading"
                        className="text-3xl md:text-4xl lg:text-[2.2rem] font-bold leading-[1.2] font-['Poppins'] text-balance"
                    >
                        <span className="bg-linear-to-r from-brand-forest via-brand-olive to-brand-forest bg-clip-text text-transparent">
                            Dr Vishva&apos;s Vision for Wellness:
                        </span>{" "}
                        <span className="text-gray-900">A Pathway to </span>
                        <span className="bg-linear-to-r from-brand-forest to-brand-olive bg-clip-text text-transparent">
                            Holistic Health
                        </span>
                    </h2>
                    <p className="text-xs sm:text-sm tracking-[0.14em] uppercase font-semibold font-['Poppins'] text-brand-tan">
                        — BNYS., MBA(HM)., CET(OT).
                    </p>
                    <p className="text-sm md:text-base text-brand-forest/90 font-['Poppins'] font-semibold">
                        Chief Medical Officer, Nirvana Integrated Clinic
                    </p>
                    <div className="space-y-4 text-gray-600 font-['Poppins'] text-[15px] md:text-base leading-relaxed">
                        <p>
                            Under Dr Vishva&apos;s leadership, Nirvana Integrated Clinic brings together
                            naturopathy, yoga, acupuncture, and evidence-informed natural therapies so every
                            guest receives care that respects the whole person—not only symptoms, but daily
                            rhythm, stress, and long-term vitality.
                        </p>
                        <p>
                            With qualifications spanning BNYS, healthcare management, and occupational therapy
                            orientation, Dr Vishva bridges classical healing wisdom with organized, compassionate
                            clinical practice—building a team culture rooted in listening, clarity, and steady
                            outcomes.
                        </p>
                        <p>
                            Our mission is to make integrated, natural healing accessible: clear plans, gentle
                            therapies where possible, and a calm environment where your body&apos;s own capacity
                            to restore balance is supported at every visit.
                        </p>
                    </div>
                    <Link
                        to="/about"
                        className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold text-white font-['Poppins'] bg-linear-to-r from-brand-forest to-brand-olive shadow-lg shadow-brand-forest/25 transition hover:shadow-xl hover:shadow-brand-forest/30 active:scale-[0.98]"
                    >
                        Know More
                        <svg
                            className="w-4 h-4 shrink-0"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            aria-hidden
                        >
                            <path d="M7 17 17 7M17 7h-5M17 7v5" />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
