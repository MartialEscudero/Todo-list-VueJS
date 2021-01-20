<template>
    <v-card class="main" width="40%">
        <h1 class="font-weight-black">
            Choisir la liste :
        </h1>
        <div>
            <v-btn>
                <router-link :to="{name: 'todosShop'}" tag="button">Liste de course</router-link>
            </v-btn>
            <v-btn >
                <router-link v-model="getTodos" :to="{name: 'todosSimple'}" tag="button">Pense-bête</router-link>
            </v-btn>
        </div>
    </v-card>
</template>

<script>

import store from '../store.js'

export default {

    store : store,

    methods: {

        getTodos() {
            this.$store.commit('getTodos');
        }
    }
}

</script>

<style>

    h1 {
        text-align: center;
        margin-bottom: 1rem;
    }


</style>