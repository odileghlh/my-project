<template>
    <div id="todo">
        <ul class="list-group">
            <li class="list-group-item"
                :class="{ 'completed' : todo.completed }"
                v-for="(todo, index) in todos">
                {{ todo.title }}
                <button class="btn btn-warning btn-xs pull-right"
                        @click="deleteTodo(index)">
                    Delete
                </button>
                <button class="btn btn-xs pull-right"
                        :class="[todo.completed ? 'btn-danger' : 'btn-success']"
                        @click="toggleCompletion(todo)"
                        style="margin-right: 10px; width: 70px">
                    {{ todo.completed ? 'Undo' : 'Completed' }}
                </button>
            </li>
        </ul>
        <todo-form :todos="todos"></todo-form>
    </div>
</template>

<script lang="babel">
    import TodoForm from './TodoForm'

    export default{
        name: 'todo',
        data () {
            return {
                todos: [
                    {id: 1, title: 'Learn Vuejs', completed: false}
                ]
            }
        },
        components: {
            TodoForm
        },
        props: ['todos'],
        methods: {
            deleteTodo: function (index) {
                this.todos.splice(index, 1)
            },
            toggleCompletion: function (todo) {
                todo.completed = !todo.completed
            }
        }
    }

</script>

<style>
.completed {
  color: #5cb85c;
  text-decoration: line-through;
}
</style>
