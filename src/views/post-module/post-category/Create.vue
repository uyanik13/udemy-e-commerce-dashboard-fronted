<template>
  <div class="flex flex-col items-center mt-8 intro-y sm:flex-row">
    <h2 class="mr-auto text-lg font-medium">Add New Post Category</h2>
    <div class="flex w-full mt-4 sm:w-auto sm:mt-0">
      <button
        @click="$router.back()"
        type="button"
        class="flex items-center ml-auto mr-2 btn btn-dark sm:ml-0"
      >
        <ArrowLeftIcon class="w-4 h-4 mr-2" /> Back
      </button>
      <button
        @click="save"
        type="button"
        class="flex items-center ml-auto mr-2 btn btn-primary sm:ml-0"
      >
        <SaveIcon class="w-4 h-4 mr-2" /> Save
      </button>
    </div>
  </div>
  <div class="grid grid-cols-12 gap-5 mt-5 pos intro-y">
    <!-- BEGIN: Post Content -->
    <div class="col-span-12 intro-y lg:col-span">
      <input
        type="text"
        class="px-4 py-3 pr-10 intro-y form-control box"
        v-model="form.title"
        placeholder="Title"
      />
      
      <TabGroup class="mt-5 overflow-hidden post intro-y box">
        <TabList
          class="flex-col page__tabs nav-tabs sm:flex-row bg-slate-200 dark:bg-darkmode-800"
        >
          <Tab :fullWidth="false" class="w-full px-0 py-0 sm:w-40" tag="button">
            <Tippy
              content="Fill in the article content"
              class="flex items-center justify-center w-full py-4 tooltip"
              aria-controls="content"
              aria-selected="true"
            >
              <FileTextIcon class="w-4 h-4 mr-2" /> Content
            </Tippy>
          </Tab>
          <Tab :fullWidth="false" class="w-full px-0 py-0 sm:w-40" tag="button">
            <Tippy
              content="Adjust the meta info"
              class="flex items-center justify-center w-full py-4 tooltip"
              aria-selected="false"
            >
              <CodeIcon class="w-4 h-4 mr-2" /> Meta Info
            </Tippy>
          </Tab>
        </TabList>
        <TabPanels class="post__content">
          <TabPanel class="p-5">
           <div class="mt-3 pb-4">
              <label for="post-form-3" class="form-label">Main Category</label>
              <v-select
                label="title"
                placeholder="Select a category"
                v-model="form.parent_id"
                :reduce="(option) => option.id"
                :multiple="false"
                :options="categories"
              />
              
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
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
    <!-- END: Post Content -->
    <!-- BEGIN: Post Info -->
  
    <!-- END: Post Info -->
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
const form = ref({
  title: "",
  parent_id: "",
  seo_title: "",
  seo_description: "",
});

const categories = ref([])


const save = async () => {
 
};


</script>
