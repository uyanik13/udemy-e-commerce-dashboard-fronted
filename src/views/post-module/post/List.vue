<template>
  <h2 class="intro-y text-lg font-medium mt-10">Post List</h2>
  <div class="grid grid-cols-12 gap-6 mt-5">
    <div
      class="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center justify-between mt-2"
    >
      <div class="flex w-full sm:w-auto mr-4">
        <button class="btn btn-primary shadow-md mr-2">
          <router-link :to="{ name: 'post-create' }">Create</router-link>
        </button>
        <div class="w-48 relative text-slate-500">
          <input
            type="text"
            class="form-control w-48 box pr-10"
            placeholder="Search by name..."
          />
          <SearchIcon class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" />
        </div>
        <select class="w-48 xl:w-auto form-select box ml-2">
          <option>Status</option>
          <option>Active</option>
          <option>Removed</option>
        </select>
      </div>
      <div
        class="w-full xl:w-auto flex flex-wrap xl:flex-nowrap items-align gap-y-3 mt-3 xl:mt-0"
      >
        <button class="btn btn-primary shadow-md mr-2">
          <FileTextIcon class="w-4 h-4 mr-2" /> Export to Excel
        </button>
        <button class="btn btn-primary shadow-md mr-2">
          <FileTextIcon class="w-4 h-4 mr-2" /> Export to PDF
        </button>
        <Dropdown>
          <DropdownToggle class="btn px-2 box">
            <span class="w-5 h-5 flex items-center justify-center">
              <PlusIcon class="w-4 h-4" />
            </span>
          </DropdownToggle>
          <DropdownMenu class="w-40">
            <DropdownContent>
              <DropdownItem>
                <ArrowLeftRightIcon class="w-4 h-4 mr-2" /> Change Status
              </DropdownItem>
              <DropdownItem>
                <BookmarkIcon class="w-4 h-4 mr-2" /> Bookmark
              </DropdownItem>
            </DropdownContent>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>

    <div class="intro-y col-span-12 overflow-auto lg:overflow-visible">
      <table class="table table-report -mt-2">
        <thead>
          <tr>
            <th class="whitespace-nowrap">ID</th>
            <th class="whitespace-nowrap">TITLE</th>
            <th class="whitespace-nowrap">SLUG</th>
            <th class="text-center whitespace-nowrap">CATEGORY</th>
            <th class="text-center whitespace-nowrap">STATUS</th>
            <th class="text-center whitespace-nowrap">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items.data" :key="index" class="intro-x">
            <td class="w-40">
              {{ item.id }}
            </td>
            <td class="w-40">
              {{ item.title }}
            </td>
            <td class="w-40">
              {{ item.slug }}
            </td>
            <td>
              {{ item.category ? item.category.title : "Category Not Exist" }}
            </td>
            <td class="text-center">{{ item.status }}</td>
            <td class="table-report__action w-56">
              <div class="flex justify-center items-center">
                <a class="flex items-center mr-3" href="javascript:;">
                  <CheckSquareIcon class="w-4 h-4 mr-1" /> Edit
                </a>
                <a class="flex items-center text-danger" href="javascript:;">
                  <Trash2Icon class="w-4 h-4 mr-1" /> Delete
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <pagination-component
      :pagination="items"
      @update:pagination="updatePagination"
    />
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import PaginationComponent from "@/components/table/Pagination.vue";
import PostAPI from '@/api/PostApi'

const items = ref([]);

onBeforeMount(async () => {
  getItems();
});

const getItems = () => {
  PostAPI.index().then(res=>{
    items.value = res.data
  })
 
};
</script>
