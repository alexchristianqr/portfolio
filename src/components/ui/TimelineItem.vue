<template>
  <li
    v-reveal
    class="group relative grid grid-cols-[1.25rem_1fr] gap-x-5 pb-10 last:pb-0 sm:gap-x-6 [&.reveal-visible_.node]:border-brand [&.reveal-visible_.node]:bg-brand [&.reveal-visible_.rail]:scale-y-100"
  >
    <div class="relative flex justify-center" aria-hidden="true">
      <span
        class="rail absolute top-5 -bottom-10 w-0.5 origin-top scale-y-0 bg-linear-to-b from-brand to-line transition-transform duration-1000 ease-out group-last:hidden motion-reduce:scale-y-100"
      ></span>
      <span
        v-if="ongoing"
        class="absolute top-1.5 size-3.5 rounded-full bg-brand opacity-40 motion-safe:animate-ping"
      ></span>
      <span
        class="node relative z-10 mt-1.5 size-3.5 rounded-full border-2 border-timeline bg-band transition-colors duration-500"
      ></span>
    </div>

    <div class="min-w-0">
      <p class="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold text-muted">
        <time v-if="from" class="tabular-nums">
          <span class="text-ink">{{ from }}</span>
          <span aria-hidden="true"> → </span>
          <span :class="ongoing ? 'text-brand-text' : 'text-ink'">{{ to ?? ongoingLabel }}</span>
        </time>
        <span v-if="duration" class="rounded-full bg-chip px-2.5 py-0.5 text-xs font-medium">
          {{ duration }}
        </span>
        <span
          v-if="status"
          class="inline-flex items-center gap-1 rounded-full bg-chip px-2.5 py-0.5 text-xs text-brand-text"
        >
          <span class="icon-[ph--check-circle]" aria-hidden="true"></span>{{ status }}
        </span>
      </p>

      <h4 class="mt-2 font-display text-lg leading-snug font-semibold text-ink uppercase">
        {{ title }}
      </h4>
      <p class="mt-1 text-muted">
        <span>{{ place }}</span>
        <template v-if="link">
          <span aria-hidden="true">&nbsp;·&nbsp;</span>
          <a
            :href="link"
            target="_blank"
            rel="noopener noreferrer"
            class="break-all text-brand-text underline-offset-2 hover:underline"
            >{{ link }}</a
          >
        </template>
      </p>

      <ul class="mt-3 list-disc space-y-2 pl-5">
        <li v-for="bullet in bullets" :key="bullet">{{ bullet }}</li>
      </ul>
    </div>
  </li>
</template>

<script setup lang="ts">
import { reveal as vReveal } from '@/directives/reveal'

defineProps<{
  title: string
  place: string
  bullets: readonly string[]
  link?: string
  status?: string
  from?: string
  /** Fin del periodo; `null` si sigue abierto. */
  to?: string | null
  duration?: string
  ongoing?: boolean
  /** Texto ya traducido para el periodo abierto («Presente»). */
  ongoingLabel: string
}>()
</script>
