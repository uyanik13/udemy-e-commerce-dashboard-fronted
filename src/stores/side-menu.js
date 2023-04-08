import {
  defineStore
} from "pinia";

export const useSideMenuStore = defineStore("sideMenu", {
  state: () => ({
    menu: [{
        icon: "HomeIcon",
        pageName: "side-menu-dashboard",
        title: "Dashboard",
        pageName: "dashboard",
      },
      "devider",
      {
        icon: "FileTextIcon",
        title: "Post",
        subMenu: [{
            icon: "",
            pageName: "post-list",
            title: "Post List",
          },
          {
            icon: "",
            pageName: "post-category-list",
            title: "Categories",
          },
          {
            icon: "",
            pageName: "post-tag-list",
            title: "Tags",
          },
        ],
      },
      {
        icon: "FileTextIcon",
        title: "Page",
        pageName: "page-list",
      },
      "devider",
      {
        icon: "FileTextIcon",
        title: "Product",
        subMenu: [{
            icon: "",
            pageName: "product-list",
            title: "Product List",
          },
          {
            icon: "",
            pageName: "product-category-list",
            title: "Categories",
          },
          {
            icon: "",
            pageName: "discount-list",
            title: "Discount",
          },
        ],
      },
      "devider",
      {
        icon: "UsersIcon",
        title: "User",
        subMenu: [{
            icon: "",
            pageName: "user-list",
            title: "User List"
          },
          {
            icon: "",
            pageName: "user-address-list",
            title: "User Address"
          },
        ],
        //pageName: "user-list",
      },
    ],
  }),
});