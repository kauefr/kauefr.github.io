import type { LanguageCode, LocaleInfo, TranslateFunction, TranslationsDict } from "./types";
import { en } from "./translations/en";
import { pt_BR } from "./translations/pt-BR";

export const translations: TranslationsDict = {
    "en": en,
    "pt-BR": pt_BR
};

export const localeInfo: LocaleInfo = $state({
    _currentLocale: "en" satisfies LanguageCode as LanguageCode,
    _currentDictEntry: translations["en"],
    get currentLocale() {
        return this._currentLocale;
    },
    set currentLocale(newLocale: LanguageCode) {
        this._currentLocale = newLocale;
        this._currentDictEntry = translations[newLocale];
    },
});

export const _: TranslateFunction = (translationKey) => {
    return localeInfo._currentDictEntry[translationKey];
}
