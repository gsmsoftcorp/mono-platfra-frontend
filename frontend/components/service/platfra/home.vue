<template>
    <div>
        <!-- TODO home(메인 페이지) 구성 -->
        <div class="bg-white">
            <nav class="flex items-center justify-center p-6 lg:px-8" aria-label="Global">
                <div class="hidden lg:flex lg:gap-x-12">
                    <div class="cursor-pointer text-sm font-semibold leading-6 text-gray-900"
                         v-for="platfraBoard in platfraBoardList" :key="platfraBoard.platfraBoardSeq"
                         @click="navToName('platfraId-board-list', { _platfraId: useRoute().params.platfraId })" >
                        {{ platfraBoard.subject }}
                    </div>
                </div>
            </nav>
        </div>

        <service-platfra-content-list/>
    </div>
</template>
<script setup lang="ts">

import {ref} from "vue";

const params = {
    platfraId: useRoute().params.platfraId
}

const platfraBoardList = ref([]);
if(useRoute().params.platfraId) {
    useApiGet('/platfra/board', params).then(response => {
        platfraBoardList.value = response.data
    })
} else {
}

</script>
<style scoped>

</style>
