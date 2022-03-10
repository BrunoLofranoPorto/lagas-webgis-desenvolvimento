<template>
  <iframe src="https://brunolofranoporto.github.io/lagas-webgis-artigos/" frameborder="0" height="900px" width="100%"></iframe>
</template>

<script>
import { collapsed, toggleSidebar } from '@/components/sidebar/state'

export default {
  setup() {
    return { collapsed, toggleSidebar }
  }
}
</script>

<style scoped>
    
</style>