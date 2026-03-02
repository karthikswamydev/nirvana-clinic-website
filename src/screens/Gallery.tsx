
import { motion } from 'motion/react'

const galleryCategories = [
    { name: 'Therapy Rooms', count: 0 },
    { name: 'Yoga & Rehabilitation Sessions', count: 0 },
    { name: 'Treatment Procedures', count: 0 },
    { name: 'Clinic Interiors', count: 0 },
    { name: 'Wellness Activities', count: 0 }
]

function GalleryPage() {
    return (
        <div className="min-h-screen flex flex-col ">
            <main className="grow">
                <div className="max-w-7xl mx-auto px-4 py-16">
                    <motion.div
                        className="text-center space-y-4 mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-[#0F9B4A] via-[#0EB4A0] to-[#1B4C9B] bg-clip-text text-transparent font-['Poppins']">
                            Gallery
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-['Poppins']">
                            Explore our healing spaces and wellness activities
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {galleryCategories.map((category, index) => (
                            <motion.div
                                key={category.name}
                                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-xl font-semibold bg-linear-to-r from-[#0F9B4A] to-[#0EB4A0] bg-clip-text text-transparent mb-2 font-['Poppins']">
                                    {category.name}
                                </h3>
                                <p className="text-gray-500 font-['Poppins']">{category.count} photos</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="bg-white rounded-2xl p-12 shadow-lg text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-6xl mb-6">📸</div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 font-['Poppins']">
                            Gallery Coming Soon
                        </h2>
                        <p className="text-lg text-gray-600 font-['Poppins']">
                            We're preparing beautiful images of our facilities and treatments to share with you
                        </p>
                    </motion.div>
                </div>
            </main>
        </div>
    )
}

export default GalleryPage
