<template>
  <div class="main-body">

    <header>
      <el-row :gutter="0" class="header">
        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" class="left">
          <div class="grid-content">
            <i @click="navIsShowFn('ltr')" class="el-icon-s-unfold"></i>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="mid">
          <div class="grid-content">
            <ul class="nav">
              <li><router-link to="/">首页</router-link></li>
              <li>预留</li>
              <li>预留</li>
              <li><router-link to="/comment">评论</router-link></li>
              <li><router-link to="/author">关于</router-link></li>
            </ul>
          </div>
        </el-col>
        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" class="right">
          <i @click="navIsShowFn('rtl')" class="el-icon-s-unfold"></i>
        </el-col>
      </el-row>
    </header>

    <!-- 个人中心 -->
    <el-drawer
      :visible.sync="drawer"
      :direction="direction"
      :withHeader="false"
      :before-close="handleClose"
      class="aaa"
      size="240px"
      custom-class="aaab"
    >
      <div class="user-content-body">

        <div class="avatar">
          <img src="../../assets/logo.png" alt="头像">
        </div>

        <div class="user-name">
          {{ this.getLoginUserModal().username }}
        </div>

        <div class="user-content-nav">
          <div class="nav-list">
            <i class="el-icon-user"></i>个人中心
          </div>
          <div class="nav-list">
            <i class="el-icon-star-off"></i>收藏
          </div>
          <div class="nav-list">
            <i class="el-icon-cold-drink"></i>休息
          </div>
          <div class="nav-list">
            <i class="el-icon-bell"></i>消息中心
          </div>
          <div class="nav-list">
            <i class="el-icon-thumb"></i>注销
          </div>

        </div>

      </div>
    </el-drawer>

    <main>
      <router-view></router-view>
    </main>
    <footer></footer>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
	export default {
		name: "Main",
    data(){
			return{
				navIsShow:false,
				drawer: false,
				direction: 'ltr',
      }
    },
    methods:{
			...mapGetters(['getLoginUserModal']),
			navIsShowFn(type){
				this.direction = type;
				this.drawer = !this.drawer
      },
			handleClose(done){
				console.log(this.getLoginUserModal());
				this.$confirm('确认关闭？')
					.then(_ => {
						done();
					})
					.catch(_ => {});
      }
    }
	}
</script>

<style lang="less" scoped>

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .main-body {
    width: 100%;
    height: 100%;
    position: relative;
    /*padding: 40px 0;*/
    box-sizing: border-box;
    background-color: #fff;

    header, footer {
      position: absolute;
      z-index: 1;
      left: 0;
      width: 100%;
      height: 40px;
    }

    header {
      top: 0;
      background-color: transparent;
      box-sizing: border-box;
      box-shadow: 0 0px 10px 0px rgba(0, 0, 0, 0.1);
      color: #31b0d5;
      a{
        color: #31b0d5;
        text-decoration: none;
      }
      div{
        height: 100%;
        line-height: 40px;
      }

      .mid{
        .nav{
          width: 100%;
          height: 100%;
          li{
            width: 20%;
            height: 100%;
            text-align: center;
            float: left;
          }
        }
      }

    }

    footer {
      bottom: 0;
    }

    nav {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 2;
      position: absolute;
      background-color: rgba(0,0,0,0.2);
      .user-nav-body{
        width: 230px;
        height: 100%;
        position: absolute;
        z-index: 3;
        left: 0;
        top: 0;
        background-color: #ededed;
      }
    }

    main {
      width: 100%;
      height: 100%;
    }
  }

  .user-content-body{
    width: 100%;
    height: 100%;
    position: relative;
    box-sizing: border-box;
    padding: 20px;

    .avatar{
      margin: 20px auto;
      width: 55px;
      height: 55px;
      box-shadow: 0 6px 6px 0px rgba(0, 0, 0, 0.25);
      border-radius: 50%;
      text-align: center;
      line-height: 55px;
      img{
        width: 80%;
        height: 80%;
        border-radius: 50%;
        vertical-align: middle;
      }
    }

    .user-name{
      text-align: center;
      font-size: 14px;
      color: #333;
    }

    .user-content-nav{
      width: 100%;
      margin-top: 30px;
      .nav-list{
        width: 100%;
        height: 50px;
        line-height: 50px;
        box-sizing: border-box;
        padding-left: 50px;
        border-bottom: 1px solid rgba(51,51,51,0.1);
        i{
          margin-right: 15px;
        }
      }
    }

  }

</style>
