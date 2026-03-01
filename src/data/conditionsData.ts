export const conditionsData = [
  {
    category: 'Metabolic Disorders',
    conditions: ['Diabetes mellitus', 'Obesity', 'Metabolic syndrome', 'Dyslipidemia'],
    focus: 'Insulin sensitivity, weight management, and metabolic correction'
  },
  {
    category: 'Gastrointestinal Diseases',
    conditions: ['Acid reflux', 'IBS', 'Constipation', 'Fatty liver'],
    focus: 'Gut health, digestion, microbiome balance'
  },
  {
    category: 'Autoimmune Disorders',
    conditions: ['Rheumatoid arthritis', 'Thyroid disorders', 'Psoriasis'],
    focus: 'Inflammation control, immune modulation, gut-immune axis'
  },
  {
    category: 'Pain Management',
    conditions: ['Chronic back pain', 'Neck pain', 'Joint pain', 'Migraine'],
    focus: 'Non-drug pain relief and functional recovery'
  },
  {
    category: 'Hormonal Imbalances',
    conditions: ['PCOS', 'Thyroid disorders', 'Menstrual irregularities', 'Stress-related hormonal imbalance'],
    focus: 'Endocrine regulation through lifestyle and therapies'
  },
  {
    category: 'Neurological Disorders',
    conditions: ['Stress-related disorders', 'Insomnia', 'Peripheral neuropathy', 'Headache disorders'],
    focus: 'Nervous system balance and neuro-relaxation'
  },
  {
    category: 'Musculoskeletal Disorders',
    conditions: ['Arthritis', 'Frozen shoulder', 'Sciatica', 'Sports injuries'],
    focus: 'Mobility, strength, and pain reduction'
  },
  {
    category: 'Stress Management',
    conditions: ['Anxiety', 'Sleep disorders'],
    focus: 'Mind-body therapies and relaxation techniques'
  },
  {
    category: 'Cardiovascular Disorders',
    conditions: ['Hypertension', 'Early heart disease risk', 'Lifestyle-related cardiac issues'],
    focus: 'Circulation, stress reduction, and metabolic health'
  }
]

export const conditionDetails: Record<string, any> = {
  'diabetes-mellitus': {
    name: 'Diabetes Mellitus',
    category: 'Metabolic Disorders',
    tagline: 'Comprehensive metabolic restoration through integrative care',
    overview: 'Diabetes is a chronic metabolic disorder characterized by elevated blood glucose levels. At Nirvana, we address diabetes not just as a blood sugar problem, but as a systemic metabolic imbalance requiring comprehensive lifestyle, dietary, and therapeutic intervention.',
    symptoms: [
      'Frequent urination and excessive thirst',
      'Unexplained weight loss or gain',
      'Persistent fatigue and weakness',
      'Blurred vision',
      'Slow-healing wounds',
      'Tingling or numbness in extremities',
    ],
    rootCauses: [
      'Insulin resistance due to poor diet and sedentary lifestyle',
      'Chronic inflammation affecting pancreatic function',
      'Gut microbiome imbalance impacting glucose metabolism',
      'Stress-induced hormonal dysregulation',
      'Genetic predisposition combined with environmental triggers',
    ],
    approach: 'Our integrative approach targets the root metabolic dysfunction rather than merely managing symptoms. We combine evidence-based natural therapies with lifestyle modification to restore insulin sensitivity, reduce inflammation, and support pancreatic health.',
    therapies: [
      { name: 'Naturopathy', description: 'Detoxification and metabolic reset protocols' },
      { name: 'Functional Medicine', description: 'Personalized nutrition and supplement plans' },
      { name: 'Yoga Therapy', description: 'Asanas and pranayama for metabolic regulation' },
      { name: 'Acupuncture', description: 'Meridian-based glucose regulation' },
      { name: 'Diet Therapy', description: 'Low glycemic, anti-inflammatory meal planning' },
      { name: 'Herbal Medicine', description: 'Ayurvedic herbs for blood sugar control' },
    ],
    outcomes: [
      'Improved fasting and postprandial glucose levels',
      'Reduced HbA1c within 3-6 months',
      'Decreased medication dependency (under medical supervision)',
      'Enhanced energy levels and metabolic function',
      'Prevention of diabetic complications',
    ],
  },
}
