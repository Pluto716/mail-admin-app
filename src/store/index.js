import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 用于切换闭合菜单，false为不闭合，true为闭合
    collapsed: false,
  },
  mutations: {
    ChangeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
  },
  actions: {
    ChangeCollapsed({ commit }) {
      commit('ChangeCollapsed');
    },
  },
  modules: {},
});
