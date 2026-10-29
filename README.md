# Niyakonh — lokal webbpartner

Svensk presentationssida för Niyakonh Sisouphanh med fokus på företag i Bollnäs med omnejd.

## Starta

```sh
npm install
npm run dev
```

## Bygg

```sh
npm run build
npm run preview
```

React, TypeScript, Vite och Tailwind CSS 4. Ikoner från Lucide. Originalillustrationen i `public/landscape.svg` används i fiktiva designkoncept.

## Att fylla i

- Bekräfta priser, moms och paketinnehåll i `src/App.tsx`.
- Lägg till riktiga kontaktuppgifter. Formuläret förbereder en text att kopiera; det skickar eller lagrar inga uppgifter.
- Lägg till egna bilder, faktiska projekt och eventuell logotyp.
- Anslut en formulärtjänst eller server innan formuläret får skicka förfrågningar.

Typsnitt hämtas från Google Fonts och har lokala systemalternativ. Inga analysverktyg eller cookies används av appen.

Vid publicering behöver webbhotellet skicka okända sidvägar till `index.html` för att React Router och direktlänken `/kontakt` ska fungera. Vites utvecklings- och förhandsvisningsserver hanterar detta automatiskt.
