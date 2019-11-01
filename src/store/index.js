import Vue from 'vue'
import Vuex from 'vuex'
import {modelA} from './modules/HomeModules'

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    a: modelA
  }
})
