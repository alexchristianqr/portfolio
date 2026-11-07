<template>
  <ToggleGroupRoot
    type="single"
    :model-value="modelValue"
    :aria-label="label"
    class="inline-flex items-center rounded-lg bg-surface p-0.5"
    @update:model-value="onChange"
  >
    <ToggleGroupItem
      v-for="option in options"
      :key="option.value"
      :value="option.value"
      :aria-label="option.label"
      :title="option.label"
      class="inline-flex size-9 cursor-pointer items-center justify-center rounded-md text-xl text-muted transition-colors hover:text-brand-text data-[state=on]:bg-brand-solid data-[state=on]:text-white"
    >
      <span :class="option.icon" aria-hidden="true"></span>
    </ToggleGroupItem>
  </ToggleGroupRoot>
</template>

<script setup lang="ts">
import { ToggleGroupItem, ToggleGroupRoot } from 'reka-ui'
import type { ProjectViewMode, ViewOption } from '@/types/ui'

defineProps<{
  modelValue: ProjectViewMode
  options: readonly ViewOption[]
  label: string
}>()

const emit = defineEmits<{ 'update:modelValue': [value: ProjectViewMode] }>()

// Reka emite `undefined` al pulsar la opción ya activa; siempre debe haber una vista elegida.
function onChange(value: unknown): void {
  if (value === 'grid' || value === 'list') emit('update:modelValue', value)
}
</script>
