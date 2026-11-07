# SPEC-008 — Idioma

| Campo              | Valor                                                 |
| ------------------ | ----------------------------------------------------- |
| **Estado**         | Implementada                                          |
| **Componentes**    | `LanguageSwitch`                                      |
| **Estado (Pinia)** | `locale.store`                                        |
| **Datos**          | `i18n/messages/{es,en}.ts`, `data/content.{es,en}.ts` |

## Requisitos funcionales

- **RF-01** — Idiomas: español (por defecto) e inglés, conmutables desde la barra lateral.
- **RF-02** — Cambiar de idioma actualiza todo el texto sin recargar, incluidas las frases del
  efecto de escritura.
- **RF-03** — La elección se guarda en `localStorage` (clave `lang`) y se restaura al volver.
- **RF-04** — `<html lang>` refleja el idioma activo.
- **RF-05** — Una clave o un proyecto ausente en un idioma **no compila** (P3).
- **RF-06** — Si `localStorage` no está disponible, la preferencia dura solo la sesión.
