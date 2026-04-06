import { useState } from "react";
import { motion } from "motion/react";

const EXPERTISE_IMAGE = "/essence-naturopathy.jpg";
const VISION_IMAGE = "/hero-banner.jpg";

type ImageBlockProps = {
    src: string;
    alt: string;
    failed: boolean;
    onError: () => void;
    filenameHint: string;
};

function ImageBlock({ src, alt, failed, onError, filenameHint }: ImageBlockProps) {
    return (
        <div className="relative rounded-[28px] overflow-hidden shadow-xl shadow-brand-forest/10 aspect-4/3 max-h-[min(92vw,420px)] lg:max-h-[440px] bg-brand-sage/25">
            {!failed ? (
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover"
                    onError={onError}
                />
            ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-linear-to-b from-brand-sage/40 to-brand-olive/20">
                    <span className="text-sm text-brand-forest/75 font-['Poppins'] leading-relaxed max-w-xs">
                        Add <span className="font-medium">{filenameHint}</span> to{" "}
                        <span className="font-medium">public/</span> for this image.
                    </span>
                </div>
            )}
        </div>
    );
}

export function AboutExpertiseVisionSection() {
    const [expertiseFailed, setExpertiseFailed] = useState(false);
    const [visionFailed, setVisionFailed] = useState(false);

    return (
        <div className="bg-white">
            <section
                className="py-16 lg:py-24 px-4 sm:px-6 border-b border-brand-olive/20"
                aria-labelledby="about-expertise-heading"
            >
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55 }}
                        viewport={{ once: true, margin: "-40px" }}
                    >
                        <ImageBlock
                            src={EXPERTISE_IMAGE}
                            alt="Naturopathic care and therapeutic setting at Nirvana Integrated Clinic"
                            failed={expertiseFailed}
                            onError={() => setExpertiseFailed(true)}
                            filenameHint="essence-naturopathy.jpg"
                        />
                    </motion.div>
                    <motion.div
                        className="space-y-5 text-left"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.08 }}
                        viewport={{ once: true, margin: "-40px" }}
                    >
                        <p className="text-xs sm:text-sm tracking-[0.14em] uppercase font-semibold font-['Poppins'] text-brand-tan">
                            Our expertise
                        </p>
                        <h2
                            id="about-expertise-heading"
                            className="text-3xl md:text-4xl font-bold leading-[1.2] font-['Poppins'] text-gray-900 text-balance"
                        >
                            <span className="bg-linear-to-r from-brand-forest to-brand-olive bg-clip-text text-transparent">
                                Integrated natural healing,
                            </span>{" "}
                            delivered with clinical care
                        </h2>
                        <div className="space-y-4 text-gray-600 font-['Poppins'] text-[15px] md:text-base leading-relaxed">
                            <p>
                                We combine naturopathy, yoga, acupuncture, hydrotherapy, massage, and
                                lifestyle guidance so your plan reflects how you live—not only a single
                                complaint. Assessments are thorough, explanations are clear, and therapies are
                                chosen to work together safely.
                            </p>
                            <p>
                                Our team trains continuously in evidence-informed natural medicine and
                                therapeutic technique, with a steady focus on gentle, effective care and
                                outcomes you can feel in daily energy, sleep, and mobility.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section
                className="py-16 lg:py-24 px-4 sm:px-6 bg-linear-to-b from-brand-sage/10 via-white to-white"
                aria-labelledby="about-vision-heading"
            >
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <motion.div
                        className="space-y-5 text-left lg:order-1 order-2"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55 }}
                        viewport={{ once: true, margin: "-40px" }}
                    >
                        <p className="text-xs sm:text-sm tracking-[0.14em] uppercase font-semibold font-['Poppins'] text-brand-tan">
                            Our vision
                        </p>
                        <h2
                            id="about-vision-heading"
                            className="text-3xl md:text-4xl font-bold leading-[1.2] font-['Poppins'] text-gray-900 text-balance"
                        >
                            A calm place where{" "}
                            <span className="bg-linear-to-r from-brand-forest to-brand-olive bg-clip-text text-transparent">
                                holistic health feels reachable
                            </span>
                        </h2>
                        <div className="space-y-4 text-gray-600 font-['Poppins'] text-[15px] md:text-base leading-relaxed">
                            <p>
                                We envision a clinic culture built on listening first: every guest understood as
                                a whole person, with space to ask questions and adjust the plan as life changes.
                            </p>
                            <p>
                                Long term, we want integrated natural medicine to be a trusted, mainstream
                                choice—rooted in compassion, disciplined practice, and respect for both
                                traditional wisdom and modern safety.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        className="lg:order-2 order-1"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.08 }}
                        viewport={{ once: true, margin: "-40px" }}
                    >
                        <ImageBlock
                            src={VISION_IMAGE}
                            alt="Nirvana Integrated Clinic — welcoming space aligned with our vision for holistic care"
                            failed={visionFailed}
                            onError={() => setVisionFailed(true)}
                            filenameHint="hero-banner.jpg"
                        />
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
