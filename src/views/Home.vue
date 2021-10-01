<template>
  <profile />
</template>

<script lang="ts">
import Vue from "vue";
import Profile from "../components/Profile.vue";

export default Vue.extend({
  name: "Home",
  components: {
    Profile,
  },
});
</script>
