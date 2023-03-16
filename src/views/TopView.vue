<script setup lang="ts" >
import { ref } from 'vue';
const users = ref([]);
const id = ref('');
const last_name = ref('');
const first_name = ref('');
const last_name_kana = ref('');
const first_name_kana = ref('');
const tel = ref('');
const email = ref('');
const postcode = ref('');
const address = ref('');


const getUsers = async () => {
  const response = await fetch('http://localhost:3000/users');
  const data = await response.json();
  users.value = data;
};

getUsers();

const addUser = async () => {
  const response = await fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: id.value, last_name:last_name.value, first_name:first_name.value, last_name_kana:last_name_kana.value,
        first_name_kana:first_name_kana.value, tel:tel.value, email:email.value, postcode:postcode.value, address:address.value}),
  });
  const data = await response.json();
  users.value.push(data);
  id.value = '';
  last_name.value = '';
  first_name.value = '';
  last_name_kana.value = '';
  first_name_kana.value = '';
  tel.value = '';
  email.value = '';
  postcode.value = '';
  address.value = '';
};

</script>

<template>
    {{ users }}
  <form @submit.prevent="addUser">
    <div>
      <p>id:<input v-model="id" /></p>
      <p>name:<input v-model="last_name" /> <input v-model="first_name" /></p>
      <p>ふりがな：<input v-model="last_name_kana" /> <input v-model="first_name_kana" /></p>
      <p>tel:<input v-model="tel" /></p>
      <p>email:<input v-model="email" /></p>
      <p>postcode:<input v-model="postcode" /></p>
      <p>address:<input v-model="address" /></p>
    </div>
    <div>
      <button type="submit">userを登録</button>
    </div>
  </form> 
</template>
