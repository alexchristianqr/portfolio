# ADR-005 — Tokens de tema y modo oscuro

| Campo        | Valor                                         |
| ------------ | --------------------------------------------- |
| **Estado**   | aceptada                                      |
| **Fecha**    | 2026-11-06                                    |
| **Afecta a** | `src/styles/main.css`, `index.html`, SPEC-009 |

## Contexto

Los colores estaban repetidos por la hoja heredada. El acento `#149ddd` sobre blanco da ~3:1 de
contraste, por debajo de AA para texto.

## Decisión

Variables semánticas (`--surface`, `--text`, `--heading`…) definidas en `:root` y redefinidas en
`[data-theme='dark']`, publicadas como utilidades con `@theme inline`. El tema se aplica con un
atributo en `<html>` (lo pone `theme.store` y un script inline que evita el parpadeo). El acento
decorativo se conserva; para texto y botones se usan `brand-text` y `brand-solid`, más oscuros.

## Alternativas consideradas

| Alternativa                          | Ventajas  | Por qué se descartó                   |
| ------------------------------------ | --------- | ------------------------------------- |
| Variantes `dark:` en cada componente | Explícito | Duplica cada color en cada plantilla. |
| Solo `prefers-color-scheme`          | Sin JS    | No permite elegir manualmente.        |

## Consecuencias

**A favor:** casi ningún componente conoce el modo oscuro; un color se cambia en un sitio.

**En contra:** `#149ddd` no se usa para texto; hay un tono extra que mantener.

**Compromisos:** ningún color literal fuera de `main.css`.
