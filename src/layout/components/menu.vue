<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    :default-active="defaultActive"
    :collapse-transition="false"
    text-color="#fff"
    router
    :collapse="props.isCollapse"
  >
    <el-menu-item index="/home">
      <el-icon><Menu /></el-icon>
      <template #title>{{ $t("message.menu.home") }}</template>
    </el-menu-item>
    <el-menu-item index="/user">
      <el-icon><Menu /></el-icon>
      <template #title>{{ $t("message.menu.user") }}</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { Menu } from '@element-plus/icons-vue'
import { ref, defineProps, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const defaultActive = ref('/home')

watch(route, newVal => {
  defaultActive.value = newVal.path
}, {
  deep: true,
  immediate: true
})

const props = defineProps({
  isCollapse: {
    required: true,
    type: Boolean
  }
})
</script>

<script>
export default {
  name: 'menu-box'
}
</script>

<style scoped>
.el-menu {
  height: 100vh;
}
</style>
