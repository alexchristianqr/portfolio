<template>
  <form class="space-y-4" @submit.prevent="emit('submit')">
    <div class="grid gap-4 md:grid-cols-2">
      <div class="md:col-span-2">
        <label :for="ids.name" :class="labelClass">{{ labels.name }}</label>
        <input
          :id="ids.name"
          v-model="fullname"
          type="text"
          name="name"
          autocomplete="name"
          required
          :class="fieldClass"
        />
      </div>
      <div>
        <label :for="ids.email" :class="labelClass">{{ labels.email }}</label>
        <input
          :id="ids.email"
          v-model="email"
          type="email"
          name="email"
          autocomplete="email"
          required
          :class="fieldClass"
        />
      </div>
      <div>
        <label :for="ids.phone" :class="labelClass">
          {{ labels.phone }} <span class="text-xs text-muted">{{ labels.optional }}</span>
        </label>
        <input
          :id="ids.phone"
          v-model="phone"
          type="tel"
          name="phone"
          autocomplete="tel"
          :class="fieldClass"
        />
      </div>
    </div>
    <div>
      <label :for="ids.subject" :class="labelClass">{{ labels.subject }}</label>
      <input
        :id="ids.subject"
        v-model="subject"
        type="text"
        name="subject"
        required
        :class="fieldClass"
      />
    </div>
    <div>
      <label :for="ids.message" :class="labelClass">{{ labels.message }}</label>
      <textarea
        :id="ids.message"
        v-model="message"
        name="message"
        rows="8"
        required
        :class="fieldClass"
      ></textarea>
    </div>
    <div class="text-center">
      <button
        type="submit"
        :disabled="sending"
        class="cursor-pointer rounded bg-brand-solid px-8 py-2.5 font-semibold text-white transition-colors hover:bg-brand-solid-hover disabled:cursor-not-allowed disabled:opacity-60"
      >
        {{ sending ? labels.sending : labels.send }}
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useId } from 'vue'
import type { ContactFormLabels } from '@/types/ui'

defineProps<{
  labels: ContactFormLabels
  sending: boolean
}>()

const emit = defineEmits<{ submit: [] }>()

const fullname = defineModel<string>('fullname', { required: true })
const email = defineModel<string>('email', { required: true })
const phone = defineModel<string>('phone', { required: true })
const subject = defineModel<string>('subject', { required: true })
const message = defineModel<string>('message', { required: true })

// `useId` evita que dos formularios en la misma página compartan `id` y rompan los `label`.
const uid = useId()
const ids = {
  name: `${uid}-name`,
  email: `${uid}-email`,
  phone: `${uid}-phone`,
  subject: `${uid}-subject`,
  message: `${uid}-message`
}

const labelClass = 'text-ink mb-1 block text-sm font-semibold'
const fieldClass =
  'border-muted/70 bg-surface text-body w-full rounded border px-3 py-2 transition-colors focus-visible:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40'
</script>
