import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        todoShop : [],
        todoSimple : ['24/01 - Partiel de management']
    },

    getters: {
        
    },

    mutations: {

        CREATETODOSHOP(state, todoShop) {

            state;
            axios.post('https://strapi.hortusbox.com/todos/', { 
            
                Type: "market", Task: todoShop, IsDone: false 
            
            }).then(response => {

                var data = response.data;

                console.log(data.Task,data.IsDone,data.id);

            })
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

            if (state.todoShop[index].IsDone === true) {
                axios.put('https://strapi.hortusbox.com/todos/'+id, {IsDone : false});
            } else {
                axios.put('https://strapi.hortusbox.com/todos/'+id, {IsDone : true});
            }

            //axios.put('https://strapi.hortusbox.com/todos/'+id, {IsDone : state.todoShop[index].IsDone}

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