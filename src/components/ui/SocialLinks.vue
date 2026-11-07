<template>
  <ul class="flex flex-wrap gap-2.5">
    <li v-for="link in links" :key="link.id">
      <a
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        :title="link.label"
        :aria-label="link.label"
        class="inline-flex size-9 items-center justify-center rounded-full bg-sidebar-chip text-lg text-white transition-colors hover:bg-brand"
      >
        <span :class="link.icon" aria-hidden="true"></span>
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps<{
  links: readonly { id: string; label: string; url: string; icon: string }[]
}>()
</script>
