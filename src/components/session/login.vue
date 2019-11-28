<template>
  <div class="session-body">

    <img src="../../assets/logo.png" alt="">

    <el-form ref="form" label-width="80px">

      <el-form-item label="用户名">
        <el-input v-model="loginData.username" type="text"></el-input>
      </el-form-item>

      <el-form-item label="密码">
        <el-input v-model="loginData.password" type="password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="button" @click="loginFn">立即登录</el-button>
        <el-button type="button" @click="goRegister">去注册</el-button>
      </el-form-item>

    </el-form>

  </div>
</template>

<script>
	import {login} from "../../utils/api/session";
	import md5 from "js-md5"
  import { mapActions } from 'vuex'
	export default {
		name: "login",
		data() {
			return {
				loginData: {
					username: "",
					password: ""
				}
			}
		},
		methods: {
			...mapActions([
				'saveLoginUserModal'
      ]),
			loginFn() {

				if (this.loginData.username === "") {
					return this.$message.error('用户名不能为空！');
				} else if (this.loginData.password === "") {
					return this.$message.error('密码不能为空！');
				}

				this.loginData.password = md5(md5(this.loginData.password));
				login(this.loginData).then(res => {
					let success = res.data;
					if( success.err_code !== 0 ){
            this.$message.warning(success.message);
          }else{
						this.$message.success(success.message);
						this.saveLoginUserModal(success.data);
						this.$router.push({path: '/'})
					}
				}).catch(err => {
					console.log(err);
				})
			},
			goRegister() {
				this.$router.push({path: '/register'})
			}
		}
	}
</script>

<style lang="less" scoped>
  .session-body {
    width: 500px;
    margin: auto;
    text-align: center;
    box-shadow: beige;
    height: 450px;
    border: 1px rgba(0, 0, 0, 0.1) solid;
    padding: 15px;
    border-radius: 6px;
  }
</style>
