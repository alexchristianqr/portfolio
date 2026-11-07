<template>
  <button
    type="button"
    class="fixed top-4 right-4 z-[9998] inline-flex size-10 cursor-pointer items-center justify-center rounded-full bg-brand-solid text-2xl text-white xl:hidden"
    :aria-label="t('layout.openMenu')"
    @click="ui.setMobileNav(true)"
  >
    <span class="icon-[ph--list]" aria-hidden="true"></span>
  </button>

  <DialogRoot :open="ui.mobileNavOpen" @update:open="ui.setMobileNav">
    <DialogPortal>
      <DialogOverlay class="fixed inset-0 z-[9999] bg-overlay xl:hidden" />
      <DialogContent
        class="fixed inset-y-0 left-0 z-[10000] w-[300px] max-w-[85vw] overflow-y-auto bg-sidebar xl:hidden"
      >
        <DialogTitle class="sr-only">{{ t('layout.menu') }}</DialogTitle>
        <DialogDescription class="sr-only">{{ t('layout.menu') }}</DialogDescription>
        <DialogClose
          :aria-label="t('layout.closeMenu')"
          class="absolute top-3 right-3 inline-flex size-9 cursor-pointer items-center justify-center rounded-full bg-sidebar-chip text-xl text-white"
        >
          <span class="icon-[ph--x]" aria-hidden="true"></span>
        </DialogClose>
        <SidebarPanel @navigate="ui.setMobileNav(false)" />
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<script setup lang="ts">
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle
} from 'reka-ui'
import { useI18n } from 'vue-i18n'
import { useUiStore } from '@/stores/ui.store'
import SidebarPanel from './SidebarPanel.vue'

const { t } = useI18n()
const ui = useUiStore()
</script>
