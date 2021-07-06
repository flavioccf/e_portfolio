<template>
  <v-container>
    <v-card>
      <v-icon color="primary" large @click="goBack"
        >mdi-arrow-left-circle</v-icon
      >
      <v-col cols="12">
        <h1 class="text-h5 text-center position">{{ project.name }}</h1>
        <h2 class="text-h6 text-center">{{ project.company }}</h2>
      </v-col>
      <v-col cols="12">
        <div v-html="project.about" class="text-left about-text"></div>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12">
        <div v-if="project.isEmbed">
          <div v-html="project.link" class="rounded-pill"></div>
        </div>
        <div v-else-if="project.link" class="text-center">
          <v-btn color="primary" :href="project.link" target="_blank"
            >Access Project</v-btn
          >
        </div>
      </v-col>
    </v-card></v-container
  >
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ProjectDetails",
  computed: {
    project() {
      const index = this.$route.params.index;
      return this.$store.state.projects[index];
    },
  },
  methods: {
    goBack() {
      this.$router.back();
    },
  },
});
</script>

<style lang="scss" scoped></style>
