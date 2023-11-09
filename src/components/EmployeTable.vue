<script setup lang="ts">
import { persons } from '../Person.Controller';
</script>
<template>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name/Surname</th>
                <th>Age</th>
                <th>Experience</th>
                <th>Address</th>
                <th>Edit</th>
            </tr>
        </thead>
        <tbody v-if="persons.items.length">
            <tr v-for="(person,index) in persons.items" >
                <td>{{ person.id }}</td>
                <td>{{ person.name }} {{ person.surname }}</td>
                <td>{{ person.age }}</td>
                <td>{{ person.experience }}</td>
                <td>{{ person.address }}</td>
                <td><button type="button" :value="person.id" @click="$emit('editPerson',person.id)">Edit</button></td>
            </tr>
        </tbody>
        <tbody v-else>
            <tr><td colspan="6">No employes</td></tr> 
        </tbody>
    </table>
</template>