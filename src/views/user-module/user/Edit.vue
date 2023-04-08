<template>
  <div class="flex flex-col items-center mt-8 intro-y sm:flex-row">
    <h2 class="mr-auto text-lg font-medium">Edit User</h2>
  </div>
  <TabGroup>
    <!-- BEGIN: Profile Info -->
    <div class="px-5 pt-5 mt-5 intro-y box">
      <div
        class="flex flex-col pb-5 -mx-5 border-b lg:flex-row border-slate-200/60 dark:border-darkmode-400"
      >
        <div
          class="flex items-center justify-center flex-1 px-5 lg:justify-start"
        >
          <div
            class="relative flex-none h-20 w-28 sm:w-24 sm:h-24 lg:w-40 lg:h-32 image-fit"
          >
            <div
              class="absolute bottom-0 right-0 flex items-center justify-center p-0 mb-5 mr-8 rounded-full bg-primary"
            >
              <input
                type="file"
                ref="updateImgInput"
                @change="uploadImage"
                class="absolute left-0 w-full h-full opacity-0 top-2"
              />
              <img class="rounded-lg" :src="tempImage ?? form.avatar" />
              <CameraIcon
                @click="$refs.updateImgInput.click()"
                class="w-4 h-4 text-white"
              />
            </div>
          </div>
          <h1 class="flex py-4 m-0 space-x-1" :href="form">
            <UserIcon class="w-4 h-4 mr-0" />
            <b>{{ form.first_name }}</b>
            <b>{{ (form.last_name = form.last_name.toUpperCase()) }}</b>
          </h1>
        </div>
      </div>
    </div>
    <!-- END: Profile Info -->
    <div class="bg-white rounded-md box">
      <div
        class="px-5 pt-10 pb-10 mt-5 border-t sm:px-30 border-slate-200/60 dark:border-darkmode-400"
      >
        <TabGroup class="mt-5 overflow-hidden post intro-y box">
          <TabList
            class="flex-col post__tabs nav-tabs sm:flex-row bg-slate-200 dark:bg-darkmode-800"
          >
            <Tab
              :fullWidth="false"
              class="w-full px-0 py-0 sm:w-40"
              tag="button"
            >
              <Tippy
                content="Fill in the article content"
                class="flex items-center justify-center w-full py-4 tooltip"
                aria-controls="content"
                aria-selected="true"
              >
                <CodeIcon class="w-4 h-4 mr-2" /> Profile
              </Tippy>
            </Tab>
            <Tab
              :fullWidth="false"
              class="w-full px-0 py-0 sm:w-40"
              tag="button"
            >
              <Tippy
                content="Adjust the meta info"
                class="flex items-center justify-center w-full py-4 tooltip"
                aria-selected="false"
              >
                <UserIcon class="w-4 h-4 mr-2" /> User Address
              </Tippy>
            </Tab>
          </TabList>
          <TabPanels class="post__content">
            <TabPanel class="p-5">
              <div class="bg-white rounded-md box">
                <div
                  class="px-5 pt-10 pb-10 mt-5 border-t sm:px-20 border-slate-200/60 dark:border-darkmode-400"
                >
                  <div class="text-base font-medium">Profile Settings</div>
                  <div class="grid grid-cols-12 gap-4 mt-5 gap-y-5">
                    <div class="col-span-12 intro-y sm:col-span-6">
                      <label for="input-wizard-1" class="form-label"
                        >First Name</label
                      >
                      <input
                        id="input-wizard-1"
                        type="text"
                        class="form-control"
                        placeholder="First name"
                        v-model="form.first_name"
                      />
                    </div>
                    <div class="col-span-12 intro-y sm:col-span-6">
                      <label for="input-wizard-1" class="form-label"
                        >Last Name</label
                      >
                      <input
                        id="input-wizard-1"
                        type="text"
                        class="form-control"
                        placeholder="Last name"
                        v-model="form.last_name"
                      />
                    </div>
                    <div class="col-span-12 intro-y sm:col-span-6">
                      <label for="input-wizard-3" class="form-label"
                        >Email</label
                      >
                      <input
                        id="input-wizard-3"
                        type="email"
                        class="form-control"
                        v-model="form.email"
                      />
                    </div>
                    <div class="col-span-12 intro-y sm:col-span-6">
                      <label for="input-wizard-1" class="form-label"
                        >Phone</label
                      >
                      <input
                        id="input-wizard-1"
                        type="text"
                        class="form-control"
                        placeholder="Phone"
                        v-model="form.phone"
                      />
                    </div>
                    <div class="col-span-12 intro-y sm:col-span-6">
                      <label for="input-wizard-5" class="form-label"
                        >Password</label
                      >
                      <input
                        id="input-wizard-5"
                        type="password"
                        class="form-control"
                        v-model="form.password"
                      />
                    </div>
                    <div class="col-span-12 intro-y sm:col-span-6">
                      <label for="input-wizard-5" class="form-label"
                        >Password</label
                      >
                      <input
                        id="input-wizard-5"
                        type="password"
                        class="form-control"
                        v-model="form.password_confirmation"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel class="p-5">
              <div class="bg-white rounded-md box">
                <div
                  class="px-5 pt-10 pb-10 mt-5 border-t sm:px-20 border-slate-200/60 dark:border-darkmode-400"
                >
                  <div class="grid grid-cols-12 gap-12 mt-4 gap-y-4">
                    <div class="col-span-12 intro-y sm:col-span-6">
                      <label for="input-wizard-1" class="form-label"
                        >Addres Line 1</label
                      >
                      <input
                        id="input-wizard-1"
                        type="text"
                        class="form-control"
                        placeholder="Address 1"
                        v-model="form.address_line_1"
                      />
                    </div>
                    <div class="col-span-12 intro-y sm:col-span-6">
                      <label for="input-wizard-1" class="form-label"
                        >Addres Line 2</label
                      >
                      <input
                        id="input-wizard-1"
                        type="text"
                        class="form-control"
                        placeholder="Address 2"
                        v-model="form.address_line_2"
                      />
                    </div>
                    <div class="col-span-12 intro-y sm:col-span-6">
                      <label for="input-wizard-3" class="form-label"
                        >City</label
                      >
                      <input
                        id="input-wizard-3"
                        type="email"
                        class="form-control"
                        placeholder="First City"
                        v-model="form.city"
                      />
                    </div>
                    <div class="col-span-12 intro-y sm:col-span-6">
                      <label for="input-wizard-1" class="form-label"
                        >Phone</label
                      >
                      <input
                        id="input-wizard-1"
                        type="text"
                        class="form-control"
                        placeholder="Phone"
                        v-model="form.phone"
                      />
                    </div>
                    <div class="col-span-12 intro-y sm:col-span-6">
                      <label for="input-wizard-5" class="form-label"
                        >Zip Code</label
                      >
                      <input
                        id="input-wizard-5"
                        type="password"
                        class="form-control"
                        placeholder="Zip Code"
                        v-model="form.zip_code"
                      />
                    </div>
                    <div class="col-span-12 intro-y sm:col-span-6">
                      <label for="input-wizard-5" class="form-label"
                        >Country</label
                      >
                      <input
                        id="input-wizard-5"
                        type="password"
                        class="form-control"
                        placeholder="Country"
                        v-model="form.country"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
    <div class="flex flex-col justify-end gap-2 mt-5 md:flex-row">
      <button
        @click="$router.push({ name: 'dashboard' })"
        type="button"
        class="w-full py-3 btn border-slate-300 dark:border-darkmode-400 text-slate-500 md:w-52"
      >
        Cancel
      </button>
      <button
        @click="save"
        type="button"
        class="w-full py-3 btn btn-primary md:w-52"
      >
        Update
      </button>
    </div>
  </TabGroup>
