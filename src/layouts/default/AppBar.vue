<template>
  <v-app-bar >
    <v-app-bar-title>
      <v-img src="https://cdn.asthriona.com/i/2023/04/asthriona%20jp%20dark" width="200"></v-img>
    </v-app-bar-title>
      <v-btn to="/">Home</v-btn>
      <v-btn to="/blog">Blog</v-btn>
      <v-btn to="/about">About</v-btn>
    <v-spacer></v-spacer>
    <div class="user" v-if="userStore.isLoggedIn == true">
      
      <v-btn to="/profile" class="mr-4">
        <v-avatar size="32" class="mr-2"><v-img :src="userStore.avatar"></v-img></v-avatar>  
        {{ userStore.displayName }}
        <v-icon v-if="userStore.selectedBadge ==! null">{{ userStore.selectedBadge }}</v-icon>
      </v-btn>
    </div>
    <div class="login" v-else>
      <v-btn to="/login">Login</v-btn>
    <v-btn to="/register">Register</v-btn>
    </div>

  </v-app-bar>
</template>

<script setup>
    import { useUserStore } from '@/store/user';
  const userStore = useUserStore()
</script>
