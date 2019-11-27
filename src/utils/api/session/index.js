import service from "../server";
let sessionApi;
if( service.isTest ){
  sessionApi = '/sessionApi'
}else {
  sessionApi = service.apiUrl
}

// 获取用户列表
export const getUserList = function () {
  return service({
    method: 'get',
    url: `${sessionApi}/getUserList`
  })
};

// 新增用户
export const addUserInfo = function (data) {
  return service({
    method: 'post',
    data: data,
    url: `${sessionApi}/addUserInfo`
  })
};

// 用户登陆
export const login = function (data) {
  return service({
    method: 'post',
    data: data,
    url: `${sessionApi}/login`
  })
};

