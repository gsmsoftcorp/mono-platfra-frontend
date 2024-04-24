<template>
    <ul role="list" class="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
        <li v-for="platfra in platfraList" :key="platfra.platfraId" class="overflow-hidden rounded-xl border border-gray-200">
            <nuxt-link :to="platfra.platfraId">
                <div class="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
    <!--                <img :src="platfra.imageUrl" :alt="platfra.name" class="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10" />-->
                    <div class="text-sm font-medium leading-6 text-gray-900">
                        {{ platfra.platfraId }} <!-- TODO 추후 사이트 명으로 변경-->
                    </div>
                </div>
                <dl class="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                    <div class="flex justify-between gap-x-4 py-3">
                        <dt class="text-gray-500">제목</dt>
                        <dd class="text-gray-700">
                            {{ platfra.subject }}
                        </dd>
                    </div>
                    <div class="flex justify-between gap-x-4 py-3">
                        <dt class="text-gray-500">설명</dt>
                        <dd class="flex items-start gap-x-2">
                            <div class="font-medium text-gray-900">{{ platfra.description }}</div>
                        </dd>
                    </div>
                    <div class="flex justify-between gap-x-4 py-3">
                        <dt class="text-gray-500">소개</dt>
                        <dd class="flex items-start gap-x-2">
                            <div class="font-medium text-gray-900">{{ platfra.introduction }}</div>
                        </dd>
                    </div>
                </dl>
            </nuxt-link>
        </li>
    </ul>
</template>

<script setup>

const props = defineProps({
    searchValue: {
        type: String,
    }
});

const params = {
    searchValue: props.searchValue
}

console.log('props.searchValue : ', props.searchValue);
const platfraList = ref();

useApiGet('/platfra/search', params).then(response => {
    platfraList.value = response.data;
});


// const clients = [
//     {
//         id: 1,
//         name: 'Tuple',
//         imageUrl: 'https://tailwindui.com/img/logos/48x48/tuple.svg',
//         lastInvoice: { date: 'December 13, 2022', dateTime: '2022-12-13', amount: '$2,000.00', status: 'Overdue' },
//     },
//     {
//         id: 2,
//         name: 'SavvyCal',
//         imageUrl: 'https://tailwindui.com/img/logos/48x48/savvycal.svg',
//         lastInvoice: { date: 'January 22, 2023', dateTime: '2023-01-22', amount: '$14,000.00', status: 'Paid' },
//     },
//     {
//         id: 3,
//         name: 'Reform',
//         imageUrl: 'https://tailwindui.com/img/logos/48x48/reform.svg',
//         lastInvoice: { date: 'January 23, 2023', dateTime: '2023-01-23', amount: '$7,600.00', status: 'Paid' },
//     },
//     {
//         id: 4,
//         name: 'Tuple',
//         imageUrl: 'https://tailwindui.com/img/logos/48x48/tuple.svg',
//         lastInvoice: { date: 'December 13, 2022', dateTime: '2022-12-13', amount: '$2,000.00', status: 'Overdue' },
//     },
//     {
//         id: 5,
//         name: 'SavvyCal',
//         imageUrl: 'https://tailwindui.com/img/logos/48x48/savvycal.svg',
//         lastInvoice: { date: 'January 22, 2023', dateTime: '2023-01-22', amount: '$14,000.00', status: 'Paid' },
//     },
//     {
//         id: 6,
//         name: 'Reform',
//         imageUrl: 'https://tailwindui.com/img/logos/48x48/reform.svg',
//         lastInvoice: { date: 'January 23, 2023', dateTime: '2023-01-23', amount: '$7,600.00', status: 'Paid' },
//     },
// ]
</script>