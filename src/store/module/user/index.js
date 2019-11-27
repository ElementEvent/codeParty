import actions from "./actions";
import mutations from "./mutations";
import * as getters from './getter'
const userInfo = {
  getters,
  state:{
    loginUserModal: {}
  },
  actions,
  mutations
};

export default userInfo;
