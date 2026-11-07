<template>
  <SectionShell id="skills" :title="t('nav.skills')">
    <template #intro>
      <p>{{ content.skills.intro }}</p>
    </template>

    <h3 v-reveal class="mb-6 text-2xl font-bold text-ink">{{ content.skills.stackTitle }}</h3>
    <ul class="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-9">
      <li v-for="skill in skills" :key="skill.name">
        <SkillTile :name="skill.name" :icon="techIcon(skill.icon)" />
      </li>
    </ul>

    <h3 v-reveal class="mt-14 mb-3 text-2xl font-bold text-ink">
      {{ content.skills.conceptsTitle }}
    </h3>
    <p v-reveal class="mb-8 max-w-3xl text-body">{{ content.skills.conceptsIntro }}</p>
    <ul class="grid gap-x-10 gap-y-6 md:grid-cols-2">
      <ConceptItem
        v-for="concept in concepts"
        :key="concept.id"
        :name="concept.name"
        :icon="techIcon(concept.icon)"
        :definition="content.skills.concepts[concept.id]"
      />
    </ul>
  </SectionShell>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ConceptItem from '@/components/ui/ConceptItem.vue'
import SectionShell from '@/components/ui/SectionShell.vue'
import SkillTile from '@/components/ui/SkillTile.vue'
import { useContent } from '@/composables/useContent'
import { reveal as vReveal } from '@/directives/reveal'
import { techIcon } from '@/lib/asset'

const { t } = useI18n()
const { content, skills, concepts } = useContent()
</script>
