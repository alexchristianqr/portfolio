import type { AppBuild } from '@/types/build'

/**
 * Marca de esta compilación (versión, commit, rama y hora). Sirve para saber si el sitio publicado
 * ya incluye un cambio: se compara el commit del pie con el de `main`.
 */
export const appBuild: Readonly<AppBuild> = Object.freeze(__APP_BUILD__)
