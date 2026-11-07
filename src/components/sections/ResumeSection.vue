<template>
  <SectionShell id="summary" :title="t('nav.summary')" band>
    <div class="grid gap-14 lg:grid-cols-2">
      <section v-for="category in content.resume.categories" :key="category.id">
        <h3 v-reveal class="mt-5 mb-8 text-2xl font-bold text-ink">{{ category.title }}</h3>
        <ol class="m-0 list-none p-0">
          <TimelineItem
            v-for="entry in entriesOf(category.id)"
            :key="`${entry.item.title}-${entry.item.date}`"
            :title="entry.item.title"
            :place="entry.item.place"
            :link="entry.item.link"
            :status="entry.item.status"
            :bullets="entry.item.bullets"
            :from="entry.from"
            :to="entry.to"
            :duration="entry.duration"
            :ongoing="entry.ongoing"
            :ongoing-label="t('resume.present')"
          />
        </ol>
      </section>
    </div>
  </SectionShell>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SectionShell from '@/components/ui/SectionShell.vue'
import TimelineItem from '@/components/ui/TimelineItem.vue'
import { useContent } from '@/composables/useContent'
import { useTimeline, type TimelineEntry } from '@/composables/useTimeline'
import { reveal as vReveal } from '@/directives/reveal'
import type { ResumeCategoryId, ResumeItem } from '@/types/content'

const { t } = useI18n()
const { content } = useContent()

const itemsOf = (id: ResumeCategoryId): readonly ResumeItem[] =>
  content.value.resume.categories.find((c) => c.id === id)?.items ?? []

const education = useTimeline(() => itemsOf('education'))
const experience = useTimeline(() => itemsOf('experience'))

const entriesOf = (id: ResumeCategoryId): TimelineEntry[] =>
  id === 'education' ? education.value : experience.value
</script>
