<template>
  <div class="allergan-dialog">
    <el-dialog title="新增" :visible.sync="dialogFormVisible" width="6.8rem">
    <el-form :model="form" :rules="rules" ref="newEditForm">
      <el-form-item label="用户名称" :label-width="formLabelWidth" prop="name">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="账号" :label-width="formLabelWidth">
        <el-input v-model="form.account" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="部门" :label-width="formLabelWidth">
        <el-select v-model="form.part" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
       <el-form-item label="邮箱" :label-width="formLabelWidth">
        <el-input v-model="form.email" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="角色" :label-width="formLabelWidth">
        <el-select v-model="form.rule" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="resetForm('newEditForm')" class="backup">返回</el-button>
      <el-button type="primary" @click="submitForm('newEditForm')">提交</el-button>
    </div>
  </el-dialog>
  </div>
</template>

<script>
export default {
  data(){
    return{
      dialogFormVisible: false,
      msg: 'hello world',
        form: {
          name: '',
          account: '',
          part: [],
          email: '',
          rule: ''
        },
        formLabelWidth: '1.5rem',
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
    }
  },
  methods:{
     submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.dialogFormVisible = false;
            this.$emit('sonToF', this.form);
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
        this.dialogFormVisible = false;
      }
  }
}
</script>
<style lang="scss">
.allergan-dialog{
  .el-form-item__label{
    text-align:left;
  }
  .backup{
    float:left;
    border-color:#5680c3;
    color:#5680c3;
  }
  .el-dialog{
    border-radius: 0.2rem;
  }
  .el-dialog__header{
    text-align:center;
    font-size:0px;
    border-bottom:2px solid #d0d0d0;
  }
  .dialog-footer{
    padding: 0rem 0.5rem;
    font-size: 0px;
  }
  .el-form-item{
    margin-bottom:0px;
  }
  .el-form-item__error{
    position: static;
  }
  .el-select{
    width:100%;
  }
}
</style>
