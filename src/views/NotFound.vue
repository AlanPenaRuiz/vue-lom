<template>
  <div class="notFound">
    <h1>Oops!</h1>
    <h3>The {{ resource }} you're looking for is not here.</h3>
    <router-link :to="{ name: 'home' }"
      ><button class="button-footer">Back to home</button></router-link
    >
  </div>
</template>
<script>
export default {
  props: {
    resource: {
      type: String,
      requires: true,
      default: "page",
    },
  },
};
</script>
