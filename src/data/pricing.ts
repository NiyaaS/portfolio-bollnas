export const packages = [
  {
    name: 'Startpaket',
    subtitle: 'En enkel hemsida för dig som vill komma igång.',
    price: '2 900',
    features: [
      'En sida med upp till fem sektioner',
      'Presentation, tjänster, bilder och kontakt',
      'Befintlig designmall med dina färger och din logotyp',
      'Mobilanpassning och upp till fem bilder',
      'Klickbara telefon- och mejllänkar samt länk till vägbeskrivning',
      'En samlad ändringsrunda',
      'Publicering och hjälp att koppla din domän',
    ],
    label: 'Jag är intresserad av Startpaketet',
    buttonText: 'Prata om startpaketet',
    featured: false,
  },
  {
    name: 'Företagspaket',
    subtitle: 'Mer utrymme för dina tjänster och ditt företag.',
    price: '4 900',
    features: [
      'Upp till fyra sidor: start, tjänster, om företaget och kontakt',
      'Befintlig designmall med dina färger och din logotyp',
      'Mobilanpassning och upp till tio bilder',
      'Kontaktformulär som skickar till din mejl',
      'Klickbara kontaktuppgifter och länk till vägbeskrivning',
      'Sidtitlar och sökbeskrivningar för varje sida',
      'Två samlade ändringsrundor',
      'Publicering och hjälp att koppla din domän',
    ],
    label: 'Jag är intresserad av Företagspaketet',
    buttonText: 'Prata om företagspaketet',
    featured: true,
  },
]

export type PricingPackage = (typeof packages)[number]
