<template>
  <section
    :id="id"
    class="flex min-h-screen flex-col justify-center overflow-hidden py-16"
    :class="band ? 'bg-band' : 'bg-surface'"
  >
    <div class="mx-auto w-full max-w-7xl px-4">
      <header class="pb-8">
        <h2
          v-reveal
          class="relative mb-5 pb-5 text-3xl font-bold text-heading after:absolute after:bottom-0 after:left-0 after:block after:h-[3px] after:w-[50px] after:bg-brand after:content-['']"
        >
          {{ title }}
        </h2>
        <div v-if="$slots.intro" v-reveal class="space-y-4 text-body"><slot name="intro" /></div>
      </header>
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
import { reveal as vReveal } from '@/directives/reveal'

defineProps<{
  id: string
  title: string
  /** Fondo alterno (`bg-band`) para separar secciones consecutivas. */
  band?: boolean
}>()
</script>
