<template>
  <v-container>
    <v-card class="text-center">
      <v-col cols="12">
        <v-avatar color="deep-purple" size="200">
          <v-img
            :src="profile.picture"
            :alt="profile.name"
            class="my-3"
            contain
            height="200"
          />
        </v-avatar>
      </v-col>
      <v-col cols="12">
        <h4>{{ profile.name }}</h4>
        <v-card-subtitle>{{ profile.position }}</v-card-subtitle>
      </v-col>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld",
  data: () => ({}),
  computed: {
    profile() {
      return this.$store.state.profile.userData;
    },
  },
});
</script>
