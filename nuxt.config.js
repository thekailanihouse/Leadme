require("dotenv").config();
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Leadme',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/main.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: "@/plugins/aos.client.js", ssr:false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/auth'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  srcDir: 'src/',
  axios: {
    baseURL: 'http://localhost:1337'
   },
  auth: {
    strategies: {
    local: {
    endpoints: {
    login: {
    url: 'auth/local',
    method: 'post',
    propertyName: 'jwt'
    },
    user: {
    url: 'users/me',
    method: 'get',
    propertyName: false
    },
    logout: false
    }
    }
    }
   },
}
