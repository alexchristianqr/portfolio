<template>
  <SectionShell id="contact" :title="t('nav.contact')">
    <template #intro>
      <p>{{ content.contact.intro }}</p>
    </template>

    <div class="grid gap-10 lg:grid-cols-5">
      <div v-reveal class="space-y-6 lg:col-span-2">
        <div>
          <h4 class="text-xl font-semibold text-ink">{{ t('contact.activeMedia') }}</h4>
          <p class="mt-1 text-sm text-body">{{ t('contact.activeMediaText') }}</p>
        </div>

        <ul class="space-y-4">
          <li v-for="item in details" :key="item.icon" class="group flex items-center gap-4">
            <span
              class="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-icon-soft text-xl text-brand-text transition-colors group-hover:bg-brand-solid group-hover:text-white"
            >
              <span :class="item.icon" aria-hidden="true"></span>
            </span>
            <div>
              <p class="font-semibold text-ink">{{ item.label }}</p>
              <a v-if="item.href" :href="item.href" class="text-sm text-body hover:underline">{{
                item.value
              }}</a>
              <p v-else class="text-sm text-body">{{ item.value }}</p>
            </div>
          </li>
        </ul>

        <div>
          <h4 class="text-xl font-semibold text-ink">{{ t('contact.social') }}</h4>
          <p class="mt-1 mb-3 text-sm text-body">{{ t('contact.socialText') }}</p>
          <SocialLinks :links="profile.socials" />
        </div>
      </div>

      <div v-reveal class="lg:col-span-3">
        <ContactForm
          v-model:fullname="form.fullname"
          v-model:email="form.email"
          v-model:phone="form.phone"
          v-model:subject="form.subject"
          v-model:message="form.message"
          :labels="labels"
          :sending="contact.status === 'sending'"
          @submit="submit"
        />
      </div>
    </div>

    <AppToast
      :open="toastOpen"
      :kind="contact.status === 'error' ? 'error' : 'success'"
      :message="contact.status === 'error' ? t('contact.toast.error') : t('contact.toast.success')"
      :close-label="t('contact.toast.close')"
      @update:open="onToastOpen"
    />
  </SectionShell>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import AppToast from '@/components/ui/AppToast.vue'
import ContactForm from '@/components/ui/ContactForm.vue'
import SectionShell from '@/components/ui/SectionShell.vue'
import SocialLinks from '@/components/ui/SocialLinks.vue'
import { useContactForm } from '@/composables/useContactForm'
import { useContent } from '@/composables/useContent'
import { reveal as vReveal } from '@/directives/reveal'
import { useContactStore } from '@/stores/contact.store'
import type { ContactFormLabels } from '@/types/ui'

const { t } = useI18n()
const { content, profile } = useContent()
const contact = useContactStore()
const { form, submit } = useContactForm()

const details = computed(() => [
  {
    icon: 'icon-[ph--envelope-simple]',
    label: t('contact.email'),
    value: profile.email,
    href: `mailto:${profile.email}`
  },
  {
    icon: 'icon-[ph--map-pin]',
    label: t('contact.location'),
    value: profile.location,
    href: undefined
  }
])

const labels = computed<ContactFormLabels>(() => ({
  name: t('contact.form.name'),
  email: t('contact.form.email'),
  phone: t('contact.form.phone'),
  optional: t('contact.form.optional'),
  subject: t('contact.form.subject'),
  message: t('contact.form.message'),
  send: t('contact.form.send'),
  sending: t('contact.form.sending')
}))

const toastOpen = computed(() => contact.status === 'success' || contact.status === 'error')

function onToastOpen(open: boolean): void {
  if (!open) contact.reset()
}
</script>
