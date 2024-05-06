import { createPinia } from '@/node_modules/pinia';

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(createPinia());
});
