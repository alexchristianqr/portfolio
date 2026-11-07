<template>
  <section
    id="hero"
    class="relative flex h-screen flex-col items-center justify-center bg-cover bg-top before:absolute before:inset-0 before:bg-sidebar/30 before:content-['']"
    :style="{ backgroundImage: `url(${asset('images/banner.jpeg')})` }"
  >
    <div class="relative z-10 px-4 text-center">
      <h1 class="mb-2.5 text-5xl leading-tight font-bold text-white xl:text-6xl">
        {{ profile.fullName }}
      </h1>
      <p class="font-display text-2xl text-white">
        {{ content.hero.intro }}
        <!-- Altura mínima: la frase vacía no debe colapsar la línea mientras se escribe. -->
        <span class="inline-block min-h-[1.5em] border-b-[3px] border-brand pb-1 tracking-wider">
          {{ typed }}<span class="animate-caret" aria-hidden="true">|</span>
        </span>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useContent } from '@/composables/useContent'
import { useTypewriter } from '@/composables/useTypewriter'
import { asset } from '@/lib/asset'

const { content, profile } = useContent()
const typed = useTypewriter(computed(() => content.value.hero.phrases))
</script>
