<template>
  <DialogRoot :open="project !== null" @update:open="onOpenChange">
    <DialogPortal>
      <DialogOverlay class="fixed inset-0 z-[10000] bg-overlay" />
      <DialogContent
        v-if="project"
        class="fixed top-1/2 left-1/2 z-[10001] max-h-[90vh] w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-lg bg-raised shadow-card"
      >
        <img :src="project.image" alt="" class="aspect-[16/9] w-full object-cover object-top" />
        <div class="space-y-4 p-6">
          <div>
            <p class="text-xs font-semibold tracking-wide text-brand-text uppercase">
              {{ project.categoryLabel }}
            </p>
            <DialogTitle class="mt-1 font-display text-2xl font-bold text-ink">{{
              project.title
            }}</DialogTitle>
          </div>

          <DialogDescription v-if="project.summary" class="text-body">{{
            project.summary
          }}</DialogDescription>
          <DialogDescription v-else class="sr-only">{{ project.categoryLabel }}</DialogDescription>

          <div v-if="project.list">
            <p class="font-semibold text-ink">{{ project.list.label }}</p>
            <ul class="mt-1 list-disc pl-5 text-body">
              <li v-for="item in project.list.items" :key="item">{{ item }}</li>
            </ul>
          </div>

          <div v-if="project.stack.length">
            <p class="mb-2 font-semibold text-ink">{{ project.stackLabel }}</p>
            <ul class="flex flex-wrap gap-3">
              <li v-for="tech in project.stack" :key="tech.slug">
                <img :src="tech.src" :alt="tech.slug" :title="tech.slug" width="36" height="36" />
              </li>
            </ul>
          </div>

          <ul class="flex flex-wrap gap-3 pt-2">
            <li v-for="link in project.links" :key="link.label">
              <a
                v-if="link.href"
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 rounded bg-brand-solid px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-solid-hover"
              >
                <span :class="link.icon" aria-hidden="true"></span>{{ link.label }}
              </a>
              <span
                v-else
                class="inline-flex items-center gap-2 rounded bg-chip px-4 py-2 text-sm font-semibold text-muted"
              >
                <span :class="link.icon" aria-hidden="true"></span>{{ link.label }}
              </span>
            </li>
          </ul>
        </div>

        <DialogClose
          :aria-label="project.closeLabel"
          class="absolute top-3 right-3 inline-flex size-9 items-center justify-center rounded-full bg-sidebar/70 text-white transition-colors hover:bg-sidebar"
        >
          <span class="icon-[ph--x]" aria-hidden="true"></span>
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<script setup lang="ts">
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle
} from 'reka-ui'
import type { ProjectDetail } from '@/types/ui'

/** `null` = cerrado. El padre decide qué proyecto se muestra. */
defineProps<{ project: ProjectDetail | null }>()

const emit = defineEmits<{ close: [] }>()

function onOpenChange(open: boolean): void {
  if (!open) emit('close')
}
</script>
