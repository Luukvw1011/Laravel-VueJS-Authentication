<template>
    <h4>Account</h4>

    <!-- If not logged in. -->
    <div v-if="!loggedIn">
        <p>Not logged in!</p>

        <router-link to="/login">log in</router-link>
    </div>

    <!-- Logged in -->
    <div v-if="loggedIn">
        <p>Logged in!</p>

        <ul>
            <li>Name: {{ userData.name }}</li>
        </ul>

        <button @click="logout">Log out</button>
    </div>
</template>

<script setup>
    import { reactive, ref, watchEffect } from 'vue';
    import axios  from 'axios';
    import { useRouter, useRoute } from 'vue-router'

    const router = useRouter();

    const loggedIn = ref(false);
    var userData = reactive({});

    function logout() {
        axios.get('/api/user/logout')
            .then(res => {
                router.push({ path: '/' });
            })
    }
    
    watchEffect(() => {
        axios.get('/api/user')
            .then(res => {
                if (res.status == 200) {
                    loggedIn.value = true;
                    userData = res.data;
                }
            });
    });
</script>