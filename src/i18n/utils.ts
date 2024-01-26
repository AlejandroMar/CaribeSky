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

export function getRouteFromUrl(lang, url: URL): string {
  const segments = url.pathname.split("/");
  let route;

  if (segments.length >= 3) {
    // If there are 3 or more segments, the route is everything after the language segment
    route = segments.slice(2).join("/");
  } else if (segments.length === 2) {
    // If there are 2 segments, the route is the second segment
    route = segments[1];
  }
  if (route in routes) return `${getRelativeLocaleUrl(lang)}${routes[route]}`;
  return `${getRelativeLocaleUrl(lang)}`;
  return route;
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
