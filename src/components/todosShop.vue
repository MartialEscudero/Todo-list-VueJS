<template>
    <v-app>
        <v-card class="main justify-center" width="40%" elevation="6">
            <h1 class="text-center display-1">
                Liste de course
            </h1>

            <v-text-field class="add" placeholder="Écrire ici" v-model="todo" @click:append="createList"  @keyup.enter="createList" :append-icon="'mdi-plus'"></v-text-field>

            <section class="list">
                <v-list-item v-for="todo in todos" :key="todo.name">
                    <v-list-item-content>
                        <v-btn @click=" updateList(todo)">
                            <v-list-item-title :class="{IsDone: todo.IsDone}">{{ todo.todo }}</v-list-item-title>
                        </v-btn>
                    </v-list-item-content>
                    <v-list-item-icon>
                        <v-btn  @click="deleteList(todo)">
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>
                    </v-list-item-icon>
                </v-list-item>
            </section>
        </v-card>
    </v-app>    
</template>

<script>

import store from '../store.js'
import { mapGetters } from 'vuex'

export default {

    store : store,
    
    data() {

        return {
            todo: '',
            todos : this.$store.state.todoShop
        }

    },

    mounted() {

        this.$store.commit('GETTODOS');
        
    },

    methods: {

        createList() {
            this.$store.commit('CREATETODOSHOP', this.todo);
            this.todo = '';
        },

        deleteList(todo) {
            this.$store.commit('DELETELISTSHOP', todo);  
        },

        updateList(todo) {
            this.$store.commit('UPDATELISTSHOP', todo);  
        },
    },

    computed: {

        ...mapGetters(
            ['Update']
        )

    }
}

</script>

<style>

    @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

    * {
        font-family: 'Inter', sans-serif;
    }

    .IsDone {
        text-decoration: line-through;
    }

    .main {
        padding: 1rem;
        margin: auto;
    }

    .add {
        margin: auto;
        width: 80%;
    }

    .list {
        margin: auto;
        width: 60%;
    }
    
</style>