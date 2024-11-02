<script setup lang="ts">
import { ref, defineEmits } from "vue";

const todo = ref("");
const selected = ref(null);
const priorityList = ref(["Critical", "Moderate", "Optional"]);
const emit = defineEmits(["updateValue"]);

const randomId = function (length = 6) {
  return Math.random()
    .toString(36)
    .substring(2, length + 2);
};

const addTodo = (item) => {
  emit("updateValue", {
    itemName: item,
    id: randomId(),
    priority: selected.value,
  });
};
</script>

<template>
  <div class="add-item text-center">
    <form @submit.prevent="addTodo(todo)" class="action-form">
      <input
        id="add"
        v-model="todo"
        class="form-input px-2 py-2"
        type="text"
        placeholder="Add item"
      />
      <select v-model="selected">
        <option value="none" selected disabled hidden>Select Priority</option>
        <option v-for="(listValue, index) in priorityList" :value="index">
          {{ listValue }}
        </option>
      </select>
      <button class="btn btn-blue">Add Item</button>
    </form>
  </div>
</template>

<style scoped>
.add-item {
  padding: 10px;
}
.btn {
  @apply font-bold py-2 px-4;
}

.btn-blue {
  @apply bg-red-800 text-white;
}

.btn-blue:hover {
  @apply bg-red-800;
}
</style>
