<template>
  <div class="home">
    <Header />
    <Sidebar />
    <div class="main-contant-box">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {

    }
  }
}
</script>

<style lang="scss">
.home{
  height:100%;
}
  .main-contant-box{
    overflow:hidden;
    height:calc(100% - 1.1rem);
    padding:0.3rem 0.2rem;
    box-sizing: border-box;
    background-color:#f2f2f2;
  }
</style>
