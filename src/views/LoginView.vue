<template>
    <div class="login-box">
        <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            status-icon
            :rules="rules"
            label-width="70px"
            class="demo-ruleForm"
        >
            <h2>后台管理系统</h2>
            <el-form-item label="账号" prop="username">
                <el-input v-model="ruleForm.username" autocomplete="off" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input
                    v-model="ruleForm.password"
                    type="password"
                    autocomplete="off"
                />
            </el-form-item>
            <el-form-item>
            <el-button class="loginBtn" type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
            <el-button class="loginBtn" @click="resetForm(ruleFormRef)">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
// reactive的响应式功能是赋值给对象，如果展开对象，会让数丢失响应的能力
// 使用toRefs可以保证对象展开的每个属性都是响应式的
import { defineComponent, reactive, toRefs, ref } from 'vue'
import { LoginData } from '../type/login'
import type { FormInstance } from 'element-plus'
import { login } from '../request/api'
import { useRouter } from 'vue-router'

export default defineComponent({
    setup () {
        const data = reactive(new LoginData())

        const rules = {
            username: [
                { required: true, message: '请输入账号', trigger: 'blur' },
                { min: 3, max: 10, message: '账号的长度在3-10之间', trigger: 'blur' },
            ],
            password: [
                { required: true, message: '请输入密码', trigger: 'blur' },
                { min: 3, max: 10, message: '密码的长度在3-10之间', trigger: 'blur' },
            ],
        }

        // 登录
        const ruleFormRef = ref<FormInstance>()
        const router = useRouter() // vue3中的useRouter相当于vue2中的$router
        const submitForm = (formEl: FormInstance | undefined) => {
            if (!formEl) return
            formEl.validate((valid) => {
                if (valid) {
                    login(data.ruleForm).then(res => {
                        console.log(res.data);
                        // 将token保存
                        // console.log(res.data.token);
                        localStorage.setItem('token', res.data.token);
                        // 跳转到首页
                        router.push('/')
                    })
                } else {
                    console.log('error submit!')
                    return false
                }
            })
        }

        // 重置
        const resetForm =() => {
            data.ruleForm.username = ''
            data.ruleForm.password = ''
        }

        return {...toRefs(data), rules, resetForm, ruleFormRef, submitForm}
    }
})
</script>

<style lang="scss" scoped>
    .login-box {
        width: 100%;
        height: 100%;
        background: url("../assets/bg1.png");
        text-align: center;
        overflow:hidden;
        h2 {
            margin-bottom: 50px;
        }
        .demo-ruleForm {
            width: 500px;
            margin: 200px auto;
            background-color: #fff;
            padding: 40px;
            border-radius: 20px;
        }
        .loginBtn {
            width: 48%;
        }
    }
</style>