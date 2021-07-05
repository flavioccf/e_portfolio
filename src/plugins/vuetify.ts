import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: { customProperties: true },
    themes: {
      light: {
        primary: "#9c27b0",
        primary_dark: "#280f3d",
        secondary: "#607d8b",
        secondary_light: "#ddd1e8",
        gradient1: "#ddd1e8",
        gradient2: "#280f3d",
        accent: "#3f51b5",
        error: "#f44336",
        warning: "#ffc107",
        info: "#ffeb3b",
        success: "#4caf50"
        },
        dark: {
          primary: "#9c27b0",
          primary_dark: "#ddd1e8",
          secondary_light: "#280f3d",
          gradient1: "#280f3d",
          gradient2: "#9c27b0",
        }
    }
  }
});
