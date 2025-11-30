import { ChakraLogo } from "../assets/Icon";
import { HealingAura } from "../assets/Icon/HealingAura";
import { HealingEcosystemLogo } from "../assets/Icon/PathToHealingLogo";
import { Footer } from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <main className="grow container mx-auto px-4 py-12">
                <div className="text-center space-y-6 max-w-6xl mx-auto">
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-linear-to-r from-[#0F9B4A] via-[#0EB4A0] to-[#1B4C9B] bg-clip-text text-transparent tracking-tight animate-linear text-center whitespace-nowrap leading-tight pb-2">
                        Nirvana Integrated Clinic
                    </h1>
                    <p className="text-md text-gray-500 font-light font-['Poppins']  leading-relaxed">
                        Experience the perfect blend of Ayurvedic wisdom and modern
                        healthcare.
                    </p>
                    <div className="flex items-center justify-center mb-6 gap-8">
                        <div className="flex-1 h-px bg-linear-to-r from-transparent via-[#0EB4A0] to-transparent max-w-80"></div>
                        <ChakraLogo />
                        <div className="flex-1 h-px bg-linear-to-r from-transparent via-[#0EB4A0] to-transparent max-w-80"></div>
                    </div>
                    {/* <div className="pt-4">
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                            Start Your Journey
                        </button>
                    </div> */}
                </div>

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
                        <div className="w-full lg:w-2/3 space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-[#8cb59d] via-[#0a7942] to-[#034930] bg-clip-text text-transparent font-['Poppins'] ">
                                Essence of Nirvana
                            </h2>

                            <div className="space-y-6 text-light text-slate-500 font-['Poppins'] leading-[1.9] tracking-[0.2px]">
                                <p className="text-light">
                                    Nirvana Integrated Clinic is founded with a single purpose —
                                    to heal people completely, not partially. We believe that true
                                    recovery happens when the body, mind, and lifestyle are treated
                                    together. Instead of depending on just one therapy, we integrate
                                    multiple scientifically supported natural healing systems to offer
                                    faster, deeper, and more sustainable results.
                                </p>

                                <p className="">
                                    At Nirvana, every patient receives a personalised treatment plan
                                    that blends the best of Naturopathy, Functional Medicine, Yoga
                                    Therapy, Herbal Medicine, Acupuncture, Ozone Therapy, Chiropractic
                                    Care, Physiothewordsrapy, Diet Therapy, and Reflexology. By combining
                                    these powerful therapies, we aim not only to manage symptoms but to
                                    address the root cause of illness — ensuring long-lasting wellness.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Section Break */}
                    <div className="flex items-center justify-center gap-6 py-8">
                        <div className="flex-1 h-px bg-linear-to-r from-transparent via-gray-300 to-gray-300 max-w-md"></div>
                        <div className="w-48 h-48">
                            <HealingAura />
                        </div>

                        <div className="flex-1 h-px bg-linear-to-l from-transparent via-gray-300 to-gray-300 max-w-md"></div>
                    </div>

                    {/* What Sets Us Apart - Journey Map */}
                    <div className="space-y-12 py-12">
                        <h3 className="text-3xl md:text-4xl font-bold text-center bg-linear-to-r from-[#8cb59d] via-[#0a7942] to-[#034930] bg-clip-text text-transparent font-['Poppins']">
                            The Nirvana Difference
                        </h3>

                        <div className="relative max-w-5xl mx-auto">
                            {/* Vertical Timeline */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-linear-to-b from-[#0F9B4A] via-[#0EB4A0] to-[#1B4C9B] opacity-30"></div>

                            {/* Item 1 - Left */}
                            <div className="relative flex items-center mb-16">
                                <div className="w-1/2 pr-12 text-right">
                                    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#0F9B4A]">
                                        <h4 className="text-xl font-bold text-gray-900 font-['Poppins'] mb-3">
                                            Integrated Multidisciplinary Approach
                                        </h4>
                                        <p className="text-gray-600 font-['Poppins'] text-sm leading-relaxed">
                                            We don't rely on a single method. Every treatment plan is a combination of therapies to speed up healing and enhance results.
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg z-10 border-2 border-[#0F9B4A]">
                                    <span className="text-3xl">🧘</span>
                                </div>
                                <div className="w-1/2"></div>
                            </div>

                            {/* Item 2 - Right */}
                            <div className="relative flex items-center mb-16">
                                <div className="w-1/2"></div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg z-10 border-2 border-[#0EB4A0]">
                                    <span className="text-3xl">🌿</span>
                                </div>
                                <div className="w-1/2 pl-12">
                                    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border-r-4 border-[#0EB4A0]">
                                        <h4 className="text-xl font-bold text-gray-900 font-['Poppins'] mb-3">
                                            Root-Cause Based Healing
                                        </h4>
                                        <p className="text-gray-600 font-['Poppins'] text-sm leading-relaxed">
                                            Our focus is not only disease management but long-term cure through lifestyle correction, detoxification, and natural therapeutic support.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Item 3 - Left */}
                            <div className="relative flex items-center mb-16">
                                <div className="w-1/2 pr-12 text-right">
                                    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#1B4C9B]">
                                        <h4 className="text-xl font-bold text-gray-900 font-['Poppins'] mb-3">
                                            Premium Care at Affordable Cost
                                        </h4>
                                        <p className="text-gray-600  text-sm leading-relaxed">
                                            We ensure high-quality therapy, modern clinical standards, and patient-centered care without unnecessary expense.
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg z-10 border-2 border-[#1B4C9B]">
                                    <span className="text-3xl">💚</span>
                                </div>
                                <div className="w-1/2"></div>
                            </div>

                            {/* Item 4 - Right */}
                            <div className="relative flex items-center mb-16">
                                <div className="w-1/2"></div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg z-10 border-2 border-[#0F9B4A]">
                                    <span className="text-3xl">🤝</span>
                                </div>
                                <div className="w-1/2 pl-12">
                                    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border-r-4 border-[#0F9B4A]">
                                        <h4 className="text-xl font-bold text-gray-900 font-['Poppins'] mb-3">
                                            Experienced & Compassionate Team
                                        </h4>
                                        <p className="text-gray-600 font-['Poppins'] text-sm leading-relaxed">
                                            All therapies are delivered by trained professionals with deep expertise in natural and integrative medicine.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Item 5 - Left */}
                            <div className="relative flex items-center">
                                <div className="w-1/2 pr-12 text-right">
                                    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#0EB4A0]">
                                        <h4 className="text-xl font-bold text-gray-900 font-['Poppins'] mb-3">
                                            Comfortable & Healing Environment
                                        </h4>
                                        <p className="text-gray-600 font-['Poppins'] text-sm leading-relaxed">
                                            Our clinic is designed to give you a peaceful, rejuvenating experience from the moment you walk in.
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg z-10 border-2 border-[#0EB4A0]">
                                    <span className="text-3xl">🪷</span>
                                </div>
                                <div className="w-1/2"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
