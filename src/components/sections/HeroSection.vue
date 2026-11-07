<template>
  <section
    id="hero"
    class="relative flex h-svh min-h-[30rem] flex-col justify-end bg-cover bg-[72%_top] pb-20 before:absolute before:inset-0 before:bg-linear-to-b before:from-sidebar/40 before:via-transparent before:to-transparent before:content-[''] after:absolute after:inset-0 after:bg-linear-to-t after:from-sidebar/95 after:via-sidebar/55 after:via-45% after:to-transparent after:content-[''] md:justify-center md:bg-top md:pb-0 md:after:bg-linear-to-r md:after:from-sidebar/85 md:after:via-sidebar/40 md:after:to-transparent"
    :style="{ backgroundImage: `url(${asset('images/banner.jpeg')})` }"
  >
    <div
      class="relative z-10 animate-hero-in px-5 text-left motion-reduce:animate-none sm:px-8 md:px-14 xl:px-20"
    >
      <h1
        class="mb-1.5 max-w-2xl text-3xl leading-tight font-bold text-white sm:text-4xl md:mb-3 md:text-5xl xl:text-6xl"
      >
        {{ profile.fullName }}
      </h1>
      <p class="font-display text-white">
        <!-- Altura mínima: la frase vacía no debe colapsar la línea mientras se escribe. -->
        <span
          class="inline-block min-h-[1.5em] border-b-[3px] border-brand pb-0.5 text-lg tracking-wide sm:text-xl md:pb-1 md:text-2xl md:tracking-wider"
        >
          {{ typed }}<span class="animate-caret" aria-hidden="true">|</span>
        </span>
      </p>
      <div class="mt-4 flex flex-wrap gap-2.5 md:mt-8 md:gap-3">
        <a
          href="#portfolio"
          class="rounded-full bg-brand-solid px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-solid-hover md:px-6 md:py-2.5"
        >
          {{ t('nav.portfolio') }}
        </a>
        <a
          href="#contact"
          class="rounded-full border border-white/60 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/15 md:px-6 md:py-2.5"
        >
          {{ t('nav.contact') }}
        </a>
      </div>
    </div>
    <a
      href="#profile"
      :aria-label="t('nav.profile')"
      class="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 text-2xl text-white/80 transition-colors hover:text-white md:bottom-6 md:text-3xl"
    >
      <span
        class="icon-[ph--caret-double-down] block animate-bounce-soft motion-reduce:animate-none"
        aria-hidden="true"
      ></span>
    </a>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useContent } from '@/composables/useContent'
import { useTypewriter } from '@/composables/useTypewriter'
import { asset } from '@/lib/asset'

const { t } = useI18n()
const { content, profile } = useContent()
const typed = useTypewriter(computed(() => content.value.hero.phrases))
</script>
