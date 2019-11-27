<template>
  <div class="main-body">
    <header></header>
    <nav></nav>
    <main></main>
    <footer></footer>
  </div>
</template>

<script>
	export default {
		name: "Main"
	}
</script>

<style lang="less" scoped>
  .main-body{
    width: 100%;
    height: 100%;
    position: relative;
    padding: 30px 0;
    background-color:rgba(51,51,51,0.4);

    header,footer{
      position: absolute;
      z-index: 1;
      left: 0;
      width: 100%;
      height: 30px;
    }

    header{
      top: 0;
    }
    footer{
      bottom: 0;
    }
    nav{
      width: 200px;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 2;
      position: absolute;
    }
    main{
      width: 100%;
      height: 100%;
    }
  }
</style>
