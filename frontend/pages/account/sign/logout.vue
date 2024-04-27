
<template>
    <div>
        로그아웃 처리 중..
    </div>
</template>

<script setup lang="ts">

    localStorage.removeItem('accessToken');
    navToName('account-sign');

</script>

<style scoped>

</style>