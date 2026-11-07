# ADR-008 — Habilidades sin barras de porcentaje

| Campo        | Valor                                                       |
| ------------ | ----------------------------------------------------------- |
| **Estado**   | aceptada                                                    |
| **Fecha**    | 2026-11-06                                                  |
| **Afecta a** | `SkillsSection`, `SkillTile`, `profile.data.ts`, `SPEC-005` |

## Contexto

Cada habilidad mostraba una barra con un porcentaje (90 %, 75 %…). Es una autoevaluación sin
escala común ni forma de verificarla: «75 % de TypeScript» no dice nada comprobable y obliga a
justificar por qué un 72 % no es un 75 %.

## Decisión

Se eliminan las barras y el campo `level`. El stack lista solo lo que se domina, con logo y
nombre (`SkillTile`). La profundidad se demuestra donde sí es verificable: proyectos, línea de
tiempo y definiciones técnicas de «IA y metodologías». Se retira la directiva `v-progress`.

## Alternativas consideradas

| Alternativa                      | Por qué se descartó                                   |
| -------------------------------- | ----------------------------------------------------- |
| Niveles con palabras (Avanzado…) | Sigue siendo autoevaluación, solo con otro formato.   |
| Años de experiencia por stack    | Dato más honesto, pero por ahora no se mantiene aquí. |

## Consecuencias

**A favor:** sección más limpia y sin claims inverificables; menos código (una directiva y un
componente menos); sin riesgo de que un porcentaje quede obsoleto.

**En contra:** se pierde una señal visual rápida de prioridad entre tecnologías.

**Compromisos:** el orden del dato sigue de más a menos dominio, aunque ya no se muestre.
