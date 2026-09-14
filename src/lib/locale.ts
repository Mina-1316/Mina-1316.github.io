import { Locales, type Locale } from "intlayer";

export const DEFAULT_LOCALE = Locales.KOREAN;

export type supported_locale = "en" | "ko";

export function getLocalePrefix(locale: Locale) {
  return locale === "ko" ? "" : `/${locale}`;
}
