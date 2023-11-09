<script setup lang="ts">
import { ref, computed, type Component } from 'vue';
import EmployeForm from './components/EmployeForm.vue';
import EmployeTable from './components/EmployeTable.vue';


const editedPersonId = ref(0);

function personEditListener(id: number) {
  editedPersonId.value = id;
  window.location.hash = '/edit';
}

const routes = {
  '/': EmployeTable,
  '/add': EmployeForm,
  '/edit': EmployeForm
}
let activePage: string = '/';
const currentPath = ref(window.location.hash);
window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  const pathIndex = currentPath.value.slice(1) || '/';
  if(pathIndex=='/add') {
    editedPersonId.value = 0;
  }
  return routes[pathIndex as keyof Component] || EmployeTable
})

</script>

<template>
  <main>
    <nav>
      <a href="#/">Employees List</a>
      <a href="#/add">Add Employe</a>
    </nav>
    <component :is="currentView" :personId="editedPersonId" @editPerson="personEditListener" />
  </main>
</template>./Person.Model