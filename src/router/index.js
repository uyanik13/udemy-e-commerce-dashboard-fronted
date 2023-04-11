import { createRouter, createWebHistory } from "vue-router";
import {useAuthStore} from '@/stores'

const routes = [
  {
    path: "/",
    component: () => import('@/layouts/Main.vue'),
    children: [
      {
        path: "/",
        name: "dashboard",
        component: () => import('@/views/dashboard/Index.vue'),
      },
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import('@/views/dashboard/Index.vue'),
      },
      //POST MENU
      {
        path: "post",
        name: "post-list",
        component: () => import('@/views/post-module/post/List.vue'),
      },
      {
        path: "post/create",
        name: "post-create",
        component: () => import('@/views/post-module/post/Create.vue'),
      },
      {
        path: "post/edit/:id",
        name: "post-edit",
        component: () => import('@/views/post-module/post/Edit.vue'),
      },
      //Category MENU
      {
        path: "post-category",
        name: "post-category-list",
        component: () => import('@/views/post-module/post-category/List.vue'),
      },
      {
        path: "post-category/create",
        name: "post-category-create",
        component: () => import('@/views/post-module/post-category/Create.vue'),
      },
      {
        path: "post-category/edit/:id",
        name: "post-category-edit",
        component: () => import('@/views/post-module/post-category/Edit.vue'),
      },
      //Tag MENU
      {
        path: "post-tag",
        name: "post-tag-list",
        component: () => import('@/views/post-module/post-tag/List.vue'),
      },
      {
        path: "post-tag/create",
        name: "post-tag-create",
        component: () => import('@/views/post-module/post-tag/Create.vue'),
      },
      {
        path: "post-tag/edit/:id",
        name: "post-tag-edit",
        component: () => import('@/views/post-module/post-tag/Edit.vue'),
      },


      //PAGE MENU
      {
        path: "page",
        name: "page-list",
        component: () => import('@/views/post-module/page/List.vue'),
      },
      {
        path: "page/create",
        name: "page-create",
        component: () => import('@/views/post-module/page/Create.vue'),
      },
      {
        path: "page/edit/:id",
        name: "page-edit",
        component: () => import('@/views/post-module/page/Edit.vue'),
      },


      //PRODUCT MENU
      {
        path: "product",
        name: "product-list",
        component: () => import('@/views/product-module/product/List.vue'),
      },
      {
        path: "product/create",
        name: "product-create",
        component: () => import('@/views/product-module/product/Create.vue'),
      },
      {
        path: "product/edit/:id",
        name: "product-edit",
        component: () => import('@/views/product-module/product/Edit.vue'),
      },

       //PRODUCT CATEGORY MENU
       {
        path: "product-category",
        name: "product-category-list",
        component: () => import('@/views/product-module/product-category/List.vue'),
      },
      {
        path: "product-category/create",
        name: "product-category-create",
        component: () => import('@/views/product-module/product-category/Create.vue'),
      },
      {
        path: "product-category/edit/:id",
        name: "product-category-edit",
        component: () => import('@/views/product-module/product-category/Edit.vue'),
      },
      
      
      //DISCOUNT MENU
       {
        path: "discount",
        name: "discount-list",
        component: () => import('@/views/product-module/discount/List.vue'),
      },
      {
        path: "discount/create",
        name: "discount-create",
        component: () => import('@/views/product-module/discount/Create.vue'),
      },
      {
        path: "discount/edit/:id",
        name: "discount-edit",
        component: () => import('@/views/product-module/discount/Edit.vue'),
      },




      //USERS MENU
      {
        path: "user",
        name: "user-list",
        component: () => import('@/views/user-module/user/List.vue'),
      },
      {
        path: "user/create",
        name: "user-create",
        component: () => import('@/views/user-module/user/Create.vue'),
      },
      {
        path: "user/edit/:id",
        name: "user-edit",
        component: () => import('@/views/user-module/user/Edit.vue'),
      },


      {
        path: "user-address",
        name: "user-address-list",
        component: () => import('@/views/user-module/user-address/List.vue'),
      },
      {
        path: "user-address/create",
        name: "user-address-create",
        component: () => import('@/views/user-module/user-address/Create.vue'),
      },
      {
        path: "user-address/edit/:id",
        name: "user-address-edit",
        component: () => import('@/views/user-module/user-address/Edit.vue'),
      },

      {
        path: "profile",
        name: "profile",
        component: () => import('@/views/profile/Index.vue'),
      },
      {
        path: "profile/edit",
        name: "profile-edit",
        component: () => import('@/views/profile/Edit.vue'),
      },
      {
        path: "profile/change-password",
        name: "profile-change-password",
        component: () => import('@/views/profile/ChangePassword.vue'),
      }
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import('@/views/auth/Login.vue'),
  },
  {
    path: "/register",
    name: "register",
    component: () => import('@/views/auth/Register.vue'),
  },
  {
    path: "/error-page",
    name: "error-page",
    component: () => import('@/views/error-page/Main.vue'),
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import('@/views/error-page/Main.vue'),
  },
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
});

router.beforeEach(async (to) => {
  const authStore = useAuthStore();
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);

  if(to.path == '/'){
    return { path: authStore.returnUrl };
  }

  if (authRequired && !authStore.user) {
    authStore.returnUrl = to.fullPath;
      return { path: '/login' };
  }

  if(!authRequired && authStore.user){
      return { path: authStore.returnUrl };
  }

})


export default router;
