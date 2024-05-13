<template>
    <div v-if="!useRoute().params.platfraId"> <!-- main 영역 -->
        <!-- sidebar -->
        <main-sidebar/>
        <div class="lg:pl-72">
            <!-- header -->
            <main-header/>

            <!-- Separator -->
            <div class="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true"/>
            <main class="py-10">
                <div class="px-4 sm:px-6 lg:px-8">
                    <!-- Your content -->
                    <slot/>
                </div>
            </main>
        </div>
        <!-- Footer -->
        <main-footer/>
    </div>
    <div v-if="useRoute().params.platfraId"> <!-- platfra 영역 -->

        <div class="flex min-h-full">
            <!-- sidebar -->
            <platfra-sidebar/>

            <div class="flex w-0 flex-1 flex-col lg:pl-64">
                <!-- header -->
                <platfra-header/>

                <!-- Your content -->
                <main class="flex-1">
                    <div class="py-8 xl:py-10">
                        <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 xl:grid xl:max-w-5xl xl:grid-cols-3">
                            <div class="xl:col-span-2 xl:border-r xl:border-gray-200 xl:pr-8">
                            <!-- Your content -->
                                <slot/>
                            </div>

                            <aside class="hidden xl:block xl:pl-8">
                                <h2 class="sr-only">Details</h2>
                                <div class="space-y-5">
                                    <div class="flex items-center space-x-2">
                                        <LockOpenIcon class="h-5 w-5 text-green-500" aria-hidden="true" />
                                        <span class="text-sm font-medium text-green-700">Open Issue</span>
                                    </div>
                                    <div class="flex items-center space-x-2">
                                        <ChatBubbleLeftEllipsisIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        <span class="text-sm font-medium text-gray-900">4 comments</span>
                                    </div>
                                    <div class="flex items-center space-x-2">
                                        <CalendarIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        <span class="text-sm font-medium text-gray-900">Created on <time datetime="2020-12-02">Dec 2, 2020</time></span>
                                    </div>
                                </div>
                                <div class="mt-6 space-y-8 border-t border-gray-200 py-6">
                                    <div>
                                        <h2 class="text-sm font-medium text-gray-500">Assignees</h2>
                                        <ul role="list" class="mt-3 space-y-3">
                                            <li class="flex justify-start">
                                                <a href="#" class="flex items-center space-x-3">
                                                    <div class="flex-shrink-0">
                                                        <img class="h-5 w-5 rounded-full" src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" alt="" />
                                                    </div>
                                                    <div class="text-sm font-medium text-gray-900">Eduardo Benz</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2 class="text-sm font-medium text-gray-500">Tags</h2>
                                        <ul role="list" class="mt-2 leading-8">
                                            <li class="inline">
                                                <a href="#" class="relative inline-flex items-center rounded-full px-2.5 py-1 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                                    <div class="absolute flex flex-shrink-0 items-center justify-center">
                                                        <span class="h-1.5 w-1.5 rounded-full bg-rose-500" aria-hidden="true" />
                                                    </div>
                                                    <div class="ml-3 text-xs font-semibold text-gray-900">Bug</div>
                                                </a>
                                                {{ ' ' }}
                                            </li>
                                            <li class="inline">
                                                <a href="#" class="relative inline-flex items-center rounded-full px-2.5 py-1 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                                    <div class="absolute flex flex-shrink-0 items-center justify-center">
                                                        <span class="h-1.5 w-1.5 rounded-full bg-indigo-500" aria-hidden="true" />
                                                    </div>
                                                    <div class="ml-3 text-xs font-semibold text-gray-900">Accessibility</div>
                                                </a>
                                                {{ ' ' }}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        <!-- Footer -->
        <platfra-footer/>
    </div>

</template>

<script setup lang="ts">
import {CalendarIcon, ChatBubbleLeftEllipsisIcon, EnvelopeIcon, LockOpenIcon, PhoneIcon} from '@heroicons/vue/20/solid'

import MainHeader from "~/components/layout/main/main-header.vue";
import MainSidebar from "~/components/layout/main/main-sidebar.vue";
import MainFooter from "~/components/layout/main/main-footer.vue";
import PlatfraHeader from "~/components/layout/platfra/platfra-header.vue";
import PlatfraSidebar from "~/components/layout/platfra/platfra-sidebar.vue";
import PlatfraFooter from "~/components/layout/platfra/platfra-footer.vue";

const logout = () => {
    localStorage.removeItem('accessToken');
    navToName('account-sign');
    // TODO 로그인 페이지로 리다이렉트 등 추가적인 로그아웃 처리
};


//////////////////////////////////////////////////////////////////////


</script>