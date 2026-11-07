<template>
  <SectionShell id="summary" :title="t('nav.summary')" band>
    <div class="grid gap-14 lg:grid-cols-2">
      <section v-for="category in content.resume.categories" :key="category.id">
        <h3 v-reveal class="mt-5 mb-8 text-2xl font-bold text-ink">{{ category.title }}</h3>
        <div v-if="category.id === 'education'" class="flex flex-col gap-8">
          <EducationCard
            v-for="item in category.items"
            :key="`${item.title}-${item.date}`"
            :title="item.title"
            :date="item.date"
            :icon="item.icon"
            :status="item.status"
            :place="item.place"
            :link="item.link"
            :bullets="item.bullets"
          />
        </div>
        <div v-else>
          <ResumeItem
            v-for="item in category.items"
            :key="`${item.title}-${item.date}`"
            :title="item.title"
            :date="item.date"
            :place="item.place"
            :link="item.link"
            :bullets="item.bullets"
          />
        </div>
      </section>
    </div>
  </SectionShell>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import EducationCard from '@/components/ui/EducationCard.vue'
import ResumeItem from '@/components/ui/ResumeItem.vue'
import SectionShell from '@/components/ui/SectionShell.vue'
import { useContent } from '@/composables/useContent'
import { reveal as vReveal } from '@/directives/reveal'

const { t } = useI18n()
const { content } = useContent()
</script>
