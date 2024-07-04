export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  css: ["@/assets/style.css"],

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    script: [{ src: "https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.12/typed.min.js" }, { src: "https://kit.fontawesome.com/eaf83596cb.js", crossorigin: "anonymous" }, { src: "https://code.jquery.com/jquery-3.5.1.min.js" }],
    title: "my-nuxt-portfolio",
    meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { hid: "description", name: "description", content: "" }],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/style.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/jquery-typed.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [],
  },
};
