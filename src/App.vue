<template>
  <router-view />
</template>

<script setup>
  import { useUserStore } from './store/user';
  import { onMounted } from 'vue';
  import axios from 'axios';
const useStore = useUserStore();
  onMounted(() => {
    axios.get(`${import.meta.env.VITE_APP_API}/login/whoami`, {
        headers: { Authorization: localStorage.getItem("token") },
      })
    .then((res) => {
      console.log(`[DEBUG]: User ${res.data.username} is logged in.`);
      const { id, username, displayName, discriminator, avatar, isAdmin, isBanned, isAccountDisabled, email } = res.data.user;
      useStore.setUser({
        userId: id,
        username,
        displayName,
        discriminator,
        avatar,
        isAdmin,
        isBanned,
        isAccountDisabled,
        email,
        isLoggedIn: true
      })
    })
    .catch((err) => {
      console.error(err.response);
    })
  })
</script>
