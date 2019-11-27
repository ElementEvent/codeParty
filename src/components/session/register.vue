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
        <el-button type="button" @click="addUserInfoFn">立即注册</el-button>
        <el-button type="button" @click="goLogin">去登陆</el-button>
      </el-form-item>

    </el-form>

  </div>
</template>

<script>
	import { addUserInfo } from "../../utils/api/session";
	export default {
		name: "register",
		data() {
			return {
				loginData: {
					username: "",
					password: ""
				}
			}
		},
		methods: {
			addUserInfoFn(){

				if( this.loginData.username === "" ){
					return this.$message.error('用户名不能为空！');
				}else if( this.loginData.password === "" ){
					return this.$message.error('密码不能为空！');
				}

				addUserInfo(this.loginData).then(res=>{
					console.log(res);
					let success = res.data;
					if( success.err_code !== 0 ){
						this.$message.warning(success.message, "错误代码：" + success.err_code);
					}else {
						this.$message.success(success.message);
					}
				}).catch(err=>{
					console.log(err);
				})

			},
			goLogin(){
				this.$router.push({path: '/login'})
      }
		}
	}
</script>

<style scoped>
  .session-body {
    width: 500px;
    margin: auto;
    text-align: center;
    box-shadow: beige;
    height: 450px;
    border: 1px rgba(0,0,0,0.1) solid;
    padding: 15px;
    border-radius: 6px;
  }
</style>
