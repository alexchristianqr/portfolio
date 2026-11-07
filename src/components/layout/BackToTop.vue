<template>
  <a
    href="#hero"
    :aria-label="t('layout.backToTop')"
    class="fixed right-4 bottom-4 z-[996] inline-flex size-10 items-center justify-center rounded-full bg-brand-solid text-3xl text-white transition-all duration-300 hover:bg-brand-solid-hover motion-reduce:transition-none"
    :class="visible ? 'visible opacity-100' : 'invisible opacity-0'"
  >
    <i class="bi bi-arrow-up-short" aria-hidden="true"></i>
  </a>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useScrollPast } from '@/composables/useScrollPast'

const { t } = useI18n()
const visible = useScrollPast(100)
</script>
