import { defineStore } from '@/node_modules/pinia';

export const useSidebarStore = defineStore('sidebar', {
    state: () => ({
        sidebarOpen: false
    }),
    actions: {
        // toggleSidebar() {
        //     this.sidebarOpen = !this.sidebarOpen;
        // },
        closeSidebar() {
            this.sidebarOpen = false;
        },
        openSidebar() {
            this.sidebarOpen = true;
        }
    }
});