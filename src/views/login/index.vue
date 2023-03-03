<template>
  <div class="login-container">
    <el-form :model="form" class="login-container-form" :rules="rules" ref="ruleFormRef">
      <el-form-item class="login-container-form-item login-container-form-title">
        <h2>{{ $t("message.LoginTitle") }}</h2>
      </el-form-item>
      <el-form-item class="login-container-form-item">
        <el-input v-model="form.mobile" :prefix-icon="User"/>
      </el-form-item>
      <el-form-item class="login-container-form-item">
        <el-input v-model="form.password" :show-password="passwordFlag">
          <template #prefix>
            <svg-icon icon="password"></svg-icon>
          </template>
          <template #suffix>
            <el-icon class="el-input__icon">
              <view v-if="passwordFlag" />
              <hide v-else/>
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'
import { User, Hide } from '@element-plus/icons-vue'

const store = useStore()

const form = reactive({
  mobile: '13800000002',
  password: '123456'
})

const rules = reactive({
  mobile: [
    { required: true, message: '请填写用户名', trigger: 'blur' },
    { min: 3, max: 8, message: '用户名长度3-8位', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请填写密码', trigger: 'blur' },
    { min: 3, max: 12, message: '密码长度3-12位', trigger: 'blur' }
  ]
})

const passwordFlag = ref(true)

const ruleFormRef = ref()

const submitForm = () => {
  ruleFormRef.value.validate(async (valid, fields) => {
    if (valid) {
      await store.dispatch('app/login', form)
    } else {
      console.log('error submit!', fields)
      console.log(3, form)
    }
  })
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
    border-radius: 5px;
    width: 30vw;
    min-width: 400px;
    height: 300px;
    &-title {
      h2 {
        width: 100%;
        font-size: 35px;
        text-align: center;
        color: #fff;
        user-select: none;
      }

    }

    :deep(.el-input) {
      height: 45px;
    }
    .el-button {
      width: 100%;
      height: 45px;
    }
  }
}
</style>
