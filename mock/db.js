var Mock = require('mockjs');

Mock.Random.extend({
  userType: function(date) {
      var userTypes = ['MR', 'RSM', 'DSM', 'ADMIN']
      return this.pick(userTypes)
  }
})
Mock.Random.extend({
  Part: function(date) {
      var parts = ['市场部', '销售部', '开发部', '人事部','财务部']
      return this.pick(parts)
  }
})

module.exports = () => {
  // 使用 Mock
  var data = Mock.mock({
    'user':{
      errorCode: 0,
      totalPage: 50,
      'users|50': [
        {
          'id|+1': 1000,
          name: '@cname',
          password: '123456',
          userType: '@USERTYPE',
          part:'@PART',
          email:'@email',
        }
      ]
    },
    'course_category|6': [
      {
        "id|+1": 1,
        "pid": -1,
        cName: '@ctitle(4)'
      }
    ]
  });
  // 返回的data会作为json-server的数据
  return data;
};