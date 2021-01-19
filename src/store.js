import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todoShop : [],
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

        GETTODOS(state) {
            if (state.todoShop.length != 0 ) {
                state.todoShop.clear();
            }

            axios.get('https://strapi.hortusbox.com/todos').then(response => {
                var tab = response.data;
                tab.forEach(element => state.todoShop.push(element.Task));
            });
        },

        ADDLISTSIMPLE(state, todoSimple) {

            if (todoSimple != '') {
                state.todoSimple.push(todoSimple);

            }
        },

        DELETELISTSIMPLE(state, todoSimple) {
            var index = state.todoSimple.indexOf(todoSimple);
            state.todoSimple.splice(index, 1);
        },
    }
})