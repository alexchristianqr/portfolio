<template>
  <ToggleGroupRoot
    type="single"
    :model-value="theme.mode"
    :aria-label="t('theme.label')"
    class="inline-flex items-center rounded-full bg-sidebar-chip p-0.5"
    @update:model-value="onChange"
  >
    <ToggleGroupItem
      v-for="option in options"
      :key="option.mode"
      :value="option.mode"
      :aria-label="t(`theme.${option.mode}`)"
      :title="t(`theme.${option.mode}`)"
      class="inline-flex size-8 cursor-pointer items-center justify-center rounded-full text-sidebar-fg transition-colors hover:text-sidebar-active data-[state=on]:bg-brand-solid data-[state=on]:text-white"
    >
      <span :class="option.icon" aria-hidden="true"></span>
    </ToggleGroupItem>
  </ToggleGroupRoot>
</template>

<script setup lang="ts">
import { ToggleGroupItem, ToggleGroupRoot } from 'reka-ui'
import { useI18n } from 'vue-i18n'
import { useThemeStore } from '@/stores/theme.store'
import type { ThemeMode } from '@/types/i18n'

const { t } = useI18n()
const theme = useThemeStore()

const options: readonly { mode: ThemeMode; icon: string }[] = [
  { mode: 'light', icon: 'icon-[ph--sun]' },
  { mode: 'dark', icon: 'icon-[ph--moon-stars]' },
  { mode: 'system', icon: 'icon-[ph--circle-half]' }
]

function onChange(value: unknown): void {
  if (value === 'light' || value === 'dark' || value === 'system') theme.setMode(value)
}
</script>
