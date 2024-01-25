import { getRelativeLocaleUrl } from "astro:i18n";
import { ui, defaultLang, showDefaultLang, routes } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getRoutes(lang: keyof typeof ui) {
  return function path(key: keyof typeof routes) {
    if (key in routes) return `${getRelativeLocaleUrl(lang)}${routes[key]}`;
    return `${getRelativeLocaleUrl(lang)}`;
  };
}

type NavFunction = (key: string) => string;

export const navLinks = (
  t: NavFunction,
  path: NavFunction
): { name: string; path: string }[] => [
  {
    name: t("nav.home"),
    path: path("home"),
  },
  {
    name: t("nav.tours"),
    path: path("tours"),
  },
  {
    name: t("nav.classes"),
    path: path("classes"),
  },
  {
    name: t("nav.rentals"),
    path: path("rentals"),
  },
  {
    name: t("nav.aboutUs"),
    path: path("aboutUs"),
  },
  {
    name: t("nav.contact"),
    path: path("contact"),
  },
];
