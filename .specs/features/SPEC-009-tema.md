# SPEC-009 — Tema claro/oscuro

| Campo              | Valor                                                 |
| ------------------ | ----------------------------------------------------- |
| **Estado**         | Implementada                                          |
| **Componentes**    | `ThemeToggle`                                         |
| **Estado (Pinia)** | `theme.store`                                         |
| **Estilos**        | `src/styles/main.css` · script inline de `index.html` |

## Requisitos funcionales

- **RF-01** — Tres modos: Claro, Oscuro y Sistema (por defecto).
- **RF-02** — En Sistema se sigue `prefers-color-scheme` y se reacciona si el SO cambia mientras
  la página está abierta.
- **RF-03** — La elección se guarda en `localStorage` (clave `theme`).
- **RF-04** — El tema se aplica como `data-theme` en `<html>`.
- **RF-05** — **Sin parpadeo:** un script inline en `index.html` aplica el tema guardado antes de
  que cargue el bundle. Debe usar la misma clave y los mismos valores que `theme.store.ts`.
- **RF-06** — Contraste AA en ambos temas.
