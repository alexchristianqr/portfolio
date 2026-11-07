<template>
  <ul class="flex flex-wrap gap-2.5">
    <li v-for="link in links" :key="link.id">
      <a
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        :title="link.label"
        :aria-label="link.label"
        :class="[
          base,
          tone === 'sidebar' ? 'bg-sidebar-chip text-white' : 'bg-chip text-brand-text'
        ]"
      >
        <span :class="link.icon" aria-hidden="true"></span>
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    links: readonly { id: string; label: string; url: string; icon: string }[]
    /** `sidebar`: sobre fondo oscuro fijo; `page`: sigue el tema de la página. */
    tone?: 'sidebar' | 'page'
  }>(),
  { tone: 'sidebar' }
)

const base =
  'inline-flex size-9 items-center justify-center rounded-full text-lg transition-colors hover:bg-brand hover:text-white'
</script>
