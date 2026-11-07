<template>
  <!-- «Enlace extendido»: el botón del título cubre toda la tarjeta con ::after. Así el contenido
       (resumen, tecnologías) queda fuera del <button>, que solo admite contenido en línea. -->
  <article
    class="group relative flex h-full flex-col overflow-hidden rounded-lg bg-raised shadow-card transition-transform has-[button:focus-visible]:outline-2 has-[button:focus-visible]:outline-offset-2 has-[button:focus-visible]:outline-brand motion-safe:hover:-translate-y-1"
  >
    <div class="relative aspect-[16/10] overflow-hidden bg-chip">
      <img
        :src="image"
        alt=""
        width="720"
        height="450"
        loading="lazy"
        decoding="async"
        class="size-full object-cover object-top transition-transform duration-300 motion-safe:group-hover:scale-105"
      />
      <span
        v-if="isPrivate"
        :title="privateLabel"
        class="absolute top-2 right-2 inline-flex size-7 items-center justify-center rounded-full bg-sidebar/80 text-white"
      >
        <span class="icon-[ph--lock-simple]" aria-hidden="true"></span>
        <span class="sr-only">{{ privateLabel }}</span>
      </span>
    </div>

    <div class="flex flex-1 flex-col gap-1 p-4">
      <p class="text-xs font-semibold tracking-wide text-brand-text uppercase">
        {{ categoryLabel }}
      </p>
      <h3 class="font-display text-lg font-semibold text-ink">
        <button
          type="button"
          class="cursor-pointer text-left outline-none after:absolute after:inset-0 after:content-['']"
          :aria-label="openLabel"
          @click="emit('open')"
        >
          {{ title }}
        </button>
      </h3>
      <p v-if="summary" class="line-clamp-2 text-sm text-muted">{{ summary }}</p>

      <!-- Decorativo: el detalle completo de tecnologías está en el diálogo, con texto alternativo. -->
      <div v-if="stack.length" class="mt-auto flex items-center gap-2 pt-3" aria-hidden="true">
        <img
          v-for="tech in stack.slice(0, MAX_TECH)"
          :key="tech.slug"
          :src="tech.src"
          alt=""
          width="20"
          height="20"
          class="size-5 object-contain"
        />
        <span v-if="stack.length > MAX_TECH" class="text-xs font-semibold text-muted">
          +{{ stack.length - MAX_TECH }}
        </span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  image: string
  categoryLabel: string
  summary?: string
  stack: readonly { slug: string; src: string }[]
  isPrivate: boolean
  /** Textos ya traducidos: `ui/` no conoce i18n. */
  privateLabel: string
  openLabel: string
}>()

const emit = defineEmits<{ open: [] }>()

/** Más de cuatro iconos desbordan la tarjeta; el resto se resume en «+N». */
const MAX_TECH = 4
</script>
