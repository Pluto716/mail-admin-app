import Vue from 'vue';
import Vuex from 'vuex';
import {
  getCookie,
  setCookie,
  removeCookie,
} from '@/utils/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 用于切换闭合菜单，false为不闭合，true为闭合
    collapsed: false,
    // 用户的信息
    user: getCookie(),
  },
  mutations: {
    ChangeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    setUserInfo(state, userInfo) {
      state.user = userInfo;
    },
    logout(state) {
      state.user = {
        username: '',
        appkey: '',
        role: '',
        email: '',
      };
    },
  },
  actions: {
    ChangeCollapsed({ commit }) {
      commit('ChangeCollapsed');
    },
    setUserInfo({ commit }, userInfo) {
      commit('setUserInfo', userInfo);
      setCookie(userInfo);
    },
    logout({ commit }) {
      commit('logout');
      removeCookie();
    },
  },
  modules: {},
});
