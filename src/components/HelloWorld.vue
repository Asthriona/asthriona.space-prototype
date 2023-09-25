<template>
  <div class="hero">
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-img height="200" src="https://cdn.asthriona.com/i/2023/04/asthriona%20jp%20dark"/>
      <div class="py-14" />
      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <h1 class="text-h2 randomText" v-html="randLine" v-if="randLine.startsWith('<a target=')"></h1>
            <h1 class="text-h2 randomText" v-else>{{ randLine }}</h1>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</div>
</template>

<script setup>
  const lines = [
    "<a target='_blank' href='https://www.youtube.com/watch?v=lUEFZ7IQTqs'>You're not special</a>",
    "/*This line is disabled*/",
        "Hello from Speedtest.net!",
        `Welcome to 2020 Season ${new Date().getFullYear() + 1 - 2020}!`,
        `You can now play ${new Date().getFullYear() - 1} as luigi`,
        `Click here to cancel your subscription to ${new Date().getFullYear()}`,
        "Every brilliant day should be lived for those who passed away."
  ];
  const randLine = lines[Math.floor(Math.random() * lines.length)];
</script>

<style scoped>
.hero {
  background-image: url(https://cdn.asthriona.com/i/2023/07/vtpl%20header.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  width: 100%;
  color: aliceblue;
}
.randomText {
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 3px;
  border-radius: 5px;
}
</style>