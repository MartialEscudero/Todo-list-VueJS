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

        CREATETODOSHOP(todoShop) {

            axios.post('https://strapi.hortusbox.com/todos/', {
                Type: "market", Task: todoShop, IsDone: false   //fonctionne mais je n'arrive pas récupérer la valeur que j'ai écrit dans mon champs 'bu beurre' par exemple
            });

        },


        DELETELISTSHOP(state, todoShop) {

            var index = state.todoShop.indexOf(todoShop);
            
            var id = state.todoShop[index].id;

            axios.delete('https://strapi.hortusbox.com/todos/'+id);

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


        // UPDATETODOS() {



        // },


        ISDONE(state, todoShop) {{

            var index = state.todoShop.indexOf(todoShop);
            
            var id = state.todoShop[index].id;

            if (state.todoShop[index].IsDone == true) {
                axios.put('https://strapi.hortusbox.com/todos/'+id, {IsDone : false});
            } else {
                axios.put('https://strapi.hortusbox.com/todos/'+id, {IsDone : true});
            }

        }},


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