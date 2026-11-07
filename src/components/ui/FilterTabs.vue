<template>
  <ToggleGroupRoot
    type="single"
    :model-value="modelValue"
    :aria-label="label"
    class="mx-auto mb-6 flex max-w-full flex-nowrap justify-start gap-x-1 overflow-x-auto rounded-3xl bg-surface px-4 py-1 sm:flex-wrap sm:justify-center sm:overflow-visible"
    @update:model-value="onChange"
  >
    <ToggleGroupItem
      v-for="option in options"
      :key="option.value"
      :value="option.value"
      class="shrink-0 cursor-pointer px-3.5 py-3 text-sm font-semibold whitespace-nowrap text-body uppercase transition-colors hover:text-brand-text data-[state=on]:text-brand-text"
    >
      {{ option.label }}
      <span
        v-if="option.count !== undefined"
        class="ml-1 text-xs font-normal text-muted tabular-nums"
      >
        {{ option.count }}
      </span>
    </ToggleGroupItem>
  </ToggleGroupRoot>
</template>

<script setup lang="ts">
import { ToggleGroupItem, ToggleGroupRoot } from 'reka-ui'
import type { FilterOption } from '@/types/ui'

defineProps<{
  modelValue: string
  options: readonly FilterOption[]
  label: string
}>()

const emit = defineEmits<{ 'update:modelValue': [value: string] }>()

// Reka emite `undefined` al pulsar la pestaña ya activa; un filtro siempre debe tener una activa.
function onChange(value: unknown): void {
  if (typeof value === 'string') emit('update:modelValue', value)
}
</script>
