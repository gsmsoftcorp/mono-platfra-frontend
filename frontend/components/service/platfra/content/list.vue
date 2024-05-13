<template>
    <div class="bg-white">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
            <div class="flex items-center justify-between space-x-4">
                <h2 class="text-lg font-medium text-gray-900">Customers also viewed</h2>
<!--                <a href="#" class="whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-500">-->
<!--                    View all-->
<!--                    <span aria-hidden="true"> &rarr;</span>-->
<!--                </a>-->
            </div>
            <div class="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                <div class="group relative"
                     v-for="content in contentList"
                     :key="content.contentSeq"
                     @click="navToName('platfraId-content-contentSeq', { _contentSeq: content.contentSeq })"
                >
                    <div class="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
                        <img class="object-cover object-center" :src="'https://tailwindui.com/img/ecommerce-images/content-page-05-related-content-01.jpg'" :alt="'test'" />
                        <div class="flex items-end p-4 opacity-0 group-hover:opacity-100" aria-hidden="true">
                            <div class="w-full rounded-md bg-white bg-opacity-75 px-4 py-2 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter">View content</div>
                        </div>
                    </div>
                    <div class="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900">
                        <h3>
                            <a href="#">
                                <span aria-hidden="true" class="absolute inset-0" />
                                {{ content.title }}
                            </a>
                        </h3>
                        <!--                        <p>{{ content.price }}</p>-->
                    </div>
                    <p class="mt-1 text-sm text-gray-500">{{ platfraId }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    const platfraId = useRoute().params.platfraId;
    const contentList = ref({});
    const params = {
        platfraId: platfraId
    };

    useApiGet('/platfra/content', params).then(response => {
        contentList.value = response.data;
    });

</script>
<style scoped>

</style>