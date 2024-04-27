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
    <div>
        <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
            </div>

            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <div class="space-y-6" action="#" method="POST">
                    <div>
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div class="mt-2">
                            <input v-model="userId" id="email" name="userId" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <div class="flex items-center justify-between">
                            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            <div class="text-sm">
                                <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                            </div>
                        </div>
                        <div class="mt-2">
                            <input v-model="password" id="password" name="password" type="password" autocomplete="current-password" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <button @click="login(userId, password)" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                    </div>
                </div>

                <p class="mt-10 text-center text-sm text-gray-500">
                    Not a member?
                    {{ ' ' }}
    <!--                <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>-->
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">


const userId = ref();
const password = ref();

// login 함수 구현
async function login(userId: string, password: string) {
    // 로그인 API의 URL
    const url = '/login';
    const params = {
        userId: userId,
        password: password
    }

    await useApiPost(url, params).then(async (response) => {
        localStorage.setItem('accessToken', response.data);
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