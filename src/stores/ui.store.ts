import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { SectionId } from '@/types/content'

export const useUiStore = defineStore('ui', () => {
  const mobileNavOpen = ref(false)
  const activeSection = ref<SectionId>('hero')

  function setMobileNav(open: boolean): void {
    mobileNavOpen.value = open
  }

  function setActiveSection(id: SectionId): void {
    activeSection.value = id
  }

  return { mobileNavOpen, activeSection, setMobileNav, setActiveSection }
})
