<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-icon large :color="icon.color"> {{ icon.name }} </v-icon>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>
      <v-btn icon v-on:click="toggleDarkMode">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  data: () => ({}),
  beforeCreate() {
    document.title = `E-Portfolio: ${this.$store.state.profile.userData.name}`;
  },
  computed: {
    title() {
      return this.$store.state.navbar.title;
    },
    icon() {
      return this.$store.state.navbar.icon;
    },
  },
  methods: {
    toggleDarkMode: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    },
  },
  mounted() {
    const theme = localStorage.getItem("dark_theme");
    if (theme) {
      if (theme == "true") {
        this.$vuetify.theme.dark = true;
      } else {
        this.$vuetify.theme.dark = false;
      }
    }
  },
});
</script>
