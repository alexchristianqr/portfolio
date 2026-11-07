<template>
  <SectionShell id="profile" :title="t('nav.profile')">
    <div v-reveal class="max-w-4xl space-y-4 text-lg leading-relaxed text-body">
      <p v-for="paragraph in content.about.paragraphs" :key="paragraph">{{ paragraph }}</p>
    </div>
  </SectionShell>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SectionShell from '@/components/ui/SectionShell.vue'
import { useContent } from '@/composables/useContent'
import { reveal as vReveal } from '@/directives/reveal'

const { t } = useI18n()
const { content } = useContent()
</script>
