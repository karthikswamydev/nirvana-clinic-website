

import { motion } from 'motion/react'

const treatments = [
    {
        name: 'Ozone Therapy',
        description: 'Advanced medical treatment using controlled medical-grade ozone to enhance oxygen delivery at the cellular level.',
        benefits: ['Improves oxygen utilization', 'Enhances immune modulation', 'Reduces chronic inflammation', 'Supports detoxification'],
        keywords: 'Ozone therapy clinic, medical ozone treatment, ozone therapy benefits',
        image: '/treatment-area.png',
        imageAlt: 'Clinical treatment space for integrative ozone and wellness therapies',
    },
    {
        name: 'Massage Therapy',
        description: 'Therapeutic massage focusing on relieving muscular tension, improving blood circulation, and calming the nervous system.',
        benefits: ['Pain and stiffness relief', 'Improved circulation', 'Stress reduction', 'Muscle relaxation'],
        keywords: 'therapeutic massage, pain relief massage therapy, stress relief massage',
        image: '/oil-treatment.png',
        imageAlt: 'Therapeutic oil massage supporting circulation and relaxation',
    },
    {
        name: 'Herbal Therapy',
        description: 'Standardized medicinal herbs to support internal organ function, metabolism, immunity, and hormonal balance.',
        benefits: ['Natural disease management', 'Minimal side effects', 'Long-term metabolic support', 'Immune regulation'],
        keywords: 'herbal medicine clinic, natural herbal treatment, functional herbal therapy',
        image: '/care.png',
        imageAlt: 'Supportive herbal and natural therapeutic care',
    },
    {
        name: 'Nutrition & Diet Therapy',
        description: 'Therapeutic nutrition tailored to medical conditions, lifestyle, and metabolic status.',
        benefits: ['Improves metabolic health', 'Corrects nutritional deficiencies', 'Supports disease reversal', 'Enhances gut health'],
        keywords: 'clinical nutrition therapy, therapeutic diet plans, diet for chronic diseases',
        image: '/care.png',
        imageAlt: 'Personalised nutrition and therapeutic diet guidance',
    },
    {
        name: 'Yoga Therapy',
        description: 'Medically guided practice combining postures, breathing techniques, relaxation, and meditation.',
        benefits: ['Improves flexibility and strength', 'Reduces stress and anxiety', 'Balances hormones', 'Enhances nervous system health'],
        keywords: 'yoga therapy clinic, medical yoga therapy, therapeutic yoga sessions',
        image: '/yoga-rehab.png',
        imageAlt: 'Guided therapeutic yoga and movement for recovery and balance',
    },
    {
        name: 'Physiotherapy',
        description: 'Restoring movement, strength, and functional independence through structured rehabilitation programs.',
        benefits: ['Pain reduction', 'Improved mobility', 'Injury rehabilitation', 'Postural correction'],
        keywords: 'physiotherapy clinic, rehabilitation therapy, pain management physiotherapy',
        image: '/yogalife.jpeg',
        imageAlt: 'Movement and rehabilitation focused physiotherapy support',
    },
    {
        name: 'Electrotherapy',
        description: 'Controlled electrical modalities to relieve pain, stimulate muscles, and accelerate tissue healing.',
        benefits: ['Non-invasive pain relief', 'Muscle re-education', 'Reduced inflammation'],
        keywords: 'electrotherapy treatment, pain relief electrotherapy, TENS therapy clinic',
        image: '/Therapy-room.png',
        imageAlt: 'Therapy room equipped for restorative electrotherapy sessions',
    },
    {
        name: 'Acupuncture',
        description: 'Stimulates specific points to regulate the nervous system, improve circulation, and restore internal organ balance.',
        benefits: ['Pain relief', 'Hormonal regulation', 'Nervous system balance'],
        keywords: 'acupuncture clinic, acupuncture for pain relief, medical acupuncture therapy',
        image: '/foot-therapy.png',
        imageAlt: 'Focused therapeutic acupuncture and point work',
    },
    {
        name: 'Acupressure',
        description: 'Manual pressure on energy points to activate natural healing responses without needles.',
        benefits: ['Stress reduction', 'Pain relief', 'Improved energy flow'],
        keywords: 'acupressure therapy, pressure point therapy, natural pain relief',
        image: '/foot-therapy.png',
        imageAlt: 'Manual acupressure and pressure-point therapy',
    },
    {
        name: 'Cupping Therapy',
        description: 'Improves blood circulation and releases deep-seated muscular tension using vacuum suction techniques.',
        benefits: ['Detoxification', 'Pain relief', 'Muscle relaxation'],
        keywords: 'cupping therapy clinic, hijama therapy, cupping for pain relief',
        image: '/swedana.png',
        imageAlt: 'Body therapy and circulation-supporting treatment setting',
    },
    {
        name: 'Foot Reflexology',
        description: 'Stimulates reflex points connected to internal organs to promote overall balance.',
        benefits: ['Improves circulation', 'Enhances organ function', 'Stress relief'],
        keywords: 'foot reflexology therapy, reflexology clinic, holistic reflexology',
        image: '/foot-therapy.png',
        imageAlt: 'Foot reflexology and therapeutic foot care',
    },
    {
        name: 'Manipulative Therapy',
        description: 'Hands-on techniques to correct joint restrictions and improve alignment.',
        benefits: ['Restores joint mobility', 'Reduces stiffness', 'Improves posture'],
        keywords: 'manipulative therapy, manual therapy clinic, joint mobilization therapy',
        image: '/yoga-rehab.png',
        imageAlt: 'Hands-on manual therapy for alignment and mobility',
    },
    {
        name: 'Shirodhara',
        description: 'Deeply relaxing therapy that calms the nervous system and improves mental clarity.',
        benefits: ['Reduces stress and anxiety', 'Improves sleep quality', 'Enhances mental focus'],
        keywords: 'shirodhara therapy, stress relief ayurvedic therapy, relaxation treatments',
        image: '/ShidhoraOil.png',
        imageAlt: 'Shirodhara-style warm oil flow for deep nervous system relaxation',
    },
    {
        name: 'Potli Massage',
        description: 'Heated herbal bundles to relieve pain, stiffness, and inflammation.',
        benefits: ['Pain and stiffness relief', 'Muscle nourishment', 'Improved circulation'],
        keywords: 'potli massage therapy, herbal bolus massage, pain relief massage',
        image: '/kizhi-potli.png',
        imageAlt: 'Warm herbal potli bolus massage for pain and stiffness relief',
    },
    {
        name: 'Hydrotherapy',
        description: 'Water in various temperatures to stimulate circulation and detoxification.',
        benefits: ['Improves blood flow', 'Enhances detoxification', 'Reduces inflammation'],
        keywords: 'hydrotherapy treatment, water therapy clinic, naturopathy hydrotherapy',
        image: '/swedana.png',
        imageAlt: 'Steam and water-based hydrotherapy for circulation and detoxification',
    },
    {
        name: 'Mud Therapy',
        description: 'Application of natural mud to absorb toxins and reduce inflammation.',
        benefits: ['Detoxification', 'Cooling effect', 'Inflammation reduction'],
        keywords: 'mud therapy treatment, naturopathy mud therapy, detox mud treatment',
        image: '/mud-therapy.png',
        imageAlt: 'Natural mud therapy application for detox and inflammation support',
    },
] as const

function TreatmentsPage() {
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
                        <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-brand-forest via-brand-olive to-brand-forest bg-clip-text text-transparent font-['Poppins']">
                            Our Treatments
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-['Poppins']">
                            Evidence-based integrative therapies designed for long-term healing, symptom relief, and functional restoration
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {treatments.map((treatment, index) => (
                            <motion.article
                                key={treatment.name}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="aspect-16/10 overflow-hidden bg-brand-sage/25 shrink-0">
                                    <img
                                        src={treatment.image}
                                        alt={treatment.imageAlt}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                                <div className="p-6 flex flex-col grow">
                                <h3 className="text-2xl font-semibold bg-linear-to-r from-brand-forest to-brand-olive bg-clip-text text-transparent mb-3 font-['Poppins']">
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
                                                <span className="text-brand-olive mr-2">✓</span>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default TreatmentsPage
