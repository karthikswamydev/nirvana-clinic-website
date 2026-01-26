import { ChakraLogo } from "../assets/Icon";
import { HealingAura } from "../assets/Icon/HealingAura";
import { HealingEcosystemLogo } from "../assets/Icon/PathToHealingLogo";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import Service from "./Service";
import { motion } from "motion/react";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <main className="grow container mx-auto px-4 py-12">
                <motion.div
                    className="text-center space-y-6 max-w-6xl mx-auto relative overflow-hidden">
                    {/* Hero Section Orbs */}
                    <motion.div
                        className="absolute w-96 h-96 rounded-full bg-linear-to-br from-teal-400/30 to-blue-500/30 blur-3xl"
                        animate={{
                            x: [0, 100, 0],
                            y: [0, -90, 0],
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        style={{ left: "10%", top: "20%" }}
                    />
                    <motion.div
                        className="absolute w-80 h-80 rounded-full bg-linear-to-br from-blue-500/30 to-teal-400/30 blur-3xl"
                        animate={{
                            x: [0, -80, 0],
                            y: [0, 60, 0],
                        }}
                        transition={{
                            duration: 18,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        style={{ right: "10%", top: "30%" }}
                    />
                    <motion.div
                        className="relative z-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1
                            className="text-6xl md:text-7xl lg:text-8xl font-bold bg-linear-to-r from-[#1b4280] via-[#0EB4A0] to-[#1B4C9B] bg-clip-text text-transparent tracking-tight animate-linear text-center whitespace-nowrap leading-tight"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Nirvana Integrated Clinic
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl font-light font-['Poppins'] leading-relaxed bg-linear-to-b from-gray-600 to-gray-400 bg-clip-text text-transparent whitespace-nowrap"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Experience the perfect blend of Ayurvedic wisdom and modern
                            healthcare
                        </motion.p>
                        <motion.button
                            className="
    cursor-pointer
    bg-[#0fb79b]
    backdrop-blur-xl
    border border-white
    text-white
    px-8 py-4
    rounded-2xl
    font-semibold text-base
    transition-all
    shadow-[0_8px_32px_rgba(0,0,0,0.15)]
    hover:shadow-[0_12px_48px_rgba(0,0,0,0.25)]
    hover:bg-[#0fb79b]
    hover:scale-105
    font-['Poppins']
  "
                            initial={{ opacity: 0, scale: 1 }}
                            animate={{ opacity: 1.5, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Begin Your Healing
                        </motion.button>
                        <motion.div
                            className="flex items-center justify-center mb-6 gap-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <div className="flex-1 h-px bg-linear-to-r from-transparent via-[#0EB4A0] to-transparent max-w-80"></div>
                            <div className="">

                                <ChakraLogo />
                            </div>
                            <div className="flex-1 h-px bg-linear-to-r from-transparent via-[#0EB4A0] to-transparent max-w-80"></div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* About Nirvana Section */}
                <section className="max-w-7xl mx-auto mt-20 px-4 space-y-16">
                    {/* Main About Content */}
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        {/* Logo */}
                        <div className="w-full lg:w-1/3 flex justify-center">
                            <div className="w-96 h-96">
                                <HealingEcosystemLogo />
                            </div>
                        </div>

                        {/* Content */}
                        <motion.div
                            className="w-full lg:w-2/3 space-y-6"
                            initial={{ opacity: 0, x: 100, y: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-[#8cb59d] via-[#0a7942] to-[#034930] bg-clip-text text-transparent font-['Poppins'] ">
                                Essence of Nirvana
                            </h2>

                            <div className="space-y-6 text-light text-slate-500 font-['Poppins'] leading-[1.9] tracking-[0.2px]">
                                <p className="text-light">
                                    Nirvana Integrated Clinic is founded with a single purpose —
                                    to heal people completely, not partially. We believe that true
                                    recovery happens when the body, mind, and lifestyle are
                                    treated together. Instead of depending on just one therapy, we
                                    integrate multiple scientifically supported natural healing
                                    systems to offer faster, deeper, and more sustainable results.
                                </p>

                                <p className="">
                                    At Nirvana, every patient receives a personalised treatment
                                    plan that blends the best of Naturopathy, Functional Medicine,
                                    Yoga Therapy, Herbal Medicine, Acupuncture, Ozone Therapy,
                                    Chiropractic Care, Physiothewordsrapy, Diet Therapy, and
                                    Reflexology. By combining these powerful therapies, we aim not
                                    only to manage symptoms but to address the root cause of
                                    illness — ensuring long-lasting wellness.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Section Break */}
                    <div className="flex items-center justify-center gap-6 py-8">
                        <div className="flex-1 h-px bg-linear-to-r from-transparent via-green-500 to-green-500 max-w-md"></div>
                        <div className="w-48 h-48">
                            <HealingAura />
                        </div>

                        <div className="flex-1 h-px bg-linear-to-l from-transparent via-gray-300 to-gray-300 max-w-md"></div>
                    </div>

                    {/* What Sets Us Apart - Journey Map */}
                    <Service />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
