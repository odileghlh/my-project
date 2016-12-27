<template>
    <div id="app">
        <nav-bar class="bar"></nav-bar>
        <div class="jumbotron">
            <h1>Hello, world!</h1>
            <p>...</p>
            <p><a class="btn btn-danger btn-lg" href="#" role="button">Learn more</a></p>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <div class="panel panel-default">
                        <div class="panel-heading">Wecome to Vue</div>
                        <div class="panel-body">
                            <h1> My todos</h1>
                            <!--<todo></todo>-->
                            <router-view :todo="todo"></router-view>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="babel">
    import NavBar from './components/NavBar'
    import Todo from './components/Todo'

    export default {
        name: 'app',
        data () {
            return {
                msg: 'hello world'
            }
        },
        components: {
            NavBar,
            Todo
        }
//        computed: {
//            todoCount: function () {
//                return this.todos.length
//            }
//        }
    }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.bar {
  margin-top: 10px;
  margin: 20px;
}

</style>

