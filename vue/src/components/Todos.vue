<template>
  <ul v-if="hasTasks">
    <li @click="toggleComplete(i)" v-for="(todo, i) in todos" :key="i">
      <span :class="[todo.completed && 'complete', 'todo-text']">
        {{ todo.task }}
      </span>
      <button @click="deleteTask(i)">❌</button>
    </li>
  </ul>
  <h4 v-else>Please add a task</h4>
</template>

<script>
export default {
  name: "Todos",
  props: {
    todos: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    deleteTask(i) {
      this.todos.splice(i, 1);
    },
    toggleComplete(i) {
      if (!this.todos?.length) return;
      this.todos[i].completed = !this.todos[i]?.completed;
    },
  },
  computed: {
    hasTasks() {
      return this.todos.length > 0;
    },
  },
};
</script>

<style scoped>
li {
  cursor: pointer;
}
.todo-text {
  margin: 0 2rem 0 0;
}
.complete {
  text-decoration: line-through;
}
</style>
