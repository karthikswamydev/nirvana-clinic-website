

import { motion } from 'motion/react'

const treatments = [
    {
        name: 'Ozone Therapy',
        description: 'Advanced medical treatment using controlled medical-grade ozone to enhance oxygen delivery at the cellular level.',
        benefits: ['Improves oxygen utilization', 'Enhances immune modulation', 'Reduces chronic inflammation', 'Supports detoxification'],
        keywords: 'Ozone therapy clinic, medical ozone treatment, ozone therapy benefits'
    },
    {
        name: 'Massage Therapy',
        description: 'Therapeutic massage focusing on relieving muscular tension, improving blood circulation, and calming the nervous system.',
        benefits: ['Pain and stiffness relief', 'Improved circulation', 'Stress reduction', 'Muscle relaxation'],
        keywords: 'therapeutic massage, pain relief massage therapy, stress relief massage'
    },
    {
        name: 'Herbal Therapy',
        description: 'Standardized medicinal herbs to support internal organ function, metabolism, immunity, and hormonal balance.',
        benefits: ['Natural disease management', 'Minimal side effects', 'Long-term metabolic support', 'Immune regulation'],
        keywords: 'herbal medicine clinic, natural herbal treatment, functional herbal therapy'
    },
    {
        name: 'Nutrition & Diet Therapy',
        description: 'Therapeutic nutrition tailored to medical conditions, lifestyle, and metabolic status.',
        benefits: ['Improves metabolic health', 'Corrects nutritional deficiencies', 'Supports disease reversal', 'Enhances gut health'],
        keywords: 'clinical nutrition therapy, therapeutic diet plans, diet for chronic diseases'
    },
    {
        name: 'Yoga Therapy',
        description: 'Medically guided practice combining postures, breathing techniques, relaxation, and meditation.',
        benefits: ['Improves flexibility and strength', 'Reduces stress and anxiety', 'Balances hormones', 'Enhances nervous system health'],
        keywords: 'yoga therapy clinic, medical yoga therapy, therapeutic yoga sessions'
    },
    {
        name: 'Physiotherapy',
        description: 'Restoring movement, strength, and functional independence through structured rehabilitation programs.',
        benefits: ['Pain reduction', 'Improved mobility', 'Injury rehabilitation', 'Postural correction'],
        keywords: 'physiotherapy clinic, rehabilitation therapy, pain management physiotherapy'
    },
    {
        name: 'Electrotherapy',
        description: 'Controlled electrical modalities to relieve pain, stimulate muscles, and accelerate tissue healing.',
        benefits: ['Non-invasive pain relief', 'Muscle re-education', 'Reduced inflammation'],
        keywords: 'electrotherapy treatment, pain relief electrotherapy, TENS therapy clinic'
    },
    {
        name: 'Acupuncture',
        description: 'Stimulates specific points to regulate the nervous system, improve circulation, and restore internal organ balance.',
        benefits: ['Pain relief', 'Hormonal regulation', 'Nervous system balance'],
        keywords: 'acupuncture clinic, acupuncture for pain relief, medical acupuncture therapy'
    },
    {
        name: 'Acupressure',
        description: 'Manual pressure on energy points to activate natural healing responses without needles.',
        benefits: ['Stress reduction', 'Pain relief', 'Improved energy flow'],
        keywords: 'acupressure therapy, pressure point therapy, natural pain relief'
    },
    {
        name: 'Cupping Therapy',
        description: 'Improves blood circulation and releases deep-seated muscular tension using vacuum suction techniques.',
        benefits: ['Detoxification', 'Pain relief', 'Muscle relaxation'],
        keywords: 'cupping therapy clinic, hijama therapy, cupping for pain relief'
    },
    {
        name: 'Foot Reflexology',
        description: 'Stimulates reflex points connected to internal organs to promote overall balance.',
        benefits: ['Improves circulation', 'Enhances organ function', 'Stress relief'],
        keywords: 'foot reflexology therapy, reflexology clinic, holistic reflexology'
    },
    {
        name: 'Manipulative Therapy',
        description: 'Hands-on techniques to correct joint restrictions and improve alignment.',
        benefits: ['Restores joint mobility', 'Reduces stiffness', 'Improves posture'],
        keywords: 'manipulative therapy, manual therapy clinic, joint mobilization therapy'
    },
    {
        name: 'Shirodhara',
        description: 'Deeply relaxing therapy that calms the nervous system and improves mental clarity.',
        benefits: ['Reduces stress and anxiety', 'Improves sleep quality', 'Enhances mental focus'],
        keywords: 'shirodhara therapy, stress relief ayurvedic therapy, relaxation treatments'
    },
    {
        name: 'Potli Massage',
        description: 'Heated herbal bundles to relieve pain, stiffness, and inflammation.',
        benefits: ['Pain and stiffness relief', 'Muscle nourishment', 'Improved circulation'],
        keywords: 'potli massage therapy, herbal bolus massage, pain relief massage'
    },
    {
        name: 'Hydrotherapy',
        description: 'Water in various temperatures to stimulate circulation and detoxification.',
        benefits: ['Improves blood flow', 'Enhances detoxification', 'Reduces inflammation'],
        keywords: 'hydrotherapy treatment, water therapy clinic, naturopathy hydrotherapy'
    },
    {
        name: 'Mud Therapy',
        description: 'Application of natural mud to absorb toxins and reduce inflammation.',
        benefits: ['Detoxification', 'Cooling effect', 'Inflammation reduction'],
        keywords: 'mud therapy treatment, naturopathy mud therapy, detox mud treatment'
    }
]

function TreatmentsPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <main className="grow">
                <div className="max-w-7xl mx-auto px-4 py-16">
                    <motion.div
                        className="text-center space-y-4 mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-[#0F9B4A] via-[#0EB4A0] to-[#1B4C9B] bg-clip-text text-transparent font-['Poppins']">
                            Our Treatments
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-['Poppins']">
                            Evidence-based integrative therapies designed for long-term healing, symptom relief, and functional restoration
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {treatments.map((treatment, index) => (
                            <motion.div
                                key={treatment.name}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl font-semibold bg-linear-to-r from-[#0F9B4A] to-[#0EB4A0] bg-clip-text text-transparent mb-3 font-['Poppins']">
                                    {treatment.name}
                                </h3>
                                <p className="text-gray-600 mb-4 font-['Poppins'] leading-relaxed">
                                    {treatment.description}
                                </p>
                                <div className="space-y-2">
                                    <p className="text-sm font-semibold text-gray-700 font-['Poppins']">Benefits:</p>
                                    <ul className="space-y-1">
                                        {treatment.benefits.map((benefit) => (
                                            <li key={benefit} className="text-sm text-gray-600 flex items-start font-['Poppins']">
                                                <span className="text-[#0EB4A0] mr-2">✓</span>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default TreatmentsPage
