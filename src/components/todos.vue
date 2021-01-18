<template>

    <h1>
      Liste de course
    </h1>

    <div>
        <input type="text" class="todos" placeholder="Écire ici" v-model="todo">
        <input type="submit" value="Ajouter à la liste" @click="addList">
    </div>

    <div>
        <ul class="list">
            <li class="item" v-for="todo in todos" :key="todo">
                <div>
                    <label>{{ todo }}</label>
                    <input type="submit" value="Suppimer" v-on:click="deleteList(todo)">
                </div>
            </li>
        </ul>
    </div>

</template>

<script>
export default {
    
    data() {

        return {
            todo: '',
            todos : ['Pomme', 'Orange']
        }

    },

    methods: {

        addList() {

            this.todos.push(this.todo)

            this.todo = '';
        },

        deleteList(todo) {

            this.todos.splice(this.todos.indexOf(todo), 1);

        }

    }
}
</script>