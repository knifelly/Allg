<template>
  <el-row class="tac sidebar">
      <el-menu default-active="1" class="el-menu-vertical-demo">
        <router-link :to="{name:'limit'}">
          <el-menu-item index="1">
              <i class="el-icon-setting"></i>
              <span slot="title">权限设置</span>
          </el-menu-item>
        </router-link>
        <router-link :to="{name:'contentCheck'}">
        <el-menu-item index="2">
          <i class="el-icon-tickets"></i>
          <span slot="title">内容审核</span>
        </el-menu-item>
        </router-link>
        <router-link :to="{name:'contentEdit'}">
        <el-menu-item index="3">
          <i class="el-icon-edit-outline"></i>
          <span slot="title">内容编辑</span>
        </el-menu-item>
        </router-link>
        <router-link :to="{name:'messageSend'}">
        <el-menu-item index="4">
          <i class="el-icon-message"></i>
          <span slot="title">消息发送</span>
        </el-menu-item>
        </router-link>
      </el-menu>
  </el-row>

</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods: {
  }
};
</script>
<style lang="scss" scoped>
.sidebar{
  width:3.15rem;
  float:left;
  height:calc(100% - 1.1rem);
  ul{
     background-color:$main-color;
     height:100%;
     padding-top:0.26rem;
     box-sizing: border-box;
  }
  overflow: auto;
  .el-menu-item{
    color:#ffffff;
    margin:0.1rem 0rem;
    height:0.78rem;
    line-height:0.78rem;
    &:hover{
      background-color:lighten($main-color,9%);
    }
    &.is-active{
    background-color:lighten($main-color,9%);
  }
  }
}
</style>
