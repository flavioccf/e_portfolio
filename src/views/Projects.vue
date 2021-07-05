<template>
  <v-container>
    <v-card>
      <v-col cols="12">
        <h1 class="text-h3 text-center position">My Projects</h1>
      </v-col>
      <v-divider></v-divider>
      <v-list>
        <span v-for="(project, index) in projects" :key="project.link">
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-cursor-default-click-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ project.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ project.company }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider v-if="projects.length !== index + 1"></v-divider>
        </span>
      </v-list>
    </v-card>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Projects",
  data: () => ({}),
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
});
</script>
