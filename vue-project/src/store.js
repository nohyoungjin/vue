import { 
    createStore 
} from 'vuex'

import createPersistedState from "vuex-persistedstate";

const store = createStore({
    plugins: [
        createPersistedState() // 새로 고침 해도 값을 유지
    ],
    state:{
        test: ''
    },
    mutations: {
        SET_TEST(state, value) {
            state.test = value
        }
    },
    actions: {},
    getters: {}
})

export default store