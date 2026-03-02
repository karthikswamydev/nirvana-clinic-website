import { motion } from 'motion/react'
import { conditionsData } from '../data/conditionsData'

function ConditionsPage() {
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
                        <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-[#0F9B4A] via-[#0EB4A0] to-[#1B4C9B] bg-clip-text text-transparent">
                            Conditions We Treat
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive integrative care for chronic and lifestyle-related health conditions
                        </p>
                    </motion.div>

                    <div className="space-y-12">
                        {conditionsData.map((item, index) => (
                            <motion.div
                                key={item.category}
                                className="border-l-4 border-emerald-600 pl-8 py-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                    {item.category}
                                </h3>
                                <div className="flex flex-wrap gap-3 mb-4">
                                    {item.conditions.map((condition) => (
                                        <span
                                            key={condition}
                                            className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 hover:border-emerald-600 hover:text-emerald-600 transition-all cursor-pointer"
                                        >
                                            {condition}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-sm text-gray-600">
                                    <span className="font-semibold">Our Focus:</span> {item.focus}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}
export default ConditionsPage