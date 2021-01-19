import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todoShop : ['Pomme', 'Orange'],
        todoSimple : ['24/01 - Partiel de management']
    },

    mutations: {

        ADDLISTSHOP(state, todoShop) {

            if (todoShop != '') {
                state.todoShop.push(todoShop);

            }
        },

        DELETELISTSHOP(state, todoShop) {
            var index = state.todoShop.indexOf(todoShop);
            state.todoShop.splice(index, 1);
        },

        ADDLISTSIMPLE(state, todoSimple) {

            if (todoSimple != '') {
                state.todoSimple.push(todoSimple);

            }
        },

        DELETELISTSIMPLE(state, todoSimple) {
            var index = state.todoSimple.indexOf(todoSimple);
            state.todoSimple.splice(index, 1);
        }
    },
})