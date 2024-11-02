<script setup lang="ts">
import { toRefs, defineEmits } from "vue";
import sortIcon from "../assets/svg/sort.vue";
import clearIcon from "../assets/svg/clear.vue";

const priority_list = ["Critical", "Moderate", "Optional"];

const props = defineProps({
  todoList: Array,
});

const emit = defineEmits(["clearValue", "deleteValue", "showEditmodal"]);
const { todoList } = toRefs(props);

const sortItem = () => {
  return todoList?.value?.sort((a, b) => a.priority - b.priority);
};

const clearItem = () => {
  emit("clearValue");
};

const deleteItem = (id) => {
  emit("deleteValue", id);
};

const showEdit = (id) => {
  emit("showEditmodal", id);
};
</script>

<template>
  <div class="w-3/4 m-auto mt-30">
    <div class="flex border-b-2 border-black-300 p-3">
      <div class="grow">
        <h4>{{ `Todo List - (${todoList?.length})` }}</h4>
      </div>
      <div class="grow-0 text-right">
        <button @click="sortItem">Sort &nbsp;<sortIcon /></button>&nbsp; &nbsp;
        <button @click="clearItem" class="text-center">
          Clear list &nbsp;<clearIcon />
        </button>
      </div>
    </div>

    <ul v-if="todoList?.length > 0">
      <li
        v-for="(todo, index) in todoList"
        :key="todo?.id"
        class="mb-3 mt-3"
        v-bind:class="[
          index % 2 === 1 ? 'even-item' : 'odd-item',
          priority_list[todo?.priority],
        ]"
      >
        <div class="flex flex-wrap">
          <div class="flex-auto text-wrap pr-3">
            {{ todo?.itemName }}
          </div>
          <div class="flex-none text-xs pr-2 text-center">
            {{ priority_list[todo?.priority] }}
          </div>
          <div class="flex-none">
            <button
              @click="showEdit(todo?.id)"
              class="inline-block text-xs p-2 text-custom-red border-2 border-custom-red mr-2"
              data-modal-target="default-modal"
              data-modal-toggle="default-modal"
            >
              Edit</button
            >&nbsp;<button
              @click="deleteItem(todo?.id)"
              class="text-xs bg-custom-red p-2 text-white mr-2"
            >
              Delete
            </button>
          </div>
        </div>
      </li>
    </ul>
    <p v-else>No items found.</p>
  </div>
</template>

<style scoped>
.even-item {
  @apply bg-gray-100 p-3;
}
.odd-item {
  @apply p-3;
}
.Optional {
  @apply border-l-4 border-blue-300;
}

.Moderate {
  @apply border-l-4 border-yellow-400;
}

.Critical {
  @apply border-l-4 border-red-700;
}
</style>
