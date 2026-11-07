<template>
  <footer
    class="bg-sidebar px-4 py-3.5 text-center text-sm text-sidebar-active/90 xl:fixed xl:bottom-0 xl:left-0 xl:z-[9999] xl:h-[50px] xl:w-[300px]"
  >
    <!-- `&nbsp;` y no un espacio normal: el formateador colapsa el espacio entre elementos en línea. -->
    <span>&copy; {{ t('layout.copyright') }}&nbsp;</span><span class="font-bold">{{ year }}</span>
    <!-- Marca de compilación: el commit corto dice qué versión está publicada. -->
    <span class="ml-2 text-xs text-sidebar-fg/70 tabular-nums" :title="buildTitle">
      · {{ appBuild.commit }}
    </span>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { appBuild } from '@/config/build'

const { t } = useI18n()
const year = new Date().getFullYear()

/** Detalle completo al pasar el ratón: versión, rama y hora local de la compilación. */
const buildTitle = computed(() =>
  t('layout.build', {
    version: appBuild.version,
    branch: appBuild.branch,
    date: new Date(appBuild.builtAt).toLocaleString()
  })
)
</script>
