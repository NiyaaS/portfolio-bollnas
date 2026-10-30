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

## Formatera koden

```sh
npm run format
```

Prettier sköter radbrytningar och indenterar med två mellanslag. Kontrollera formateringen utan att ändra filer med `npm run format:check`.

React, TypeScript, Vite och Tailwind CSS 4. Ikoner från Lucide. Originalillustrationen i `public/landscape.svg` används i fiktiva designkoncept.

## Projektstruktur

```text
src/
  App.tsx                    Sidvägar och gemensam layout
  main.tsx                   Startar React
  pages/                     Startsida, kontaktsida och 404-sida
  components/
    layout/                  Sidhuvud, sidfot och hantering av scroll
    home/                    Startsidans sektioner och priskort
    contact/                 Kontaktformulär med förhandsvisning
    ui/                      Små återanvändbara komponenter
    WebsiteMockup.tsx        Designexemplet som visas på flera platser
  data/
    pricing.ts               Prispaket och innehåll
    demos.ts                 Fiktiva designkoncept
    faq.ts                   Vanliga frågor och svar
    process.ts               Stegen från första kontakt till lansering
  styles.css                 Typsnitt, Tailwind, grundstilar och gemensamma klasser
  styles/responsive.css      Gemensamma brytpunkter och rörelseinställningar
```

Filerna använder `.tsx`: vanlig JSX för sidans innehåll, med TypeScript för typkontroll. Ändra ordningen på startsidans sektioner i `src/pages/HomePage.tsx`. Varje sektion har sin egen komponent, och interaktiva delar håller sin egen state.

### Hitta stylingen

CSS-filen ligger bredvid komponenten och importeras där den används:

```text
components/home/
  Hero.tsx
  Hero.css
  PricingCard.tsx
  PricingCard.css
```

Ändra exempelvis sidhuvudet i `src/components/layout/Header.css`, kontaktformuläret i `src/components/contact/ContactForm.css` och kontaktsidans layout i `src/pages/ContactPage.css`. Komponenternas egna mobilregler finns längst ner i deras CSS-filer.

Återanvändbara klasser som `.container`, `.button`, `.wordmark` och `.section-heading` finns i `src/styles.css`. Gemensamma responsiva regler finns i `src/styles/responsive.css`. I `main.tsx` laddas grundstilarna först, därefter komponenterna och sist de gemensamma responsiva reglerna för att bevara CSS:ens prioritering.

Komponenter utan egna stilar, som `HomePage` och `ScrollManager`, behöver ingen separat CSS-fil.

## Att fylla i

- Bekräfta priser, moms och paketinnehåll i `src/data/pricing.ts` och `src/components/home/PricingSection.tsx`.
- Lägg till riktiga kontaktuppgifter. Formuläret förbereder en text att kopiera; det skickar eller lagrar inga uppgifter.
- Lägg till egna bilder, faktiska projekt och eventuell logotyp.
- Anslut en formulärtjänst eller server innan formuläret får skicka förfrågningar.

Typsnitt hämtas från Google Fonts och har lokala systemalternativ. Inga analysverktyg eller cookies används av appen.

Vid publicering behöver webbhotellet skicka okända sidvägar till `index.html` för att React Router och direktlänken `/kontakt` ska fungera. Vites utvecklings- och förhandsvisningsserver hanterar detta automatiskt.
