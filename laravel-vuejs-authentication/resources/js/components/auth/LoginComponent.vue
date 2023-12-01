<template>
  <div>
    <h3>Login</h3>

    <button @click="login">Simulate Login</button>
    <button @click="createTestUser">Create test user</button>
  </div>
</template>

<script setup>
    import axios from 'axios';
    import { useRouter, useRoute } from 'vue-router'

    const router = useRouter();

    async function login () {
        const cookieRes = await axios.get('/sanctum/csrf-cookie');
        
        try {
            const response = await axios.post('/api/login', {email: 'test2@outlook.com', password: 'password'});

            if (response.status == 200) {
                alert('Logged in');
                router.push({ path: '/account' })
            } else {
                alert("Wrong Credentials");
            }
        } catch (error) {
            alert("Wrong Credentials");
        }
    }

    function createTestUser () {
        try {
            const response = axios.get('/api/create/test-user');        
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }
</script>
