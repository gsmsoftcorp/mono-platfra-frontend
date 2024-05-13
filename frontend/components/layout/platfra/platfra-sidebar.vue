<template>
    <TransitionRoot as="template" :show="sidebarOpen">
        <Dialog class="relative z-40 lg:hidden" @close="sidebarOpen = false">
            <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </TransitionChild>

            <div class="fixed inset-0 z-40 flex">
                <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
                    <DialogPanel class="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800 pb-4 pt-5">
                        <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                            <div class="absolute right-0 top-0 -mr-12 pt-2">
                                <button type="button" class="relative ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="sidebarOpen = false">
                                    <span class="absolute -inset-0.5" />
                                    <span class="sr-only">Close sidebar</span>
                                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                                </button>
                            </div>
                        </TransitionChild>
                        <div class="flex flex-shrink-0 items-center px-4">
                            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=rose&shade=500" alt="Your Company" />
                        </div>
                        <div class="mt-5 h-0 flex-1 overflow-y-auto">
                            <nav class="px-2">
                                <div class="space-y-1">
                                    <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'group flex items-center rounded-md px-2 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">
                                        <component :is="item.icon" :class="[item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300', 'mr-4 h-6 w-6 flex-shrink-0']" aria-hidden="true" />
                                        {{ item.name }}
                                    </a>
                                </div>
                                <div class="mt-10">
                                    <p class="px-2 text-sm font-medium text-gray-400">Projects</p>
                                    <div class="mt-2 space-y-1">
                                        <a v-for="project in projects" :key="project.id" :href="project.href" class="flex items-center rounded-md px-2 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                                            <span class="truncate">{{ project.name }}</span>
                                        </a>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </DialogPanel>
                </TransitionChild>
                <div class="w-14 flex-shrink-0" aria-hidden="true">
                    <!-- Dummy element to force sidebar to shrink to fit close icon -->
                </div>
            </div>
        </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="flex min-h-0 flex-1 flex-col">
            <div class="flex h-16 flex-shrink-0 items-center bg-gray-900 px-4">
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=rose&shade=500" alt="Your Company" />
            </div>
            <div class="flex flex-1 flex-col overflow-y-auto bg-gray-800">
                <nav class="flex-1 px-2 py-4">
                    <div class="space-y-1">
                        <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'group flex items-center rounded-md px-2 py-2 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">
                            <component :is="item.icon" :class="[item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300', 'mr-3 h-6 w-6 flex-shrink-0']" aria-hidden="true" />
                            {{ item.name }}
                        </a>
                    </div>
                    <div class="mt-10">
                        <p class="px-3 text-lg font-bold text-gray-400">Communities</p>
                        <div class="mt-2 space-y-1">
                            <service-platfra-board-sidebar-list />
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import {Dialog, DialogPanel, TransitionChild, TransitionRoot} from "@headlessui/vue";
    import {
        ArchiveBoxIcon,
        Bars4Icon,
        CalendarIcon, ChartPieIcon, ClockIcon,
        Cog6ToothIcon,
        DocumentDuplicateIcon,
        FolderIcon,
        HomeIcon, UserCircleIcon as UserCircleIconOutline,
        UsersIcon,
        XMarkIcon
    } from "@heroicons/vue/24/outline";
    import {ref} from "vue";

    const navigation = [
        { name: 'All Issues', href: '#', icon: HomeIcon, current: true },
        { name: 'My Issues', href: '#', icon: Bars4Icon, current: false },
        { name: 'Assigned', href: '#', icon: UserCircleIconOutline, current: false },
        { name: 'Closed', href: '#', icon: ArchiveBoxIcon, current: false },
        { name: 'Recent', href: '#', icon: ClockIcon, current: false },
    ]

    const projects = [
        { id: 1, name: 'GraphQL API', href: '#' },
        { id: 2, name: 'iOS App', href: '#' },
        { id: 3, name: 'Marketing Site Redesign', href: '#' },
        { id: 4, name: 'Customer Portal', href: '#' },
    ]
    const sidebarOpen = ref(false)
</script>
