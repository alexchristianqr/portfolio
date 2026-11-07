# AGENTS.md

Instrucciones operativas para cualquier agente o persona. Las reglas viven en
[`.specs/`](.specs/); este archivo solo dice por dónde empezar.

1. Lee [`.specs/00-principles.md`](.specs/00-principles.md) y
   [`.specs/02-architecture.md`](.specs/02-architecture.md) antes de tocar nada.
2. Si cambias una sección, lee su `SPEC-NNN` en [`.specs/features/`](.specs/features/).
3. Si el código contradice una especificación, hay un bug: señálalo, no elijas en silencio.
4. Un cambio no termina hasta que la `SPEC-NNN` afectada refleja el comportamiento nuevo.
5. Puerta de calidad: `npm run lint:check`, `npm run format:check`, `npm run type-check`,
   `npm run build`.
6. Dependencias entre capas: `types → data/i18n/config → services → stores → composables →
sections/layout → ui`. Nunca hacia atrás.
