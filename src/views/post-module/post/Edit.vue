<template>
  <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Edit Post</h2>
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
                :options="categories"
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
                          :src="form.thumbnail"
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
                      <ImageIcon class="w-4 h-4 mr-2" />
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
            :options="categories"
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
            :options="tags"
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
            :checked="form.status"
            v-model="form.status"
          />
        </div>
      </div>
    
    </div>
    <!-- END: Post Info -->
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import Post from "@/api/post";
import Category from "@/api/category";
import Tag from "@/api/tag";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import router from "@/router";
import { useRoute } from 'vue-router'
import { helper } from "@/utils/helper";
const route = useRoute()

const categories = ref([]);
const tags = ref([]);
const form = ref({
  title: "",
  content: "",
  status: true,
  thumbnail: null,
  thumbnail_alt_text: null,
  tags: [],
  categories: [],
  post_category_id: null,
  seo_title: "",
  seo_description: "",
  focus_keyword: "",
});

const save = async () => {
};


const uploadImage = (input) => {
 
};
const removeImage = (input) => {
  form.value.thumbnail = null;
};

onBeforeMount(async () => {
 
});
</script>
