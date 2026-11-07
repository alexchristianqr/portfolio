<template>
  <SectionShell id="skills" :title="t('nav.skills')">
    <template #intro>
      <p>{{ content.skills.intro }}</p>
    </template>

    <ul class="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
      <li v-for="skill in skills" :key="skill.name">
        <SkillBar
          :name="skill.name"
          :level="skill.level"
          :icon="techIcon(skill.icon)"
          :label="t('skills.levelOf', { name: skill.name, level: skill.level })"
        />
      </li>
    </ul>
  </SectionShell>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SectionShell from '@/components/ui/SectionShell.vue'
import SkillBar from '@/components/ui/SkillBar.vue'
import { useContent } from '@/composables/useContent'
import { techIcon } from '@/lib/asset'

const { t } = useI18n()
const { content, skills } = useContent()
</script>
