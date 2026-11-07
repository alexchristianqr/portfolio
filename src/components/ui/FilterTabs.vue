<template>
  <ToggleGroupRoot
    type="single"
    :model-value="modelValue"
    :aria-label="label"
    class="mx-auto mb-6 flex flex-wrap justify-center gap-x-1 rounded-3xl bg-surface px-4 py-1"
    @update:model-value="onChange"
  >
    <ToggleGroupItem
      v-for="option in options"
      :key="option.value"
      :value="option.value"
      class="cursor-pointer px-3.5 py-3 text-sm font-semibold text-body uppercase transition-colors hover:text-brand-text data-[state=on]:text-brand-text"
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
