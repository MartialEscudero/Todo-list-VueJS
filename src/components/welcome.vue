<template>
    <v-card class="main text-xs-center justify-center" width="40%" elevation="6">
        <v-btn class="btn">
            <router-link :to="{name: 'todosShop'}" tag="button">Liste de course</router-link>
        </v-btn>
        <v-btn >
            <router-link :to="{name: 'todosSimple'}" tag="button">Liste de course</router-link>
        </v-btn>
    </v-card>
</template>

<script>
    export default {}
</script>

<style>

</style>