<template>
  <div class="intro-y flex items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Profile</h2>
  </div>
  <TabGroup>
    <!-- BEGIN: Profile Info -->
    <div class="intro-y box px-5 pt-5 mt-5">
      <div
        class="flex flex-col lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 pb-5 -mx-5"
      >
        <div
          class="flex flex-1 px-5 items-center justify-center lg:justify-start"
        >
          <div
            class="w-20 h-20 sm:w-24 sm:h-24 flex-none lg:w-32 lg:h-32 image-fit relative"
          >
            <img
              alt="{{ user.first_name }}"
              class="rounded-full"
              :src="tempImage ?? form.avatar"
            />
            <div
              class="absolute mb-1 mr-1 flex items-center justify-center bottom-0 right-0 bg-primary rounded-full p-2"
            >
              <input
                type="file"
                ref="updateImgInput"
                @change="uploadImage"
                class="w-full h-full top-0 left-0 absolute opacity-0"
              />
              <CameraIcon
                @click="$refs.updateImgInput.click()"
                class="w-4 h-4 text-white"
              />
            </div>
          </div>
          <div class="ml-5">
            <div
              class="w-24 sm:w-40 truncate sm:whitespace-normal font-medium text-lg"
            >
              {{ user.first_name }} {{ user.last_name }}
            </div>
          </div>
        </div>
        <div
          class="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0"
        >
          <div class="font-medium text-center lg:text-left lg:mt-3">
            Contact Details
          </div>
          <div
            class="flex flex-col justify-center items-center lg:items-start mt-4"
          >
            <div class="truncate sm:whitespace-normal flex items-center">
              <MailIcon class="w-4 h-4 mr-2" />
              {{ user.email }}
            </div>
            <div class="truncate sm:whitespace-normal flex items-center mt-3">
              <PhoneIcon class="w-4 h-4 mr-2" /> Phone
              {{ user.phone }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END: Profile Info -->
    <div class="box bg-white rounded-md">
      <div
        class="px-5 pb-10 sm:px-20 mt-5 pt-10 border-t border-slate-200/60 dark:border-darkmode-400"
      >
        <div class="font-medium text-base">Profile Settings</div>
        <div class="grid grid-cols-12 gap-4 gap-y-5 mt-5">
          <div class="intro-y col-span-12 sm:col-span-6">
            <label for="input-wizard-1" class="form-label">First Name</label>
            <input
              id="input-wizard-1"
              type="text"
              class="form-control"
              placeholder="First name"
              v-model="form.first_name"
            />
          </div>
          <div class="intro-y col-span-12 sm:col-span-6">
            <label for="input-wizard-1" class="form-label">Last Name</label>
            <input
              id="input-wizard-1"
              type="text"
              class="form-control"
              placeholder="Last name"
              v-model="form.last_name"
            />
          </div>
          <div class="intro-y col-span-12 sm:col-span-6">
            <label for="input-wizard-3" class="form-label">Email</label>
            <input
              id="input-wizard-3"
              type="email"
              class="form-control"
              :value="user.email"
              disabled
            />
          </div>
          <div class="intro-y col-span-12 sm:col-span-6">
            <label for="input-wizard-1" class="form-label">Phone</label>
            <input
              id="input-wizard-1"
              type="text"
              class="form-control"
              placeholder="Phone"
              v-model="form.phone"
            />
          </div>
          <div class="intro-y col-span-12 sm:col-span-6">
            <label for="input-wizard-5" class="form-label">Password</label>
            <input
              id="input-wizard-5"
              type="text"
              class="form-control"
              v-model="form.password"
            />
          </div>
          <div class="intro-y col-span-12 sm:col-span-6">
            <label for="input-wizard-5" class="form-label">Password</label>
            <input
              id="input-wizard-5"
              type="text"
              class="form-control"
              v-model="form.password_confirmation"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end flex-col md:flex-row gap-2 mt-5">
      <button
        @click="$router.push({ name: 'dashboard' })"
        type="button"
        class="btn py-3 border-slate-300 dark:border-darkmode-400 text-slate-500 w-full md:w-52"
      >
        Cancel
      </button>
      <button
        @click="save"
        type="button"
        class="btn py-3 btn-primary w-full md:w-52"
      >
        Save
      </button>
    </div>
  </TabGroup>
</template>

<script setup>
import { computed, ref } from "vue";
import { useAuthStore } from "@/stores";
import UserAPI from "@/api/user";
import { helper } from "@/utils/helper";
const authStore = useAuthStore();

const user = computed((user) => {
  return authStore.user;
});

const form = ref({
  id: user.value.id,
  first_name: user.value.first_name,
  last_name: user.value.last_name,
  phone: user.value.phone,
  avatar: user.value.avatar,
  password: null,
  password_confirmation: null,
});

const tempImage = ref(null);

const save = async () => {
  const formData = transformData();
  await UserAPI.update(formData, {
    "Content-Type": "multipart/form-data",
  }).then((response) => {
    authStore.setUserData(response);
    helper.showSuccess("User Updated Successfully");
  });
};

const transformData = () => {
  const formData = new FormData();
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
</script>
