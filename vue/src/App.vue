<template>
  <div>
    <h2>Todos</h2>
    <form @submit.prevent="addTask">
      <input style="width: 100%" type="text" v-model="newTask" />
      <button style="display: none" @click="addTask">Add Task</button>
    </form>
    <Todos :todos="todos" />
  </div>
</template>

<script>
import Todos from "./components/Todos.vue";

export default {
  name: "App",
  data() {
    return {
      todos: [],
      newTask: "",
    };
  },
  methods: {
    addTask() {
      if (!this.newTask) return;
      const newTask = {
        id: this.todos.length + 1,
        task: this.newTask,
        completed: false,
      };
      this.todos.push(newTask);
      this.newTask = "";
    },
  },
  components: {
    Todos,
  },
};
</script>

<style scoped></style>
