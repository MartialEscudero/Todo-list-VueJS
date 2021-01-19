<template>
    <v-card class="main text-xs-center justify-center" width="40%" elevation="6">
        <v-btn class="btn">
            <router-link :to="{name: 'todosShop'}" tag="button">Liste de course</router-link>
        </v-btn>
        <v-btn >
            <router-link v-model="getTodos" :to="{name: 'todosSimple'}" tag="button">Pense-bête</router-link>
        </v-btn>
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

</style>