</template>


<script setup>
import { ref, onBeforeMount, computed } from "vue";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import UserAPI from "@/api/user";
import router from "@/router";
import { useRoute } from "vue-router";
import { helper } from "@/utils/helper";
const route = useRoute();

const user = computed((user) => {
  return authStore.user;
});

const form = ref({
  username: "",
  first_name: "",
  last_name: "",
  phone: null,
  avatar: "",
});

const categories = ref([]);

const tempImage = ref(null);

const save = async () => {
  const formData = transformData();
  await UserAPI.update(formData, {
    "Content-Type": "multipart/form-data",
  }).then((response) => {
    helper.showSuccess("User Updated Successfully");
    router.push({ name: "user-list" });
  });
};

const transformData = () => {
  const formData = new FormData();
  console.log(formData);
  Object.keys(form.value).forEach((key) => {
    formData.append(key, form.value[key]);
  });
  formData.append("_method", "PATCH");
  return formData;
};

const uploadImage = (input) => {
  if (input.target.files && input.target.files[0]) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const image = e.target.result;
      form.value.avatar = input.target.files[0];
      tempImage.value = image;
    };
    reader.readAsDataURL(input.target.files[0]);
  }
};

onBeforeMount(async () => {
  const categoryRes = await UserAPI.get();
  const UserAPIRes = await UserAPI.find(route.params.id);
  categories.value = categoryRes;
  form.value = UserAPIRes;
});
</script>
