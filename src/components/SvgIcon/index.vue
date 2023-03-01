<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  icon: String
})

const iconName = computed(() => {
  return `#icon-${props.icon}`
})
</script>

<script>
export default {
  name: 'svg-icon'
}
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
