/**
 * Marcado en línea mínimo para textos largos de `src/data/`, sin interpretar HTML (SPEC-003 RF-02):
 *   `**texto**`  → énfasis (negrita)
 *   `==texto==`  → resaltado de una idea clave
 * No se anidan. Lo que no coincide queda como texto plano.
 */
export type InlineKind = 'text' | 'strong' | 'mark'

export interface InlineSegment {
  kind: InlineKind
  text: string
}

const TOKEN = /(\*\*[^*]+\*\*|==[^=]+==)/

export const parseInline = (source: string): InlineSegment[] =>
  source
    .split(TOKEN)
    .filter((part) => part !== '')
    .map((part): InlineSegment => {
      if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
        return { kind: 'strong', text: part.slice(2, -2) }
      }
      if (part.startsWith('==') && part.endsWith('==') && part.length > 4) {
        return { kind: 'mark', text: part.slice(2, -2) }
      }
      return { kind: 'text', text: part }
    })
