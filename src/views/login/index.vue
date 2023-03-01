<template>
  <div class="login-container">
    <el-form :model="form" class="login-container-form">
      <el-form-item class="login-container-form-title">
        <h2>admin 后台管理系统</h2>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.name" :prefix-icon="User"/>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.password" :prefix-icon="Hide" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { User, Hide } from '@element-plus/icons-vue'

const form = reactive({
  name: '',
  password: ''
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<script>
export default {
  name: 'login-box'
}
</script>

<style scoped lang="less">
.login-container {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #2d3a4b;

  &-form {
    // background-color: #fff;
    border-radius: 5px;
    width: 30vw;
    height: 300px;
    &-title {
      h2 {
        width: 100%;
        text-align: center;
        color: #fff;
        user-select: none;
      }

    }
    .el-button {
      width: 100%;
    }
  }
}
</style>
