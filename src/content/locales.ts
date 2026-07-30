import { es, it, ja, zhCN } from './additional-translations';
import type { Locale, SiteText } from './translations';
import { de, en, fr, zhTW } from './translations';

export interface LocaleDefinition {
  code: Locale;
  path: string;
  name: string;
  hreflang: string;
  ogLocale: string;
  text: SiteText;
}

export const locales: LocaleDefinition[] = [
  { code: 'en', path: '', name: 'English', hreflang: 'en', ogLocale: 'en_US', text: en },
  { code: 'zh-TW', path: 'zh-tw/', name: '繁體中文', hreflang: 'zh-Hant-TW', ogLocale: 'zh_TW', text: zhTW },
  { code: 'zh-CN', path: 'zh-cn/', name: '简体中文', hreflang: 'zh-Hans-CN', ogLocale: 'zh_CN', text: zhCN },
  { code: 'ja', path: 'ja/', name: '日本語', hreflang: 'ja', ogLocale: 'ja_JP', text: ja },
  { code: 'de', path: 'de/', name: 'Deutsch', hreflang: 'de', ogLocale: 'de_DE', text: de },
  { code: 'fr', path: 'fr/', name: 'Français', hreflang: 'fr', ogLocale: 'fr_FR', text: fr },
  { code: 'es', path: 'es/', name: 'Español', hreflang: 'es', ogLocale: 'es_ES', text: es },
  { code: 'it', path: 'it/', name: 'Italiano', hreflang: 'it', ogLocale: 'it_IT', text: it },
];

export function getLocale(code: Locale): LocaleDefinition {
  const locale = locales.find((entry) => entry.code === code);
  if (!locale) throw new Error(`Unknown locale: ${code}`);
  return locale;
}
