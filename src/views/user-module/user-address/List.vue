<template>
  <h2 class="mt-10 text-lg font-medium intro-y">User Address List</h2>
  <div class="grid grid-cols-12 gap-6 mt-5">
    <div
      class="flex flex-wrap items-center col-span-12 mt-2 intro-y sm:flex-nowrap"
    >
      <button class="mr-2 shadow-md btn btn-primary">
        <router-link :to="{ name: 'user-address-create' }">Create</router-link>
      </button>
      <Dropdown>
        <DropdownToggle class="px-2 btn box">
          <span class="flex items-center justify-center w-5 h-5">
            <PlusIcon class="w-4 h-4" />
          </span>
        </DropdownToggle>
        <DropdownMenu class="w-40">
          <DropdownContent>
            <DropdownItem>
              <PrinterIcon class="w-4 h-4 mr-2" /> Print
            </DropdownItem>
            <DropdownItem>
              <FileTextIcon class="w-4 h-4 mr-2" /> Export to Excel
            </DropdownItem>
            <DropdownItem>
              <FileTextIcon class="w-4 h-4 mr-2" /> Export to PDF
            </DropdownItem>
          </DropdownContent>
        </DropdownMenu>
      </Dropdown>
      <div class="hidden mx-auto md:block text-slate-500">
        Showing 1 to 10 of 150 entries
      </div>
      <div class="w-full mt-3 sm:w-auto sm:mt-0 sm:ml-auto md:ml-0">
        <div class="relative w-56 text-slate-500">
          <input
            type="text"
            class="w-56 pr-10 form-control box"
            placeholder="Search..."
          />
          <SearchIcon class="absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3" />
        </div>
      </div>
    </div>
    <!-- BEGIN: Data List -->
    <div class="col-span-12 overflow-auto intro-y lg:overflow-visible">
      <table class="table -mt-2 table-report">
        <thead>
          <tr>
            <th class="whitespace-nowrap">ID</th>
            <th class="text-center whitespace-nowrap">USER</th>
            <th class="whitespace-nowrap">ADDRESS LINE 1</th>
            <th class="whitespace-nowrap">ADDRESS LINE 1</th>
            <th class="text-center whitespace-nowrap">CITY</th>
            <th class="text-center whitespace-nowrap">ZIP CODE</th>
            <th class="text-center whitespace-nowrap">COUNTRY</th>
            <th class="text-center whitespace-nowrap">PHONE</th>
            <th class="text-center whitespace-nowrap">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items.data" :key="index" class="intro-x">
            <td class="w-40">
              {{ item.id }}
            </td>
            <td class="w-40">{{ item.first_name }}</td>
            <td class="w-40">{{ item.address_line_1 }}</td>
            <td class="w-40">{{ item.address_line_2 }}</td>
            <td class="w-40">{{ item.city }}</td>
            <td class="w-40">{{ item.zip_code }}</td>
            <td class="w-40">{{ item.Country }}</td>
            <td>
              {{ item.phone }}
            </td>

            <td class="w-56 table-report__action">
              <div class="flex items-center justify-center">
                <a
                  @click="edit(item.id)"
                  class="flex items-center mr-3"
                  href="javascript:;"
                >
                  <CheckSquareIcon class="w-4 h-4 mr-1" /> Edit
                </a>
                <a
                  class="flex items-center text-danger"
                  href="javascript:;"
                  @click="deleteFunc(item.id)"
                >
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
  <!-- BEGIN: Delete Confirmation Modal -->
  <Modal
    :show="deleteConfirmationModal"
    @hidden="deleteConfirmationModal = false"
  >
    <ModalBody class="p-0">
      <div class="p-5 text-center">
        <XCircleIcon class="w-16 h-16 mx-auto mt-3 text-danger" />
        <div class="mt-5 text-3xl">Are you sure?</div>
        <div class="mt-2 text-slate-500">
          Do you really want to delete these records? <br />This process cannot
          be undone.
        </div>
      </div>
      <div class="px-5 pb-8 text-center">
        <button
          type="button"
          @click="deleteConfirmationModal = false"
          class="w-24 mr-1 btn btn-outline-secondary"
        >
          Cancel
        </button>
        <button type="button" class="w-24 btn btn-danger">Delete</button>
      </div>
    </ModalBody>
  </Modal>
  <!-- END: Delete Confirmation Modal -->
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import UserAddress from "@/api/user-address";
const items = ref([]);

onBeforeMount(async () => {
  getItems();
});

const getItems = () => {
  UserAPI.get().then((res) => (items.value = res));
};
</script>
