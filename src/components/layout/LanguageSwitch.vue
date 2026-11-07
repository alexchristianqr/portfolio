<template>
  <ToggleGroupRoot
    type="single"
    :model-value="localeStore.locale"
    :aria-label="t('layout.language')"
    class="inline-flex items-center"
    @update:model-value="onChange"
  >
    <ToggleGroupItem
      v-for="(lang, index) in languages"
      :key="lang"
      :value="lang"
      class="cursor-pointer px-3 py-2 text-sm text-sidebar-fg/80 transition-colors hover:text-sidebar-active data-[state=on]:font-bold data-[state=on]:text-sidebar-active data-[state=on]:underline"
      :class="index > 0 ? 'border-l border-sidebar-ring' : ''"
    >
      {{ lang.toUpperCase() }}
    </ToggleGroupItem>
  </ToggleGroupRoot>
</template>

<script setup lang="ts">
import { ToggleGroupItem, ToggleGroupRoot } from 'reka-ui'
import { useI18n } from 'vue-i18n'
import { useLocaleStore } from '@/stores/locale.store'
import type { Locale } from '@/types/i18n'

const { t } = useI18n()
const localeStore = useLocaleStore()
const languages: readonly Locale[] = ['es', 'en']

function onChange(value: unknown): void {
  if (value === 'es' || value === 'en') localeStore.setLocale(value)
}
</script>
