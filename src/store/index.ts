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
        about: {
          title: "About Me!",
          text: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae purus faucibus ornare suspendisse sed nisi lacus.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae purus faucibus ornare suspendisse sed nisi lacus.</p>"
        },
        social: [
          {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/jessica-a-cunha/",
            icon: "mdi-linkedin",
            color: "#0e76a8"
          },
          {
            name: "Instagram",
            url: "https://www.instagram.com/jessi_acunha/",
            icon: "mdi-instagram",
            color: "#833AB4"
          },
          {
            name: "Facebook",
            url: "https://www.facebook.com/jessica.cunha2",
            icon: "mdi-facebook",
            color: "#3b5998"
          }
        ],
      }
    },
    projects: [
      {
        name: "Webinar: Interview with the Canadian Consulate in Brazil",
        company: "SEDA Intercambios",
        link: `<iframe width="100%" height="300" src="https://www.youtube.com/embed/9y4ItOLf0kg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        isEmbed: true,
        about: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae purus faucibus ornare suspendisse sed nisi lacus.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae purus faucibus ornare suspendisse sed nisi lacus.</p>`
      },
      {
        name: "Webinar: Onboarding Canada",
        company: "SEDA Intercambios",
        link: "https://www.youtube.com/playlist?list=PLLpWlYYCGZTom3-0qv9-K2EHikTbuoUGl",
        isEmbed: false,
        about:`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae purus faucibus ornare suspendisse sed nisi lacus.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae purus faucibus ornare suspendisse sed nisi lacus.</p>`
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
});
