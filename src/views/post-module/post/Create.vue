<template>
  <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Add New Post</h2>
    <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
      <button
        @click="$router.back()"
        type="button"
        class="btn btn-dark mr-2 flex items-center ml-auto sm:ml-0"
      >
        <ArrowLeftIcon class="w-4 h-4 mr-2" /> Back
      </button>
      <button
        @click="save"
        type="button"
        class="btn btn-primary mr-2 flex items-center ml-auto sm:ml-0"
      >
        <SaveIcon class="w-4 h-4 mr-2" /> Save
      </button>
    </div>
  </div>
  <div class="pos intro-y grid grid-cols-12 gap-5 mt-5">
    <!-- BEGIN: Post Content -->
    <div class="intro-y col-span-12 lg:col-span-8">
      <input
        type="text"
        class="intro-y form-control py-3 px-4 box pr-10"
        v-model="form.title"
        placeholder="Title"
      />

      <TabGroup class="post intro-y overflow-hidden box mt-5">
        <TabList
          class="post__tabs nav-tabs flex-col sm:flex-row bg-slate-200 dark:bg-darkmode-800"
        >
          <Tab :fullWidth="false" class="w-full sm:w-40 py-0 px-0" tag="button">
            <Tippy
              content="Fill in the article content"
              class="tooltip w-full flex items-center justify-center py-4"
              aria-controls="content"
              aria-selected="true"
            >
              <FileTextIcon class="w-4 h-4 mr-2" /> Content
            </Tippy>
          </Tab>
          <Tab :fullWidth="false" class="w-full sm:w-40 py-0 px-0" tag="button">
            <Tippy
              content="Adjust the meta info"
              class="tooltip w-full flex items-center justify-center py-4"
              aria-selected="false"
            >
              <CodeIcon class="w-4 h-4 mr-2" /> Meta Info
            </Tippy>
          </Tab>
        </TabList>
        <TabPanels class="post__content">
          <TabPanel class="p-5">
            <div
              class="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5"
            >
              <div
                class="font-medium flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5"
              >
                <ChevronDownIcon class="w-4 h-4 mr-2" /> Text Content
              </div>
              <div class="mt-5">
                <ClassicEditor v-model="form.content" />
              </div>
            </div>
            <div class="mt-3">
              <label for="post-form-3" class="form-label">Main Category</label>
              <v-select
                label="title"
                placeholder="Select a category"
                v-model="form.post_category_id"
                :reduce="(option) => option.id"
                :multiple="false"
                :options="postCategories"
              />
            </div>
            <div
              class="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5 mt-5"
            >
              <div
                class="font-medium flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5"
              >
                <ChevronDownIcon class="w-4 h-4 mr-2" /> Caption & Images
              </div>
              <div class="mt-5">
                <div>
                  <label for="post-form-7" class="form-label">Caption</label>
                  <input
                    id="post-form-7"
                    type="text"
                    class="form-control"
                    v-model="form.thumbnail_alt_text"
                    placeholder="Write caption"
                  />
                </div>
                <div class="mt-3">
                  <label class="form-label">Upload Image</label>
                  <div
                    class="border-2 border-dashed dark:border-darkmode-400 rounded-md pt-4"
                  >
                    <div class="flex flex-wrap px-4">
                      <div
                        v-if="form.thumbnail"
                        class="w-24 h-24 relative image-fit mb-5 mr-5 cursor-pointer zoom-in"
                      >
                        <img
                          class="rounded-md"
                          data-action="zoom"
                          :src="tempImage ?? form.thumbnail"
                        />
                        <Tippy
                          tag="div"
                          content="Remove this image?"
                          @click="removeImage"
                          class="w-5 h-5 flex items-center justify-center absolute rounded-full text-white bg-danger right-0 top-0 -mr-2 -mt-2"
                        >
                          <xIcon class="w-4 h-4" />
                        </Tippy>
                      </div>
                    </div>
                    <div
                      class="px-4 pb-4 flex items-center cursor-pointer relative"
                    >
                      <ImageIcon
                        @click="$refs.updateImgInput.click()"
                        class="w-4 h-4 mr-2"
                      />
                      <span class="text-primary mr-1">Upload a file</span> or
                      drag and drop
                      <input
                        type="file"
                        ref="updateImgInput"
                        @change="uploadImage"
                        class="w-full h-full top-0 left-0 absolute opacity-0"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel class="p-5">
            <div class="mt-3">
              <label for="regular-form-1" class="form-label">Seo Title</label>
              <input
                id="regular-form-1"
                type="text"
                class="form-control"
                v-model="form.seo_title"
                placeholder="Input text"
              />
            </div>
            <div class="mt-3">
              <label for="regular-form-1" class="form-label"
                >Seo Description</label
              >
              <input
                id="regular-form-1"
                type="text"
                class="form-control"
                v-model="form.seo_description"
                placeholder="Input text"
              />
            </div>
            <div class="mt-3">
              <label for="regular-form-1" class="form-label"
                >Focus Keyword</label
              >
              <input
                id="regular-form-1"
                type="text"
                class="form-control"
                v-model="form.focus_keyword"
                placeholder="Input text"
              />
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
    <!-- END: Post Content -->
    <!-- BEGIN: Post Info -->
    <div class="col-span-12 lg:col-span-4">
      <div class="intro-y box p-5">
        <div class="mt-3">
          <label for="post-form-3" class="form-label">Categories</label>
          <v-select
            label="title"
            placeholder="Select a category"
            v-model="form.categories"
            :reduce="(option) => option.id"
            :multiple="true"
            :options="postCategories"
          />
        </div>

        <div class="mt-3">
          <label for="post-form-4" class="form-label">Tags</label>
          <v-select
            label="title"
            placeholder="Select a tag"
            v-model="form.tags"
            :reduce="(option) => option.id"
            :multiple="true"
            taggable
            :options="postTags"
          />
        </div>
        <div class="form-check form-switch flex flex-col items-start mt-3">
          <label for="post-form-5" class="form-check-label ml-0 mb-2"
            >Published</label
          >
          <input
            id="post-form-5"
            class="form-check-input"
            type="checkbox"
            v-model="form.status"
            true-value="1"
            false-value="0"
          />
        </div>
      </div>
      <div class="intro-y box p-5 my-3">
        <div class="mt-3">
          <label for="post-form-3" class="form-label">Ask Chat GPT</label>
          <div class="mt-5">
            <textarea v-model="gptQuestion" cols="30" rows="5" />
          </div>
          <div id="response" class="my-2" v-if="gptResponse">
            <textarea v-model="gptResponse" id="" cols="30" rows="5"></textarea>
            <select
              v-model="gptSelectedInput"
              class="form-select form-select-lg sm:mt-2 sm:mr-2"
              aria-label=".form-select-lg example"
            >
              <option v-for="(index, item) in form" :key="index">
                {{ item }}
              </option>
            </select>
            <button
              @click="embedResponse"
              type="button"
              class="btn btn-primary text-white mt-2"
            >
              Embed
            </button>
          </div>
        </div>
        <div class="flex justify-end">
          <button
            @click="askGPT"
            type="button"
            class="btn btn-success text-white mt-2"
          >
            <SlackIcon class="w-4 h-4 mr-2" /> Ask
          </button>
        </div>
      </div>
    </div>
    <!-- END: Post Info -->
  </div>
