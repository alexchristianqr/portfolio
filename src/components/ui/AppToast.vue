<template>
  <ToastProvider :duration="4500" swipe-direction="up">
    <ToastRoot
      :open="open"
      :type="kind === 'error' ? 'foreground' : 'background'"
      class="flex items-start gap-3 rounded-lg border-l-4 bg-raised px-4 py-3 shadow-card"
      :class="kind === 'error' ? 'border-danger' : 'border-success'"
      @update:open="emit('update:open', $event)"
    >
      <ToastDescription class="text-sm font-medium text-ink">{{ message }}</ToastDescription>
      <ToastClose
        :aria-label="closeLabel"
        class="-mt-0.5 ml-auto inline-flex size-6 shrink-0 cursor-pointer items-center justify-center text-muted hover:text-ink"
      >
        <i class="bi bi-x-lg" aria-hidden="true"></i>
      </ToastClose>
    </ToastRoot>
    <ToastViewport
      class="fixed top-4 left-1/2 z-[10002] flex w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 flex-col gap-2 outline-none"
    />
  </ToastProvider>
</template>

<script setup lang="ts">
import { ToastClose, ToastDescription, ToastProvider, ToastRoot, ToastViewport } from 'reka-ui'

defineProps<{
  open: boolean
  kind: 'success' | 'error'
  message: string
  closeLabel: string
}>()

const emit = defineEmits<{ 'update:open': [value: boolean] }>()
</script>
