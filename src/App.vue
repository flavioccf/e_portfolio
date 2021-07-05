<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon
        class="d-md-none"
        @click="drawer = true"
      ></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-toolbar-title>{{ title }}</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>
      <div class="d-none d-md-flex">
        <v-btn plain to="/"> About Me </v-btn>
        <v-divider vertical></v-divider>
        <v-btn plain to="/projects"> Projects </v-btn>
        <v-divider vertical></v-divider>
      </div>
      <v-btn icon v-on:click="toggleDarkMode">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>E-Portfolio</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-account-circle-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About Me</v-list-item-title>
          </v-list-item>

          <v-list-item to="/projects">
            <v-list-item-icon>
              <v-icon>mdi-file-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Projects</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  data: () => ({
    drawer: false,
  }),
  beforeCreate() {
    document.title = `E-Portfolio: ${this.$store.state.profile.userData.name}`;
  },
  computed: {
    currentPath() {
      console.log(this.$router.currentRoute.path);
      return this.$router.currentRoute.path;
    },
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
<style lang="scss">
#app {
  background: rgb(40, 15, 61);
  background: linear-gradient(
    0deg,
    var(--v-gradient2-base) 0%,
    var(--v-gradient1-base) 100%
  );
}
.v-card {
  padding: 1.3rem 0.8rem;
  margin-top: 1.2rem;
  margin-bottom: 1.5rem;
}
.subtitle {
  margin: 0.8rem 0;
  color: var(--v-primary_dark-base);
}
.position {
  margin: 1rem 0;
  color: var(--v-primary-base);
}
a {
  text-decoration: none;
  transition: 0.5s;
  &:hover {
    opacity: 0.9;
  }
}
</style>
