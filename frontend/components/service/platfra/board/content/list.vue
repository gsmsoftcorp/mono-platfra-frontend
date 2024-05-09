<template>
    <div class="px-4 sm:px-6 lg:px-8">
        <div class="mt-8 flow-root">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-300">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col" class="p-4 w-1/12 font-bold text-gray-900">No</th>
                                    <th scope="col" class="p-4 w-max font-bold text-gray-900">제목</th>
<!--                                    <th scope="col" class="p-4 w-7/12 font-bold text-gray-900">내용</th>-->
                                    <th scope="col" class="p-4 w-1/12 font-bold text-gray-900">조회수</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 bg-white">
                                <tr v-for="boardContent in boardContentList" :key="boardContent.boardContentSeq">
                                    <td class="p-4 text-gray-900 text-center">{{ boardContent.contentNo }}</td>
                                    <td class="p-4 text-gray-500 text-left whitespace-nowrap cursor-pointer"
                                        @click="navToName('platfraId-board-platfraBoardSeq-content-platfraBoardContentSeq', { _platfraBoardContentSeq: boardContent.contentSeq })"
                                    >
                                        {{ boardContent.title }}
                                    </td>
<!--                                    <td class="p-4 text-gray-500 text-left whitespace-nowrap">{{ boardContent.content }}</td>-->
                                    <td class="p-4 text-gray-900 text-center">{{ boardContent.view }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const platfraId = useRoute().params.platfraId;
const platfraBoardSeq = useRoute().params.platfraBoardSeq;
const boardContentList = ref({});
const params = {
    platfraId: platfraId,
    platfraBoardSeq: platfraBoardSeq
};

useApiGet('/platfra/board/content', params).then(response => {
    boardContentList.value = response.data;
});




</script>