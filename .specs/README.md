# `.specs/` — Especificaciones (Spec Driven Development)

Fuente de verdad del portafolio: qué hace, cómo está construido y bajo qué reglas se cambia.

> **Regla base:** si el código y una especificación se contradicen, hay un bug — en el código o
> en la especificación. Ninguno de los dos se cambia en silencio.

Son Markdown plano, sin dependencias ni herramientas concretas: las lee igual una persona que
cualquier asistente. `AGENTS.md` y `CLAUDE.md` (raíz) son solo punteros hacia aquí.

## Mapa

| Archivo                                    | Contenido                                            |
| ------------------------------------------ | ---------------------------------------------------- |
| [`00-principles.md`](00-principles.md)     | Principios no negociables. Lo primero que se lee.    |
| [`01-product.md`](01-product.md)           | Qué es el sitio, para quién y qué incluye.           |
| [`02-architecture.md`](02-architecture.md) | Stack, carpetas, capas y flujo de datos.             |
| [`03-conventions.md`](03-conventions.md)   | Convenciones de código, estilos, contenido, commits. |
| [`04-workflows.md`](04-workflows.md)       | Entorno, scripts, calidad y despliegue.              |
| [`features/`](features/)                   | Una especificación por capacidad (`SPEC-NNN`).       |
| [`decisions/`](decisions/)                 | Decisiones de arquitectura con contexto (`ADR-NNN`). |
| [`changes/`](changes/)                     | Cambios en curso: propuesta → plan → tareas.         |
| [`templates/`](templates/)                 | Plantillas de spec, plan, tareas y ADR.              |

## Ciclo

1. **Especificar** — comportamiento observable, sin nombres de archivos (`changes/<id>/spec.md`).
2. **Planificar** — estrategia técnica y alternativas descartadas (`plan.md`); una decisión
   estructural se registra como ADR.
3. **Tareas** — pasos pequeños y verificables (`tasks.md`).
4. **Implementar** — al terminar, la `SPEC-NNN` afectada refleja el comportamiento nuevo.

| Tamaño del cambio                                   | Qué se produce                            |
| --------------------------------------------------- | ----------------------------------------- |
| Texto, dato o color                                 | Solo se actualiza la `SPEC-NNN`.          |
| Cambio de comportamiento en una sección             | `spec.md` + `tasks.md` en `changes/`.     |
| Sección nueva, dependencia nueva, refactor de capas | Ciclo completo (+ ADR si es estructural). |
