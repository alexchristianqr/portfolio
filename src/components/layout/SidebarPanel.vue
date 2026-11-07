<template>
  <div class="flex min-h-full flex-col px-4 pb-6">
    <div class="text-center">
      <a href="#hero" class="block" @click="onNavigate('hero')">
        <img
          :src="asset('images/perfil.jpg')"
          :alt="profile.displayName"
          width="153"
          height="153"
          class="mx-auto my-4 size-[153px] rounded-full border-[0.2rem] border-sidebar-ring object-cover object-top"
        />
      </a>
      <h1 class="font-display text-2xl font-semibold text-white">
        <a href="#hero" @click="onNavigate('hero')">{{ profile.displayName }}</a>
      </h1>
      <div class="mt-3 flex justify-center">
        <SocialLinks :links="sidebarSocials" />
      </div>
      <div class="mt-4 flex flex-col items-center gap-3">
        <LanguageSwitch />
        <ThemeToggle />
      </div>
    </div>

    <nav :aria-label="t('layout.menu')" class="pt-8">
      <ul>
        <li v-for="link in navLinks" :key="link.id">
          <a
            :href="`#${link.id}`"
            :aria-current="ui.activeSection === link.id ? 'true' : undefined"
            class="group mb-2 flex items-center px-4 py-3 text-[15px] text-sidebar-fg transition-colors hover:text-sidebar-active"
            :class="{ 'text-sidebar-active': ui.activeSection === link.id }"
            @click="onNavigate(link.id)"
          >
            <span
              class="mr-2 text-2xl text-sidebar-icon transition-colors group-hover:text-brand"
              :class="[link.icon, { 'text-brand!': ui.activeSection === link.id }]"
              aria-hidden="true"
            ></span>
            <span>{{ t(`nav.${link.id}`) }}</span>
          </a>
        </li>
        <li>
          <a
            :href="publicFile(env.cvFilename)"
            target="_blank"
            rel="noopener noreferrer"
            class="group mb-2 flex items-center px-4 py-3 text-[15px] text-sidebar-fg transition-colors hover:text-sidebar-active"
            @click="trackEvent('#curriculumvitae')"
          >
            <span
              class="mr-2 icon-[ph--download-simple] text-2xl text-sidebar-icon transition-colors group-hover:text-brand"
              aria-hidden="true"
            ></span>
            <span>{{ t('nav.cv') }}</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SocialLinks from '@/components/ui/SocialLinks.vue'
import { useContent } from '@/composables/useContent'
import { env } from '@/config/env'
import { asset, publicFile } from '@/lib/asset'
import { trackEvent } from '@/services/analytics.service'
import { useUiStore } from '@/stores/ui.store'
import LanguageSwitch from './LanguageSwitch.vue'
import ThemeToggle from './ThemeToggle.vue'

const emit = defineEmits<{ navigate: [] }>()

const { t } = useI18n()
const ui = useUiStore()
const { profile, navLinks } = useContent()

const sidebarSocials = computed(() => profile.socials.filter((social) => social.inSidebar))

// El salto de ancla lo hace el navegador (con `scroll-behavior: smooth`); aquí solo se mide
// y se avisa al padre para que cierre el panel móvil.
function onNavigate(id: string): void {
  trackEvent(`#${id}`)
  emit('navigate')
}
</script>
