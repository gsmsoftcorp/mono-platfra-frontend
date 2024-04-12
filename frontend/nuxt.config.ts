import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    ssr: false,
    devtools: { enabled: true },
    app: {
        head: {
            ...(process.env.NODE_ENV === 'development' ? {
                title: 'frontend - development',
                htmlAttrs: {
                    lang: 'en',
                },
                meta: [
                    { charset: 'utf-8' },
                    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                    { hid: 'description', name: 'description', content: 'Development Environment' },
                    { name: 'format-detection', content: 'telephone=no' },
                ],
                link: [{ rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' }]
            } : {
                title: 'frontend - prod',
                meta: [
                    { charset: 'utf-8' },
                    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                    { hid: 'description', name: 'description', content: 'Production Environment' },
                    { name: 'format-detection', content: 'telephone=no' },
                ],
            })

        }
    },
    modules: [
        '@nuxtjs/tailwindcss',
    ],
    plugins: [
        '~/plugins/dark-mode.client.js' // 클라이언트 사이드 플러그인 등록
    ],
    build: {
        transpile: ['@heroicons/vue']
    },
    nitro: {
        routeRules: {
            '/api/**': {
                proxy: 'http://localhost:8080/api/**',
            },
        }
    },
    runtimeConfig: {
        public: {
            apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:8080', // 기본값 설정
        },
    },
    tailwindcss: {
        viewer: false
    }
})
