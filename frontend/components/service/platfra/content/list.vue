<template>
    <ul role="list" class="p-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <li v-for="content in contentList" class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-left shadow">
            <div class="flex flex-1 flex-col" @click="navToName('platfraId-content-contentSeq', { _contentSeq: content.contentSeq })">
                <img class="mx-auto flex-shrink-0" src="https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="" />
                <h3 class="ml-3 mt-3 text-sm font-medium text-gray-900">{{ content.title }}</h3>
                <dl class="m-3 flex flex-grow flex-col justify-between">
                    <dt class="sr-only">Title</dt>
                    <dd class="text-sm text-gray-500">{{ content.content }}</dd>
                    <dt class="sr-only">Role</dt>
<!--                    <dd class="mt-3">-->
<!--                        <span class="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">{{ content.role }}</span>-->
<!--                    </dd>-->
                </dl>
            </div>
        </li>
    </ul>
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


    // const contentList = [
    //     {
    //         name: 'Jane Cooper',
    //         title: 'Paradigm Representative',
    //         role: 'Admin',
    //         email: 'janecooper@example.com',
    //         telephone: '+1-202-555-0170',
    //         imageUrl:
    //             'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    //     },
    //     {
    //         name: 'Jane Cooper',
    //         title: 'Paradigm Representative',
    //         role: 'Admin',
    //         email: 'janecooper@example.com',
    //         telephone: '+1-202-555-0170',
    //         imageUrl:
    //             'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    //     },
    //     {
    //         name: 'Jane Cooper',
    //         title: 'Paradigm Representative',
    //         role: 'Admin',
    //         email: 'janecooper@example.com',
    //         telephone: '+1-202-555-0170',
    //         imageUrl:
    //             'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    //     },
    //     {
    //         name: 'Jane Cooper',
    //         title: 'Paradigm Representative',
    //         role: 'Admin',
    //         email: 'janecooper@example.com',
    //         telephone: '+1-202-555-0170',
    //         imageUrl:
    //             'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    //     },
    //     {
    //         name: 'Jane Cooper',
    //         title: 'Paradigm Representative',
    //         role: 'Admin',
    //         email: 'janecooper@example.com',
    //         telephone: '+1-202-555-0170',
    //         imageUrl:
    //             'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    //     },
    //     {
    //         name: 'Jane Cooper',
    //         title: 'Paradigm Representative',
    //         role: 'Admin',
    //         email: 'janecooper@example.com',
    //         telephone: '+1-202-555-0170',
    //         imageUrl:
    //             'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    //     },
    //     {
    //         name: 'Jane Cooper',
    //         title: 'Paradigm Representative',
    //         role: 'Admin',
    //         email: 'janecooper@example.com',
    //         telephone: '+1-202-555-0170',
    //         imageUrl:
    //             'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    //     },
    //     {
    //         name: 'Jane Cooper',
    //         title: 'Paradigm Representative',
    //         role: 'Admin',
    //         email: 'janecooper@example.com',
    //         telephone: '+1-202-555-0170',
    //         imageUrl:
    //             'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    //     },
    // ]
</script>
<style scoped>

</style>