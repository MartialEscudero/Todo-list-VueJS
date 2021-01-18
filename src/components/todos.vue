<template>
    <v-content class="main">
        <h1>
            Liste de course
        </h1>

        <div>
            <input type="text" class="todos" placeholder="Écire ici" v-model="todo" @keyup.enter="addList">
            <v-btn @click="addList">Ajouter</v-btn>
        </div>

        <div>
            <v-list-item v-for="todo in todos" :key="todo">
                <v-list-item-title>{{ todo }}</v-list-item-title>
                <v-btn @click="deleteList(todo)">
                    <v-icon>mdi-delete</v-icon>
                </v-btn>
            </v-list-item>
        </div>
    </v-content>
</template>

<script>

import store from './store.js'

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
        max-width: 50%;
        margin: auto;
    }
    
</style>