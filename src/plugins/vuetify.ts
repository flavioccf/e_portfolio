import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#9c27b0",
        primary_dark: "#280f3d",
        secondary: "#607d8b",
        secondary_light: "#ddd1e8",
        accent: "#3f51b5",
        error: "#f44336",
        warning: "#ffc107",
        info: "#ffeb3b",
        success: "#4caf50"
        }
    }
  }
});
