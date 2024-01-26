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

export function getRouteFromUrl(lang: keyof typeof ui, url: URL): string {
  const segments = url.pathname.split("/");
  let route;

  if (segments[1] in ui) {
    // If the second segment is a language, the route starts at the third segment
    route = segments.slice(2).join("/");
  } else {
    // If the second segment is not a language, the route starts at the second segment
    route = segments.slice(1).join("/");
  }

  if (route in routes) {
    return `${getRelativeLocaleUrl(lang)}${routes[route]}`;
  } else {
    return `${getRelativeLocaleUrl(lang)}`;
  }
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
    name: t("nav.about"),
    path: path("about"),
  },
  {
    name: t("nav.contact"),
    path: path("contact"),
  },
];
