export const packages = [
  {
    name: 'En bra start',
    subtitle: 'För dig som vill komma online.',
    price: '4 900',
    features: [
      'En genomtänkt sida',
      'Design för mobil & dator',
      'Presentation av ditt företag',
      'Kontaktuppgifter & sociala länkar',
    ],
    label: 'Prata om en enkel hemsida',
  },
  {
    name: 'Plats att växa',
    subtitle: 'För dig som vill visa lite mer.',
    price: '9 900',
    features: [
      'Upp till fem sidor',
      'Allt i En bra start',
      'Utrymme för tjänster & projekt',
      'Grundläggande sökoptimering',
      'Genomgång inför lansering',
    ],
    label: 'Prata om en större hemsida',
    popular: true,
  },
  {
    name: 'Något eget',
    subtitle: 'För behov som går utanför mallen.',
    price: null,
    features: [
      'Upplägg utifrån dina behov',
      'Anpassad design & funktion',
      'Möjlighet att bygga vidare',
      'Gemensam plan för projektet',
    ],
    label: 'Berätta om din idé',
  },
]

export type PricingPackage = (typeof packages)[number]
