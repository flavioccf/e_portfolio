import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navbar: {
      icon: {
        name: "mdi-airplane",
        color: "primary_dark",
      },
      title: "Jessica Cunha",
    },
    profile: {
      userData: {
        picture:
          "https://drive.google.com/uc?id=1CTgEJjGySBlYKOABoiONDuWw1Y_dmgFW&export=download",
        name: "Jessica Aline da Cunha Carvalho",
        position: "Product Manager",
        about: {
          title: "About Me!",
          text: `<p>One of the greatest pleasures of my routine is to connect with people, whether to plan a sales action, put future campaigns on the agenda, analyze the results of past actions, or even focus on solutions to problems that arise along the way. The day-to-day of the International Education market is just like that, dynamic, and that's what I like the most!</p>
          <p>I hold a Bachelor's Degree in Tourism and I am currently taking a Post Degree Diploma in Business Administration at Langara College, in Vancouver, Canada. During my academic path, I was able to be a member of the Junior Enterprise and a volunteer for Langara Community and AIESEC, one of the largest NGOs in the world.</p><p>One of the greatest pleasures of my routine is to connect with people, whether to plan a sales action, put future campaigns on the agenda, analyze the results of past actions, or even focus on solutions to problems that arise along the way. The day-to-day of the International Education market is just like that, dynamic, and that's what I like the most!<br /><br />I have a Bachelor's Degree in Tourism and I am currently taking a Post Degree Diploma in Business Administration at Langara College (Canada). During my academic career, I was able to be a member of the Junior Enterprise and a volunteer for AIESEC, one of the largest NGOs in the world.</p>
          <p>I have been working with International Education since 2012 when I started to lead groups of teen students abroad, but it was only in 2017 that I started to have the back office experience, starting my career with the development of exchange products, negotiating with partners, launching their program internally and externally, training and tracking the sales team performances, and supporting general management in defining the annual&rsquo;s goals for the company. I also collaborated in the launch of a new website and an internal system, having to organize the company&rsquo;s portfolios and documents, develop presentations and support guides for the sales team.</p>
          <p>I have developed organizational and communication skills while organizing events related to the industry, like educational fairs, and webinars. Across 12 months I organized and presented as a host of 55 webinars to an overall of 12 thousand potential clients.</p>
          <p>My main goal is to continue transforming people's lives through education.</p>`,
        },
        social: [
          {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/jessica-a-cunha/",
            icon: "mdi-linkedin",
            color: "#0e76a8",
          },
          {
            name: "Instagram",
            url: "https://www.instagram.com/jessi_acunha/",
            icon: "mdi-instagram",
            color: "#833AB4",
          },
          {
            name: "Facebook",
            url: "https://www.facebook.com/jessica.cunha2",
            icon: "mdi-facebook",
            color: "#3b5998",
          },
        ],
      },
    },
    projects: [
      {
        name: "Webinar: Interview with the Canadian Consulate in Brazil",
        company: "SEDA Intercambios",
        link: `<iframe width="100%" height="300" src="https://www.youtube.com/embed/9y4ItOLf0kg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        isEmbed: true,
        about: `<p>In 2020 I had the opportunity to interview a member of the Consulate of Canada in Brazil, promoting the destination to potential international students and sharing relevant information on how the country was dealing with COVID19 and International Education.</p>`,
      },
      {
        name: "Training: Onboarding Canada",
        company: "SEDA Intercambios",
        link: "https://www.youtube.com/playlist?list=PLLpWlYYCGZTom3-0qv9-K2EHikTbuoUGl",
        isEmbed: false,
        about: `<p>In 2021 I was responsible for creating and applying three days of training about International Education opportunities in Canada.</p>
        <p>This training was developed to provide detailed information to reduce the lead time for Q&A, increase sales, and speed up selling processes.</p>`,
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
