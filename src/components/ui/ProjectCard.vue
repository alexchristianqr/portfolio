<template>
  <article
    class="group overflow-hidden rounded-lg bg-raised shadow-card transition-transform motion-safe:hover:-translate-y-1"
  >
    <button
      type="button"
      class="block w-full text-left"
      :aria-label="openLabel"
      @click="emit('open')"
    >
      <div class="aspect-[4/3] overflow-hidden bg-chip">
        <img
          :src="image"
          alt=""
          loading="lazy"
          class="size-full object-cover object-top transition-transform duration-300 motion-safe:group-hover:scale-105"
        />
      </div>
      <div class="p-4">
        <p class="text-xs font-semibold tracking-wide text-brand-text uppercase">
          {{ categoryLabel }}
        </p>
        <h3 class="mt-1 font-display text-lg font-semibold text-ink">{{ title }}</h3>
      </div>
    </button>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  image: string
  categoryLabel: string
  /** Texto accesible del botón, ya traducido. */
  openLabel: string
}>()

const emit = defineEmits<{ open: [] }>()
</script>
