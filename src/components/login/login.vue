<template>
  <div class="login">
    <div class="login-box">
      <img src="../../assets/images/login.jpg">
      <div>
        <h4>welcome</h4>
        <form action="" ref="loginForm">
          <div>
            <input v-model="data.ntaccount" type="text">
            <img src="../../assets/images/icon__0024_account.png">
          </div>
          <div>
            <input v-model="data.password" type="password">
            <img src="../../assets/images/icon__0025_password.png">
          </div>
          <div class="btn" @click="Login">
            <span>登录</span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {
        ntaccount: "",
        password: ""
      }
    };
  },
  methods: {
    Login() {
      let self = this;
      this.$axios.get('api/user')
        .then(response => {
          if (response.data.errorCode == 0) {
            self.name = response.data.users.name;
            self.userType = response.data.users.userType;
            self.ntaccount = response.data.users.id;
            window.sessionStorage.setItem("token", self.name);
            window.sessionStorage.setItem("userType", self.userType);
            window.sessionStorage.setItem("ntaccount", self.ntaccount);
            // 登录成功
            self.$alert('登录成功!', "提示", {
              confirmButtonText: "确定",
              callback: () => {
                self.$router.push("/home");
              }
            });
          }else {
            self.$alert('账号或密码错误，请重试！', "提示", {
              confirmButtonText: "确定"
            });
          }
        })
        .catch(error => {
          throw error;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background: url("../../assets/images/login_bg.jpg") no-repeat 0% 0% / cover;
  position: relative;
  font-size: 0px;
}
.login-box {
  width: 12rem;
  height: 6.3rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  > div {
    display: inline-block;
    width: 5.3rem;
    height: 100%;
    background-color: #ffffff;
    padding: 1.5rem 0.3rem;
    box-sizing: border-box;
    h4 {
      font-size: 0.42rem;
      color: #333333;
      text-align: center;
      margin: 0rem 0rem 0.35rem 0rem;
    }
  }
  img {
    width: 6.7rem;
    vertical-align: bottom;
  }
  form {
    > div {
      position: relative;
      img {
        position: absolute;
        top: 0.13rem;
        left: 0.1rem;
        width: 0.26rem;
        height: 0.26rem;
      }
    }
  }
  input {
    box-sizing: border-box;
    padding: 0.1rem 0.2rem 0.1rem 0.5rem;
    border: 1px solid #c9c9c9;
    border-radius: 0.05rem;
    width: 100%;
    margin-bottom: 0.25rem;
  }
  .btn {
    margin-top: 0.5rem;
    background-color: #5680c3;
    border-radius: 0.05rem;
    border: none;
    padding: 0.1rem 0.2rem;
    letter-spacing: 0.3rem;
    width: 90%;
    text-align: center;
    cursor: pointer;
    span {
      font-size: 0.3rem;
      color: #ffffff;
    }
  }
}
</style>