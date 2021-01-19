<template>
    <v-app>
        <v-card class="main justify-center" width="40%" elevation="6">
            <h1 class="text-center display-1">
                Pense-bête
            </h1>

            <v-text-field class="add" placeholder="Écrire ici" v-model="todo" @click:append="addList"  @keyup.enter="addList" :append-icon="'mdi-plus'"></v-text-field>

            <section class="list">
                <v-list-item v-for="todo in todos" :key="todo">
                    <v-list-item-content>
                        <v-list-item-title>{{ todo }}</v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-icon>
                        <v-btn  @click="deleteList(todo)">
                            <v-icon @click="deleteList(todo)">mdi-delete</v-icon>
                        </v-btn>
                    </v-list-item-icon>
                </v-list-item>
            </section>
        </v-card>
    </v-app>    
</template>

<script>

import store from '../store.js'

export default {

    store : store,
    
    data() {

        return {
            todo: '',
            todos : this.$store.state.todo
        }

    },

    methods: {

        addList() {
            this.$store.commit('ADDLIST', this.todo);
            this.todo = '';
        },

        deleteList(todo) {
            this.$store.commit('DELETELIST', todo);
        }
    }
}
</script>

<style>

    @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

    * {
        font-family: 'Inter', sans-serif;
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
        width: 50%;
    }
    
</style>