<template>
  <el-row class="header">
      <div class="logo">
        <img src="../../assets/images/allergan_01.jpg" alt="logo">
      </div>
    <div class="admin-opt">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img src="../../assets/images/allergan_04.jpg" alt="admin">
          <span>{{userType}}</span>
          <i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-row>
</template>


<script>
export default {
  data() {
    return {
      userType:sessionStorage.getItem('userType'),
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.header {
  box-shadow: 0rem 0.06rem 0.04rem rgba(77, 77, 77, 0.15);
  height:1.1rem;
  overflow: hidden;
}
.logo {
  width:3.15rem;
  height:100%;
  display: inline-block;
  border-right:1px solid #dedede;
  border-bottom:1px solid #dedede;
  img {
    width: 100%;
  }
}
.admin-opt {
  float: right;
  margin-right:0.3rem;
  height:100%;
  display:flex;
  align-items: center;
  cursor: pointer;
  .el-dropdown >span{
    display:flex;
    align-items: center;
    color:$main-color;
  }
  img{
    width:0.5rem;
    margin-right:0.2rem;
  }
}
</style>
