<template>
  <!-- Misma técnica que ProjectCard: el botón del título cubre la fila entera con ::after. -->
  <article
    class="group relative flex items-center gap-4 rounded-lg bg-raised p-3 shadow-card transition-colors hover:bg-chip has-[button:focus-visible]:outline-2 has-[button:focus-visible]:outline-offset-2 has-[button:focus-visible]:outline-brand"
  >
    <div class="aspect-[16/10] w-28 shrink-0 overflow-hidden rounded bg-chip sm:w-44">
      <img
        :src="item.image"
        alt=""
        width="720"
        height="450"
        loading="lazy"
        decoding="async"
        class="size-full object-cover object-top"
      />
    </div>

    <div class="min-w-0 flex-1">
      <p class="text-xs font-semibold tracking-wide text-brand-text uppercase">
        {{ item.categoryLabel }}
      </p>
      <h3 class="flex items-center gap-2 font-display text-lg font-semibold text-ink">
        <button
          type="button"
          class="line-clamp-2 min-w-0 cursor-pointer text-left outline-none after:absolute after:inset-0 after:content-['']"
          :aria-label="item.openLabel"
          @click="emit('open')"
        >
          {{ item.title }}
        </button>
        <span
          v-if="item.isPrivate"
          :title="item.privateLabel"
          class="inline-flex shrink-0 text-base text-muted"
        >
          <span class="icon-[ph--lock-simple]" aria-hidden="true"></span>
          <span class="sr-only">{{ item.privateLabel }}</span>
        </span>
      </h3>
      <p v-if="item.summary" class="line-clamp-1 text-sm text-muted sm:line-clamp-2">
        {{ item.summary }}
      </p>
    </div>

    <!-- Decorativo: el detalle de tecnologías está en el diálogo, con texto alternativo. -->
    <div
      v-if="item.stack.length"
      class="hidden shrink-0 items-center gap-2 md:flex"
      aria-hidden="true"
    >
      <img
        v-for="tech in item.stack.slice(0, MAX_TECH)"
        :key="tech.slug"
        :src="tech.src"
        alt=""
        width="20"
        height="20"
        class="size-5 object-contain"
      />
      <span v-if="item.stack.length > MAX_TECH" class="text-xs font-semibold text-muted">
        +{{ item.stack.length - MAX_TECH }}
      </span>
    </div>

    <span class="icon-[ph--caret-right] shrink-0 text-xl text-muted" aria-hidden="true"></span>
  </article>
</template>

<script setup lang="ts">
import type { ProjectItem } from '@/types/ui'

defineProps<{ item: ProjectItem }>()

const emit = defineEmits<{ open: [] }>()

const MAX_TECH = 4
</script>
