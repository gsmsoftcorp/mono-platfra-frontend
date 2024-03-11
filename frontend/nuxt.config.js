const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio') // npm i cheerio
const pkg = require('./package')
const webpack = require('webpack')

export default defineNuxtConfig({
  mode: 'spa',
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    ...(process.env.NODE_ENV === 'development' ? {
      title: 'frontend',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Open+Sans:wght@400;600&display=swap' },
      ],
      script: [
        { src: 'https://developers.kakao.com/sdk/js/kakao.min.js' } // login kakao
      ],
    } : {})
  },
  loading: false,
  loadingIndicator: false,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '@/assets/resource/common/css/reset.css', lang: 'css' },
    { src: '@/assets/resource/common/css/common.css', lang: 'css' },
    { src: '@/assets/resource/common/css/head.css', lang: 'css' },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/moment',
    '@/mixins/store',
    '@/mixins/global',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
  ],
  router: {
    extendRoutes (routes) {
      routes.push({
        name: 'default',
        path: '*',
        redirect: '/'
      })
    }
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://localhost:8080',
    proxy: true,
    credential: true
  },
  proxy: {
    '/api/': 'http://localhost:8080'
  },
  render: {
    resourceHints: false
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        _: 'lodash'
      })
    ],
    babel: {
      presets ({ envName }) {
        return [
          [
            '@nuxt/babel-preset-app',
            {
              corejs: { version: 3 }
            }
          ]
        ]
      }
    },
    terser: {
      terserOptions: {
        compress: {
          drop_console: false
        }
      }
    },
    postcss: {
      plugins: {
        autoprefixer: { }
      }
    },
    optimization: {
      splitChunks: {
        chunks: 'initial'
      }
    },
    extend (config) {
      if (['local'].includes(process.env.NODE_ENV)) { // local-build 시에만 작동
        config.output.publicPath = `${pkg.config.path[process.env.NODE_ENV]}/`
      } else if (['production'].includes(process.env.NODE_ENV)) {
        config.output.publicPath = `${pkg.config.path[process.env.NODE_ENV]}${pkg.config.path.resource}/v${pkg.config.spec}/`
      }
    }
  },
  generate: {
    dir: './static/',
    fallback: 'index.html'
  },
  hooks: {
    generate: {
      done ({ nuxt }) {
        const FILE_PATH = `${nuxt.options.generate.dir}/${nuxt.options.generate.fallback}`
        const HTML_FILE = fs.readFileSync(FILE_PATH)
        const doc = cheerio.load(HTML_FILE, { decodeEntities: false })
        const BODY = doc('body').remove().html()
        const DIST_DIRECTORY = path.relative(__dirname, './static/view/dist')
        const DIST_INDEX_FILE = path.relative(__dirname, './static/dist/index.html')

        if (!fs.existsSync(DIST_DIRECTORY)) {
          fs.mkdirSync(DIST_DIRECTORY)
        }
        fs.writeFileSync(DIST_INDEX_FILE, BODY)
      }
    }
  }
})
