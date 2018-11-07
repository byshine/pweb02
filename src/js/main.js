import Vue from 'vue/dist/vue';
import Vuex from 'vuex';
import App from '../components/App.vue';
import VueTouch from 'vue-touch';

Vue.use(Vuex);
Vue.use(VueTouch);

Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    isSidebarOpen: false,
    currentScroll: 1,
    scrollComponents: ['Main', 'SectionAMN', 'Contact']
  },

  mutations: {
    toggleSideBar(state) {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    moveDown(state) {
      if ( state.currentScroll < store.state.scrollComponents.length) {
        state.currentScroll += 1;
      }
    },
    moveUp(state) {
      if ( state.currentScroll > 1) {
        state.currentScroll -= 1;
      }
    },
    moveTo(state, payload) {
      if ( (payload.currentScroll >= 1) && (payload.currentScroll <= store.state.scrollComponents.length)) {
        state.currentScroll = payload.currentScroll;
      }
    }
  }
}); 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
});
