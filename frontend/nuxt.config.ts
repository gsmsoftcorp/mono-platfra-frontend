import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    devtools: { enabled: true },
    ssr: true,
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
    modules: ['@nuxtjs/tailwindcss'],
    build: {
        transpile: ['@heroicons/vue']
    },
    // API 호출 기본 URL을 환경 변수에 따라 설정
    runtimeConfig: {
        public: {
            apiBaseUrl: process.env.API_BASE_URL // 환경별로 다른 API 기본 URL 사용
        }
    },
})
