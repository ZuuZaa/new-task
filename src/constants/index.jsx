// ------- imports for products list --------
import WhiteBasedDesk from "assets/images/product_1.jpg";
import BlackBasedDesk from "assets/images/product_2.jpg";
import { nanoid } from "nanoid";

// ------- imports for carousel items -------
import ElleLogo from "assets/icons/elle.svg";
import SemanaLogo from "assets/icons/semana.png";
import VogueLogo from "assets/icons/vogue.png";
import HolaLogo from "assets/icons/ihola.svg";
import DiezMitutosLogo from "assets/icons/diez-minutos.jpeg";
import MarieClaireLogo from "assets/icons/mc-logo.png";

// ------- imports for footer items --------
import { CiFacebook, CiTwitter, CiInstagram, CiYoutube } from "react-icons/ci";

// ------ pruducts list for products section ------
export const productsList = [
  {
    id: nanoid(),
    cover: WhiteBasedDesk,
    title: "one",
    sizes: ["120x70", "140x70"],
    price: 800,
    properties: [
      "Integrated power management",
      "100 days free returns",
      "Two different sizes",
    ],
    discount: 20,
  },
  {
    id: nanoid(),
    cover: BlackBasedDesk,
    title: "pro",
    sizes: ["120x70", "140x70", "160x70", "180x70"],
    price: 1200,
    properties: [
      "Integrated power management",
      "100 days free returns",
      "Two different sizes",
    ],
    discount: null,
  },
];

// ------ carousel items for quotes section ------
export const carouselItems = [
  {
    id: "elle",
    src: ElleLogo,
    quote:
      "“When I was young, I admired clever people. Now that I am old, I admire kind people.”",
    author: "Abraham Heschel",
  },
  {
    id: "semana",
    src: SemanaLogo,
    quote: "“When things go wrong, don’t go with them.”",
    author: "Elvis Presley",
  },
  {
    id: "vogue",
    src: VogueLogo,
    quote:
      "“Habitasse tellus aliquet aliquam a morbi. Et pulvinar urna venenatis duis quam. ”",
    author: "Hablan de nosotros en",
  },
  {
    id: "ihola",
    src: HolaLogo,
    quote:
      "“Imagination is more important than knowledge. Imagination is what we could be.”",
    author: "Albert Einstein",
  },
  {
    id: "diez-minutos",
    src: DiezMitutosLogo,
    quote:
      "“Life is not a problem to be solved, but a reality to be experienced.”",
    author: "oren Kierkegaard",
  },
  {
    id: "telva",
    src: "https://e00-telva.uecdn.es/assets/v3/img/logo-telva.png",
    quote:
      "“Writing is like sex. First you do it for love, then you do it for your friends, and then you do it for money.”",
    author: "Virginia Woolf",
  },
  {
    id: "marie-claire",
    src: MarieClaireLogo,
    quote:
      "“You can’t depend on your eyes when your imagination is out of focus.”",
    author: "Mark Twain",
  },
];

// ----------- footer items ---------
export const mainFooterLinks = [
  {
    title: "shop",
    links: [
      {
        name: "shop",
        url: "/",
      },
      {
        name: "one",
        url: "/",
      },
      {
        name: "pro",
        url: "/",
      },
      {
        name: "accesorios",
        url: "/",
      },
      {
        name: "FAQs",
        url: "/",
      },
    ],
  },
  {
    title: "about",
    links: [
      {
        name: "about",
        url: "/",
      },
      {
        name: "quiénes somos",
        url: "/",
      },
      {
        name: "why us",
        url: "/",
      },
      {
        name: "contactanos",
        url: "/",
      },
      {
        name: "blog",
        url: "/",
      },
    ],
  },
];

export const sosialLinks = [
  {
    name: "instagram",
    url: "https://www.instagram.com/",
    icon: <CiInstagram />,
  },
  {
    name: "facebook",
    url: "https://www.facebook.com/",
    icon: <CiFacebook />,
  },
  {
    name: "twitter",
    url: "https://twitter.com/",
    icon: <CiTwitter />,
  },
  {
    name: "youtube",
    url: "https://www.youtube.com/",
    icon: <CiYoutube />,
  },
];

export const extraFooterList = [
  "Condiciones de Uso y Contratación",
  "Política de Cookies",
  "Política de Privacidad",
  "Copyright ©DESK 2022",
];
