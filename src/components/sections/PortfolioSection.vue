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

    <div class="mb-6 flex flex-wrap items-center justify-between gap-3">
      <!-- Visible y, a la vez, aviso para lectores de pantalla al filtrar o ampliar la lista. -->
      <p role="status" class="text-sm text-muted">
        {{ t('portfolio.showing', { shown: visible.length, total: filtered.length }) }}
      </p>
      <ViewToggle v-model="view" :options="viewOptions" :label="t('portfolio.viewLabel')" />
    </div>

    <div v-if="view === 'grid'" class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(project, index) in visible"
        :key="project.id"
        v-reveal="(index % 3) * 80"
        class="h-full"
      >
        <ProjectCard :item="itemOf(project)" @open="selectedId = project.id" />
      </div>
    </div>

    <ul v-else class="flex flex-col gap-3">
      <li v-for="(project, index) in visible" :key="project.id" v-reveal="Math.min(index, 4) * 50">
        <ProjectRow :item="itemOf(project)" @open="selectedId = project.id" />
      </li>
    </ul>

    <div v-if="hiddenCount > 0" class="mt-10 text-center">
      <button
        type="button"
        class="cursor-pointer rounded bg-brand-solid px-8 py-2.5 font-semibold text-white transition-colors hover:bg-brand-solid-hover"
        @click="expand"
      >
        {{ t('portfolio.showMore', { count: hiddenCount }) }}
      </button>
    </div>

    <ProjectDialog :project="detail" @close="selectedId = null" @prev="step(-1)" @next="step(1)" />
  </SectionShell>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import FilterTabs from '@/components/ui/FilterTabs.vue'
import ProjectCard from '@/components/ui/ProjectCard.vue'
import ProjectDialog from '@/components/ui/ProjectDialog.vue'
import ProjectRow from '@/components/ui/ProjectRow.vue'
import SectionShell from '@/components/ui/SectionShell.vue'
import ViewToggle from '@/components/ui/ViewToggle.vue'
import { useContent, type ProjectView } from '@/composables/useContent'
import { usePortfolioUrl } from '@/composables/usePortfolioUrl'
import { useProjectFilter, type ProjectFilter } from '@/composables/useProjectFilter'
import { reveal as vReveal } from '@/directives/reveal'
import { projectImage, projectThumb, techIcon } from '@/lib/asset'
import type { TechSlug } from '@/types/content'
import type { ProjectDetail, ProjectItem, ProjectViewMode, ViewOption } from '@/types/ui'

const { t } = useI18n()
const { content, projectViews } = useContent()
const { active, counts, filters, filtered, visible, hiddenCount, setFilter, expand } =
  useProjectFilter(projectViews)

const filterOptions = computed(() =>
  filters.value.map((value) => ({
    value,
    label: t(`portfolio.filters.${value}`),
    count: counts.value[value]
  }))
)

function onFilter(value: string): void {
  setFilter(value as ProjectFilter)
}

const view = ref<ProjectViewMode>('grid')

// Los nombres de icono van literales y completos: Tailwind solo emite lo que lee escrito.
const viewOptions = computed<ViewOption[]>(() => [
  { value: 'grid', label: t('portfolio.viewGrid'), icon: 'icon-[ph--squares-four]' },
  { value: 'list', label: t('portfolio.viewList'), icon: 'icon-[ph--list-bullets]' }
])

// Filtro y vista viajan en la URL (`?cat=landing&view=list#portfolio`). Se llama aquí, durante el
// `setup`, para que el estado de un enlace compartido se aplique antes del primer pintado.
usePortfolioUrl({ filter: active, view, filters, setFilter })

/** Un proyecto en la forma que piden la tarjeta y la fila (las dos vistas comparten contrato). */
function itemOf(project: ProjectView): ProjectItem {
  return {
    title: project.title,
    image: projectThumb(project.image),
    categoryLabel: t(`portfolio.categories.${project.category}`),
    summary: project.summary,
    stack: techs(project.stack),
    isPrivate: !project.repositoryPublic,
    privateLabel: t('portfolio.repositoryPrivate'),
    openLabel: t('portfolio.viewDetails', { title: project.title })
  }
}

const techs = (stack: readonly TechSlug[]): { slug: string; src: string }[] =>
  stack.map((slug) => ({ slug, src: techIcon(slug) }))

const selectedId = ref<string | null>(null)

/** Siguiente/anterior dentro del filtro activo (da la vuelta al llegar al final). */
function step(delta: 1 | -1): void {
  const list = filtered.value
  const index = list.findIndex((project) => project.id === selectedId.value)
  if (index === -1) return
  selectedId.value = list[(index + delta + list.length) % list.length].id
}

/** El diálogo recibe todo ya resuelto (idioma, rutas); no sabe de stores ni de i18n. */
const detail = computed<ProjectDetail | null>(() => {
  const list = filtered.value
  const index = list.findIndex((item) => item.id === selectedId.value)
  if (index === -1) return null
  const project = list[index]

  return {
    id: project.id,
    title: project.title,
    image: projectImage(project.image),
    categoryLabel: t(`portfolio.categories.${project.category}`),
    summary: project.summary,
    list: project.list,
    stack: techs(project.stack),
    stackLabel: t('portfolio.stack'),
    closeLabel: t('portfolio.close'),
    position: t('portfolio.position', { current: index + 1, total: list.length }),
    prevLabel: t('portfolio.prev'),
    nextLabel: t('portfolio.next'),
    links: [
      { label: t('portfolio.viewSite'), icon: 'icon-[ph--link]', href: project.link },
      project.repositoryPublic
        ? {
            label: t('portfolio.repositoryPublic'),
            icon: 'icon-[ph--code]',
            href: project.repository
          }
        : { label: t('portfolio.repositoryPrivate'), icon: 'icon-[ph--lock-simple]' }
    ]
  }
})
</script>
