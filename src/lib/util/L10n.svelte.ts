export const translations = new Map([
    ["en", new Map([
        ["locale-name", "English"],
        ["theme-dark", "Dark Theme"],
        ["theme-light", "Light Theme"]
    ])],
    ["pt-BR", new Map([
        ["locale-name", "Português (Brasil)"],
        ["theme-dark", "Tema Escuro"],
        ["theme-light", "Tema Claro"]
    ])]
]);
export const localeInfo = $state({
    _currentLocale: "en",
    _currentMap: translations.get("en")!,
    get currentLocale() {
        return this._currentLocale;
    },
    set currentLocale(newLocale: string) {
        if (translations.has(newLocale)) {
            this._currentLocale = newLocale;
            this._currentMap = translations.get(newLocale)!;
        }
    }
});
export function _(translationKey: string): string {
    return localeInfo._currentMap.get(translationKey) ||
    `String not found {translationKey: ${translationKey}, locale: ${localeInfo.currentLocale}}`;
}
