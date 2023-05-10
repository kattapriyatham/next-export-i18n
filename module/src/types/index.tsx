export type Dictionary = { [key: string]: string | Dictionary };

export type I18N = {
  translations: { [language: string]: Dictionary };
  defaultLang: string;
  locales: string[];
  useBrowserDefault: boolean;
};
