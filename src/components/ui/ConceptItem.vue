<template>
  <li v-reveal class="flex gap-4 border-t border-line pt-5">
    <div class="flex size-14 shrink-0 items-center justify-center rounded-lg bg-tile p-2.5">
      <img
        :src="icon"
        alt=""
        width="48"
        height="48"
        class="size-full object-contain"
        loading="lazy"
      />
    </div>
    <div class="min-w-0">
      <h4 class="font-display text-base font-semibold text-ink uppercase">{{ name }}</h4>
      <p class="mt-1 text-sm leading-relaxed text-muted">{{ definition }}</p>
    </div>
  </li>
</template>

<script setup lang="ts">
import { reveal as vReveal } from '@/directives/reveal'

defineProps<{
  name: string
  icon: string
  /** Definición ya traducida. */
  definition: string
}>()
</script>
