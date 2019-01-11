import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

//全局vuex
import rootState from './root'

//局部vuex
import about_store from '@/store/modules/about'
import homestore from '@/store/modules/home'

Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        about_store,
        homestore,
        rootState
    },
    strict: process.env.NODE_ENV !== 'production',
    plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : []
})