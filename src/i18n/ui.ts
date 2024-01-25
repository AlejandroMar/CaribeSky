export const languages = {
  es: "Es",
  en: "En",
};

export const defaultLang = "es";
export const showDefaultLang = false;

export const ui = {
  es: {
    "nav.home": "Inicio",
    "nav.aboutUs": "Nosotros",
    "nav.contact": "Contacto",
    "nav.blog": "Blog",
  },
  en: {
    "nav.home": "Home",
    "nav.aboutUs": "About Us",
    "nav.contact": "Contact",
    "nav.blog": "Blog",
  },
} as const;

export const routes = {
  home: "",
  about: "about-us",
  contact: "contact",
  blog: "blog",
};
