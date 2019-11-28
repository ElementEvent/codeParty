import service from "../server";
let sessionApi;
if( service.isTest ){
  sessionApi = '/sessionApi'
}else {
  sessionApi = service.apiUrl
}

// 获取评论列表
export const getCommentsList = function () {
  return service({
    method: 'get',
    url: `${sessionApi}/getCommentsList`
  })
};

// 获取评论列表
export const saveCommentInfo = function (data) {
  return service({
    method: 'post',
    data: data,
    url: `${sessionApi}/saveCommentInfo`
  })
};
