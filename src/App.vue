<script setup lang="ts">
import {provide, ref} from"vue"
import addItem from "./components/addItem.vue";
import todoList from "./components/todoList.vue";
import editItem from "./components/editItem.vue";

const valueFromChild = ref(JSON.parse(localStorage.getItem('todoLists')) || []);
const editList=ref([])
const showModaldialogue = ref(false);

function handleUpdateValue(newValue) {
  valueFromChild.value.push(newValue);
  localStorage.setItem('todoLists', JSON.stringify(valueFromChild.value))
}

function clearList() {
  localStorage.clear();
  valueFromChild.value = [];
}

function deleteItem(id) {
  const index = valueFromChild.value.findIndex(item => item.id === id);
  if (index !== -1) {
    valueFromChild.value.splice(index, 1);
  }
  localStorage.setItem('todoLists', JSON.stringify(valueFromChild.value))
}

function showModalblock(id) {
  console.log('showModalblock'+id)
  showModaldialogue.value = true;

  editList.value = valueFromChild.value?.filter(obj => {
    return obj.id === id
  });
  console.log(editList.value)
}

function todoUpdate(data) {
  const itemIndex = valueFromChild.value?.findIndex(item => item.id === data.id);
  if (itemIndex !== -1) {
    const updatedItem = { ...valueFromChild.value[itemIndex] };
    updatedItem.itemName = data.itemName;
    updatedItem.priority = data.priority;
    updatedItem.id = data.id;
    valueFromChild.value.splice(itemIndex, 1, updatedItem);
    localStorage.setItem('todoLists', JSON.stringify(valueFromChild.value))
  }
}

function closeModalblock() {
  console.log('closeModalblock')
  showModaldialogue.value = false
}
</script>

<template>
  <main class="m-auto p-5">
    <h1 class="text-3xl font-bold uppercase text-center underline leading-loose">Todo-App</h1>
    <add-item @updateValue="handleUpdateValue"></add-item>
    <todo-list v-bind:todoList="valueFromChild" @clearValue="clearList" @deleteValue="deleteItem"
      @showEditmodal="showModalblock"></todo-list>
    <edit-item v-bind:showModal="showModaldialogue" @closeModal="closeModalblock" v-bind:listItems="editList"
      @updateTodos="todoUpdate"></edit-item>
  </main>
</template>

<style scoped>
main {
  max-width:1024px;
  border:1px solid gray;

}


</style>
