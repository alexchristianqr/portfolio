<template>
  <div v-reveal class="flex flex-col gap-2">
    <!-- Caja fija: los logos tienen proporciones distintas (de 1:1 a 2:1) y, sin ella, cada uno
         mide lo que dicta su SVG y las barras de una misma fila quedan a alturas distintas. -->
    <div class="flex size-14 items-center justify-center rounded-lg bg-tile p-2.5">
      <img
        :src="icon"
        alt=""
        width="48"
        height="48"
        class="size-full object-contain"
        loading="lazy"
      />
    </div>
    <span class="truncate font-display text-sm font-semibold text-ink uppercase" :title="name">{{
      name
    }}</span>
    <div
      class="h-2.5 bg-track"
      role="progressbar"
      :aria-label="label"
      :aria-valuenow="level"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div
        v-progress="level"
        class="h-2.5 bg-brand transition-[width] duration-[900ms] motion-reduce:transition-none"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { progress as vProgress } from '@/directives/progress'
import { reveal as vReveal } from '@/directives/reveal'

defineProps<{
  name: string
  /** 0–100. */
  level: number
  icon: string
  /** Texto accesible de la barra, ya traducido. */
  label: string
}>()
</script>
