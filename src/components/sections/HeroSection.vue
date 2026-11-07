<template>
  <section
    id="hero"
    class="relative flex h-screen flex-col justify-center bg-cover bg-[70%_top] before:absolute before:inset-0 before:bg-linear-to-b before:from-sidebar/40 before:via-transparent before:to-sidebar/70 before:content-[''] after:absolute after:inset-0 after:bg-linear-to-r after:from-sidebar/85 after:via-sidebar/40 after:to-transparent after:content-[''] md:bg-top"
    :style="{ backgroundImage: `url(${asset('images/banner.jpeg')})` }"
  >
    <div
      class="relative z-10 animate-hero-in px-6 text-center motion-reduce:animate-none md:px-14 md:text-left xl:px-20"
    >
      <h1 class="mb-3 max-w-2xl text-5xl leading-tight font-bold text-white xl:text-6xl">
        {{ profile.fullName }}
      </h1>
      <p class="font-display text-2xl text-white">
        {{ content.hero.intro }}
        <!-- Altura mínima: la frase vacía no debe colapsar la línea mientras se escribe. -->
        <span class="inline-block min-h-[1.5em] border-b-[3px] border-brand pb-1 tracking-wider">
          {{ typed }}<span class="animate-caret" aria-hidden="true">|</span>
        </span>
      </p>
      <div class="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
        <a
          href="#portfolio"
          class="rounded-full bg-brand-solid px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-solid-hover"
        >
          {{ t('nav.portfolio') }}
        </a>
        <a
          href="#contact"
          class="rounded-full border border-white/60 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/15"
        >
          {{ t('nav.contact') }}
        </a>
      </div>
    </div>
    <a
      href="#profile"
      :aria-label="t('nav.profile')"
      class="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-3xl text-white/80 transition-colors hover:text-white"
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
