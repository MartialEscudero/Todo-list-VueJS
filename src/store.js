import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

axios.get('https://strapi.hortusbox.com/todos').then(response => {
  console.log(response.data[1].IsDone);
});

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
            
            axios.get('https://strapi.hortusbox.com/todos').then(response => {

                var alldata = response.data;

                alldata.forEach(element => {

                    if (todoShop == element.Task) {

                        var id = element.id;

                        axios.put('https://strapi.hortusbox.com/todos/'+id, {IsDone: true});
                    }

                });
                
            });

        },


        GETTODOS(state) {

            if (state.todoShop.length != 0 ) {
                state.todoShop.clear();
            }

            axios.get('https://strapi.hortusbox.com/todos').then(response => {
                
                var data = response.data;

                data.forEach(element => {

                    if (element.IsDone == false) {
                        state.todoShop.push(element.Task);
                    }

                });

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

        }
    }
})