<template>
  <div v-reveal>
    <img :src="icon" alt="" width="48" height="48" class="mb-1" loading="lazy" />
    <span class="mb-1.5 block font-display text-sm font-semibold text-ink uppercase">{{
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
