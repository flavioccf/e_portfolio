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
        <h1 class="text-h4">{{ profile.name }}</h1>
        <h2 class="text-h5 position">{{ profile.position }}</h2>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12">
        <h3 class="text-h4 subtitle">{{ profile.about.title }}</h3>
        <div v-html="profile.about.text" class="text-left about-text"></div>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12">
        <h3 class="text-h4 subtitle">Reach Me</h3>
        <br />
        <v-row justify="center">
          <v-col v-for="smedia in profile.social" :key="smedia.url" cols="3">
            <a :href="smedia.url" target="_blank"
              ><v-icon x-large :color="smedia.color">{{
                smedia.icon
              }}</v-icon></a
            >
          </v-col>
        </v-row>
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
<style lang="scss" scoped>
hr,
.about-text {
  width: 80%;
  text-align: center;
  margin: 1rem auto;
  color: #666666;
}
hr {
  opacity: 0.5;
}
.position {
  margin: 1rem;
  color: var(--v-primary-base);
}
</style>
