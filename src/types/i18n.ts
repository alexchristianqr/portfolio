/** Idiomas soportados. Añadir uno exige un diccionario nuevo en `i18n/messages` y en `data`. */
export type Locale = 'es' | 'en'

/** Preferencia de tema. `system` sigue `prefers-color-scheme`. */
export type ThemeMode = 'light' | 'dark' | 'system'

/** Tema ya resuelto, el que realmente se pinta. */
export type ResolvedTheme = 'light' | 'dark'
