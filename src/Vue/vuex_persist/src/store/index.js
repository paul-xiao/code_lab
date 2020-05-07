import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    status: false,
    file: {}
  },
  mutations: {
    UPDATE_STATUS(state, status) {
      state.status =status
    },
    UPDATE_FILE(state, file) {
      state.file =file
    }
  },
  getters: {
    status: state => state.status,
    file: state => state.file
  }
})