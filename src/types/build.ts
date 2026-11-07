/** Qué compilación es la que se está viendo. La genera `vite.config.ts`. */
export interface AppBuild {
  version: string
  /** Commit corto (7 caracteres). En un despliegue desde `main` es el del merge. */
  commit: string
  branch: string
  /** ISO 8601, en UTC. */
  builtAt: string
}
