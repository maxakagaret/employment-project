<script setup lang="ts">
import { ref } from 'vue';
import { persons } from '../Person.Controller';


const props = defineProps(['personId']);

let person = persons.getEmptyPerson();
let submitFlag = false;
if(props.personId > 0 && persons.findId(props.personId)) {
    person = persons.getPersonById(props.personId);
}
else {
    if(window.location.hash != '/add') {
        window.location.hash = '/add';
    }
}
const inputId = ref(props.personId);
const inputName = ref(person.name);
const inputSurname = ref(person.surname);
const inputAge = ref(person.age);
const inputExperience = ref(person.experience);
const inputAddress = ref(person.address);
const errorHandl = ref('');
const successHandl = ref('');

function onSubmit() {
    submitFlag = true;
    errorHandl.value = '';
    successHandl.value = '';
    if(inputName.value!='' && inputSurname.value!='' && inputAge.value>=18 && inputAge.value<=80 && inputExperience.value>0 && (inputAge.value - inputExperience.value>18) && inputAddress.value!='') {
        if(inputId.value > 0){
            persons.editPerson(inputId.value,inputName.value,inputSurname.value,inputAge.value,inputExperience.value,inputAddress.value);            
        }
        else {
            persons.addPerson(inputName.value,inputSurname.value,inputAge.value,inputExperience.value,inputAddress.value);
        }
        if(props.personId > 0) {
            successHandl.value = 'Employe edited. Return to main page';
        }
        else {
            successHandl.value = 'Employe added. Return to main page';
        }
        setTimeout(()=> {
            window.location.hash = '/';
            submitFlag = false;
        }, 2000);
    }
    else {
        submitFlag = false;
        errorHandl.value = 'Fill all fields correct. Age must be not less than 18, Experience must be more than 1 and Age - Exp must be more than 18';
    }
}
</script>

<template>
    <form name="employeForm" @submit.prevent="onSubmit">
        <p v-if="errorHandl!=''" style="color:#f00">{{ errorHandl }}</p>
        <p v-if="successHandl!=''" style="color:#0f0">{{ successHandl }}</p>
        <input type="hidden" v-model="inputId" />
        <div class="input-box">
            <label>Name:</label>
            <input v-model="inputName" />
        </div>
        <div class="input-box">
            <label>Surname:</label>
            <input v-model="inputSurname" />
        </div>
        <div class="input-box">
            <label>Experience:</label>
            <input v-model="inputExperience" />
        </div>
        <div class="input-box">
            <label>Age:</label>
            <input v-model="inputAge"/>
        </div>
        <div class="input-box">
            <label>Address:</label>
            <input v-model="inputAddress"/>
        </div>
        <div class="input-box">
            <button :disabled="submitFlag" type="submit">Save</button>
        </div>
    </form>
</template>../Person.Model