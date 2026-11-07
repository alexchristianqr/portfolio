# Plan técnico — <NNN-slug>

> Se escribe después de que `spec.md` esté cerrada. Aquí sí se habla de archivos,
> funciones y estructuras: es el «cómo».

## Resumen

Dos o tres frases sobre el enfoque elegido.

## Requisitos cubiertos

Qué requisitos de la especificación resuelve este plan: `RF-01`, `RF-02`, …

## Cambios previstos

| Archivo | Acción                    | Detalle |
| ------- | ------------------------- | ------- |
| `…`     | crear / editar / eliminar | …       |

## Contratos de datos

Interfaces nuevas o modificadas en `src/types/landing.ts` y su reflejo en
`src/data/landing.data.ts`.

## Impacto

- **Especificaciones a actualizar:** SPEC-NNN …
- **Componentes afectados de rebote:** …
- **Riesgo de regresión:** qué se puede romper y cómo se comprueba.

## Alternativas descartadas

| Alternativa | Por qué no |
| ----------- | ---------- |
| …           | …          |

## Decisiones que requieren ADR

Si el plan introduce una dependencia, cambia el stack o afecta al despliegue, se enlaza
aquí el ADR correspondiente. Si no hay ninguna, se escribe «Ninguna».

## Verificación

Comandos y comprobaciones manuales concretas para este cambio, además de la puerta de
calidad estándar de [`04-workflows.md`](../04-workflows.md).
