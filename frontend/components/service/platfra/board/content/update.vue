<template>
    <div class="flex min-h-full">
      <div class="flex w-0 flex-1 flex-col lg:pl-64">
        <main class="flex-1">
          <div class="py-8 xl:py-10">
            <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 xl:grid xl:max-w-5xl xl:grid-cols-3">
              <div class="xl:col-span-3 xl:border-gray-250 xl:pr-8">
                <div class="border-b border-gray-900/10 pb-12">
                  <h2 class="text-base font-semibold leading-7 text-gray-900">{{ platfraBoardUpdate.title }}</h2>

                  <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                    <div class="col-span-full">
                      <label for="about" class="block text-sm font-medium leading-6 text-gray-900">About</label>
                      <div class="mt-2">
                        <textarea id="about" name="about" rows="3" v-model="platfraBoardUpdate.content" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
          </div>
        </main>
      </div>

      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" @click="navToName('platfraId-board-platfraBoardSeq-content-platfraBoardContentSeq', { _platfraBoardContentSeq: platfraBoardUpdate.contentSeq })" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
        <button type="submit" @click="update()" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
      </div>
    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import {
  ArchiveBoxIcon,
  Bars3BottomLeftIcon,
  Bars4Icon,
  ClockIcon,
  HomeIcon,
  UserCircleIcon as UserCircleIconOutline,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import {
  BellIcon,
  CalendarIcon,
  ChatBubbleLeftEllipsisIcon,
  CheckCircleIcon,
  LockOpenIcon,
  MagnifyingGlassIcon,
  PencilIcon,
  TagIcon,
  UserCircleIcon as UserCircleIconMini,
} from '@heroicons/vue/20/solid'


const params = {
  platfraBoardContentSeq: useRoute().query.contentSeq
}

const platfraBoardUpdate = ref({});

if(useRoute().params.platfraId) {
  console.log('params >> ', params);
  useApiGet('/platfra/board/content/{platfraBoardContentSeq}', params).then(response => {
    console.log('response.data : ', response.data);
    platfraBoardUpdate.value = response.data
  })
}

function update(){

  const params = {
      content   : platfraBoardUpdate.value.content
    , contentSeq: platfraBoardUpdate.value.contentSeq
  };

  useApiPut('/platfra/board/content', params).then(response => {
    console.log('response.data : ', response.data);
    //platfraBoardUpdate.value = response.data
  })
}

</script>

<style scoped>

</style>