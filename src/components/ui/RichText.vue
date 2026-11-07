<template>
  <p>
    <template v-for="(segment, index) in segments" :key="index">
      <strong v-if="segment.kind === 'strong'" class="font-semibold text-ink">{{
        segment.text
      }}</strong>
      <mark v-else-if="segment.kind === 'mark'" class="highlight">{{ segment.text }}</mark>
      <template v-else>{{ segment.text }}</template>
    </template>
  </p>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { parseInline } from '@/lib/inlineMarkup'

const props = defineProps<{ text: string }>()

const segments = computed(() => parseInline(props.text))
</script>
