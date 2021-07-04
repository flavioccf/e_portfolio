import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navbar: {
      icon: {
        name: "mdi-airplane",
        color: "primary_dark"
      },
      title: "Jessica Cunha"
    },
    profile: {
      userData: {
        picture: "https://media-exp1.licdn.com/dms/image/C4D03AQEvbpZRDu1itg/profile-displayphoto-shrink_800_800/0/1591643415210?e=1631145600&v=beta&t=PpvAZPUQmvDknBeKIoZwa4Eyhykz1q9QShFjaPjbVCE",
        name: "Jessica Aline da Cunha Carvalho",
        position: "Product Manager",
        linkedin: "https://www.linkedin.com/in/jessica-a-cunha/"
      }
    }
  },
  mutations: {},
  actions: {},
  modules: {},
});
