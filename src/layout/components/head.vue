<template>
  <div class="right">
    <svg-icon :icon="isCollapse ? 'hamburger-closed' : 'hamburger-opened'" @click="changeIsCollapse"></svg-icon>

    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">{{ $t(`message.menu.${breadcrumb[0].name}`) }}</el-breadcrumb-item>
      <el-breadcrumb-item>{{ $t(`message.menu.${breadcrumb[1].name}`) }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>

  <div class="left">
    <svg-icon :icon="isFull ? 'exit-fullscreen' : 'fullscreen'" @click="toggleScreen"/>

    <el-dropdown @command="commandFn">
      <span class="el-dropdown-link">
        <svg-icon icon="language"/>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :disabled="lang === 'zh'" command="zh">中文</el-dropdown-item>
          <el-dropdown-item :disabled="lang === 'en'" command="en">English</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <el-dropdown>
      <span class="el-dropdown-link">
        <img width="35" height="35" src="@/assets/19.jpg" alt="">
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="logout">{{ $t("message.logout") }}</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n/dist/vue-i18n.cjs.js'
import { useRoute, useRouter } from 'vue-router'
import screenfull from 'screenfull'

const route = useRoute()
const router = useRouter()
const store = useStore()
const i18n = useI18n()

const isCollapse = ref(false)
const isFull = ref(false)
const emit = defineEmits(['changeIsCollapse'])

const changeIsCollapse = () => {
  isCollapse.value = !isCollapse.value
  emit('changeIsCollapse')
}

const logout = () => {
  store.dispatch('app/logout')
}

const lang = computed(() => {
  return i18n.locale.value
})

const commandFn = (info) => {
  i18n.locale.value = info
}

const breadcrumb = ref([])

watch(route, newVal => {
  breadcrumb.value = newVal.matched
}, {
  deep: true,
  immediate: true
})

const toggleScreen = () => {
  if (screenfull.isEnabled) {
    isFull.value = !isFull.value
	  screenfull.toggle()
  }
}
</script>

<script>
export default {
  name: 'head-box'
}
</script>

<style scoped lang="less">
.left{
  display: flex;
  align-items: center;
  & svg:first-child,
  & div:nth-child(2) {
    color: #333;
    font-size: 30px;
  }
  & svg:first-child {
    cursor: pointer;
  }
  & div:nth-child(2) {
    margin: 0 20px;
  }
}
:deep(.el-dropdown-link) {
  img {
    border-radius: 5px;
  }
  outline: none;
}
.right {
  display: flex;
  align-items: center;
  svg {
    cursor: pointer;
    margin: 10px;
  }
}

</style>
