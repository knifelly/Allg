<template>
  <div class="main-contant limit-contant">
    <div class="sub-title">权限设置</div>
    <div class="contant-opt">
      <el-form :inline="true" :rules="rules" :model="formInline" ref="formInline" class="demo-form-inline">
        <el-form-item label="账号" prop="account">
          <el-input v-model.number="formInline.account"></el-input>
        </el-form-item>
        <el-form-item label="部门">
          <el-select v-model="formInline.value" placeholder="请选择">
            <el-option v-for="item in formInline.departments" :key="item.val" :label="item.name" :value="item.val"></el-option>
          </el-select>
        </el-form-item>
        <el-row type="flex" justify="end">
          <el-form-item>
            <el-button type="primary" @data="submitForm('formInline')">查询</el-button>
          </el-form-item>
        </el-row>
      </el-form>
      <div class="data-opt">
        <div class="data">查询到<span>{{page}}</span>条结果</div>
        <ul class="opt">
          <li class="add" @click="getinputdata"><i class="el-icon-plus"></i><span>新增</span></li>
          <li class="edit" @click="edit"><i class="el-icon-edit-outline"></i><span>编辑</span></li>
          <li class="del"><i class="el-icon-delete"></i><span>删除</span></li>
          <li class="reset"><i class="el-icon-refresh"></i><span>密码重置</span></li>
        </ul>
      </div>
      <table class="data-list" border="0" cellpadding="0" cellspacing="0" height="250">
        <tr>
          <th>账号</th>
          <th>姓名</th>
          <th>邮箱</th>
          <th>部门</th>
          <th>角色</th>
        </tr>
        <tr v-for="(item, index) in tableData" :key="index">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.email}}</td>
          <td>{{item.part}}</td>
          <td>{{item.userType}}</td>
        </tr>
      </table>
      <div class="pagination" v-if="page > 5">
        <el-pagination layout="prev, pager, next" :total="page" :page-size='5'>
        </el-pagination>
      </div>
    </div>
    <newEdit ref="notice_add" v-on:sonToF='listen'> </newEdit>
  </div>
</template>

<script>
import newEdit from './newEdit.vue';

export default {
  components:{newEdit},
  data() {
    return {
      page:0,
      formInline: {
        account: "",
        value: "",
        departments: [{ name: "市场部", val: 1 }, { name: "销售部", val: 2 }]
      },
      rules: {
        account: [{ type: "number", message: "账号必须为数字" }]
      },
      tableData: []
    };
  },
  mounted() {
    this.dataList();
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert(formName);
        } else {
          return false;
        }
      });
    },
    async dataList(){
      let res = await  this.$axios.get('api/user/');
      this.tableData = res.data.users;
      this.page = res.data.totalPage;
      console.log(this.tableData);
    },
    getinputdata() {
     this.$refs.notice_add.dialogFormVisible = true;
    },
    edit(){
      this.$store.commit('increment');
    },
    listen(msg){
      console.log(msg);
    }
  }
};
</script>
<style lang="scss" scoped>
.limit-contant {
  .el-form-item {
    width: 29.16667%;
    float: left;
  }
  .el-input__inner {
    width: 3.9rem;
  }
}
</style>
