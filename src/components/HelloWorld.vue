<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  import { getUserList } from '../utils/api/session/index'
  import service from "../utils/api/server";
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
		console.log(111);
		console.log(getUserList());
		/*service({
      method: 'get',
      url: this.sessionApi + '/getUserList'
    }).then(res=>{
			console.log(res);
		})*/
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
