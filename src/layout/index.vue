<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="300px">
        <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          :default-active="defaultActive"
          text-color="#fff"
          router
        >
          <el-menu-item index="/home">
            <el-icon><Menu /></el-icon>
            <span>首页</span>
          </el-menu-item>
          <el-menu-item index="/user">
            <el-icon><Menu /></el-icon>
            <span>用户</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup >
import { Menu } from '@element-plus/icons-vue'
import { ref } from 'vue'

const defaultActive = ref(location.hash.slice(1))

</script>

<script>
export default {
  name: 'layout-box'
}
</script>

<style scoped>
.common-layout,
.el-container,
.el-menu {
  height: 100vh;
}
</style>
