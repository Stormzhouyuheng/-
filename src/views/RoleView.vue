<template>
    <div>
        <div class="select-box">
            <el-form :inline="true" class="demo-form-inline">
                <el-form-item>
                    <el-button type="primary" @click="addRole">添加角色</el-button>
                </el-form-item>
            </el-form>
        </div>

        <el-table :data="list" border style="width: 100%">
            <el-table-column prop="roleId" label="ID" width="180" />
            <el-table-column prop="roleName" label="角色名" width="180" />
            <el-table-column prop="authority" label="操作">
                <template #default="scope">
                    <el-button 
                                @click="changeRole(scope.row)"
                                link
                                size="small">修改权限</el-button>
                </template>
            </el-table-column>
        </el-table>

         <!-- <el-dialog v-model="isShow" title="编辑信息">
            <el-form :model="active">
            <el-form-item label="姓名" label-width="50px">
                <el-input v-model="active.nickName" autocomplete="off" />
            </el-form-item>
            <el-form-item label="角色" label-width="50px">
                <el-select multiple v-model="active.role" placeholder="请选择角色">
                    <el-option
                        v-for="item in roleList"
                        :key="item.roleId"
                        :label="item.roleName"
                        :value="item.roleId"/>
                </el-select>
            </el-form-item>
            </el-form>
            <template #footer>
            <span class="dialog-footer">
                <el-button @click="updateUser">更改</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">
                取消
                </el-button>
            </span>
            </template>
        </el-dialog> -->
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import { getRoleList } from '../request/api'
import { InitData } from '../type/role'
import { ElMessage, ElMessageBox } from 'element-plus'

export default defineComponent({
    setup () {
        const data = reactive(new InitData())

        onMounted(() => {
            getRoleList().then(res => {
                console.log(res);
                data.list = res.data
            })
        })

        const addRole = () => {
            ElMessageBox.prompt('请输入角色名称', '添加', {
                confirmButtonText: '确定',
                cancelButtonText: '取消'
            }).then(({ value }) => {
                if(value) {
                    data.list.push({
                        roleId: data.list.length + 1,
                        roleName: value,
                        authority: []
                    })
                    ElMessage({
                        type: 'success',
                        message: `${value}角色添加成功！`,
                    })
                }
            }).catch(() => {
                ElMessage({
                    type: 'info',
                    message: '取消操作',
                })
            })
        }

        return {...toRefs(data), addRole}
    }
})
</script>

<style lang="scss" scoped>

</style>