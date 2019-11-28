<template>
  <div class="content-body">
    <el-row :gutter="0" type="flex" justify="center">
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">

        <!--发表评论-->
        <div class="grid-content">
          <el-form ref="form" label-width="80px">

            <el-form-item label="评论人">
              <el-input v-model="addComment.userName" disabled="disabled"></el-input>
            </el-form-item>

            <el-form-item label="评论类容">
              <el-input rows="15" v-model="addComment.comment"></el-input>
            </el-form-item>

            <el-row>
              <el-button type="success" @click="saveComment">发表评论</el-button>
            </el-row>

          </el-form>
        </div>

        <!--评论列表-->
        <div class="grid-content">
          <div class="comment-list" v-for="commentItem in commentList">
            <div class="comment-userName">
              <img
                :src=" commentItem.avatar !== '' ? commentItem.avatar : imgSrc"
                alt="">
              <span>{{ commentItem.userName }}</span>
            </div>
            <div class="comment">
              {{ commentItem.comment }}
            </div>
          </div>
        </div>

      </el-col>
    </el-row>
  </div>
</template>

<script>
	import {getCommentsList, saveCommentInfo} from "../../utils/api/comment";
	import {mapGetters} from 'vuex'

	export default {
		name: "Comment",
		data() {
			return {
				addComment: {
					userId: "",
					userName: "",
					comment: ""
				},
				commentList: [],
        imgSrc: require('../../assets/logo.png')
			}
		},
		created() {
			this.getCommentsListInfo();
		},
		mounted() {
			this.addComment.userId = this.getLoginUserModal().id;
			this.addComment.userName = this.getLoginUserModal().username;
		},
		methods: {
			...mapGetters([
				'getLoginUserModal'
			]),

			// 新增评论
			saveComment() {
				console.log(this.addComment);
				saveCommentInfo(this.addComment).then(res => {
					console.log(res);
					if( res.data.success ){
						alert(res.data.message);
						this.addComment.comment = "";
						this.getCommentsListInfo();
          }
				}).catch(err => {
					console.log(err);
				})
			},

			// 获取评论列表
			getCommentsListInfo() {
				getCommentsList().then(res => {
					console.log(res.data);
					this.commentList = res.data.data;
				}).catch(err => {
					console.log(err);
				})
			}
		}
	}
</script>

<style scoped>

</style>
