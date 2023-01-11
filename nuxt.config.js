export default {
  target: "static",
  // Global page headers: https://go.nuxtjs.dev/config-head
  
  head: {
    title: 'testing',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
      ]
    },
    filenames: {
      // chunk: "js-[id].js",
      // css: "css-[id].css"
      chunk: ({ isDev }) => (isDev ? "[id].js" : "[contenthash]-[id].js"),
      css: ({ isDev }) => (isDev ? "[id].css" : "[contenthash]-[id].css")
    },
  },

  script:[
    { src: "/js/appier.js" },
    // { src: "https://cdn.qgraph.io/v3/r/qg-sw.js"},
    { src: "qg-sw.413eed99b6b3fd67acd0.js" },
  ],

  plugins:[
    { src: "./static/js/appier.js" , mode: "client" , ssr: false},
    // { src: "https://cdn.qgraph.io/v3/r/qg-sw.js"},
    { src: "./static/qg-sw.413eed99b6b3fd67acd0.js" ,mode: "client" , ssr: false },

  ]
}
