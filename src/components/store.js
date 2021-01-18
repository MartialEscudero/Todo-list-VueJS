import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todo : ['Pomme', 'Orange']
    },

    mutations: {

        ADDLIST(state, todo) {

            if (todo != '') {
                state.todo.push(todo);

            }
        },

        DELETELIST(state, todo) {
            var index = state.todo.indexOf(todo);
            state.todo.splice(index, 1);
        }
    },

    actions: {
        
    }
})