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

        ADDLISTSHOP(todoShop) {

            var task = [];
            task.push(todoShop);
            
            console.log(task);

            //axios.post('https://strapi.hortusbox.com/todos/',{Type: "market", Task: "Du beurre", IsDone: false});

        },


        DELETELISTSHOP(state, todoShop) {

            var index = state.todoShop.indexOf(todoShop);
            var id = state.todoShop[index].id;

            axios.delete('https://strapi.hortusbox.com/todos/'+id);
            state.todoShop.splice(index, 1);

        },


        GETTODOS(state) {

            axios.get('https://strapi.hortusbox.com/todos').then(response => {

                var data = response.data;

                data.forEach(element => {
                    
                    state.todoShop.push ({

                        todo: element.Task,
                        IsDone : element.IsDone,
                        id: element.id

                    });
                
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