/*
 * ALT INNHOLD PÅ NETTSIDEN
 * Tekster, bilder, lenker og kontaktinfo redigeres her – ikke i sidene.
 */
import intro1 from "../assets/images/intro-1.jpg";
import intro2 from "../assets/images/intro-2.jpg";
import intro3 from "../assets/images/intro-3.jpg";
import hero from "../assets/images/hero.jpg";
import schedule1 from "../assets/images/schedule-1.jpg";
import schedule2 from "../assets/images/schedule-2.jpg";
import gallery1 from "../assets/images/gallery-1.jpg";
import gallery2 from "../assets/images/gallery-2.jpg";
import gallery3 from "../assets/images/gallery-3.jpg";
import giftsPortrait from "../assets/images/gifts-portrait.jpg";
import giftsBackground from "../assets/images/gifts-background.jpg";
import venueGarden from "../assets/images/venue-garden.jpg";
import venueBackground from "../assets/images/venue-background.jpg";
import info1 from "../assets/images/info-1.jpg";
import info2 from "../assets/images/info-2.jpg";
import info3 from "../assets/images/info-3.jpg";

export const wedding = {
  couple: "Ida & Jonas",
  dateLabel: "19. juni 2027",
  venueLabel: "Legenes hus, Bergen",
  // Brukes av nedtellingen. +02:00 = norsk sommertid.
  ceremonyStart: "2027-06-19T13:30:00+02:00",
};

export const navLinks = [
  { to: "/", label: "Forside" },
  { to: "/lokalet", label: "Lokalet" },
  { to: "/gaveliste", label: "Gaveliste" },
  { to: "/info", label: "Nyttig info" },
];

export const rsvp = {
  navLabel: "Svar utbedes",
  path: "/svar",
  buttonLabel: "RSVP now",
  deadline: "Svar utbedes innen 1. mars 2027",
  // Lim inn embed-lenken fra Google Skjema her når den er klar
  // (Send → <> → kopier src="..."). Tom = viser "kommer snart".
  formUrl: "",
};

export const home = {
  introPhotos: [
    { src: intro1, alt: "Ida og Jonas smiler på en bar" },
    { src: intro2, alt: "Ida og Jonas sitter sammen i en sofa" },
    { src: intro3, alt: "Ida og Jonas kysser ute om kvelden" },
  ],
  hero: {
    image: hero,
    heading: "Vi håper at du vil feire denne\ndagen med oss",
  },
  schedule: {
    title: "Tidsplan",
    date: "19. juni 2027",
    photos: [
      { src: schedule1, alt: "Ida og Jonas foran røde busker", rotate: 6 },
      { src: schedule2, alt: "Ida og Jonas klemmer i en hage", rotate: -4 },
    ],
    items: [
      {
        time: "12:30",
        title: "Ankomst",
        text: "Alle finner plassene sine og får sittet seg godt tilrette i den fine hagen",
      },
      {
        time: "13:30",
        title: "Vielse",
        text: "Seremonien starter presis klokken 13:30 og det vil ikke være mulig å snike seg inn",
      },
      {
        time: "17:00",
        title: "Middag",
        text: "Vi setter oss til bords for en deilig 3-retters middag",
      },
      {
        time: "22:00",
        title: "Kakekutting, dans og fest",
        text: "Middagen avsluttes med kakebord før det ryddes plass til dansegulv",
      },
    ],
  },
  gallery: {
    heading: "Vi gleder oss til å se dere der\npå vår spesielle dag!",
    photos: [
      { src: gallery1, alt: "Ida og Jonas foran Tokyo Skytree" },
      { src: gallery2, alt: "Ida og Jonas pyntet foran blomstertapet" },
      { src: gallery3, alt: "Ida og Jonas tar en selfie i mørket" },
    ],
  },
};

export const gifts = {
  title: "Gaveliste",
  image: { src: giftsPortrait, alt: "Ida og Jonas ved sjøen" },
  background: giftsBackground,
  linkLabel: "Lenke",
  lists: [
    { name: "Illums", url: "#" },
    { name: "Ønsk", url: "#" },
    { name: "Kitchn", url: "#" },
    { name: "Blabla", url: "#" },
  ],
};

export const venue = {
  title: "Lokalet",
  image: { src: venueGarden, alt: "Gjester samlet på terrassen foran Legenes hus" },
  background: venueBackground,
  name: "Legenes hus",
  address: "Adresse: Kalfarveien 37",
  paragraphs: [
    "Vi inviterer til Legenes hus for vielse, middag og fest. Lokalisert i Kalfaret er den bare 5 minutter gåavstand fra jernbanestasjonen som gjør det enkelt å komme seg både dit og hjem igjen med kollektivt.",
    "Vielsen vil bli holdt ute på baksiden av denne villaen fra 1869. I tilfelle dårlig vær så vil man ha muligheten til å gjennomføre vielsen i underetasjen, men kle dere for å stå ute.",
  ],
};

export const info = {
  title: "Nyttig\ninformasjon",
  photos: [
    { src: info1, alt: "Ida og Jonas skåler med cocktails", rotate: 0 },
    { src: info2, alt: "Ida og Jonas ute en kald kveld", rotate: -1 },
    { src: info3, alt: "En hånd med forlovelsesring blant rosa blomster", rotate: 0 },
  ],
  items: [
    {
      title: "Alkoholservering",
      paragraphs: [
        "Vi kommer til å åpne baren allerede etter vielsen slik at man kan kjøpe alkohol selv. All drikke til maten er inkludert (øl, vin og brus). Etter middag vil det også være noe øl tilgjengelig på vår regning, men ellers er baren åpen for vin og cocktails.",
      ],
    },
    {
      title: "Parkering",
      paragraphs: [
        "Det er parkeringsplasser tilgjengelig på området hvor man vil kunne parkere hele helgen. Da parkeringsplassene er begrenset er det hyggelig om man kjører sammen eller setter bilen igjen hjemme og forbeholder plassene til dem som må bo på hotell.",
      ],
    },
    {
      title: "Kleskode",
      paragraphs: [
        "Du skal pynte deg! Ta på deg noe du føler deg skikkelig fin i.",
        "Damer: Lange kjoler i farger eller elegante mønstre (unngå hvit, svart og rødt såklart)",
        "Menn: Både dress og smoking passer bra. Både sløyfe og slips er kjekt å gå med når man kan kaste det på dansegulvet senere",
      ],
    },
    {
      title: "Overnatting",
      paragraphs: [
        "Brudeparet kommer til å sove på Hotel Norge. Målet er å få til en frokost på søndagen om formen tillater slikt, andre gjester bor også der",
      ],
    },
    {
      title: "Pluss 1",
      paragraphs: [
        "Vi har dessverre ikke muligheter til å invitere flere til middagen. Invitasjonen gjelder dem som er navngitt. Om du har en du gjerne vil ha med så ta kontakt så kan vi nok finne en plass til dem på festen etterpå!",
      ],
    },
    {
      title: "Tale",
      paragraphs: [
        "Om du ønsker å holde en tale ber vi deg ta kontakt med Ida i forkant av bryllupet. Det kommer ikke til å være rom for spontane taler så alt må være meldt inn på forhånd",
      ],
    },
  ],
};

export const contacts = [
  { name: "Ida", phone: "+47 000 00 000", email: "ida@eksempel.no" },
  { name: "Jonas", phone: "+47 000 00 000", email: "jonas@eksempel.no" },
];