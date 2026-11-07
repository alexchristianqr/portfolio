<template>
  <article
    v-reveal
    class="group relative flex gap-4 rounded-lg border-l-4 border-brand bg-raised p-5 shadow-card transition-transform motion-safe:hover:-translate-y-1 sm:gap-5 sm:p-6"
  >
    <span
      class="flex size-12 shrink-0 items-center justify-center rounded-full bg-chip text-2xl text-brand-text transition-colors group-hover:bg-brand group-hover:text-white"
      aria-hidden="true"
    >
      <span :class="icon ?? 'icon-[ph--graduation-cap]'"></span>
    </span>

    <div class="min-w-0 flex-1">
      <h4 class="font-display text-lg leading-snug font-semibold text-ink uppercase">
        {{ title }}
      </h4>
      <p class="mt-1 text-muted">
        <span>{{ place }}</span>
        <template v-if="link">
          <span aria-hidden="true">&nbsp;&nbsp;■&nbsp;&nbsp;</span>
          <a
            :href="link"
            target="_blank"
            rel="noopener noreferrer"
            class="break-all text-brand-text underline-offset-2 hover:underline"
            >{{ link }}</a
          >
        </template>
      </p>

      <p v-if="date || status" class="mt-3 flex flex-wrap items-center gap-2 text-sm font-semibold">
        <span v-if="date" class="rounded-full bg-chip px-3 py-1 text-ink">{{ date }}</span>
        <span
          v-if="status"
          class="inline-flex items-center gap-1 rounded-full bg-brand px-3 py-1 text-white"
        >
          <span class="icon-[ph--check-circle]" aria-hidden="true"></span>{{ status }}
        </span>
      </p>

      <ul class="mt-4 list-disc space-y-2 pl-5">
        <li v-for="bullet in bullets" :key="bullet">{{ bullet }}</li>
      </ul>
    </div>
  </article>
</template>

<script setup lang="ts">
import { reveal as vReveal } from '@/directives/reveal'

defineProps<{
  title: string
  date?: string
  icon?: string
  status?: string
  place: string
  link?: string
  bullets: readonly string[]
}>()
</script>
