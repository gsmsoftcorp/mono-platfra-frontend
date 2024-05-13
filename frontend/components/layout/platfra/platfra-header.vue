<template>
    <div class="sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white">
        <button type="button" class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900 lg:hidden" @click="sidebarOpen = true">
            <span class="sr-only">Open sidebar</span>
            <Bars3BottomLeftIcon class="h-6 w-6" aria-hidden="true" />
        </button>
        <div class="flex flex-1 justify-between px-4">
            <div class="flex flex-1">
                <form class="flex w-full lg:ml-0" action="#" method="GET">
                    <label for="search-field" class="sr-only">Search</label>
                    <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                            <MagnifyingGlassIcon class="h-5 w-5" aria-hidden="true" />
                        </div>
                        <input id="search-field" class="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 focus:border-transparent focus:outline-none focus:ring-0 focus:placeholder:text-gray-400 sm:text-sm" placeholder="Search" type="search" name="search" />
                    </div>
                </form>
            </div>
            <div class="ml-4 flex items-center lg:ml-6">
                <button type="button" class="inline-flex items-center rounded-md bg-rose-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500">Create</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import {Bars3BottomLeftIcon, Bars3Icon, BellIcon} from "@heroicons/vue/24/outline";
import {
    CalendarIcon,
    ChatBubbleLeftEllipsisIcon,
    CheckCircleIcon,
    ChevronDownIcon,
    LockOpenIcon,
    MagnifyingGlassIcon,
    PencilIcon, TagIcon
} from "@heroicons/vue/20/solid";
import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/vue";
import {ref} from "vue";

const sidebarOpen = ref(false)

const searchValue = ref([]);
const search = () => {
    const params = {
        searchValue: searchValue.value
    }
    navToName('main-list', params);
}
const userNavigation = [
    { name: 'Your profile', href: '#' },
    { name: 'Sign in', href: '/account/sign' },
    { name: 'Sign out', href: '/account/sign/logout' },
]
</script>