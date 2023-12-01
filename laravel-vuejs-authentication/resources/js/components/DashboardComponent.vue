<template>
    <h2>Vue - Authentication</h2>
    <hr>

    <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/account">Account</router-link></li>
    </ul>

    <router-view></router-view>
</template>

<style scoped>
    ul {
        display: flex;
        justify-content: space-evenly;
        width: 200px;
        list-style-type: none;
    }

    ul li {
        border-radius: 10px;
        background-color: bisque;
        padding: 8px;
    }
</style>
