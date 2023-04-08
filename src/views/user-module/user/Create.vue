<template>
  <div class="flex flex-col items-center mt-8 intro-y sm:flex-row">
    <h2 class="mr-auto text-lg font-medium">Add New User</h2>
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
            class="relative flex-none w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 image-fit"
          >
            <img
              alt="{{ user.first_name }}"
              class="rounded-full"
              :src="tempImage ?? form.avatar"
            />
            <div
              class="absolute bottom-0 right-0 flex items-center justify-center p-2 mb-1 mr-1 rounded-full bg-primary"
            >
              <input
                type="file"
                ref="updateImgInput"
                @change="uploadImage"
                class="absolute top-0 left-0 w-full h-full opacity-0"
              />
              <CameraIcon
                @click="$refs.updateImgInput.click()"
                class="w-4 h-4 text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END: Profile Info -->
    <div class="bg-white rounded-md box">
      <div
        class="px-5 pt-10 pb-10 mt-5 border-t sm:px-20 border-slate-200/60 dark:border-darkmode-400"
      >
        <div class="text-base font-medium">Profile Settings</div>
        <div class="grid grid-cols-12 gap-4 mt-5 gap-y-5">
          <div class="col-span-12 intro-y sm:col-span-6">
            <label for="input-wizard-1" class="form-label">First Name</label>
            <input
              id="input-wizard-1"
              type="text"
              class="form-control"
              placeholder="First name"
              v-model="form.first_name"
            />
          </div>
          <div class="col-span-12 intro-y sm:col-span-6">
            <label for="input-wizard-1" class="form-label">Last Name</label>
            <input
              id="input-wizard-1"
              type="text"
              class="form-control"
              placeholder="Last name"
              v-model="form.last_name"
            />
          </div>
          <div class="col-span-12 intro-y sm:col-span-6">
            <label for="input-wizard-3" class="form-label">Email</label>
            <input
              id="input-wizard-3"
              type="email"
              class="form-control"
              v-model="form.email"
            />
          </div>
          <div class="col-span-12 intro-y sm:col-span-6">
            <label for="input-wizard-1" class="form-label">Phone</label>
            <input
              id="input-wizard-1"
              type="text"
              class="form-control"
              placeholder="Phone"
              v-model="form.phone"
            />
          </div>
          <div class="col-span-12 intro-y sm:col-span-6">
            <label for="input-wizard-5" class="form-label">Password</label>
            <input
              id="input-wizard-5"
              type="password"
              class="form-control"
              v-model="form.password"
            />
          </div>
          <div class="col-span-12 intro-y sm:col-span-6">
            <label for="input-wizard-5" class="form-label">Password</label>
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
        Create
      </button>
    </div>
  </TabGroup>
</template>


<script setup>
import { computed, ref } from "vue";
import { useAuthStore } from "@/stores";
import UserAPI from "@/api/user";
import { helper } from "@/utils/helper";
import { router } from "@/router";
const authStore = useAuthStore();

const user = computed((user) => {
  return authStore.user;
});

const form = ref({
  first_name: null,
  last_name: null,
  phone: null,
  avatar: null,
  email: null,
  password: null,
  password_confirmation: null,
});

const tempImage = ref(null);

const save = async () => {
  const formData = transformData();
  await UserAPI.create(formData).then((response) => {
    helper.showSuccess("User Created Successfully");
    router.push({ name: "user-list" });
  });
};

const transformData = () => {
  const formData = new FormData();
  Object.keys(form.value).forEach((key) => {
    formData.append(key, form.value[key]);
  });
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
</script>