</template>

<script setup>
import { toRefs, ref, onBeforeMount } from "vue";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import router from "@/router";
import PostAPI from "@/api/PostApi";
import PostCategoryAPI from "@/api/PostCategoryApi";
import PostTagAPI from "@/api/PostTagApi";

const categories = ref([]);
const tags = ref([]);
const gptAuthToken = import.meta.env.VITE_GPT_AUTH_TOKEN;
const form = ref({
  title: "",
  content: "",
  status: 1,
  thumbnail: null,
  thumbnail_alt_text: null,
  tags: [],
  categories: [],
  post_category_id: null,
  seo_title: "",
  seo_description: "",
  focus_keyword: "",
});

const tempImage = ref(null)

const gptQuestion = ref("");
const gptResponse = ref(null);
const gptSelectedInput = ref(null);

const postCategories = ref([]);
const postTags = ref([]);

const save = () => {

  const formData = transformData();
  PostAPI.store(formData).then((res) => {
    console.log(res);
  });
};

const appendToFormData = (formData, key, value) => {
  if (value instanceof File) {
    formData.append(key, value, value.name);
  } else if (Array.isArray(value)) {
    value.forEach((item) => {
      appendToFormData(formData, `${key}[]`, item);
    });
  } else if (typeof value === 'object' && value !== null) {
    Object.entries(value).forEach(([subKey, subValue]) => {
      appendToFormData(formData, `${key}[${subKey}]`, subValue);
    });
  } else {
    formData.append(key, value);
  }
};

const transformData = () => {
  const formData = new FormData();
  Object.entries(form.value).forEach(([key, value]) => {
    appendToFormData(formData, key, value);
  });

  return formData;
};

onBeforeMount(async () => {
  getCategories();
  getTags();
});

const getCategories = () => {
  PostCategoryAPI.index().then((res) => {
    postCategories.value = res.data;
  });
};
const getTags = () => {
  PostTagAPI.index().then((res) => {
    postTags.value = res.data;
  });
};

const removeImage = () => {
  form.value.thumbnail = null;
};

const uploadImage = (input) => {
  if(input.target.files && input.target.files[0]){
    const reader = new FileReader()
    reader.onload = (e)=>{
      tempImage.value = e.target.result
      form.value.thumbnail = input.target.files[0]
    }
    reader.readAsDataURL(input.target.files[0])
  }
};


</script>
