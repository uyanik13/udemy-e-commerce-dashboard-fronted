<template>
  <div
    class="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center"
  >
    <nav class="w-full sm:w-auto sm:mr-auto">
      <ul class="pagination">
        <li class="page-item" v-if="pagination.prev_page_url">
          <a class="page-link" @click.prevent="firstPage">
            <ChevronsLeftIcon class="w-4 h-4" />
          </a>
        </li>
        <li class="page-item" v-if="pagination.prev_page_url">
          <a class="page-link" @click.prevent="prevPage">
            <ChevronLeftIcon class="w-4 h-4" />
          </a>
        </li>
        <li
          v-for="(page, index) in paginationLinks"
          :key="index"
          class="page-item"
          :class="{ active: pagination.current_page === page }"
        >
          <a v-if="page === '...'" class="page-link" href="#"> ... </a>
          <a
            v-else
            class="page-link"
            @click.prevent="changePageWithNumber(page)"
          >
            {{ page }}
          </a>
        </li>
        <li class="page-item" v-if="pagination.next_page_url">
          <a class="page-link" @click.prevent="nextPage">
            <ChevronRightIcon class="w-4 h-4" />
          </a>
        </li>
        <li class="page-item" v-if="pagination.next_page_url">
          <a class="page-link" @click.prevent="lastPage">
            <ChevronsRightIcon class="w-4 h-4" />
          </a>
        </li>
      </ul>
    </nav>
    <select
      class="w-20 form-select box mt-3 sm:mt-0"
      v-model="pagination.per_page"
      @change="fetchData"
    >
      <option>10</option>
      <option>25</option>
      <option>35</option>
      <option>50</option>
    </select>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, onMounted } from "vue";
import { defineEmits } from "vue";


const props = defineProps({
  pagination: {
    type: Object,
    default: () => ({ current_page: 1 }),
  },
});

const emit = defineEmits(["update:pagination"]);

const paginationLinks = computed(() => {
  const range = 2;
  const pages = [];

  for (
    let i = Math.max(1, props.pagination.current_page - range);
    i <=
    Math.min(props.pagination.last_page, props.pagination.current_page + range);
    i++
  ) {
    pages.push(i);
  }

  if (pages[0] > 1) {
    pages.unshift("...");
    pages.unshift(1);
  }

  if (pages[pages.length - 1] < props.pagination.last_page) {
    pages.push("...");
    pages.push(props.pagination.last_page);
  }

  return pages;
});


async function fetchData(page = props.pagination.current_page) {
  //const resp = await Post.paginator(page);
  emit("update:pagination", resp);
}

function changePage(page) {
  fetchData(page);
}

function changePageWithNumber(page) {
  let pageUrl = props.pagination.links[page].url;
  fetchData(pageUrl);
}

function prevPage() {
  changePage(props.pagination.prev_page_url);
}

function nextPage() {
  changePage(props.pagination.next_page_url);
}

function firstPage() {
  changePage(props.pagination.first_page_url);
}

function lastPage() {
  changePage(props.pagination.last_page_url);
}
</script>