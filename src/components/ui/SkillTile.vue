<template>
  <div v-reveal class="flex flex-col items-center gap-2 text-center">
    <!-- Caja fija: los logos tienen proporciones distintas (de 1:1 a 2:1) y, sin ella, cada uno
         mide lo que dicta su SVG y los nombres de una misma fila quedan a alturas distintas. -->
    <div class="flex size-16 items-center justify-center rounded-lg bg-tile p-3">
      <img
        :src="icon"
        alt=""
        width="48"
        height="48"
        class="size-full object-contain"
        loading="lazy"
      />
    </div>
    <span
      class="max-w-full truncate font-display text-sm font-semibold text-ink uppercase"
      :title="name"
      >{{ name }}</span
    >
  </div>
</template>

<script setup lang="ts">
import { reveal as vReveal } from '@/directives/reveal'

defineProps<{
  name: string
  icon: string
}>()
</script>
