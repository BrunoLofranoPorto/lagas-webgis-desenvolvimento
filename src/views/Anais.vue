<template>
  <iframe src="https://brunolofranoporto.github.io/lagas-webgis-anais/" frameborder="0" height="1200px" width="100%"></iframe>
</template>

<script>
import { collapsed, toggleSidebar } from '@/components/sidebar/state'

export default {
  setup() {
    return { collapsed, toggleSidebar }
  }
}
</script>
