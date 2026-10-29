import { ui, defaultLang, type languages } from './ui';

export type Lang = keyof typeof languages;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function localizedPath(lang: Lang, path: string) {
  const clean = path.replace(/^\//, '');
  if (lang === defaultLang) return `/${clean}`;
  return `/${lang}/${clean}`;
}

const ptToEnSlug: Record<string, string> = {
  '': '',
  sobre: 'about',
  pesquisa: 'research',
  'arquitetura-6c': '6c-architecture',
  projetos: 'projects',
  experiencia: 'experience',
  palestras: 'speaking',
  contato: 'contact',
};
const enToPtSlug: Record<string, string> = Object.fromEntries(
  Object.entries(ptToEnSlug).map(([pt, en]) => [en, pt]),
);

/** Builds the localized href for a canonical (pt) path segment, e.g. navPath('en', 'sobre') -> '/en/about'. */
export function navPath(lang: Lang, ptPath: string) {
  const mapped = lang === 'en' ? (ptToEnSlug[ptPath] ?? ptPath) : ptPath;
  return localizedPath(lang, mapped);
}

/** Maps the current path (pt or en) to its equivalent in the other language. */
export function alternatePath(lang: Lang, currentPath: string) {
  const parts = currentPath.split('/').filter(Boolean);
  const isEn = parts[0] === 'en';
  if (isEn) parts.shift();

  const [first, ...rest] = parts;
  if (lang === 'en') {
    const mapped = first ? (ptToEnSlug[first] ?? first) : '';
    return localizedPath('en', [mapped, ...rest].filter(Boolean).join('/'));
  }
  const mapped = first ? (enToPtSlug[first] ?? first) : '';
  return localizedPath('pt', [mapped, ...rest].filter(Boolean).join('/'));
}
