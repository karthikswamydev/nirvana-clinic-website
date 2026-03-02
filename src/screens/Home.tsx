import { ChakraLogo } from "../assets/Icon";
import { HealingAura } from "../assets/Icon/HealingAura";
import { ScrollRevealText } from "../components/ScrollRevealText";
import Aurora from "../components/Aurora";
import CursorConfetti from "../components/CursorConfetti";
import Service from "./Service";
import { motion } from "motion/react";

const Home = () => {
    return (
        <div className="relative">
            <div className="fixed inset-0 -z-10">
                <Aurora colorStops={['#16a34a', '#0da3a1', '#16a34a']} amplitude={1.2} blend={0.6} speed={0.8} />
            </div>
            <CursorConfetti />
            {/* Hero Section */}
            {/* Theme: emerald-600: #059669, teal-600: #0d9488, emerald-50: #ecfdf5 */}
            <section className="relative w-full  py-20 lg:py-32 overflow-hidden">
                {/* Subtle texture overlay */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23059669" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

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
                            <motion.h1
                                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] flex flex-col"
                            >
                                <span className="inline-block relative">
                                    {['N', 'i', 'r', 'v', 'a', 'n', 'a'].map((letter, i) => (
                                        <motion.span
                                            key={i}
                                            className="bg-green-900 bg-clip-text text-transparent inline-block relative"
                                            initial={{ opacity: 0, filter: 'blur(10px)' }}
                                            animate={{ opacity: 1, filter: 'blur(0px)' }}
                                            transition={{ duration: 0.6, delay: 0.1 + i * 0.05, ease: "easeOut" }}
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                    <motion.span
                                        className="absolute bottom-0 left-0 h-[2px] bg-green-900/50"
                                        initial={{ width: 0 }}
                                        animate={{ width: '100%' }}
                                        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                                    />
                                </span>
                                <span>
                                    {['I', 'n', 't', 'e', 'g', 'r', 'a', 't', 'e', 'd'].map((letter, i) => (
                                        <motion.span
                                            key={i}
                                            className="relative z-10 text-green-900 inline-block"
                                            initial={{ opacity: 0, filter: 'blur(10px)' }}
                                            animate={{ opacity: 1, filter: 'blur(0px)' }}
                                            transition={{ duration: 0.6, delay: 0.45 + i * 0.05, ease: "easeOut" }}
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}{' '}
                                    {['C', 'l', 'i', 'n', 'i', 'c'].map((letter, i) => (
                                        <motion.span
                                            key={i}
                                            className="bg-green-900 bg-clip-text text-transparent inline-block"
                                            initial={{ opacity: 0, filter: 'blur(10px)' }}
                                            animate={{ opacity: 1, filter: 'blur(0px)' }}
                                            transition={{ duration: 0.6, delay: 0.95 + i * 0.05, ease: "easeOut" }}
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                </span>
                            </motion.h1>

                            <motion.p
                                className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            >
                                Experience the perfect blend of Ayurvedic wisdom and modern healthcare
                            </motion.p>

                            {/* Dual CTAs */}
                            <motion.div
                                className="flex flex-wrap gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                            >
                                <motion.button
                                    className="bg-linear-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-base shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/30 transition-all"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Book Appointment
                                </motion.button>
                                <motion.button
                                    className="bg-white text-emerald-700 px-8 py-4 rounded-full font-semibold text-base border-2 border-emerald-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    View Treatments
                                </motion.button>
                            </motion.div>

                            {/* Trust badges */}
                            <motion.div
                                className="flex flex-wrap items-center gap-6 text-sm text-gray-600"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                            >
                                <span className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Evidence-based therapies
                                </span>
                                <span className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Personalized plans
                                </span>
                                <span className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Calm healing space
                                </span>
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
                                <img
                                    src="/man-8707406_1280.webp"
                                    alt="Nirvana Clinic"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                                        if (fallback) fallback.style.display = 'flex';
                                    }}
                                />
                                {/* Fallback only shows on error */}
                                <div className="hidden absolute inset-0 bg-linear-to-br from-emerald-100 to-teal-100 items-center justify-center">
                                    <ChakraLogo />
                                </div>
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-emerald-900/20 via-transparent to-transparent" />
                            </div>
                            {/* Glass border effect */}
                            <div className="absolute inset-0 rounded-3xl border-2 border-white/20 shadow-2xl shadow-emerald-600/10" />
                            {/* Subtle glow */}
                            <div className="absolute -inset-4 bg-linear-to-r from-emerald-600/10 to-teal-600/10 rounded-3xl blur-2xl -z-10" />
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className="px-4">

                {/* About Nirvana Section */}
                <section className="relative w-full  overflow-hidden">
                    {/* Subtle texture */}
                    <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23059669" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

                    <div className="max-w-6xl mx-auto px-4 relative z-10">
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold text-center mb-8 pt-20"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            Essence of <span className="bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Nirvana</span>
                        </motion.h2>
                        <ScrollRevealText />
                    </div>
                </section>

                <section className="max-w-7xl mx-auto mt-20 px-4 space-y-16">

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
            </div>
        </div>
    );
};

export default Home;
