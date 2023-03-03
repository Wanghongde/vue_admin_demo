<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="isCollapse ? '65px' : '210px'">
        <Menu :isCollapse="isCollapse"/>
      </el-aside>
      <el-container>
        <el-header>
          <Head @changeIsCollapse="changeIsCollapse"/>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup >
import Menu from './components/menu.vue'
import Head from './components/head.vue'
import { ref } from 'vue'

const isCollapse = ref(false)

const changeIsCollapse = () => {
  isCollapse.value = !isCollapse.value
}
</script>

<script>
export default {
  name: 'layout-box'
}
</script>

<style scoped>
.common-layout,
.el-container {
  height: 100vh;
}

.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  min-height: 60px;
  line-height: 60px;
  border-bottom: 2px solid #ccc;
}
</style>
