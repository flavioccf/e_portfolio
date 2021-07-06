<template>
  <v-container>
    <v-card>
      <div class="text-center">
        <v-img width="80%" src="@/assets/not_found.svg" alt="404" />
      </div>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "NotFound",
});
</script>

<style lang="scss" scoped>
.v-image {
  margin: 0 auto;
}
</style>
