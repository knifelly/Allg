import Vue from 'vue';
import App from './App.vue';
import store from './store.js';
import './plugins/element.js';
import "./assets/js/responsive.js";
import "./assets/scss/main.scss";
import "./common/font/font.css";

//引入全局变量
// import {http} from "./assets/js/url.js";
// Vue.prototype.$url = http;

// 引入第三方插件
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Axios from 'axios';
Vue.prototype.$axios = Axios;

Vue.config.productionTip = false;

// 注册自己的页面
import Login from './components/login/login.vue';
import Header from './components/home/Header.vue';
import Sidebar from './components/home/Sidebar.vue';
import Home from './components/home/Home.vue';
import Limit from './components/pages/limit/limit.vue';
import contentCheck from './components/pages/contentCheck.vue';
import contentEdit from './components/pages/contentEdit.vue';
import messageSend from './components/pages/messageSend.vue';

// 注册全局组件
Vue.component('Header', Header);
Vue.component('Sidebar', Sidebar);

// 路由
const router = new VueRouter({
  routes:[
    {path:'/', redirect:{name: 'login'}},
    {name:'login', path:'/login',component:Login},
    {name:'home', path:'/home', component:Home, children:[
      {name:'limit', path:'/',component:Limit, 
        meta:{
          title: '权限设置', 
          icon: 'el-icon-setting',
          roles: ['admin']
        }
      },
      {name:'contentCheck', path:'/contentCheck',component:contentCheck, 
        meta:{
          title: '内容审核',
          icon: 'el-icon-tickets',
          roles: ['admin']
        }
      },
      {name:'contentEdit', path:'/contentEdit',component:contentEdit,
       meta:{
         title: '内容编辑',
         icon: 'el-icon-edit-outline',
         roles: ['admin', 'editor']
        }
      },
      {name:'messageSend', path:'/messageSend',component:messageSend, 
        meta:{title: '消息发送',
        icon: 'el-icon-message',
        roles: ['admin']
      }
    },
    ]},
  ]
  });

//路由导航
//   router.beforeEach((to, from, next) => {
//     if (to.path === '/login') {
//       next({ path: '/' })
//     } else {
//       console.log(to, from);
//     }
// });

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
