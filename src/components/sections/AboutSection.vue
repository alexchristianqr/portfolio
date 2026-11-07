<template>
  <SectionShell id="profile" :title="t('nav.profile')">
    <div v-reveal class="max-w-prose space-y-4 text-lg leading-relaxed text-body">
      <RichText v-for="paragraph in content.about.paragraphs" :key="paragraph" :text="paragraph" />
    </div>
  </SectionShell>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import RichText from '@/components/ui/RichText.vue'
import SectionShell from '@/components/ui/SectionShell.vue'
import { useContent } from '@/composables/useContent'
import { reveal as vReveal } from '@/directives/reveal'

const { t } = useI18n()
const { content } = useContent()
</script>
