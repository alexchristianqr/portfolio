<template>
  <!-- Fija desde 1200px; por debajo la sustituye TheMobileNav. `bottom-[50px]` deja sitio al pie. -->
  <aside
    class="fixed top-0 bottom-[50px] left-0 z-[9997] hidden w-[300px] overflow-y-auto bg-sidebar xl:block"
  >
    <SidebarPanel />
  </aside>
</template>

<script setup lang="ts">
import SidebarPanel from './SidebarPanel.vue'
</script>
