import Vuex from 'vuex'
import Vue from 'vue'
import createPersistentState from 'vuex-persistedstate'

import auth from '../modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:
    {
        auth
    },
    plugins: [
        createPersistentState
    ]
})
