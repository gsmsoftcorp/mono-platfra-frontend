<template>
    <div class="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
         v-for="platfraBoard in platfraBoardList" :key="platfraBoard.platfraBoardSeq"
         @click="navToName('platfraId-board-platfraBoardSeq', { _platfraBoardSeq: platfraBoard.platfraBoardSeq })" >
        <span class="truncate cursor-pointer">{{ platfraBoard.subject }}</span>
    </div>
</template>

<script setup>

import {ref} from "vue";

const params = {
    platfraId: useRoute().params.platfraId
}

const platfraBoardList = ref([]);
if(useRoute().params.platfraId) {
    useApiGet('/platfra/board', params).then(response => {
        platfraBoardList.value = response.data
    })
}

</script>