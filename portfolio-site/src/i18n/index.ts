import { nl, type Dict } from './nl';
import { en } from './en';

export type Locale = 'nl' | 'en';

const dicts: Record<Locale, Dict> = { nl, en };

export const SUPPORTED_LOCALES: readonly Locale[] = ['nl', 'en'] as const;
export const DEFAULT_LOCALE: Locale = 'nl';

export function getLocale(astroLocale: string | undefined): Locale {
    return astroLocale === 'en' ? 'en' : 'nl';
}

export function useTranslations(astroLocale: string | undefined): Dict {
    return dicts[getLocale(astroLocale)];
}

/**
 * Compute the path for the same page in the target locale.
 * NL is the default locale (no prefix), EN is prefixed with /en.
 */
export function localizedPath(pathname: string, target: Locale): string {
    const stripped = pathname.replace(/^\/en(\/|$)/, '/');
    const clean = stripped === '' ? '/' : stripped;
    if (target === 'nl') return clean;
    return clean === '/' ? '/en/' : `/en${clean}`;
}

/**
 * Build a localized URL for a given route path.
 * pass routes WITHOUT locale prefix: '/', '/about', '/projects', '/projects/burgerpanels'
 */
export function localizedHref(route: string, locale: Locale): string {
    const clean = route.startsWith('/') ? route : `/${route}`;
    if (locale === 'nl') return clean;
    return clean === '/' ? '/en/' : `/en${clean}`;
}
