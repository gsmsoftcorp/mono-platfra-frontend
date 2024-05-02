
<template>

</template>

<script setup lang="ts">

const params = {

}
const boardList = ref([]);

useApiGet('/platfra/board', params).then(response => {
    boardList.value = response.data;
})
</script>


<style scoped>

</style>