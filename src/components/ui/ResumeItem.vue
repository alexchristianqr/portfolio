<template>
  <article
    v-reveal
    class="relative -mt-0.5 border-l-2 border-timeline pb-5 pl-5 before:absolute before:top-0 before:-left-[9px] before:size-4 before:rounded-full before:border-2 before:border-timeline before:bg-surface before:content-[''] last:pb-0"
  >
    <h4 class="mb-2.5 font-display text-lg leading-snug font-semibold text-ink uppercase">
      {{ title }}
    </h4>
    <p v-if="date" class="mb-2.5 inline-block bg-chip px-4 py-1 font-semibold text-ink">
      {{ date }}
    </p>
    <p class="mb-2 text-muted">
      <span>{{ place }}</span>
      <template v-if="link">
        <span aria-hidden="true">&nbsp;&nbsp;■&nbsp;&nbsp;</span>
        <a
          :href="link"
          target="_blank"
          rel="noopener noreferrer"
          class="text-brand-text underline-offset-2 hover:underline"
          >{{ link }}</a
        >
      </template>
    </p>
    <ul class="list-disc space-y-2.5 pl-5">
      <li v-for="bullet in bullets" :key="bullet">{{ bullet }}</li>
    </ul>
  </article>
</template>

<script setup lang="ts">
import { reveal as vReveal } from '@/directives/reveal'

defineProps<{
  title: string
  date?: string
  place: string
  link?: string
  bullets: readonly string[]
}>()
</script>
