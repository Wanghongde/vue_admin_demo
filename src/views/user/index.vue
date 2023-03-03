<template>
  <el-card class="box-card">
    <el-row :gutter="10">
      <el-col :span="4"><el-input v-model="data.query" placeholder="请搜索内容" clearable @clear="getUserList"/></el-col>
      <el-col :span="2"><el-button type="primary" :disabled="!data.query" @click="getUserList">搜索用户</el-button></el-col>
      <el-col :span="2"><el-button type="success" @click="dialogFormVisible = true">添加用户</el-button></el-col>
    </el-row>

    <el-table :data="userList" border style="width: 100%">
      <el-table-column
        v-for="item in options"
        :key="item.id"
        :prop="item.prop"
        :label="item.label">
        <template v-if="item.prop === 'mg_state'" #default="{row}">
          <el-switch v-model="row.mg_state" />
        </template>
        <template v-if="item.prop === 'operate'" #default="{row}">
          <el-button type="primary" :icon="Edit" @click="putUserList(row)">编辑</el-button>
          <el-button type="danger" :icon="Delete" @click="del(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      v-model:current-page="data.pagenum"
      v-model:page-size="data.pagesize"
      :page-sizes="[3, 5, 10, 30]"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="getUserList"
      @current-change="getUserList"
    />

    <el-dialog v-model="dialogFormVisible" :title="form.id ? '编辑用户': '添加用户'">
      <el-form :model="form">
        <el-form-item v-if="!form.id" label="用户名" :label-width="120">
          <el-input v-model="form.username" autocomplete="off" />
        </el-form-item>
        <el-form-item v-if="!form.id" label="密码" :label-width="120">
          <el-input v-model="form.password" autocomplete="off" />
        </el-form-item>
        <el-form-item label="邮箱" :label-width="120">
          <el-input v-model="form.email" autocomplete="off" />
        </el-form-item>
        <el-form-item label="手机号" :label-width="120">
          <el-input v-model="form.mobile" autocomplete="off" />
        </el-form-item>
      </el-form>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="cancelAddUserList">取消</el-button>
          <el-button type="primary" @click="editUserList">
            {{ form.id ? '编辑用户': '添加用户'}}
          </el-button>
        </span>
      </template>
    </el-dialog>
  </el-card>
</template>

<script setup>
import { getUser, delUser, addUser, putUser, putUserState } from '@/api/user.js'
import { reactive, ref } from 'vue'
import { Edit, Delete} from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'

const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const form = ref({
  username: `默认名称${Math.random()}`,
  email: 'user@qq.com',
  password: '123123',
  mobile: '18811666666'
})

const dialogFormVisible = ref(false)

const data = reactive({
  query: '',
  pagenum: 1,
  pagesize: 10
})

const options = [
  { prop: 'id', label: 'id' },
  { prop: 'role_name', label: '角色分类' },
  { prop: 'username', label: '用户名' },
  { prop: 'create_time', label: '创建时间' },
  { prop: 'mg_state', label: '状态' },
  { prop: 'mobile', label: '手机号' },
  { prop: 'email', label: '邮箱' },
  { prop: 'operate', label: '操作' }
]

const userList = ref([])
const total = ref()

const getUserList = async () => {
  const {data: result} = await getUser(data)

  userList.value = result.users
  total.value = result.total
}

getUserList()

const del = row => {
  ElMessageBox.confirm(`确认删除用户 ${row.username} 吗?`, '确认删除', {
    confirmButtonText: '确认',
    cancelButtonText: '取消'
  }).then(async () => {
    await delUser(row.id)
    getUserList()
  }).catch(() => {
    ElMessage({
      type: 'info',
      message: '取消删除用户'
    })
  })
}

const editUserList = async () => {
  if(form.value.id) {
    await putUser(form.value)
  } else {
    await addUser(form.value)
  }

  form.value = {
    username: `默认名称${Math.random()}`,
    email: 'user@qq.com',
    password: '123123',
    mobile: '18811666666'
  }
  console.log(11, form.value)

  getUserList()

  dialogFormVisible.value = false
}

const cancelAddUserList = () => {
  ElMessage({
    type: 'info',
    message: form.value.id ? '取消添加用户' : '取消编辑用户'
  })

  form.value = {
    username: `默认名称${Math.random()}`,
    email: 'user@qq.com',
    password: '123123',
    mobile: '18811666666'
  }

  dialogFormVisible.value = false
}

const putUserList = async row => {
  form.value = {
    id: row.id,
    email: row.email,
    mobile: row.mobile
  }

  dialogFormVisible.value = true
}
</script>

<script>
export default {
  name: 'user-box'
}
</script>

<style scoped lang="less">
.box-card {
  .el-table--fit{
    margin: 20px 0;
  }
}
</style>
