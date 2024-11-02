<script setup>
import { toRefs, defineEmits, watch, ref, toRaw } from "vue";

import clearIcon from "../assets/svg/close.vue";

const props = defineProps({
  showModal: Boolean,
  listItems: Object,
});
const emit = defineEmits(["closeModal", "updateTodos"]);
const { showModal, listItems } = toRefs(props);
const tempData = ref({
  itemName: listItems.value?.itemName || "",
  id: listItems.value?.id || null,
  priority: listItems.value?.priority || "",
});
watch(listItems, () => {
  tempData.value = {
    itemName: toRaw(listItems.value[0]?.itemName) || "",
    id: toRaw(listItems.value[0]?.id) || null,
    priority: toRaw(listItems.value[0]?.priority) || null,
  };
});

const closeItem = () => {
  emit("closeModal");
};

const updateTodo = (data) => {
  emit("updateTodos", {
    itemName: data.itemName,
    id: data.id,
    priority: data.priority,
  });
};
</script>

<template>
  <div
    class="modal bg-gray-100 border-gray-600 pb-20"
    :class="showModal ? 'block' : 'hidden'"
  >
    <div class="relative text-right">
      <button
        id="closeButton"
        type="button"
        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        @click="closeItem"
      >
        <clearIcon />
      </button>
    </div>
    <div class="mt-5 ml-8">
      <form
        @submit.prevent="updateTodo(tempData)"
        v-if="listItems !== undefined && Object.keys(listItems).length > 0"
      >
        <input
          class="form-input px-2 py-2"
          type="text"
          v-model="tempData.itemName"
        />
        <select v-model="tempData.priority">
          <option value="">Please select one</option>
          <option value="2">Critical</option>
          <option value="1">Moderate</option>
          <option value="0">Optional</option>
        </select>
        <button class="btn btn-blue">Update</button>
      </form>
    </div>
  </div>
</template>
<style scoped>
.modal {
  border-width: 1px;
  height: 150px;
  width: 550px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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