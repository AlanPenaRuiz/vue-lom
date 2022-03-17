<template>
  <div class="container-main">
    <div class="container-game container-home">
      <h1>Last chance for humanity</h1>
      <p>
        Many years ago, the world became dominated by machines after the most
        ferocious war humanity had ever seen. Right now, you are one of the few
        humans who stays alive, and the leader of the machines (a.k.a. LOM)
        brings you the opportunity to travel back in time to the moment when
        everything changed. It is up to you to please LOM to earn another chance
        for humanity. LOM only ask you to do one thing: Build a program that
        tests the human's value.
      </p>
      <p>
        <b>You need to get at least 7 answers right </b>
      </p>
      <router-link to="/Game"
        ><button class="btn btn-home">START</button></router-link
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeView",
};
</script>
