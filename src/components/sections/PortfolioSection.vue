<template>
  <SectionShell id="portfolio" :title="t('nav.portfolio')" band>
    <template #intro>
      <p>{{ content.portfolio.intro }}</p>
    </template>

    <FilterTabs
      :model-value="active"
      :options="filterOptions"
      :label="t('portfolio.filtersLabel')"
      @update:model-value="onFilter"
    />

    <TransitionGroup
      tag="div"
      class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      enter-active-class="transition duration-300 motion-reduce:transition-none"
      enter-from-class="opacity-0 scale-95"
      leave-active-class="transition duration-200 motion-reduce:transition-none"
      leave-to-class="opacity-0 scale-95"
    >
      <ProjectCard
        v-for="project in filtered"
        :key="project.id"
        :title="project.title"
        :image="projectImage(project.image)"
        :category-label="t(`portfolio.categories.${project.category}`)"
        :open-label="t('portfolio.viewDetails', { title: project.title })"
        @open="selectedId = project.id"
      />
    </TransitionGroup>

    <ProjectDialog :project="detail" @close="selectedId = null" />
  </SectionShell>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import FilterTabs from '@/components/ui/FilterTabs.vue'
import ProjectCard from '@/components/ui/ProjectCard.vue'
import ProjectDialog from '@/components/ui/ProjectDialog.vue'
import SectionShell from '@/components/ui/SectionShell.vue'
import { useContent } from '@/composables/useContent'
import { useProjectFilter, type ProjectFilter } from '@/composables/useProjectFilter'
import { projectImage, techIcon } from '@/lib/asset'
import type { ProjectDetail } from '@/types/ui'

const { t } = useI18n()
const { content, projectViews } = useContent()
const { active, filters, filtered, setFilter } = useProjectFilter(projectViews)

const filterOptions = computed(() =>
  filters.value.map((value) => ({ value, label: t(`portfolio.filters.${value}`) }))
)

function onFilter(value: string): void {
  setFilter(value as ProjectFilter)
}

const selectedId = ref<string | null>(null)

/** El diálogo recibe todo ya resuelto (idioma, rutas); no sabe de stores ni de i18n. */
const detail = computed<ProjectDetail | null>(() => {
  const project = projectViews.value.find((item) => item.id === selectedId.value)
  if (!project) return null

  return {
    id: project.id,
    title: project.title,
    image: projectImage(project.image),
    categoryLabel: t(`portfolio.categories.${project.category}`),
    summary: project.summary,
    list: project.list,
    stack: project.stack.map((slug) => ({ slug, src: techIcon(slug) })),
    stackLabel: t('portfolio.stack'),
    closeLabel: t('portfolio.close'),
    links: [
      { label: t('portfolio.viewSite'), icon: 'bi-link-45deg', href: project.link },
      project.repositoryPublic
        ? {
            label: t('portfolio.repositoryPublic'),
            icon: 'bi-code-slash',
            href: project.repository
          }
        : { label: t('portfolio.repositoryPrivate'), icon: 'bi-lock' }
    ]
  }
})
</script>
