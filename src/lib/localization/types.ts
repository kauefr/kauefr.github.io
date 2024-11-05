export type LocaleInfo = {
    _currentLocale: LanguageCode,
    _currentDictEntry: Translation,
    get currentLocale(): LanguageCode,
    set currentLocale(newLocale: LanguageCode),
};

export type TranslateFunction = (key: TranslationKey) => string;

export type TranslationsDict = {
    [Language in LanguageCode]: Translation
};

export type Translation = {
    [Key in TranslationKey]: string
};

export type LanguageCode =
    "en" |
    "pt-BR"
    ;

export type TranslationKey =
    "Hello World" |
    "Home" |
    "Homepage Title" |
    "locale-name" |
    "theme-dark" |
    "theme-light"
    ;
