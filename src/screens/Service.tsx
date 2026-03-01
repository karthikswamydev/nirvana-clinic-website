

const Service = () => {
    return (
        <>
            <div className="text-center space-y-4 py-12">
                <div className="inline-block">
                    <p className="text-sm md:text-base font-bold tracking-widest uppercase bg-linear-to-r from-[#0F9B4A] via-[#0EB4A0] to-[#1B4C9B] bg-clip-text text-transparent animate-linear px-6 py-2 rounded-full border-2 border-[#0EB4A0]/30 backdrop-blur-sm shadow-lg">
                        ✨ The Nirvana Difference ✨
                    </p>
                </div>
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold bg-linear-to-r from-[#0F9B4A] via-[#0EB4A0] to-[#1B4C9B] bg-clip-text text-transparent font-['Poppins']">
                    Excellence in Every Aspect of Your Care
                </p>
                <p className="text-lg md:text-xl font-light bg-linear-to-b from-gray-600 to-gray-400 bg-clip-text text-transparent max-w-3xl mx-auto font-['Poppins']">
                    Discover the thoughtful approach that makes healing both effective and transformative
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 space-y-20 py-12">
                {/* Item 1 - Image Left */}
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="w-full lg:w-1/2">
                        <img src="/ShidhoraOil.png" alt="Integrated Multidisciplinary Approach" className="w-full aspect-[4/3] object-cover rounded-2xl border-2 border-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)] hover:border-gray-300 transition-all duration-300" />
                    </div>
                    <div className="w-full lg:w-1/2 space-y-4">
                        <h2 className="relative inline-block text-xl md:text-2xl font-semibold text-gray-900 font-['Poppins']">
                            <span
                                className="bg-linear-to-r from-lime-400 to-lime-50 text-green-900 px-4 md:px-5 py-1 md:py-2 inline-block font-bold rounded-lg">
                                Integrated Multidisciplinary Approach
                            </span>
                        </h2>
                        {/* <h4 className="text-3xl font-semibold bg-linear-to-r  from-[#0F9B4A] via-[#14544c] to-[#0a4320] bg-clip-text text-transparent font-['Poppins']">Integrated Multidisciplinary Approach</h4> */}
                        <p className="text-lg text-gray-600 font-['Poppins'] leading-relaxed">Healing is never a one-step process. We blend various therapies into each treatment plan, creating a holistic approach that speeds recovery and maximizes results.</p>
                    </div>
                </div>

                {/* Item 2 - Image Right */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                    <div className="w-full lg:w-1/2">
                        <img src="/kizhi-potli.png" alt="Root-Cause Based Healing" className="w-full aspect-4/3 object-cover rounded-2xl border-2 border-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)] hover:border-gray-300 transition-all duration-300" />
                    </div>
                    <div className="w-full lg:w-1/2 space-y-4">
                        {/* <h4 className="text-3xl font-semibold bg-linear-to-r  from-[#0F9B4A] via-[#14544c] to-[#0a4320] bg-clip-text text-transparent font-['Poppins']">Root-Cause Based Healing</h4> */}
                        <h2 className="relative inline-block text-xl md:text-2xl font-semibold text-gray-900 font-['Poppins']">
                            <span
                                className="bg-linear-to-r from-lime-400 to-lime-50 text-green-900 px-4 md:px-5 py-1 md:py-2 inline-block font-bold rounded-lg">
                                Root-Cause Based Healing
                            </span>
                        </h2>
                        <p className="text-lg text-gray-600 font-['Poppins'] leading-relaxed">Our focus is not only disease management but long-term cure through lifestyle correction, detoxification, and natural therapeutic support.</p>
                    </div>
                </div>

                {/* Item 3 - Image Left */}
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="w-full lg:w-1/2">
                        <img src="/care.png" alt="Premium Care at Affordable Cost" className="w-full aspect-4/3 object-cover rounded-2xl border-2 border-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)] hover:border-gray-300 transition-all duration-300" />
                    </div>
                    <div className="w-full lg:w-1/2 space-y-4">
                        {/* <h4 className="text-3xl font-semibold bg-linear-to-r  from-[#0F9B4A] via-[#14544c] to-[#0a4320] bg-clip-text text-transparent font-['Poppins']">Premium Care at Affordable Cost</h4> */}
                        <h2 className="relative inline-block text-xl md:text-2xl font-semibold text-gray-900 font-['Poppins']">
                            <span
                                className="bg-linear-to-r from-lime-400 to-lime-50 text-green-900 px-4 md:px-5 py-1 md:py-2 inline-block font-bold rounded-lg">
                                Premium Care at Affordable Cost
                            </span>
                        </h2>
                        <p className="text-lg text-gray-600 font-['Poppins'] leading-relaxed">We ensure high-quality therapy, modern clinical standards, and patient-centered care without unnecessary expense.</p>
                    </div>
                </div>

                {/* Item 4 - Image Right */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                    <div className="w-full lg:w-1/2">
                        <img src="/swedana.png" alt="Experienced & Compassionate Team" className="w-full aspect-4/3 object-cover rounded-2xl border-2 border-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)] hover:border-gray-300 transition-all duration-300" />
                    </div>
                    <div className="w-full lg:w-1/2 space-y-4">
                        {/* <h4 className="text-3xl font-semibold bg-linear-to-r  from-[#0F9B4A] via-[#14544c] to-[#0a4320] bg-clip-text text-transparent font-['Poppins']">Experienced & Compassionate Team</h4> */}
                        <h2 className="relative inline-block text-xl md:text-2xl font-semibold text-gray-900 font-['Poppins']">
                            <span
                                className="bg-linear-to-r from-lime-400 to-lime-50 text-green-900 px-4 md:px-5 py-1 md:py-2 inline-block font-bold rounded-lg">
                                Experienced & Compassionate Team
                            </span>
                        </h2>
                        <p className="text-lg text-gray-600 font-['Poppins'] leading-relaxed">All therapies are delivered by trained professionals with deep expertise in natural and integrative medicine.</p>
                    </div>
                </div>

                {/* Item 5 - Image Left */}
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="w-full lg:w-1/2">
                        <img src="/foot-therapy.png" alt="Comfortable & Healing Environment" className="w-full aspect-4/3 object-cover rounded-2xl border-2 border-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)] hover:border-gray-300 transition-all duration-300" />
                    </div>
                    <div className="w-full lg:w-1/2 space-y-4">
                        {/* <h4 className="text-3xl font-semibold bg-linear-to-r  from-[#0F9B4A] via-[#14544c] to-[#0a4320] bg-clip-text text-transparent font-['Poppins']">Comfortable & Healing Environment</h4> */}
                        <h2 className="relative inline-block text-xl md:text-2xl font-semibold text-gray-900 font-['Poppins']">
                            <span
                                className="bg-linear-to-r from-lime-400 to-lime-50 text-green-900 px-4 md:px-5 py-1 md:py-2 inline-block font-bold rounded-lg">
                                Comfortable & Healing Environment
                            </span>
                        </h2>
                        <p className="text-lg text-gray-600 font-['Poppins'] leading-relaxed">Our clinic is designed to offer a peaceful and rejuvenating experience from the moment you step through our doors.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service
