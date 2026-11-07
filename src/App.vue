<template>
  <a
    href="#profile"
    class="fixed top-2 left-2 z-[10003] -translate-y-16 rounded bg-brand-solid px-4 py-2 text-white focus:translate-y-0"
  >
    {{ t('layout.skipToContent') }}
  </a>

  <TheSidebar />
  <TheMobileNav />

  <!-- El margen deja libre la barra lateral fija (solo visible desde 1200px). -->
  <main class="xl:ml-[300px]">
    <HeroSection />
    <AboutSection />
    <PortfolioSection />
    <SkillsSection />
    <ResumeSection />
    <ContactSection />
  </main>

  <TheFooter class="xl:ml-0" />
  <BackToTop />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import BackToTop from '@/components/layout/BackToTop.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import TheMobileNav from '@/components/layout/TheMobileNav.vue'
import TheSidebar from '@/components/layout/TheSidebar.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import PortfolioSection from '@/components/sections/PortfolioSection.vue'
import ResumeSection from '@/components/sections/ResumeSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import { useActiveSection } from '@/composables/useActiveSection'
import { useLocaleStore } from '@/stores/locale.store'
import { useThemeStore } from '@/stores/theme.store'
import type { SectionId } from '@/types/content'

const { t } = useI18n()

// Se instancian aquí para que idioma y tema se apliquen al arrancar, aunque ningún
// componente visible los lea en ese instante.
useLocaleStore()
useThemeStore()

const sections: readonly SectionId[] = [
  'hero',
  'profile',
  'portfolio',
  'skills',
  'summary',
  'contact'
]
useActiveSection(sections)
</script>
