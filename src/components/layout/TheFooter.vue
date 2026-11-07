<template>
  <footer
    class="bg-sidebar px-4 py-3.5 text-center text-sm text-sidebar-active/90 xl:fixed xl:bottom-0 xl:left-0 xl:z-[9999] xl:h-[50px] xl:w-[300px]"
  >
    <!-- `&nbsp;` y no un espacio normal: el formateador colapsa el espacio entre elementos en línea. -->
    <span>&copy; {{ t('layout.copyright') }}&nbsp;</span><span class="font-bold">{{ year }}</span>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const year = new Date().getFullYear()
</script>
