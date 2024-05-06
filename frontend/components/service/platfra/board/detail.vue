<template>
    <div>
        <div class="px-4 sm:px-6 lg:px-8">
            <div class="border-b border-gray-200 pb-5">
                <h3 class="text-2xl font-bold leading-6 text-gray-900">{{ platfraBoard.subject }}</h3>
                <p class="mt-2 max-w-4xl text-sm text-gray-500">{{ platfraBoard.description }}</p>
            </div>
        </div>

        <service-platfra-board-content-list />
    </div>
</template>

<script setup lang="ts">

import {ref} from "vue";

const params = {
    platfraBoardSeq: useRoute().params.platfraBoardSeq
}

const platfraBoard = ref({});
if(useRoute().params.platfraId) {
    useApiGet('/platfra/board/{platfraBoardSeq}', params).then(response => {
        platfraBoard.value = response.data.platfraBoardDto
    })
}
</script>