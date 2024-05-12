<!--
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <div class="space-y-12">
    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900">Sign Up</h2>
      <p class="mt-1 text-sm leading-6 text-gray-600">We sincerely welcome you to join platfra.</p>
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-4">
          <label for="userId" class="block text-sm font-medium leading-6 text-gray-900">ID</label>
          <div class="mt-2">
            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input v-model="userId" type="text" name="userId" id="userId" autocomplete="userId" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>
        </div>
        <div class="sm:col-span-4">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">password</label>
          <div class="mt-2">
            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input v-model="password" type="password" name="password" id="password" autocomplete="password" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>
        </div>
        <div class="sm:col-span-4">
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input v-model="email" id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div class="sm:col-span-4">
          <label for="username" class="block text-sm font-medium leading-6 text-gray-900">name</label>
          <div class="mt-2">
            <input v-model="username" type="text" name="username" id="username" autocomplete="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div class="sm:col-span-4">
          <label for="phone" class="block text-sm font-medium leading-6 text-gray-900">phone</label>
          <div class="mt-2">
            <input v-model="phone" type="text" name="phone" id="phone" autocomplete="010" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div class="sm:col-span-3">
          <label for="gender" class="block text-sm font-medium leading-6 text-gray-900">Gender</label>
          <div class="mt-2">
            <select v-model="gender" id="gender" name="gender" autocomplete="m" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
              <option>Man</option>
              <option>Woman</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-6 flex items-center justify-end gap-x-6">
    <button @click="signUp(userId, password, email, username, phone, gender)" type="button" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</button>
  </div>
</template>

<script setup lang="ts">


const userId = ref();
const password = ref();
const email = ref();
const username = ref();
const phone = ref();
const gender = ref();

// 회원가입 함수 구현
async function signUp(userId: string, password: string, email: string, username: string, phone: number, gender: number) {
    // 회원가입 API의 URL
    const url = '/account/signup';
    const params = {
        userId: userId,
        password: password,
        email: email,
        username: username,
        phone: phone,
        gender: gender
    }

    await useApiPost(url, params).then(async (response) => {

        await navToName('main');
    });

    // // GET 요청 예시
    // const { data: getData, error: getError } = useApiGet('https://api.example.com/items', { params: { userId: 'user1' } });
    // // POST 요청 예시
    // const { data: postData, error: postError } = useApiPost('https://api.example.com/items', { body: { name: 'New Item', price: 100 } });
    // // PUT 요청 예시
    // const { data: putData, error: putError } = useApiPut('https://api.example.com/items/1', { body: { name: 'Updated Item', price: 150 } });
    // // DELETE 요청 예시
    // const { data: deleteData, error: deleteError } = useApiDelete('https://api.example.com/items/1');
}

const logout = () => {
    localStorage.removeItem('accessToken');
    navToName('account-sign');
};

</script>

<style scoped>

</style>