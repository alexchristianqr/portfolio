# ADR-004 — Pinia por dominio

| Campo        | Valor         |
| ------------ | ------------- |
| **Estado**   | aceptada      |
| **Fecha**    | 2026-11-06    |
| **Afecta a** | `src/stores/` |

## Contexto

Vuex guardaba idioma, un `loading` y alertas, y una acción de contacto hacía la petición con
axios dentro del store.

## Decisión

Pinia con _setup stores_, uno por dominio: `locale`, `theme`, `ui` y `contact`. Un estado va a un
store solo si dos componentes no relacionados lo comparten; si no, es un `ref` local. Los
stores llaman a `services/` (I/O puro) y guardan el resultado.

## Alternativas consideradas

| Alternativa                                   | Ventajas        | Por qué se descartó                                               |
| --------------------------------------------- | --------------- | ----------------------------------------------------------------- |
| Mantener Vuex                                 | Sin cambios     | Mantenimiento mínimo y tipado pobre.                              |
| Solo composables con estado a nivel de módulo | Sin dependencia | Sin DevTools ni convención; el estado compartido queda implícito. |

## Consecuencias

**A favor:** tipado por inferencia, DevTools, estado global acotado y visible.

**En contra:** una dependencia más para cuatro stores pequeños.

**Compromisos:** un store nuevo exige justificar por qué no basta un `ref`.
